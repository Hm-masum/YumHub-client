import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hook/useAuth";

const PrivateRoutes = ({children}) => {
    const {user,loading}=useAuth()
    const location=useLocation()

    if(loading){
        return <div className="flex justify-center h-[50vh]"><span className="loading loading-bars loading-lg"></span></div>
    }
    if(user){
        return children;
    }
    return (
        <div>
            <Navigate to={'/login'} state={location.pathname} replace={true}></Navigate>
        </div>
    );
};

export default PrivateRoutes;