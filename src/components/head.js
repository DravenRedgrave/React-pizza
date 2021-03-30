import React from 'react';

export const Headers = () => {
    return(
        <div className="header">
            <div className="head">
                <div className="logo">
                    <div className="logo-img"><img src={"./image 1.png"} /></div>
                    <div className="logo-text">
                    <h2>Додо Пицца</h2>
                    <p>самая вкусная пицца во вселенной</p>
                    </div>
                </div>
                    <a className="cart">
                        Корзина
                    </a>
            </div>
        </div>
    )
}