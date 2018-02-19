let usersData = [
    {
        "name": "John",
        "email": "john@mail.com",
        "password": "112356qwe"
    },
    {
        "name": "Bill",
        "email": "bill@mail.com",
        "password": "1324wqda1"
    },
    {
        "name": "Elis",
        "email": "elis@mail.com",
        "password": "test1245"
    },
    {
        "name": "Ronald",
        "email": "ronald@mail.com",
        "password": "ronaldTheKing"
    },
    {
        "name": "Harry",
        "email": "harry@mail.com",
        "password": "harryThePotter"
    },
    {
        "name": "Jim",
        "email": "jim@mail.com",
        "password": "jimCarry1245"
    },
    {
        "name": "Sten",
        "email": "sten@mail.com",
        "password": "londonIsACapital"
    },
    {
        "name": "Robert",
        "email": "rob@mail.com",
        "password": "robStark"
    },
    {
        "name": "Mia",
        "email": "mia@mail.com",
        "password": "mia1994"
    },
    {
        "name": "Ann",
        "email": "ann@mail.com",
        "password": "ann2018"
    }
];


let app = new Vue({
    el: '#app',
    data: {
        user: {
            name: '',
            password: '',
        },
        rememberMe: ''
    },
    methods: {
        logIn() {
            let userExist = usersData.some((item) => {
                if ((item.name === this.user.name && item.password === this.user.password)
                    || (item.email === this.user.name && item.password === this.user.password)) {
                    return true;
                } else {
                    return false;
                }
            });
            this.showAlert(userExist);
        },
        showAlert(value) {
            if (value) {
                alert(`Welcome ${this.user.name}`);
            } else {
                alert('Access denied');
            }
        }
    }
});