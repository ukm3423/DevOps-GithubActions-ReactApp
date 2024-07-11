import PropTypes from 'prop-types';  // Import PropTypes
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <div>
            <Outlet/>
        </div>
    );
};

// Define the prop types
DashboardLayout.propTypes = {
    children: PropTypes.node  // Defines children as optional React node
};

export default DashboardLayout;
