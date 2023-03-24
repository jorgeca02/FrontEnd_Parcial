import { MouseEventHandler, useEffect, useState } from "react";

const Teclado = () => {   
    const teclas:string[][]=[["Q","W","E","R","T","Y","U","I","O","P","⌫"],["A","S","D","F","G","H","J","K","L","Ñ","↵"],["Z","X","C","V","B","N","M"],["espacio"]]

    const [text, setText] = useState<string[][]>([]);


    function ultimoCaracter(arr:string[][]):string{
        if(arr.length==0)return " "
        if(arr[arr.length-1].length==0)return "empty"
        if(arr[arr.length-1][arr[arr.length-1].length-1] == "espacio") return " "
        else return arr[arr.length-1][arr[arr.length-1].length-1]
    }

    const pulsacion = (tecla: string): MouseEventHandler<HTMLButtonElement> | undefined => {
        if(!tecla) return;
        let text_aux:string[][]= [...text];
        if(tecla == "espacio"){
            if(ultimoCaracter(text_aux)==" ") text_aux=text_aux;
            else {
                text_aux[text_aux.length-1].push(" ")
            }
        }
        else if(tecla == "↵")text_aux.push([])
        else if(tecla == "⌫"){
            if(text_aux[text_aux.length-1].length==0) text_aux.pop();
            else {
                text_aux[text_aux.length-1].pop()
            }
        }
        else if(text_aux[text_aux.length-1]) text_aux[text_aux.length-1].push(tecla)
        else text_aux.push([tecla])
        setText(text_aux);
        //console.log(text)
    }

    return(
        <div className="teclado">
            {teclas.map(fila => (
                <div className="fila">
                    {fila.map(tecla => (
                        tecla=="espacio" ? <button onClick={() => pulsacion(tecla)} className="espacio"></button> : <button onClick={() => pulsacion(tecla)} className="tecla">{tecla}</button>
                    ))}
                </div>
            ))}
            <div className="texto">
                {text.map(fila => (
                    <div className="filatexto">
                        {fila.map(letra => (
                            <div className="letra">{letra==" "?"_":letra}</div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Teclado;