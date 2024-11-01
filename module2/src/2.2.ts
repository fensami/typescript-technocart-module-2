{
    //

    //Interface
    // This is interface usecase Start
    interface UserWithRole2 extends User2 {
        role: string
    }
    const user4: UserWithRole2 = {
        name: "asad",
        roll: 102,
        role: "100"
    }
    // This is interface usecase End


    // This is Type allias usecase Start
    type UserWithRole1 = User1 & { role: string }

    const user1: UserWithRole1 = {
        name: "asad",
        roll: 102,
        role: "100"
    }
    // This is Type usecase End



    //normal Usecase type allias
    type User1 = {
        name: string,
        roll: number
    }
    //normal Usecase Interface 
    interface User2 {
        name: string,
        roll: number
    }
    // const user1: User2 = {
    //     name: "asad",
    //     roll: 102
    // }


    // Js --> object , array --> object  function --> object


    type Roll1 = number[];

    interface Roll2 {
        [index: number]: number
    }
    const roll: Roll2 = [1, 2, 4]


    //function
    type Add = (num1: number, num2: number) => number
    interface Add2 {
        (num1: number, num2: number): number
    }
    const add: Add2 = (num1, num2) => num1 + num2



    // You can use type aliases for arrays and functions   // It is the easy way
    // You can use interface for Object  // It is the easy way

    //
}