import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { IWithRouterProps } from './IWithRouterProps';

function withRouter<Props extends IWithRouterProps>(Component: React.ComponentType<Props>) {
  return (props: Omit<Props, keyof IWithRouterProps>) => {
    const location = useLocation();
    const params = useParams();
    const navigate = useNavigate();

    return (
      <Component {...(props as Props)} location={location} params={params} navigate={navigate} />
    );
  };
}

export default withRouter;
