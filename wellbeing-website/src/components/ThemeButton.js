import React, { useState, useEffect } from 'react';
import '../styles/common.scss';

export default function ThemeButton() {
    const [theme, setTheme] = useState('Dark');
    const [showLightTheme, setLightTheme] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('webTheme') === 'Dark') {
            setTheme('Dark');
            setLightTheme(false);
        }
        else {
            setTheme('Light');
            setLightTheme(true);
        }
    }, [theme]);

    function toggleTheme() {
        if (localStorage.getItem('webTheme') === 'Dark') {
            window.webTheme = 'Light';
            localStorage.setItem('webTheme', window.webTheme);
            let element = document.body;
            element.classList.add("light-mode");
            setTheme('Light');
        }
        else if (localStorage.getItem('webTheme') === 'Light') {
            window.webTheme = 'Dark';
            localStorage.setItem('webTheme', window.webTheme);
            let element = document.body;
            element.classList.remove("light-mode");
            setTheme('Dark');
        }
    }

    return (
      <div className={showLightTheme ? 'light-button theme-button' : 'theme-button'}>
        <button onClick={toggleTheme}>
            <div className='circle'>
            </div>
        </button>
        <div className='text'>
            {showLightTheme ?  (
            <span>Light mode</span>)
            : (
            <span>Dark mode</span>
            )}
        </div>
      </div>
    );
}