import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSupabase } from '../../context/SupabaseContext';


const GruposDetail = () => {
  const { id } = useParams();
  const supabase = useSupabase();
  const [grupo, setGrupo] = useState(null);
  const [alunos, setAlunos] = useState([]);
  const [avaliacoes, setAvaliacoes] = useState([]);

  useEffect(() => {
    const fetchGrupoDetail = async () => {
      const { data: grupoData } = await supabase.from('grupos').select('*').eq('id', id).single();
      const { data: alunosData } = await supabase.from('alunos').select('*').eq('grupo_id', id);
      const { data: avaliacoesData } = await supabase.from('avaliacoes').select('*').eq('grupo_id', id);

      setGrupo(grupoData);
      setAlunos(alunosData);
      setAvaliacoes(avaliacoesData);
    };
    fetchGrupoDetail();
  }, [id, supabase]);

  if (!grupo) return <p>Carregando...</p>;

  return (
    <div>
      <h2>{grupo.nome}</h2>
      <p>{grupo.descricao}</p>

      <h3>Alunos</h3>
      <ul>
        {alunos.map((aluno) => (
          <li key={aluno.id}>{aluno.nome} - {aluno.email}</li>
        ))}
      </ul>

      <h3>Avaliações</h3>
      <ul>
        {avaliacoes.map((avaliacao) => (
          <li key={avaliacao.id}>
            Nota: {avaliacao.nota} - Comentário: {avaliacao.comentario}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GruposDetail;
