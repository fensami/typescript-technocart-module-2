{


    // Function With Generic

    const createArray = (param: string): string[] => {
        return [param]
    }


    const createArrayInGeneric = <T>(param: T): T[] => {
        return [param]
    }
    const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
        return [param1, param2]
    }

    // Tuple Usecase
    const res10 = createArrayWithTuple<string, number>("bangladesh", 120)
    const res11 = createArrayWithTuple<string, { name: string }>("bangladesh", { name: "kaku" })


    // Generic Use Case 
    const res1 = createArray("bangladesh")
    const restGenericsArray = createArrayInGeneric<boolean>(true)


    interface User {
        id: number;
        name: string;
    }
    const restGenericObject = createArrayInGeneric<User>({ id: 120, name: "kaku" })




    const addCourseToStudent = <T>(student: T) => {
        const course = "next lvl webdevelopment"

        return {
            ...student,
            course
        }
    }


    const student1 = addCourseToStudent<{
        name: string;
        roll: number;
        email: string;
    }>({ name: 'asad', roll: 20, email: "asadurjamannur@gmail.com" })











}