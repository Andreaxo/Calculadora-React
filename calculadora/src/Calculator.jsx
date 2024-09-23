import { useState } from "react"

    /* Input Valor: El que muestra cuál es el valor actual
    Set value: El que permite setear
    UseState: Donde inicializa la variable */

export const Calculator = () => {
    const [datos, setDatos] = useState('')

    
    const agregarInput = (value) => {
        setDatos(prevValue => prevValue + value)
    }   

    const limpiar = () =>{
        setDatos(" ")
    }

    const calcularResultado = () => {
        try {
            setDatos(eval(datos).toString())
        } catch (error) {
            setDatos('Error')
        }
    }
    
    return(
        <>
        <h1>Calculadora!</h1>
        <input type="text" value={datos} placeholder="Ingrese un valor" readOnly/>
        <div className="filas_n">
        <br/>
            <button onClick={() => agregarInput('1')}>1</button>
            <button onClick={() => agregarInput('2')}>2</button>
            <button onClick={() => agregarInput('3')}>3</button>
            <button onClick={() => agregarInput('+')}>+</button>
            <br/><br/>
            <button onClick={() => agregarInput('4')}>4</button>
            <button onClick={() => agregarInput('5')}>5</button>
            <button onClick={() => agregarInput('6')}>6</button>
            <button onClick={() => agregarInput('-')}>-</button>
            <br/><br/>
            <button onClick={() => agregarInput('7')}>7</button>
            <button onClick={() => agregarInput('8')}>8</button>
            <button onClick={() => agregarInput('9')}>9</button>
            <button onClick={() => agregarInput('*')}>*</button>
            <br/><br/>
            <button onClick={() => agregarInput('0')}>0</button>
            <button onClick={() => agregarInput('/')}>/</button>
            <br/><br/>
            <button onClick={calcularResultado}>=</button>
            <br/><br/>
            <button onClick={limpiar}>Clear</button>
        </div>
        </>
    )
}

