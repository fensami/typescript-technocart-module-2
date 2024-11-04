{
    // Use case olpo

// Conditional type

type a1 = null
type b1 = undefined

type X = a1 extends null ? true : false;  // This is conditional type 

type Y = a1 extends null ? true : b1 extends undefined ? undefined : any;


type Sheik = {
    car: string;
    bike: string;
    ship: string
}

// keyof sheik "car" | "bike" | "ship"

// car ache kina / bike ache kina / ship ache kina




type CheckVehicale<T> = T extends keyof Sheik ? true : false;

type hasCar = CheckVehicale<'car'>

















}