"use strict";
{
    //
    //Type Assertion
    const kgToGm = (value) => {
        if (typeof value === "string") {
            const convertToValue = parseFloat(value) * 1000;
            return `The converted value is ${convertToValue}`;
        }
        if (typeof value === "number") {
            return value * 1000;
        }
    };
    const result1 = kgToGm(1000);
    try {
    }
    catch (error) {
        console.log(error.message);
    }
    //
}
