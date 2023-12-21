import React from 'react'
import { Icon } from '@iconify/react';
import './navbar.scss'

function Navbar() {
    return (
        <>
            <nav>
                <div className="epic-icon">
                    <Icon icon="simple-icons:epicgames" />
                </div>
                <div className="nav-right">
                    <div className="inside-left">
                        <img src="https://media.graphassets.com/qAiDvosPSFGqJxTVuY7h" alt="" />
                        <div>
                            <p>Distribution</p>
                            <p>Support</p>
                            <p>Unreal Engine</p>
                        </div>
                    </div>
                    <div className="inside-right">
                        <i class="fa-sharp fa-solid fa-globe"></i>
                        <i class="fa-sharp fa-regular fa-user"></i>
                        <div>Download</div>
                    </div>
                </div>
            </nav>
            <header>
                <div className="menu">
                    <div class="form-group fg--search">
                        <input type="text" className='input' placeholder='Search store' />
                        <button type="submit"><i class="fa fa-search"></i></button>
                    </div>
                    <div className="menu-left">
                        <div>
                            <p>Discover</p>
                            <p>Browse</p>
                            <p>News</p>
                        </div>
                        <div>
                            <p>Wishlist</p>
                            <p>Cart</p>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar