//Promise
//A

function helloWorld() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello World!");
        }, 2000);
    });
}

helloWorld().then((message) => {
    console.log(message);
});

//B

function helloWorld() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello World!");
        }, 2000);
    });
}

async function messages() {
    const msg = await helloWorld();
    console.log(msg);
}

messages();

//C

function helloWorld() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello World!");
        }, 2000);
    });
}

async function messages() {
    const msg = await helloWorld();
    console.log(msg);
}

messages();


//2 Fetch
//A 

async function ambilDataUser() {
    try {

        const response = await fetch('https://jsonplaceholder.typicode.com/users'); 
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error mengambil data user:", error);
    }
}

ambilDataUser();

//B

async function ambilDataUser() {
    try {
        const response = await fetch('https://reqres.in/api/users'); 
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error mengambil data user:", error);
    }
}

ambilDataUser();

//C

function ambilDataUser() {
    fetch('https://reqres.in/api/users')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.error("Error mengambil data user:", error);
        });
}

ambilDataUser();

//D

function ambilDataUser() {
    fetch('https://reqres.in/api/users')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);

            return data.data;
        })
        .then((users) => {
            users.forEach(user => {
                console.log(`First Name: ${user.first_name}, Last Name: ${user.last_name}`);
            });
        })
        .catch((error) => {
            console.error("Error mengambil data user:", error);
        });
}

ambilDataUser();


//E

function ambilDataUser() {
    fetch('https://reqres.in/api/users')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);

            return data.data;
        })
        .then((users) => {
            users.forEach(user => {
                console.log(`First Name: ${user.first_name}, Last Name: ${user.last_name}`);
            });
        })
        .catch((error) => {
            console.error("Error mengambil data user:", error);
        });
}

ambilDataUser();


//3 Async Await

async function ambilDataUser() {
    try {
        const response = await fetch('https://reqres.in/api/users');
        const data = await response.json();

        console.log(data);

        data.data.forEach(user => {
            console.log(`First Name: ${user.first_name}, Last Name: ${user.last_name}`);
        });
    } catch (error) {
        console.error("Error mengambil data user:", error);
    }
}

ambilDataUser();

//4 Axios

async function ambilDataUser() {
    try {
        const response = await axios.get('https://reqres.in/api/users');

        console.log(response.data);
        response.data.data.forEach(user => {
            console.log(`First Name: ${user.first_name}, Last Name: ${user.last_name}`);
        });
    } catch (error) {
        console.error("Error mengambil data user:", error);
    }
}

ambilDataUser();
