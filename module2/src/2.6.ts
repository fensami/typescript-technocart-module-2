{

    // Constraints

    // must thakte hobe je properti gula 

    const addCourseToStudent = <T extends { name: string, roll: number, email: string }>(student: T) => {
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
    const student2 = addCourseToStudent<{
        name: string;
        roll: number;
        email: string;
    }>({ name: 'asad', roll: 20, email: "nur@gmail.com" })



    const student3 = addCourseToStudent({ name: "asad", roll: 200, email: "@", emni: "emni" })



















}