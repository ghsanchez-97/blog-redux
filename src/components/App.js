import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Menu from './Menu';
import Users from './Users';
import Tareas from './Tarea';
import Publicaciones from './Publicaciones'

const App = () => (
  <BrowserRouter>
    <Menu />
    <div className="margen">
      <Route exact path='/' component={Users} />
      <Route exact path='/tareas' component={Tareas} />
      <Route exact path='/publicaciones/:key' component={Publicaciones} />
    </div>
  </BrowserRouter>
)
export default App;