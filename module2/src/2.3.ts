{

    // Generic Type
    type GenericArray<T> = Array<T>;

    //const rollNumber : number[] = [3,4,5];
    const rollNumbers: GenericArray<number> = [2, 3, 5];

    // const mentors: string[] = ['sami','sakib','rakib'];
    const mentors: GenericArray<string> = ['sami', 'sakib', 'rakib'];

    // const boolArray: boolean[] = [true, false ,true];
    const boolArray: GenericArray<Boolean> = [true, false, true];


// Array of object example
    const user: GenericArray<{name: string,age: number}> = [
        {
            name: "asad",
            age: 23
        },
        {
            name: "nur",
            age: 24
        }
    ]


    // Generic Tuple
    type GenericTuple<X,Y> = [X, Y];

    const manush : GenericTuple<string,string> = ["Mr. N", "Ms. H"]

    const userWihtId : GenericTuple<number, {name: string,email: string}> = [1234,{name: "asad", email: "a@gmail.com"}]











}