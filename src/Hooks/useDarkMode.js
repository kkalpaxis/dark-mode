import React, { useState, useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

function DarkMode() {
    const [darkMode, setDarkMode] = useLocalStorage("");
    
    useEffect(() => {
    darkMode ? document.body.classList.add("dark-mode") : document.body.classList.remove("dark-mode") 
    }, [darkMode]);

    return [darkMode, setDarkMode];
};

export default DarkMode;




// SCRATCH WORK 
// useEffect(() => {
//     function handleDarkMode(input) {
//         setDarkMode(input.darkMode);
//     }
// })

// const resetValues = e => {
//     e.preventDefault();
//     setDarkMode("");
// };

// return (
//     <form onSubmit={resetValues}>
//         <input
//         id="darkMode"
//         name="darkMode"
//         onChange={e => handleDarkMode(e.target.value)}
//         placeholder="Dark Mode"
//         type="text"
//         value={darkMode}
//         />
//     </form>
// );





// WORK FROM ONLINE TUTORIAL:
// handleFormSubmit = () => {
//     const { darkMode, setDarkMode } = this.state;
//     localStorage.setItem('setDarkMode', setDarkMode);
//     localStorage.setItem('darkMode', darkMode);   
// };

// componentDidMount() {
//     const setDarkMode = localStorage.getItem('setDarkMode') === 'true';
//     const darkMode = setDarkMode ? localStorage.getItem('darkMode') : '';
//     this.setState({ darkMode, setDarkMode });
// } 