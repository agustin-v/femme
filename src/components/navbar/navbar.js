import React from 'react'
import Book from '../../assets/img/book.svg'

const navbar = () => {
    return(
        <nav className="navbar navbar-light bg-light">
            <div className='container'>
                <a className="navbar-brand">
                    <img src={Book} alt="logo" style={{width: '1.5em'}}/>
                </a>
            </div>
        </nav>
    )
}

export default navbar