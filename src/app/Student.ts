export class Student {
    /*public constructor(init?: Partial<Student>) {
        Object.assign(this, init);
    }*/



    constructor(
        public name: string,
        public surname: string,
        public login: string,
        public password: string,
        public index: string,
        public email: string
    ){
        this.name = name,
        this.surname = surname,
        this.login = login,
        this.password = password,
        this.index = index,
        this.email = email
    }
    

}