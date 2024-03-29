import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
// -------Component Imports--------
import BaseLayout from './components/BaseLayout';
import Counter from './components/Counter';
import Clock from './components/Clock';
import Timer from './components/Timer';
import Alarm from './components/Alarm';
// Router passes components to BaseLayout as props.children
// Switch says 'switch the display between the routes'
// Route = components--the active route is the one being displayed

function App() {
  return (
    <Router>
      <div className="App">
        <BaseLayout >
          <Switch>
            <Route path="/" exact component={Counter} />
            <Route path='/clock' component={Clock} />
            <Route path='/timer' component={Timer} />
            <Route path='/alarm' component={Alarm} />
          </Switch>
        </BaseLayout>
      </div>
    </Router>
  );
}

export default App;
