import './App.css';
import { Route } from 'react-router-dom';
import Landing from './components/Landing/Landing'
import Home from './components/Home/Home'
import Activity from './components/Activity/Activity'
import React from 'react';
// import Country from './components/Country/Country';

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Route exact
          path='/'
          component={Landing}
        />
        
        <Route exact
          path='/home' 
          component={Home}
        />

        <Route 
          path='/activity' 
          render={() => <Activity/>}
        />

        {/* <Route
          path='/country/:id' 
          component={Country} 
        /> */}
        
        
      </div>
    </React.Fragment>
  );
}

export default App;
