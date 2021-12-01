
import React from 'react';
import '../../css/menu.css';


const Menu = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((menuItems) => {
        const { id, title, img, price, desc } = menuItems
        return (
          <article key={id} className="menu-item">
            <img src={img} alt={title} className="photo" variant="left" />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">{price}</h4>
              </header>
              <p className="item-text">{desc}</p>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default Menu;

 //source: https://github.com/Fuglydami/react-menu-list/blob/main/src/Menu.js