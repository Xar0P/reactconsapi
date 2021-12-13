import { Route, Routes as Switch } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import Student from '../pages/Student';
import Students from '../pages/Students';
import Photos from '../pages/Photos';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Page404 from '../pages/Page404/index';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" element={<Students />} />

      <Route exact path="/aluno/:id/edit" element={<PrivateRoute />}>
        <Route exact path="/aluno/:id/edit" element={<Student />} />
      </Route>
      <Route exact path="/aluno/" element={<PrivateRoute />}>
        <Route exact path="/aluno/" element={<Student />} />
      </Route>
      <Route exact path="/fotos/:id" element={<PrivateRoute />}>
        <Route exact path="/fotos/:id" element={<Photos />} />
      </Route>

      <Route exact path="/login/" element={<Login />} />
      <Route exact path="/register/" element={<Register />} />
      <Route path="*" element={<Page404 />} />
    </Switch>
  );
}
