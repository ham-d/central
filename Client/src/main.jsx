import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './Components/Containers/Login/login.jsx';
import Dashboard from './Components/Containers/Dashboard/Dashboard.jsx';
import TasksList from './Components/Containers/TasksList/TasksList.jsx';
import TasksTree from './Components/Containers/TasksTree/TasksTree.jsx';
import TasksDetails from './Components/Containers/TasksDetails/TasksDetails.jsx';
import TaskForm from './Components/Containers/TasksList/TaskForm.jsx';





class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: []
    }
  }
  render(){
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route exact path="/dashboard" component={Dashboard}/>
          <Route exact path="/tasksList" component={TasksList}/>
          <Route exact path="/tasksTree" component={TasksTree}/>
          <Route exact path="/taskForm" component={TaskForm}/>
          <Route exact path="/tasksDetails" component={TasksDetails}/>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Main;