import React from "react";
import LogTable from "./logTable";
import Filter from "./filter";
import socketIOClient from "socket.io-client";
import styled from "styled-components";

const AppContainer = styled.div`
  text-align: left;
  font-size: 15px;
`;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.port = props.port;

    this.startLogListener();

    this.state = {
      logs: [],
      shownLogs: [],
      filter: {
        string: "",
        object: ""
      }
    };
  }

  filterCallback (filter) {
    this.setState(state => {
      this.state.filter[filter.type] = filter.value;
      this.state.shownLogs = this.processLogs({logs: this.state.logs, filter: this.state.filter});
      return state;
    });
  }

  processLogs ({logs, filter}) {
    let newLogs = logs;
    if(filter.string.length > 0) {
      newLogs = logs.filter(log => {
        return JSON.stringify(log).indexOf(filter.string) > -1;
      });
    }
    if (filter.object.length > 0) {
      try {
        const template = new Function("log", `return ${filter.object}`);
        newLogs = newLogs.map(log => {
          let pLog = log;
          try {
            pLog = template(log);
            return pLog;
          } catch(err) {
            console.error("The transsformation function is invalid");
            console.error({err});
            return log;
          }
        });
      } catch(err) {}
    }
    return newLogs;
  }

  startLogListener () {
    const socket = socketIOClient(`http://localhost:${this.port}`);
    const context = this;
    socket.on("log", (msg) => {
      try {
        const msgJSON = JSON.parse(msg);
        context.state.logs.push(msgJSON);
        this.setState({
          shownLogs: context.processLogs({
            logs: context.state.logs, 
            filter: context.state.filter})
        });
      } catch(err) {
        console.error("Invalid JSON");
      }
    });
  }

  render() {
    return (
      <AppContainer>
        <Filter filtercb={this.filterCallback.bind(this)}/>
        <LogTable logs={this.state.shownLogs}/>
      </AppContainer>
    );
  }
}

export default App;
