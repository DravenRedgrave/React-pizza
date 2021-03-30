import React from 'react';

export const Navlink = () =>{
    return (
        <div className="nav-bar">
            <div className="nav">
                <ul>
                    <li> <a className="main-btn">Все</a> </li>
                    <li> <a>Мясные</a> </li>
                    <li> <a>Вегатарианские</a> </li>
                    <li> <a>Гриль</a> </li>
                    <li> <a>Острые</a> </li>
                    <li> <a>Закрытые</a> </li>
                </ul>
            </div>
            <div className="menu-bar">
                <div className="sort">
                <p>Сортировка по:</p>
                </div>
                <div className="menu-click">
                    <span>популярности</span>
                </div>
            </div>
        </div>
    )
}