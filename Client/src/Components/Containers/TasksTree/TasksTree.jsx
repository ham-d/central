import React, {Component} from 'react';
import {render} from 'react-dom';
import {Redirect, Link, withRouter} from 'react-router-dom';
import Tree from 'react-tree-graph';
import $ from 'jquery';
import NavTask from '../Dashboard/NavTask.jsx';


class TasksTree extends Component{
  constructor() {
    super()
    this.state = {
      userProfilePeekName: '',
    }
  }

  componentDidMount() {
    $('.node').mouseover(() => {
      let newName = $('.node').closest('text');
      alert(string(newName));
    })
  }

  render() {
    let data = {
      name: 'Parent',
      children: [{
          name: 'Child One',
          onClick: () => this.props.history.push('/tasksDetails'),
      }, {
          name: 'Child Two',
          onClick: () => this.props.history.push('/tasksDetails'),
          children: [{
            name: 'Child Three',
            onClick: () => this.props.history.push('/tasksDetails'),
          },
          {
            name: 'Child Four',
            onClick: () => this.props.history.push('/tasksDetails'),
            children: [{
              name: 'Child Six',
              onClick: () => this.props.history.push('/tasksDetails'),
            }]
          }]
      }]
    }

    return(
      <div>
        <div className="dashboard-container">
          <div className="left-col">
  					<div className="app-title">
  						<h1>Task Mon</h1>
  					</div>
            <NavTask />
          </div>
          <div className="taskTreeContainer">
            <div className="dashboard-title">
              <h1 className="pull-left">Task Tree</h1>
            </div>
            <div className="custom-container">
              <Tree
              data={data}
              height={900}
              width={1050}
              animated
              duration={500}
              treeClassName="custom"
              />
            </div>
          </div>
          <div className="userProfilePeek">
            <div className="userProfilePeekCircle">
              <img className="userProfilePeekCirclePic" src="https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg"/>
            </div>
            <div className="userProfilePeekName">
              <div>{this.state.userProfilePeekName}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(TasksTree);
