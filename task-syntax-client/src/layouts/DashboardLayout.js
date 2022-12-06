import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import Header from './../Pages/Shared/Header/Header';


const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)
    console.log(isAdmin)
    
    return (
        <div>
            <Header />
            <div className="drawer drawer-mobile lg:px-56 bg-base-200">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content p-6">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side bg-white">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                        {
                            isAdmin && <>
                                <li><Link to="/dashboard" className='font-bold'>Upload a Blog Post</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;