"use client";
import { useContext } from 'react';
import { useRouter } from 'next/router';
import { TemasContext } from '../Context/TemasContext';
import TemaList from '../Components/TemaList';

const Home = () => {
  const { temas } = useContext(TemasContext);
  const router = useRouter();

  const navigateToInteresantes = () => {
    router.push('/interesantes');
  };

  return (
    <div>
      <h1>Tema de Lectura</h1>
      <TemaList tema={temas} nombre={''} />
      <button onClick={navigateToInteresantes}>Ver Temas Interesantes</button>
    </div>
  );
};

export default Home;