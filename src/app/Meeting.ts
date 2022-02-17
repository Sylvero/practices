export class Meeting {


    constructor(
        public idMeeting: number,
        public date: string,
        public hour: number,
        public minutes: string,
        public studentId: number,
        public studentName: string,
        public studentSurname: string,
        public employeeId: number,
        public employeeName: string,
        public employeeSurname: string,
        public consultationId: number
    ){
        this.idMeeting = idMeeting,
        this.date= date,
        this.hour = hour,
        this.minutes = minutes,
        this.studentId = studentId,
        this.studentName = studentName,
        this.studentSurname = studentSurname,
        this.employeeId = employeeId,
        this.employeeName = employeeName,
        this.employeeSurname = employeeSurname,
        this.consultationId = consultationId
        
    }

}
    