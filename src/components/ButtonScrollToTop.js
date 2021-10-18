import React from 'react'
import {FaArrowUp} from 'react-icons/fa'
const ButtonScrollToTop = () => {
    const handleClick = () => {
        window.scrollTo ({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }
    return (
        <button className="scrollToTopBtn" onClick={handleClick}>
            <FaArrowUp className="scrollToTopIcon"/>
        </button>
    )
}

export default ButtonScrollToTop
