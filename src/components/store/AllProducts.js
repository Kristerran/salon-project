
import React from 'react'

const AllProducts = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((productItem) => {
        const { id, name, img, price, desc } = productItem
        return (
          <article key={id} className="menu-item">
            <img src={img} alt={name} className="photo" />
            <div className="item-info">
              <header>
                <h4>{name}</h4>
                <h4 className="price">'$'{price}</h4>
              </header>
              <p className="item-text">{desc}</p>
              <p className="inventory">Only {inventory} left!</p>
            </div>
            <Button>Add To Cart</Button>
          </article>
        )
      })}
    </div>
  )
}

export default AllProducts;