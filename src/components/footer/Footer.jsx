import React from 'react';
import './footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-top">
                <h1 className="footer-top-title">متواجدين دائما لمساعدتك</h1>
                <div className="footer-top-email">
                    <span className="footer-top-text">تواصل معنا عبر الايميل</span>
                    <span className="footer-top-email-address">
                        <i className="bi bi-envelope"></i>
                        store@fakeemail.com
                    </span>
                </div>
            </div>
            <div className="footer-items-wrapper">
                <div className="footer-item">
                    <h4 className="footer-item-title">الالكترونيات</h4>
                    <ul className="footer-item-links">
                        <li className="footer-item-link">الكاميرا وتسجيل الفيديو</li>
                        <li className="footer-item-link">الاجهزة المنزلية</li>
                        <li className="footer-item-link">الهواتف</li>
                        <li className="footer-item-link">سماعات الراس</li>
                        <li className="footer-item-link">التليفزيونات</li>
                        <li className="footer-item-link">اجهزة التابلت</li>                
                    </ul>
                </div>
                <div className="footer-item">
                    <h4 className="footer-item-title">الازياء</h4>
                    <ul className="footer-item-links">
                        <li className="footer-item-link">أزياء رجالية</li>
                        <li className="footer-item-link">أزياء نسائية</li>
                        <li className="footer-item-link">أزياء الاولاد</li>
                        <li className="footer-item-link">نظارات</li>
                        <li className="footer-item-link">المجوهرات</li>
                        <li className="footer-item-link">الساعات</li>
                    </ul>
                </div>
                <div className="footer-item">
                    <h4 className="footer-item-title">المطبخ والاجهزة المنزلية</h4>
                    <ul className="footer-item-links">
                        <li className="footer-item-link">ديكورات منازل</li>
                        <li className="footer-item-link">الاثاث</li>
                        <li className="footer-item-link">المطبخ وادوات الطعام</li>
                        <li className="footer-item-link">مستلزمات الحمام</li>
                        <li className="footer-item-link">اجهزة صوت وفيديو</li>
                        <li className="footer-item-link">مستلزمات الحدائق</li>
                    </ul>
                </div>
                <div className="footer-item">
                    <h4 className="footer-item-title">الجمال</h4>
                    <ul className="footer-item-links">
                        <li className="footer-item-link">العطور</li>
                        <li className="footer-item-link">المكياج</li>
                        <li className="footer-item-link">العناية بالشعر</li>
                        <li className="footer-item-link">العناية بالبشرة</li>
                        <li className="footer-item-link">الجسم و الاستحمام</li>
                        <li className="footer-item-link">منتجات الرعاية الصحية</li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <i className="bi bi-c-circle"></i>2024
                كل الحقوق محفوظه
            </div>
        </footer>
    )
}
