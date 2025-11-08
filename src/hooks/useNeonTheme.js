import { useState, useEffect } from 'react';

const useNeonTheme = () => {
    const [isNeon, setIsNeon] = useState(true);

    const toggleTheme = () => {
        setIsNeon(prev => !prev);
    };

    useEffect(() => {
        const body = document.body;
        body.classList.toggle('neon-theme', isNeon);
    }, [isNeon]);

    return { isNeon, toggleTheme };
};

export default useNeonTheme;