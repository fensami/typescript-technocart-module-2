"use strict";
{
    // Constraints
    // must thakte hobe je properti gula 
    const addCourseToStudent = (student) => {
        const course = "next lvl webdevelopment";
        return Object.assign(Object.assign({}, student), { course });
    };
    const student1 = addCourseToStudent({ name: 'asad', roll: 20, email: "asadurjamannur@gmail.com" });
    const student2 = addCourseToStudent({ name: 'asad', roll: 20, email: "nur@gmail.com" });
    const student3 = addCourseToStudent({ name: "asad", roll: 200, email: "@", emni: "emni" });
}
