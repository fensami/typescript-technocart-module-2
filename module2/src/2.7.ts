{

    // Generic Constraint with keyof operator

    type Vehicle = {
        bike: string;
        car: string;
        ship: string
    }

    type Owner = "bike" | "car" | "ship";  // Manually

    type Owner2 = keyof Vehicle

    const person1: Owner2 = "bike"


    const getPropertiValue =<X,Y extends keyof X> (obj: X, key: Y) => {
        return obj[key]
    }

    const user = {
        name: 'asad',
        age : 24,
        address: "feni"
    }
    const car = {
        name: 'toyota',
        year : 2000
    }

    const result1 = getPropertiValue(car, "year")
























}