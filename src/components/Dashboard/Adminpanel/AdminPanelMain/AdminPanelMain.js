
import React from 'react';
import { useHistory } from 'react-router';
import Navbar from '../../../Shared/Navbar/Navbar';
import './AdminPanelMain.css'

const AdminPanelMain = () => {
  const history = useHistory();

  const handleOrderList = () => {
    history.push(`/orderList`);
  }

  const handleAddService = () => {
    history.push(`/addService`);
  }

  const handleMakeAdmin = () => {
    history.push(`/makeAdmin`);
  }

  const handleManageServices = () => {
    history.push(`/manageServices`);
  }

  return (
    <div>
      <Navbar></Navbar>
      <div className="text-center mt-5">
        <h2>ADMIN PANEL</h2>
      </div>
      <div className="container admin-panel row">
        <div className="col-sm-12 col-md-6 col-lg-3">
          <button className="btn btn-success" onClick={() => handleOrderList()}>Order List</button>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3">
          <button className="btn btn-primary" onClick={() => handleAddService()}>Add a Service</button>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3">
          <button className="btn btn-success" onClick={() => handleMakeAdmin()}>Make an Admin</button>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3">
          <button className="btn btn-primary" onClick={() => handleManageServices()}>Manage Services</button>
        </div>
      </div>
    </div>
  );
};

export default AdminPanelMain;