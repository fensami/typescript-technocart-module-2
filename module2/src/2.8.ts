{
    // Promise

    // Fetch
    type Todo = {
        userId: number;
        id: number;
        title: string;
        completed: boolean
    }
    const getTodo = async (): Promise<Todo> => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/4');

        const data = await response.json();
        // console.log(data);

    }
    getTodo()

    const createPromise = (): Promise<string> => {
        return new Promise<string>((resolve, reject) => {
            const data: string = "Bangladesh"

            if (data) {
                resolve(data)
            } else {
                reject("Promise rakhte parlam na")
            }




        })
    }


    // calling create Promise function

    const showData = async () => {
        const data: string = await createPromise()
        return data
        // console.log(data);

    }


    showData()




    // Object use case
    type NameObj = {
        name: string
    }
    const createPromise2 = (): Promise<NameObj> => {
        return new Promise<NameObj>((resolve, reject) => {
            const data: NameObj = { name: "bangladesh" }

            if (data) {
                resolve(data)
            } else {
                reject("Promise rakhte parlam na")
            }




        })
    }


    // calling create Promise function

    const showData2 = async () => {
        const data: NameObj = await createPromise2()
        return data
        // console.log(data);

    }


    showData2()




























}