import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Adjust path as necessary

const ProtectedRoute = () => {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
        return <Navigate to="/login/admin" replace />;
    }

    return <Outlet />; // Ensure that nested routes are rendered
};

export default ProtectedRoute;
