import React from 'react';
import { categories } from '../../data/category';
import "./category.css";

export default function Category() {
    return (
        <div className="categories">
            {categories.map(category => 
                <div key={category.id} className="category-item">
                    <img src={category.image} alt={category.title} className="category-item-img" />
                    <b className="category-item-title">{category.title}</b>
                </div>
            )}
        </div>
    )
}
