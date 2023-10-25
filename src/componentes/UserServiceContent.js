import React from "react";
import "../css/UserServiceContent.css";

const UserServiceContent = ({ user }) => {
  return (
    <div className="user ">
      <div className="user-content">
        {user ? (
          <div className="user-name">
            <p>Psicól. {user.name}</p>
            <p>
              Email:{" "}
              <a href="mailto:anddremoreno.86@gmail.com" className="user-name">
                {user.email}
              </a>
            </p>
            <p>
              Teléfono:{" "}
              <a href="tel:+573167570841" className="user-name">
                {user.phone}
              </a>
            </p>
            {/* Puedes mostrar más detalles del usuario aquí */}
          </div>
        ) : (
          <p className="user-name"></p>
        )}
      </div>
    </div>
  );
};

export default UserServiceContent;
