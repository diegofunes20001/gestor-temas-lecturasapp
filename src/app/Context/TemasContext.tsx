"use client";
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Tema } from '../Modelos/Tema';

interface TemasContextType {
    temas: Tema[];
    toggleInteresante: (id: number) => void;
}

export const TemasContext = createContext<TemasContextType | undefined>(undefined);

export const TemasProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [temas, setTemas] = useState<Tema[]>([
        { id: 1, titulo: 'Tema 1', interesante: false },
        { id: 2, titulo: 'Tema 2', interesante: false },
        { id: 3, titulo: 'Tema 3', interesante: false },
        { id: 4, titulo: 'Tema 4', interesante: false },
        { id: 5, titulo: 'Tema 5', interesante: false },
        { id: 6, titulo: 'Tema 6', interesante: false },
        { id: 7, titulo: 'Tema 7', interesante: false },
        { id: 8, titulo: 'Tema 8', interesante: false },
        { id: 9, titulo: 'Tema 9', interesante: false },
        { id: 10, titulo: 'Tema 10', interesante: false },
    ]);

    const toggleInteresante = (id: number) => {
        setTemas(prevTemas =>
            prevTemas.map(tema =>
                tema.id === id ? { ...tema, interesante: !tema.interesante } : tema
            )
        );
    };

    return (
        <TemasContext.Provider value={{ temas, toggleInteresante }}>
            {children}
        </TemasContext.Provider>
    );
};

export const useTemas = () => {
    const context = useContext(TemasContext);
    if (context === undefined) {
        throw new Error('useTemas must be used within a TemasProvider');
    }
    return context;
};