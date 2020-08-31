let value = '50'
let value2 = '70'
let operation = '-'

let operationValue = parseInt(value)
let operationValue2 = parseInt(value2)


function getResult(){
    let retorno
    switch(operation){
        case '+':
          retorno =   operationValue + operationValue2
            break
            case '-':
             retorno =    operationValue - operationValue2    
            }
            console.log(retorno);
            return retorno
        }

getResult()