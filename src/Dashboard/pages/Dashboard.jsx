// src/components/DashboardLayout.js
import DashboardNavbar from '../components/DashboardNavbar';
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom'; // Outlet will be used to render child routes

function Dashboard() {
    return (
        <div className="min-h-screen flex flex-col">
            <DashboardNavbar />
            <div className="flex flex-1">
                <Sidebar />
                <main className="flex-1 bg-gray-100 p-4">
                    <Outlet /> 
                </main>
            </div>
        </div>
    );
}

export default Dashboard;
