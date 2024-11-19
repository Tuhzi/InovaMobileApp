import React, { useEffect, useState } from 'react';
import { useSupabase } from '../../context/SupabaseContext';

const GruposList = () => {
  const supabase = useSupabase();
  const [grupos, setGrupos] = useState([]);

  useEffect(() => {
    const fetchGrupos = async () => {
      const { data, error } = await supabase.from('grupos').select('*');
      if (error) {
        console.error('Erro ao buscar grupos:', error.message);
      } else {
        setGrupos(data);
      }
    };

    fetchGrupos();
  }, [supabase]);

  return (
    <div className="container">
      <h2>Lista de Grupos</h2>
      <ul className="grupos-list">
        {grupos.map((grupo) => (
          <li key={grupo.id}>
            <h3>{grupo.nome}</h3>
            <p>{grupo.descricao}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GruposList;
