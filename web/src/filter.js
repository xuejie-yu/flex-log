import React from "react";
import styled from "styled-components";

const Label = styled.label`
  margin: 10px;
`;

const Input = styled.input`
  margin: 0 10px
`;

const FilterBar = styled.div`
  padding: 8px;
  background-color: black;
  color: white;
`;

const Button = styled.button`
  margin: 0 10px;
  border: none;
  background-color: lightgray;
  font-size: 15px;
`;

const MoreFilter = styled.div`
  margin: 20px 0;
`;

const JSONTextArea = styled.textarea`
  margin: 10px;
  font-size: 20px;
`;

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.filtercb = props.filtercb
    this.state = {
      isOpen: false,
      jsonFilter: ""
    }

    this.clickEvent = this.clickEvent.bind(this);
    this.jsonTransformationChange = this.jsonTransformationChange.bind(this);
  }

  stringFilterChange (event) {
    const value = event.currentTarget.value;
    this.filtercb({type: "string", value});
  }

  jsonFilterChange(event) {
    this.setState({
      jsonFilter: event.currentTarget.value
    });
  }

  clickEvent () {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  jsonTransformationChange() {
    this.filtercb({type: "object", value: this.state.jsonFilter});
  }

  render() {
    return (
      <FilterBar>
        <Label>Filter:</Label>
        <Input onChange={this.stringFilterChange.bind(this)}/>
        <Button onClick={this.clickEvent}>More</Button>
        {this.state.isOpen && <MoreFilter>
          <div>
            <Label>
            Log transformation:
            </Label>
            <br/>
            <JSONTextArea value={this.state.jsonFilter} onChange={this.jsonFilterChange.bind(this)} rows="10" cols="30"/>
            <Button onClick={this.jsonTransformationChange}>Apply</Button>
          </div>
        </MoreFilter>}
      </FilterBar>
    );
  }
}

export default Filter;