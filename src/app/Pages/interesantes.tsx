"use client";
import React, { useContext } from 'react';
import { TemasContext } from '../Context/TemasContext';
import TemaList from '../Components/TemaList';

type Tema = {
    id: number;
    titulo: string;
    interesante: boolean;
    // agrega aquí otras propiedades si es necesario
};

const Interesantes = () => {
    const { temas } = useContext(TemasContext) as { temas: Tema[] };
    const temasInteresantes = temas.filter((tema: Tema) => tema.interesante);

    return (
        <div>
            <h1>Temas Interesantes</h1>
            {temasInteresantes.map((tema, idx) => (
                <TemaList key={tema.id ?? idx} tema={tema} nombre={''} />
            ))}
        </div>
    );
};

export default Interesantes;