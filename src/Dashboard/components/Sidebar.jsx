// src/components/Sidebar.js
import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <aside className="w-64 bg-white p-4 border-r">
            <ul>
                <li className="mb-2">
                    <Link to="overview" className="text-blue-500 hover:text-blue-700">Overview</Link>
                </li>
                <li className="mb-2">
                    <Link to="stats" className="text-blue-500 hover:text-blue-700">Statistics</Link>
                </li>
                <li className="mb-2">
                    <Link to="tables" className="text-blue-500 hover:text-blue-700">Tables</Link>
                </li>
                <li className="mb-2">
                    <Link to="settings" className="text-blue-500 hover:text-blue-700">Settings</Link>
                </li>
            </ul>
        </aside>
    );
}

export default Sidebar;
