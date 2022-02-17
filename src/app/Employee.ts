export class Employee {


    constructor(
        public name: string,
        public surname: string,
        public privilege: string,
        public login: string,
        public password: string,
        public email: string
    ){
        this.name = name,
        this.surname = surname,
        this.privilege = privilege,
        this.login = login,
        this.password = password,
        this.email = email
    }

}