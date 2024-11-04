{

    // Interface -  generic

    interface Developer<T, X = null> { //null is default value
        name: string;
        computer: {
            name: string,
            model: number,
            brand: string,
            releaseYear: number

        };
        smartWatch: T,
        Bike?: X
    }

    type SmartWatch1 = {
        name: string
        model: number
        brand: string
    }
    const poorDeveloper: Developer<SmartWatch1> = {
        name: 'Dell',
        computer: {
            name: "Dell",
            model: 20,
            brand: "walton",
            releaseYear: 2018
        },
        smartWatch: {
            name: "apple",
            model: 102,
            brand: "apple"
        }
    }

    type SmartWatch = {
        name: string;
        model: number;
        heratbeatTest: number
    }
    const richDeveloper: Developer<SmartWatch> = {
        name: 'hp',
        computer: {
            name: "hp",
            model: 20,
            brand: "hp",
            releaseYear: 2018
        },
        smartWatch: {
            name: "ph",
            model: 102,
            heratbeatTest: 1203
        }
    }

























}