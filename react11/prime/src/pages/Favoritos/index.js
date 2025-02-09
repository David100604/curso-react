import { useEffect, useState } from "react"
import './favoritos.css'
import { toast } from 'react-toastify';

import { Link } from 'react-router-dom'

function Favoritos(){

    const [filmes, setFilmes] = useState([])

    useEffect(() => {
        
        const minhaLista = localStorage.getItem("@primeflix");
        setFilmes(JSON.parse(minhaLista) || []);

    }, [])

    function excluirFilme(id){
        let filtroFilmes = filmes.filter( (item) => {
            return (item.id !== id);
        })

        setFilmes(filtroFilmes);
        localStorage.setItem("@primeflix", JSON.stringify(filtroFilmes));
        toast.success("Filme removido com sucesso!")
    }

    return(
        <div className="meus-filmes">
            <h1>Meus Favoritos</h1>

            {filmes.length === 0 && <span>Você não pussui nenhum filme favoritado!</span>}

            <ul>
                {filmes.map((filme) => {
                    return(
                        <li key={filme.id}>
                            <span>{filme.title}</span>
                            <div>
                                <Link to={`/filme/${filme.id}`}>Ver detalhes</Link>
                                <button onClick={() => excluirFilme(filme.id)}>Excluir</button>
                            </div>

                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Favoritos;