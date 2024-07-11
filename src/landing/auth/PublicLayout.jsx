import PropTypes from 'prop-types';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import TopBar from '../components/TopBar';
import ScrollToTop from '../pages/ScrollToTop';

const PublicLayout = () => {
    return (
        <>

            <TopBar/>
            <Navbar />
            <ScrollToTop />
            <div className='pt-20'><Outlet/>  </div>
            <Footer />
        </>
    );
};

// Define the prop types for PublicLayout
PublicLayout.propTypes = {
    children: PropTypes.node.isRequired  // Indicates that children should be a React node and is required
};

export default PublicLayout;
