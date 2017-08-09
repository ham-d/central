import React, {Component} from 'react';
import {render} from 'react-dom';
import {Redirect, Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchTasks} from '../../../Actions/index.js';
import NavTask from '../Dashboard/NavTask.jsx';


class TasksList extends Component{

  componentWillMount() {
    this.props.fetchTasks();
  }

  render() {
    return(
      <div className="dashboard-container">
        <div className="left-col">
					<div className="app-title">
						<h1>Task Mon</h1>
					</div>
          <NavTask />
        </div>
        <div className="tasksListContainer">
          <h1>Task List</h1>
          {
            this.props.tasks.map(task =>
              <div>{task.title + ': ' + task.content}</div>
            )
          }
          <Link to="/tasksTree"><button>Tasks Tree</button></Link>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchTasks, createTask}, dispatch);
}

function mapStateToProps(state) {
  return { tasks: state.tasks.allTasks }
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksList);
