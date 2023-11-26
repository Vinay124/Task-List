// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import taskReducer from './Reducers/taskReducer';
import TaskList from './Components/TaskList';
import TaskDetails from './Components/TaskDetails';
import TaskForm from './Components/TaskForm';

const store = createStore(taskReducer);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact component={TaskList} />
          <Route path="/task/:id" component={TaskDetails} />
          <Route path="/create" component={TaskForm} />
          <Route path="/edit/:id" component={TaskForm} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
