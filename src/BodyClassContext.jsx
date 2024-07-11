import React, { createContext, useContext, useState } from 'react';

const BodyClassContext = createContext();

export const useBodyClass = () => useContext(BodyClassContext);

export const BodyClassProvider = ({ children }) => {
    const [isClassAdded, setIsClassAdded] = useState(false);
    const [className, setClassName] = useState('');

    const addClass = (classToAdd) => {
        setIsClassAdded(true);
        setClassName(classToAdd);
        document.body.classList.add(classToAdd); // Add class to body here
    };

    const removeClass = () => {
        setIsClassAdded(false);
        document.body.classList.remove(className); // Remove class from body here
        setClassName('');
    };

    return (
        <BodyClassContext.Provider value={{ isClassAdded, className, addClass, removeClass }}>
            {children}
        </BodyClassContext.Provider>
    );
};
