import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './landing/pages/HomePage';
// import Dashboard from './Dashboard/pages/Dashboard';
import ErrorPage from './Dashboard/components/ErrorPage';

import AdminLogin from './landing/auth/AdminLogin';
import { AuthProvider } from './landing/auth/AuthContext';
import PublicLayout from './landing/auth/PublicLayout';
import DashboardLayout from './landing/auth/DashboardLayout';
import ProtectedRoute from './landing/auth/ProtectedRoute';

import About from './landing/pages/About';
import Courses from './landing/pages/Courses';
import Faculty from './landing/pages/Faculty';
import ContactUs from './landing/pages/ContactUs';
import MediaGallery from './landing/pages/MediaGallery';

import StudentLogin from './landing/auth/StudentLogin';
import FranchiseLogin from './landing/auth/FranchiseLogin';



function App() {
    return (
        <div>
            <AuthProvider>
                <Router>
                    <Routes>
                        <Route element={<PublicLayout />}>
                            {/* Add other public routes here */}
                            <Route path="/login/admin" element={<AdminLogin />} />
                            <Route path="/login/student" element={<StudentLogin />} />
                            <Route path="/login/franchise" element={<FranchiseLogin />} />

                            <Route path="/" element={<HomePage />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/faculty" element={<Faculty />} />
                            <Route path="/contact" element={<ContactUs />} />
                            <Route path="/courses" element={<Courses />} />
                            <Route path="/gallery" element={<MediaGallery />} />
                        </Route>
                        <Route element={<ProtectedRoute />}>
                            <Route element={<DashboardLayout />}>
                                {/* Add more protected routes */}
                                <Route path="/dashboard" element={<ErrorPage />} />
                                {/* <Route path="/error" element={<ErrorPage />} /> */}
                            </Route>
                        </Route>

                    </Routes>
                </Router>
            </AuthProvider>
        </div>
    );
}

export default App;
