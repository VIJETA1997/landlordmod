import React from 'react'
//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListLandlordComponent from './components/ListLandlordComponent';
import HeaderComponent from './components/HeaderComponent';
//import FooterComponent from './components/FooterComponent';
import CreateLandlordComponent from './components/CreateLandlordComponent';
//import UpdateFlatComponent from './components/UpdateFlatComponent';
import ViewLandlordComponent from './components/ViewLandlordComponent';
import UpdateLandlordComponent from './components/UpdateLandlordComponent';


function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
          <div className="container-fluid">
            <Switch>
              <Route path = "/" exact component = {ListLandlordComponent}></Route>
              <Route path = "/landlord" component = {ListLandlordComponent}></Route>
              <Route path = "/add-landlord/:landlordId" component = {CreateLandlordComponent}></Route>
              <Route path = "/view-landlord/:landlordId" component = { ViewLandlordComponent}></Route> 
              <Route path = "/update-landlord/:landlordId" component = {UpdateLandlordComponent}></Route>
            </Switch>
          </div>
         
      </Router>
     
    </div>
    
  );
}

export default App;
