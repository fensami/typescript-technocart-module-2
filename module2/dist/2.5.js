"use strict";
{
    // Function With Generic
    const createArray = (param) => {
        return [param];
    };
    const createArrayInGeneric = (param) => {
        return [param];
    };
    const createArrayWithTuple = (param1, param2) => {
        return [param1, param2];
    };
    // Tuple Usecase
    const res10 = createArrayWithTuple("bangladesh", 120);
    const res11 = createArrayWithTuple("bangladesh", { name: "kaku" });
    // Generic Use Case 
    const res1 = createArray("bangladesh");
    const restGenericsArray = createArrayInGeneric(true);
    const restGenericObject = createArrayInGeneric({ id: 120, name: "kaku" });
    const addCourseToStudent = (student) => {
        const course = "next lvl webdevelopment";
        return Object.assign(Object.assign({}, student), { course });
    };
    const student1 = addCourseToStudent({ name: 'asad', roll: 20, email: "asadurjamannur@gmail.com" });
    const student2 = addCourseToStudent({ name: 'asad', roll: 20, email: "nur@gmail.com" });
}
