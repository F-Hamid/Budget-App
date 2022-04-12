import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import AddBudget from "./components/AddBudget";
import BudgetList from "./components/BudgetList";
import PaidItem from "./components/PaidItem";

class App extends Component {
  // States
  state = {
    data: [],
    showList: false,
    paid: [],
    showPaid: false,
  };

  // Methods
  onSubmit = (e, item, price) => {
    e.preventDefault();

    this.setState({
      data: [...this.state.data, { item, price, id: uuidv4() }],
      showList: true,
    });
  };
  // Delete List
  removeList = () => {
    this.setState({
      data: [],
      showList: false,
    });
  };
  removePaidList = () => {
    this.setState({
      paid: [],
      showPaid: false,
    });
  };

  // Remove Item
  removeItem = (id) => {
    const newList = this.state.data.filter((item) => item.id !== id);
    this.setState({ data: newList });

    if (newList.length === 0) {
      this.setState({ showList: false });
    }
  };
  removePaidItem = (id) => {
    const newPaid = this.state.paid.filter((item) => item.id !== id);
    this.setState({ paid: newPaid });

    if (newPaid.length === 0) {
      this.setState({ showPaid: false });
    }
  };

  // Paid Item
  onPaid = (id) => {
    const addPaid = this.state.data.find((item) => item.id === id);

    this.setState({
      paid: [...this.state.paid, addPaid],
      showPaid: true,
    });
    this.removeItem(id);

  };

  // Render
  render() {
    return (
      <>
        <AddBudget
          onSubmit={this.onSubmit}
        />
        {this.state.showList && (
          <BudgetList
            data={this.state.data}
            removeList={this.removeList}
            removeItem={this.removeItem}
            onPaid={this.onPaid}
          />
        )}

        {this.state.showPaid && (
          <PaidItem
            paidData={this.state.paid}
            removePaidList={this.removePaidList}
            removePidItem={this.removePaidItem}
          />
        )}
      </>
    );
  }
}

export default App;
