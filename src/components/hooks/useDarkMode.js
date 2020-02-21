import {useLocalStorage} from './useLocalStorage';
import {useEffect} from 'react';

export const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage('DarkMode', false);

    useEffect(()=>{
        if(darkMode === true){
            const Dark = document.querySelector('body')
            Dark.classList.add('dark-mode');
        }else {
            const Remove = document.querySelector('body')
            Remove.classList.remove('dark-mode'); 
        }
    }, [darkMode])

    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };

    return [darkMode, toggleMode];
};