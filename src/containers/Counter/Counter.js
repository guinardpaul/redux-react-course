import React, { Component } from "react";
import { connect } from "react-redux";
import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

class Counter extends Component {
  state = {
    counter: 0
  };

  counterChangedHandler = (action, value) => {
    switch (action) {
      case "inc":
        this.setState(prevState => {
          return { counter: prevState.counter + 1 };
        });
        break;
      case "dec":
        this.setState(prevState => {
          return { counter: prevState.counter - 1 };
        });
        break;
      case "add":
        this.setState(prevState => {
          return { counter: prevState.counter + value };
        });
        break;
      case "sub":
        this.setState(prevState => {
          return { counter: prevState.counter - value };
        });
        break;
    }
  };

  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl label="Add 5" clicked={this.props.onAddCounter} />
        <CounterControl
          label="Subtract 5"
          clicked={this.props.onSubstactCounter}
        />
        <hr />
        <button onClick={this.props.onStoreResult}>Store Results</button>
        <ul>
          {this.props.storedResults.map(str => {
            return (
              <li
                key={str.id}
                onClick={() => this.props.onDeleteResult(str.id)}
              >
                {str.value}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

//  converti redux state en props connues par le component
const mapStateToProps = state => {
  return {
    // nom_props : nom_state
    ctr: state.counter,
    storedResults: state.results
  };
};

// Lie les actions au component
const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch({ type: "INCREMENT" }),
    onDecrementCounter: () => dispatch({ type: "DECREMENT" }),
    onAddCounter: () => dispatch({ type: "ADD" }),
    onSubstactCounter: () => dispatch({ type: "SUBSTRACT" }),
    onStoreResult: () => dispatch({ type: "STORE_RESULT" }),
    onDeleteResult: id => dispatch({ type: "DELETE_RESULT", resultId: id })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
