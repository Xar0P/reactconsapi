import { Route, Routes as Switch } from 'react-router-dom';

// import PrivateRoute from './PrivateRoute';
import Login from '../pages/Login';
import Page404 from '../pages/Page404/index';

export default function Routes() {
  return (
    <Switch>
      {/* <Route exact path="/" element={<PrivateRoute />}> */}
      <Route exact path="/" element={<Login />} />
      {/* </Route> */}
      <Route path="*" element={<Page404 />} />
    </Switch>
  );
}
