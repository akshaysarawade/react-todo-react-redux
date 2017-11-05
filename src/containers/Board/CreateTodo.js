import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTodo } from '../../actions/lists';

class CreateTodo extends Component {
  handleKeyPress = (event) => {
    if (event.charCode == 13) {
      if (event.target.value) {
        this.props.addTodo(event.target.value);
        event.target.value = '';
      }
    }
  }

  render() {
    return (
      <div className="form-inline">
        <div className="form-group">
          <label htmlFor="add-task">Add Task </label>
          <input type="text" className="form-control" id="add-task" onKeyPress={this.handleKeyPress}/>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks
  }
}

function mapDispatchToProps(dispatch) {
  // return bindActionCreators({ }, dispatch);
  return bindActionCreators({ addTodo: addTodo }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTodo);
