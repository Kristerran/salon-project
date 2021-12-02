import React from 'react';
import '../../css/menu.css';

const Categories = ({ categories, filterItems }) => {
    return (
        <div className="btn-container">
            {categories.map((category, index) => {
                return (
                    <button
                        type="button"
                        className="filter-btn"
                        key={index}
                        onClick={() => filterItems(category)}>
                        {category}
                    </button>
                )
            })}
        </div>
    )
}

export default Categories;

//source: https://github.com/Fuglydami/react-menu-list/blob/main/src/Categories.js