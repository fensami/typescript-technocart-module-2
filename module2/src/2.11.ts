{
    // Utility  Types
    // Pick type

    type Person = {
        name: string;
        age: number;
        email?: string;
        contact: string
    }

    // Pick means kono kisu niye asha 
    type name = Pick<Person, "age" | "contact">


    //Omit means hocche pick er ulta ta kono kisu bad dawa

    type contactInfo = Omit<Person, "name" | "age">


    // Required  {this is means sob gula lagbe akta chara kaj hobe na}

    type PersonRequired = Required<Person>


    // Partial  {sob gula optional kore dibe}
    type PersonOptional = Partial<Person>


    // Readonly {this means not changng person name or another properties}

    type PersonReadOnly = Readonly<Person>

    const person1: PersonReadOnly = {
        name: "asad",
        contact: "12123234",
        email: "@",
        age: 23
    }

    // person1.name = "kaku"



    // Record Type 

    // type Myobj = {
    //     a: string,
    //     b: number
    // }
    type Myobj = Record<string, string>


    const emptyObj : Record<string,unknown> = {}
    const myObj: Myobj = {
        a: "aa",
        b: "bb",
        c: "cc"
    }


}