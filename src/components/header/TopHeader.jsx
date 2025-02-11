import React from 'react';

export default function TopHeader({setToggle}) {
    return (
        <div className="top-header">
            <div onClick={() => setToggle(true)} className="top-header-menu">
                <i className="bi bi-list"></i>
            </div>
            <div className="top-header-logo">
                <i className="bi bi-basket2"></i>
                بغداد شاب
            </div>
            <div className="top-header-text">
                اهلا وسهلا بكم
            </div>
            <div className="top-header-phone">
                123-456-789
                <i className="bi bi-telephone"></i>
            </div>
        </div>
    )
}
