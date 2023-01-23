import {Navigate} from 'react-router';

interface LoginRequiredRouteProps {
  children: React.ReactNode;
}

function getUserSample() {
  return {
    data: undefined,
    isLoading: false,
  };
}

const LoginRequiredRoute = ({children}: LoginRequiredRouteProps) => {
  // const {data: user, isLoading} = useCurrentUser();
  const {data: user, isLoading} = getUserSample();

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  // if (!user) {
  //   alert('This service requires login. Go to the login page.');
  //   return <Navigate to="/user/login" replace />;
  // }

  return <>{children}</>;
};

export default LoginRequiredRoute;
