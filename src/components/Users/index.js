import React from 'react';
import '../styles/App.css';
import axios from 'axios';

class Users extends React.Component{
  constructor(){
    super();
    this.state = {
      users: [],
    }
  }

  async componentDidMount() {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    this.setState({
      users: res.data
    })
  }

  putFiles = () => (
    this.state.users.map((user) =>(
      <tr key={user.id}>
        <td>
          {user.name}
        </td>
        <td>
          {user.email}
        </td>
        <td>
          {user.website}
        </td>
      </tr>
    ))
  );

  render() {
    return (
      <div>
        <table className="tabla">
          <thead>
            <tr>
              <th>
                Nombre
              </th>
              <th>
                Correo
              </th>
              <th>
                Enlace
              </th>
            </tr>
          </thead>
          <tbody>
           { this.putFiles() }
          </tbody>
        </table>
      </div>
    );
  }
}

export default Users;
