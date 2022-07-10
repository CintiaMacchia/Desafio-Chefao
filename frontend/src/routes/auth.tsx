import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootStore } from '../store';
function RequireAuth({ children }: { children: JSX.Element }) {
    let location = useLocation();
    const isLogged = useSelector((state: RootStore) => state.persistedReducer.isLogged);
    if (!isLogged) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
}

export default RequireAuth;