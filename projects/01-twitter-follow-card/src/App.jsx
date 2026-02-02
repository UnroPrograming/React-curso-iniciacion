import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

export function App () {
    const formatUserName = (username) => `@${username}`; 
    const aitana19 = {formatUserName, userName:'Aitana19'};

    return (
        <div className='App'>
            {/*Al componente de TwitterFollowCard le pasamos sus propiedades*/}
            <TwitterFollowCard formatUserName={formatUserName} userName="CarlitosElDelBombo" isFollowing>
                {/* Esta es la propiedad con el nombre reservado children */}
                Carlos Javier Gutierrez
            </TwitterFollowCard>
            
            {/*Al poner ... -> le estamos diciendo que separe el objeto en sus propiedades (es lo mismo que hacerlo de la otra forma)*/}
            {/* Esto es un poco mala práctica */}
            <TwitterFollowCard {... aitana19}>
                Aitana Soriano
            </TwitterFollowCard>

            {/* En todos los casos le estamos pasando una función para que formatee el userName (este ejemplo es un poco ridículo pero se puede ver como se pasan funciones) */}
            <TwitterFollowCard formatUserName={formatUserName} userName="unrotundo" isFollowing={false}>
                Jose Luis Bastida
            </TwitterFollowCard>
        </div>
    );
};