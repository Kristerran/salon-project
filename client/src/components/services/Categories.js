import React from 'react';

const Categories = ({ categories, filterItems }) => {
    return (
        <>
            <button><a href=''>Book An Appointment</a></button>
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
        </>
    )
}

export default Categories;

//source: https://github.com/Fuglydami/react-menu-list/blob/main/src/Categories.js