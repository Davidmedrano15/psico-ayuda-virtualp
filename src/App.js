import "./App.css";
import Header from "./componentes/header";
import Menu from "./componentes/menu";
import Inicio from "./componentes/inicio";
import UserServiceContent from "./componentes/UserServiceContent";
import Servicios from "./componentes/nuestro-trabajo";
import React, { useState } from "react";
import "normalize.css";

function App() {
  const [selectedUser, setSelectedUser] = useState(null);

  const users = [
    {
      id: 1,
      name: "Andrea Moreno Ibañez",
      email: "anddremoreno.86@gmail.com",
      phone: "+57 3167570841",
    },
    // Agrega más usuarios según sea necesario
  ];

  const handleUserSelection = (user) => {
    setSelectedUser(user);
  };

  return (
    <div className="app contenedor-principal">
      <header className="app-header ">
        <Header />
      </header>

      <div>
        <Menu />
      </div>
      <div>
        <div>
          <ul className="a-user">
            {users.map((user) => (
              <li key={user.id} onClick={() => handleUserSelection(user)}>
                {user.name}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <UserServiceContent user={selectedUser} />
        </div>
      </div>
      <Inicio />

      <Servicios />
    </div>
  );
}

export default App;
