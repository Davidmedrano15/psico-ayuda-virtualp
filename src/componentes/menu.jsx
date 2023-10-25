import React, { useState } from "react";

function Menus() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const items = ["Inicio", "Servicios", "Acerca de", "Contacto"];

  return (
    <nav>
      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            onClick={() => handleItemClick(item)}
            className={selectedItem === item ? "active" : ""}
          >
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Menus;
