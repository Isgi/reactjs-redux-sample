import React, { Component } from "react";
import { connect } from "react-redux";

import { personsAdd } from "./actions/persons";

class Hello extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const name = this.refs.formName.value;
    const address = this.refs.formAddress.value;
    this.props.personsAdd({ name, address });
  };
  render() {
    return (
      <div>
        <h1>Persons</h1>
        <form onSubmit={this.handleSubmit}>
          <input ref="formName" placeholder="name" />
          <input ref="formAddress" placeholder="address" />
          <button type="submit">Save</button>
        </form>
        <ul>
          {this.props.persons.map(person => {
            return (
              <li>
                <p>{person.name}</p>
                <b>{person.address}</b>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    persons: state.persons
  };
};

const mapDispatchToProps = dispatch => {
  return {
    personsAdd: person => dispatch(personsAdd(person))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Hello);
