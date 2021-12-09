import React from 'react';
import items from './data.js';
import Placeholder from '../../assets/images/touchup.jpg';
import { Container } from 'reactstrap';

function Menu() {
  return (

    
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
      {items.map((menuItem) => {
        const { id, title, img, price, desc } = menuItem
        return (

          <article key={id} className="menu-item  ">
            <img src={img} alt={title} className="photo"  />
            <div className="item-info " >
              <header>
                <h4>{title}</h4>
                <h4 className="price  " >{price}</h4>
              </header>
              <p className="item-text " >{desc}</p>
            </div>
          </article>
          

        )
      })}
    </div>


  )
}

export default Menu;

 //source: https://github.com/Fuglydami/react-menu-list/blob/main/src/Menu.js