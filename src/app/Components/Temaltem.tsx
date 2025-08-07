"use client";
import React from "react";
import { useContext } from "react";
import { TemasContext } from "../Context/TemasContext";
import { Tema } from "../Modelos/Tema";


interface TemaItemProps {
    tema: Tema;
}

const TemaItem: React.FC<TemaItemProps> = ({ tema }) => {
    const temasContext = useContext(TemasContext);

    const handleToggle = () => {
        if (temasContext && temasContext.toggleInteresante) {
            temasContext.toggleInteresante(tema.id);
        }
    };

    return (
        <div>
            <h3>{tema.titulo}</h3>
            <button onClick={handleToggle}>
                {tema.interesante ? 'Marcar como no interesante' : 'Marcar como interesante'}
            </button>
        </div>
    );
};

export default TemaItem;