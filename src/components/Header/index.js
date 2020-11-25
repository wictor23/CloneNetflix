import React from 'react'
import './Header.css'

export default ({black}) => {

    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix"></img>
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://occ-0-4205-1123.1.nflxso.net/dnm/api/v6/0RO1pLmU93-gdXvuxd_iYjzPqkc/AAAABWWT9Paohybk8Tl1JFcVemiIVLfyo2cR9iN34jG2yaKENy95LuUAw1LYoXCgclZhDOJMTsOElBV8KX4VFq2jFYdOCNFp.png" alt="usuário"></img>
                </a>
            </div>
        </header>
    )

}
