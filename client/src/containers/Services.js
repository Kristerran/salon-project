import React, { useState } from 'react';
import Menu from '../components/service-menu/Menu.js';
import Categories from '../components/service-menu/Categories.js';
import items from '../components/service-menu/data.js';
import '../css/menu.css';

const allCategories = ['all', ...new Set(items.map(item => item.category))]

function Services() {
    const [menuItems, setMenuItems] = useState(items)
    const [categories] = useState(allCategories)

    const filterItems = (category) => {
        if (category === 'all') {
            setMenuItems(items)
            return
        }
        const newItems = items.filter((item) => item.category === category)
        setMenuItems(newItems)
    }
    return (
        <main>
            <section className="menu section">
                <div className="title">
                    <h2>Our Services</h2>
                    <div className="underline" />
                </div>
                <Categories categories={categories} filterItems={filterItems} />
                <Menu items={menuItems} />
            </section>
        </main>
    );
}

export default Services;