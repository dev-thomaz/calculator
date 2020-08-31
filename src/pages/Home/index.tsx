import React, { useState } from 'react';
import Botao from '../../components/Button'
import { Container, BtnArea, CalculatorBody, ValuesArea, Header, LowNumber, Error } from './styles';

import emixLogo from '../../assets/emix.png'

const Home: React.FC = () => {
    const [value, setValue] = useState('0')
    const [value2, setValue2] = useState('')
    const [operation, setOperation] = useState('')
    const [result, setResult] = useState('')
    const [error, setError] = useState('')


    function handleOperation(operation: string) {
        if (!result) {
            setOperation(operation)
            setValue2('0')
        } else {
            setValue(result)
            setValue2('0')
            setResult('')
            setOperation(operation)
        }

    }


    function handleValue(handleValue: string) {
        if (!operation) {
            let valor = value
            if (valor[0] === '-') {
                valor = valor.split('-')[1]
            }
            if (valor.length < 21) {
                if (value === '0') {
                    setValue('' + handleValue)
                } else {
                    let retorno = value + handleValue
                    setValue(retorno)
                }
            }
        } else {
            if (value2 === '0') {
                setValue2('' + handleValue)
            } else {
                let retorno = value2 + handleValue
                setValue2(retorno)
            }
        }
    }

    function handleInvert() {
        if (!operation) {
            if (value !== '0') {
                if (value[0] !== '-') {
                    let valor = '-' + value
                    setValue(valor)
                } else {
                    let retorno = value.split('-')[1]
                    setValue(retorno)
                }
            }
        } else if (value2 !== '0') {
            let valor = '-' + value2
            setValue2(valor)
        }

    }

    function handleClear() {
        setValue('0')
        setValue2('')
        setOperation('')
        setResult('')
        setError('')
    }

    function getSquareRoot() {
        setOperation('√')
        if (!result) {
            let retorno = Math.sqrt(parseInt(value))
            setResult(retorno.toString())
        } else {
            setValue(result)
            let retorno = Math.sqrt(parseInt(result))
            setResult(retorno.toString())
        }

    }

    function handleDot() {
        if (!operation) {
            if(!value.includes(',')){
                let valor = value + ','
                setValue(valor)
            }
        } else if (value2) {
            if(!value2.includes(',')){
            let valor = value2 + ','
            setValue2(valor)
        }
        } if(result){
            setValue(result)
            setValue2('')
            setOperation('')
            setResult('')
            let valor = result + ','
            setValue(valor)
        }
    }

    function handleBackSpace() {
        if (!operation) {
            let revalue = value.slice(0, -1)
            setValue(revalue)
            if (revalue === '') {
                setValue('0')
            }
        } else if (value2) {
            let revalue = value2.slice(0, -1)
            setValue2(revalue)
            if (revalue === '') {
                setValue2('0')
            }
        } if(result){
            setValue(result)
            setValue2('')
            setOperation('')
            setResult('')
        }
    }

    function getResult() {
        let operationResult = 0
        let operationValue = 0
        let operationValue2 = 0
        if (value.includes(',')) {
            let valor = value.replace(',', '.')
            operationValue = parseFloat(valor)
        } else {
            operationValue = parseInt(value)
        }
        if (value2.includes(',')) {
            let valor = value2.replace(',', '.')
            operationValue2 = parseFloat(valor)
        } else {
            operationValue2 = parseInt(value2)
        }

        if (!result) {
            switch (operation) {
                case '+':
                    operationResult = operationValue + operationValue2
                    break
                case '-':
                    operationResult = operationValue - operationValue2
                    break
                case 'x':
                    operationResult = operationValue * operationValue2
                    break
                case '÷':
                    if (operationValue2 === 0) {
                        setError('Não é possível realizar a divisão por zero')
                    } else {
                        operationResult = operationValue / operationValue2
                    }
                    break

            }
            setResult(operationResult.toString().replace('.', ','))
        } else {
            let convertValue = parseInt(result)
            switch (operation) {
                case '+':
                    operationResult = operationValue + convertValue
                    break
                case '-':
                    operationResult = operationValue - convertValue
                    break
                case 'x':
                    operationResult = operationValue * convertValue
                    break
                case '÷':
                    operationResult = operationValue / convertValue
                    break
            }
            setValue2(convertValue.toString())
            setResult(operationResult.toString())
        }
    }



    return (
        <Container>
            <Header>
                <img src={emixLogo} alt="Emix" />
            </Header>
            <CalculatorBody>
                <ValuesArea>
                    {error ? <div>
                        <div>
                            <p>Clique na tecla c para recomeçar</p>
                            <Error> {error} </Error>
                        </div>
                    </div> :
                        <div>
                            {!result ? <div>
                                {!value2 ? <div>
                                    {operation && <><p>{value} {operation}</p> </>}
                                    <LowNumber> {value} </LowNumber>
                                </div>
                                    : <div>
                                        {operation && <><p>{value} {operation}</p> </>}
                                        <LowNumber> {value2} </LowNumber>
                                    </div>
                                }
                            </div> :
                                <div>
                                     {operation === '√' ? <div> 
                                    {operation && <><p>{operation} {value}</p> </>}
                                    <LowNumber> {result} </LowNumber>
                                    </div> :
                                    <div>
                                    <p> {value} {operation} {value2} </p> 
                                    <LowNumber> {result} </LowNumber>
                                    </div>}
                                </div>}
                        </div>
                    }



                </ValuesArea>
                <BtnArea>
                    <Botao value="c" type="operation" ClickHandler={() => { handleClear() }} />
                    <Botao value="<=" type="operation" ClickHandler={() => { handleBackSpace() }} />
                    <Botao value="√" type="operation" ClickHandler={() => { getSquareRoot() }} />
                    <Botao value="÷" type="operation" ClickHandler={() => { handleOperation('÷') }} />
                </BtnArea>
                <BtnArea>
                    <Botao value="7" type="number" ClickHandler={() => { handleValue('7') }} />
                    <Botao value="8" type="number" ClickHandler={() => { handleValue('8') }} />
                    <Botao value="9" type="number" ClickHandler={() => { handleValue('9') }} />
                    <Botao value="x" type="operation" ClickHandler={() => { handleOperation('x') }} />
                </BtnArea>
                <BtnArea>
                    <Botao value="4" type="number" ClickHandler={() => { handleValue('4') }} />
                    <Botao value="5" type="number" ClickHandler={() => { handleValue('5') }} />
                    <Botao value="6" type="number" ClickHandler={() => { handleValue('6') }} />
                    <Botao value="-" type="operation" ClickHandler={() => { handleOperation('-') }} />
                </BtnArea>
                <BtnArea>
                    <Botao value="1" type="number" ClickHandler={() => { handleValue('1') }} />
                    <Botao value="2" type="number" ClickHandler={() => { handleValue('2') }} />
                    <Botao value="3" type="number" ClickHandler={() => { handleValue('3') }} />
                    <Botao value="+" type="operation" ClickHandler={() => { handleOperation('+') }} />
                </BtnArea>
                <BtnArea>
                    <Botao value="+/-" type="operation" ClickHandler={() => { handleInvert() }} />
                    <Botao value="0" type="operation" ClickHandler={() => { handleValue('0') }} />
                    <Botao value="·" type="operation" ClickHandler={() => { handleDot() }} />
                    <Botao value="=" type="equality" ClickHandler={() => getResult()} />
                </BtnArea>
            </CalculatorBody>
        </Container>
    )
}

export default Home;