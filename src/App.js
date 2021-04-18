import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import LoginMain from './components/Login/LoginMain';
import DashboardMain from './components/Dashboard/DashboardMain/DashboardMain';
import OrderList from './components/Dashboard/Adminpanel/OrderList/OrderList';
import AddService from './components/Dashboard/Adminpanel/AddService/AddService';
import MakeAdmin from './components/Dashboard/Adminpanel/MakeAdmin/MakeAdmin';
import ManageServices from './components/Dashboard/Adminpanel/ManageServices/ManageServices';
import Order from './components/Dashboard/UserDashboard/Order/Order';
import MyOrderList from './components/Dashboard/UserDashboard/MyOrderList/MyOrderList';
import GiveReview from './components/Dashboard/UserDashboard/GiveReview/GiveReview';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();
export const TakenServiceContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [takenService, setTakenService] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <TakenServiceContext.Provider value={[takenService, setTakenService]}>

        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <LoginMain />
            </Route>
            <PrivateRoute path="/dashboard">
              <DashboardMain />
            </PrivateRoute>
            <PrivateRoute path="/orderList">
              <OrderList></OrderList>
            </PrivateRoute>
            <PrivateRoute path="/addService">
              <AddService></AddService>
            </PrivateRoute>
            <PrivateRoute path="/makeAdmin">
              <MakeAdmin></MakeAdmin>
            </PrivateRoute>
            <PrivateRoute path="/manageServices">
              <ManageServices></ManageServices>
            </PrivateRoute>
            <PrivateRoute path="/order">
              <Order></Order>
            </PrivateRoute>
            <PrivateRoute path="/myOrderList">
              <MyOrderList></MyOrderList>
            </PrivateRoute>
            <PrivateRoute path="/giveReview">
              <GiveReview></GiveReview>
            </PrivateRoute>
          </Switch>
        </Router>

      </TakenServiceContext.Provider>
    </UserContext.Provider >

  );
}

export default App;