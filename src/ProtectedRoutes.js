import { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { Context } from './context/AppContext';

function ProtectedRoutes(props) {
    const { user } = useContext(Context);

  return (
    (user.isLoggedIn) ? <Outlet /> : <Navigate to={"/"} />
  );    
}

export default ProtectedRoutes;
