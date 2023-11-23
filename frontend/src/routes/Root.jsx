import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { AuthProvider, useAuth } from '../context/AuthContext';
import Navbar from '../components/Navbar.jsx';

function Root() {
  return (
    <AuthProvider>
      <PageRoot />
    </AuthProvider>
  );
}

function PageRoot() {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/auth');
  };
  
  const { user } = useAuth();

  return (
    <div>
      <Navbar/>
      <div>
        <p>Estas logeado como: {user.email}</p>
      </div>
      <Outlet />
    </div>
  );
}

export default Root;
