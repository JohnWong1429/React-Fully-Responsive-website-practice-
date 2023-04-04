import React, { useState } from 'react';
import './ScrollButton.css';

const ScrollButton = () => {
    const [showScrollButton, setShowScrollButton] = useState(false);

    const toggleShowScrollButton = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 800) {
            setShowScrollButton(true);
        }
        else if (scrolled <= 800) {
            setShowScrollButton(false);
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleShowScrollButton)

    return (
        <div 
            onClick={scrollToTop} 
            className='scroll-btn'
            style={{display: showScrollButton ? 'inline' : 'none'}}
        >
            <i className="fa fa-arrow-circle-up"></i>
        </div>
    );
}

export default ScrollButton;
