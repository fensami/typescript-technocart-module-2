{
    //
    //Type Assertion

    const kgToGm = (value: string | number): string | number | undefined => {
        if (typeof value === "string") {
            const convertToValue = parseFloat(value) * 1000;
            return `The converted value is ${convertToValue}`
        }
        if (typeof value === "number") {
            return value * 1000
        }
    }

const result1 = kgToGm(1000) as number

type CustomError = {
    message: string;
}
try{

}catch(error){
    console.log((error as CustomError).message);
    
}
    //
}