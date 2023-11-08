import { Outlet } from 'react-router-dom';

const AuthRoot = () => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthRoot;