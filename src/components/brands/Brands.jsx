import React from 'react';
import './brands.css';
import { brands } from "../../data/brands";

export default function Brands() {
    return (
        <div className="brands-wrapper">
            {brands.map(brand => 
                <div key={brand.id} className='brand'>
                    <img src={brand.image} alt="" className='brand-img' />
                </div>
            )}
        </div>
    )
}
