function calculate(input){
    if(input ==" "){
        return "0"
    }
    let delimitadoresDefault = /[,|-]/

    if(input.startsWith("//[")){
        const match = input.match(/\/\/\[(.+?)\]/)
        if(match){
            const delimitadorPersonalizado = match[1]
            delimitadoresDefault = new RegExp(`[${delimitadorPersonalizado},|-]`);
            input = input.replace(match[0], "");
        }
    }
    const numeros = input.split(delimitadoresDefault).map(Number);
    const result = numeros.reduce((sum, num) => sum + num, 0);
    return result.toString();
}


export default calculate;