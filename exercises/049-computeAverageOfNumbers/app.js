// Write your function here
let input= [1,2,3,4,5]

const computeAverageOfNumber= (array)=>{
    let divisor= array.length //Valor que divide luego de sumar todos los valores
    let resulatdoItemSuma= 0
    let promedio;
    for(let i= 0; i < array.length; i++){
        resulatdoItemSuma += array[i] //Instrucción de asignar y sumar cada item el array por cada bucle  
    }
    promedio= resulatdoItemSuma / divisor 
    return promedio
}

let output=  computeAverageOfNumber(input)
console.log(output)