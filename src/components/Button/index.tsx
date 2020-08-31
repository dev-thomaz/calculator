import React from 'react';
import { CgBackspace } from 'react-icons/cg'
import { NumberContainer, OperationContainer, EqualityContainer } from './styles';

interface ButtonProps {
    value: string;
    type: string;
    ClickHandler?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Button: React.FC<ButtonProps> = ({ value, type, ClickHandler }) => {
    return (
        <>
            {type === 'equality' && <EqualityContainer onClick={ClickHandler}>
                <span>{value}</span>
            </EqualityContainer>}
            {type === 'number' && <NumberContainer onClick={ClickHandler}>
                <span>{value}</span>
            </NumberContainer>}
            {type === 'operation' && <OperationContainer onClick={ClickHandler}>
                {value === '<=' ?
                    <span><CgBackspace /></span>
                    : <span>{value}</span>
                }
            </OperationContainer>}

        </>
    )
}

export default Button;