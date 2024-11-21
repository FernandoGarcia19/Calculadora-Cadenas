function calculate(input) {
    if(input ==" "){
        return "0"
    }else{
        const numeros = input.split(/[,|-]/).map(Number)
        const result = numeros.reduce((sum, num) => sum + num, 0);
        return result.toString();
    }
}

export default calculate;