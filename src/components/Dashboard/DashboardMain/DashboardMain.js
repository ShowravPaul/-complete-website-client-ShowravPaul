import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import AdminPanelMain from '../Adminpanel/AdminPanelMain/AdminPanelMain';
import UserDashboardMain from '../UserDashboard/UserDashboardMain/UserDashboardMain';

const DashboardMain = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    setLoggedInUser(loggedInUser);

    const [admins, setAdmins] = useState([]); 

    useEffect(() => {
        fetch('https://the-green-nursery.herokuapp.com/admins')
            .then(response => response.json())
            .then(data => setAdmins(data))
    }, [])

    let isAdmin = false;
    
    for(let i=0; i<admins.length; i++){
        if(admins[i].gmail === loggedInUser.email){
            isAdmin = true;
            break;
        }
    }

    return (
        <div>
            {
                isAdmin ? <AdminPanelMain></AdminPanelMain> : <UserDashboardMain></UserDashboardMain>
            }
        </div>
    );
};

export default DashboardMain;
