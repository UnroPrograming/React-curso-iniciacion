import { useState } from "react";

type Props = {
  children: string;
};

function Button({ children }: Props) {
    const [buttonState, setbuttonState]= useState('primary');
    const [buttonContent, setbuttonContent]= useState(children)

    const handleClick = () => {
        setbuttonContent('Cargando...');
        setbuttonState('secondary');
    };  

    return (
        <button onClick={handleClick} type="button" className= {`btn btn-${buttonState}`}>{buttonContent}</button>
    );
};

export default Button;