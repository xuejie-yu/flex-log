import React from "react";
import ReactJSON from 'react-json-view'
import styled from "styled-components";

const UList = styled.ul`
  list-style-type: none;
`;

const ListItem = styled.li`
  padding-top: 10px;
`;

class LogTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logs: props.logs
    };
  }

  componentWillReceiveProps(props) {
    const newLogs = props.logs;
    this.setState((state) => {
      this.state.logs = newLogs;
      return this.state;
    });
  }

  render() {
    return (
      <UList class="nonBulletList">
        {this.state.logs.map(log => 
          <ListItem><ReactJSON src={log}/></ListItem>
        )}
      </UList>
    );
  }
}

export default LogTable;