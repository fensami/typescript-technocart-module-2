{
    // Map types

    const arrOfNumbers: number[] = [1, 2, 34, 5,];

    // const arrOfStrings : string[] = [ '1','3','3'];
    const arrOfStrings: string[] = arrOfNumbers.map((number) =>
        number.toString()
    )
    console.log(arrOfStrings);



    // how to using map type

    type areNumbers = {
        height: number;
        width: number;
    }

    type Hight = areNumbers["height"] // look up type 


    //using keyof  (use korle ata thakbe) "height" | "width"


    // type areString = {
    //     [ key in keyof areNumbers] : string;
    // }
    // Custom using

    // T = height: string; width:string
    // key hocche akta height nitece arekbar width nitece (mani looping kortece)
    type areString<T> = {
        [ key in keyof T] : T[key];
    }


const area1: areString<{height:string; width: number}> = {
    height: "100",
    width: 50
}














}