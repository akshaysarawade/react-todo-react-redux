import React, { Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component {
  getTaskCount(name) {
    if (name) {
      const list = this.props.lists.filter((list) => list.name === name);
      return list[0].cards.length;
    } else {
      let count = 0;
      this.props.lists.map((list) => {
        count = count + list.cards.length;
      })
      return count;
    }
  }

  render() {
    return (
      <div className="task-counter">
        <div className="count">{this.getTaskCount(this.props.name)}</div>
        <div className="task-text">tasks</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    lists: state.lists.lists
  }
}

export default connect(mapStateToProps)(Counter);
