import React from 'react'
import navbar from './navbar.module.css'

function Navbar() {
    return (
        <div>
            <nav className={navbar.navbar_container}>
                <div className={navbar.items}>
                    <a href="https://notesbyus.tk/" className={navbar.notesbyus_title}>NotesByUs</a>
                </div>
                <div className={navbar.items}>
                    <a href="_blank">Home</a>
                </div>
                <div className={navbar.items}>
                    <a href="blank">Contact Us</a>
                </div>
            </nav>
        </div>
    )
}

export default Navbar

