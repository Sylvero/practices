export class  Consultation{


    constructor(
        public date: string,
        public hour: string,
        public gap: string,
        public duration: string,
        public room: string,
        public idEmployee: string
    ){
        this.date = date,
        this.hour = hour,
        this.gap=gap,
        this.duration = duration,
        this.room = room,
        this.idEmployee = idEmployee
    }

}