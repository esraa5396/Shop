import React from 'react';
import './cart.css';

export default function Cart() {

    const cartItems = [
        {
        id: 1,
        quantity: 2,
        title: "اتش بی الیت بوك الجیل الثانی",
        image: "/images/products/laptops/l1.jpg",
        price: 750,
    },
    {
        id: 2,
        quantity: 1,
        title: "اتش بی الیت بوك الجیل الثانی",
        image: "/images/products/laptops/l3.jpg",
        price: 300,
    },
]

    return (
        <div className="cart">
            <h1 className="cart-title">سله التسوق</h1>
            <div className="cart-wrapper">
                <div className="cart-items">
                    {cartItems.map(item => 
                        <div className="cart-item" key={item.id}>
                            <div className="cart-item-img-wrapper">
                                <img 
                                    src={item.image} 
                                    alt={item.title} 
                                    className='cart-item-img'
                                />
                            </div>
                            <div className="cart-item-info">
                                <div className="cart-item-title">{item.title}</div>
                                <div className="cart-item-quantity">
                                    الكميه:
                                    <span>{item.quantity}</span>
                                </div>
                                <div className="cart-item-price">
                                    السعر:
                                    <span>{item.price * item.quantity}$</span>
                                </div>
                                <i className="bi bi-trash cart-item-delete-icon"></i>
                            </div>
                        </div>
                    )}
                </div>
                <div className="cart-summary">
                    <div className="cart-summary-text">
                        <i className="bi bi-check-circle-fill"></i>
                        جزء من طلبك مؤهل للشحن المجانى. قم بتحديد هذا الخيار عند دفع التفاصيل
                    </div>
                    <div className="cart-summary-total">
                        المجموع:
                        <span>
                            {
                                cartItems.reduce((acc, cur) => acc + cur.price * cur.quantity, 0)
                            }
                        </span>$
                    </div>
                    <button className='cart-summary-btn'>
                        تابع عمليات الشراء
                    </button>
                </div>
            </div>
        </div>
    )
}
