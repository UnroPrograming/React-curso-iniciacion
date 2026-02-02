import { useState } from 'react'
import './TwitterFollowCard.css'

export function TwitterFollowCard ({formatUserName, userName, children}){
    //Utilizamos el estado de React para cambiar el estado de seguido
    //      isFollowing -> sería el valor del estado
    //      setIsFollowing -> el método que cambia el valor de IsFollowing
    //      false -> el valor inical
    const [isFollowing, setIsFollowing] = useState(false);
    /* Es lo mismo que poner (porque useState devuelve un array de longitud 2)
            const state = useState(false);
            const isFollowing = state[0];
            const setIsFollowing = state[1]
    */

    //Declaramos el método que modifica isFollowing
    const handleClick = () => {
        setIsFollowing(!isFollowing);
    };

    

    const imageSrc = `../public/img/${userName}.png`;

    const buttonFollowText = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassName = isFollowing 
        ? 'tw-followCard-button is-following' 
        : 'tw-followCard-button';

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img 
                    className='tw-followCard-avatar'
                    alt= {`avatar de ${children}`}
                    src={imageSrc}/>
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-infoUserName'>
                        {formatUserName(userName)}
                    </span>
                </div>
            </header>

            <aside>
                <button className= {buttonClassName} onClick={handleClick}>
                    {buttonFollowText}
                </button>
            </aside>
        </article>
    );
};