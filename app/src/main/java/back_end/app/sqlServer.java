package back_end.app;

import javax.swing.text.StyledEditorKit;
import java.sql.*;
import java.util.*;

public class sqlServer {
    public Connection connection = null;

    public sqlServer() throws SQLException {
    }


 public void connectToDb(){

     try {
         this.connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/practices","root","root");
         System.out.println("connected to db");
     } catch (SQLException e) {
         System.out.println("error: ");
         e.printStackTrace();
     }
 }
/*
public Student getUsers() throws SQLException {
    Statement stmt= this.connection.createStatement();
    Student student = new Student();

    ResultSet rs=stmt.executeQuery("select * from practices.employee");
    while(rs.next()){
        student.id = rs.getInt(1);
        student.name = rs.getString(2);
        student.surname = rs.getString(3);
        student.privilege = rs.getString(4);
        student.login = rs.getString(5);
        student.password = rs.getString(6);

        System.out.println(rs.getInt(1)+"  "+rs.getString(2)+"  "+rs.getString(3)+"  "+rs.getString(4)+
                "  "+rs.getString(5)+"  "+rs.getString(6));
    }
    connection.close();
    return student;

}
*/
    public String checkTable(String login,String password) throws SQLException {
        Statement stmt= this.connection.createStatement();

        ResultSet rs=stmt.executeQuery("select * from practices.employee e where e.login='"+login+"' and e.password='"+password+"'");
        if(rs.next() == false)
        {
            System.out.println("Brak uzytkownika w tabeli employee");
            rs=stmt.executeQuery("select * from practices.student s where s.login='"+login+"' and s.password='"+password+"'");
            if(rs.next() == false)
            {
                System.out.println("Brak uzytkownika w tabeli student");
                return "none";
            }else
                return "student";

        }else
            return "employee";

    }

    public Student getStudent(String login, String password) throws SQLException {
        Statement stmt= this.connection.createStatement();
        Student student = new Student();

        ResultSet rs=stmt.executeQuery("select * from practices.student s where s.login='"+login+"' and s.password='"+password+"'");
        while(rs.next()){
            student.id = rs.getInt(1);
            student.name = rs.getString(2);
            student.surname = rs.getString(3);
            student.login = rs.getString(4);
            student.password = rs.getString(5);
            student.index = rs.getString(6);
            student.email = rs.getString(7);

            System.out.println(rs.getInt(1)+"  "+rs.getString(2)+"  "+rs.getString(3)+"  "+rs.getString(4)+
                    "  "+rs.getString(5)+"  "+rs.getString(6)+rs.getString(7));
        }
        connection.close();
        return student;

    }

    public Employee getEmployee(String login, String password) throws SQLException {
        Statement stmt= this.connection.createStatement();
        Employee employee = new Employee();

        ResultSet rs=stmt.executeQuery("select * from practices.employee e where e.login='"+login+"' and e.password='"+password+"'");
        while(rs.next()){
            employee.id = rs.getInt(1);
            employee.name = rs.getString(2);
            employee.surname = rs.getString(3);
            employee.privilege = rs.getString(4);
            employee.login = rs.getString(5);
            employee.password = rs.getString(6);
            employee.email = rs.getString(7);


            System.out.println(rs.getInt(1)+"  "+rs.getString(2)+"  "+rs.getString(3)+"  "+rs.getString(4)+
                    "  "+rs.getString(5)+"  "+rs.getString(6)+" "+rs.getString(7));
        }
        connection.close();
        return employee;


    }

    public Student fakeUsr() throws SQLException {
        Statement stmt= this.connection.createStatement();
        Student student = new Student(0,"null","null","null","null","null","null");
        connection.close();
        return student;
    }

    public void addStudent(Student student) throws SQLException {
        Statement stmt= this.connection.createStatement();
        System.out.println(student.getIndex());
        int rs=stmt.executeUpdate("INSERT INTO `practices`.`student` ( `name`, `surname`, `login`, `password`,`index`, `email`)VALUES" +
                " ('"
                +student.name+"','"
                +student.surname+"','"
                +student.login+"','"
                +student.password+"','"
                +student.index+"','"
                +student.email+"')");
        connection.close();


    }

    public int getConsultationId(Consultation consultation) throws SQLException {
        Statement stmt= this.connection.createStatement();
        int id=0;

        ResultSet rs=stmt.executeQuery("select c.idconsultation from practices.consultation c where c.data='"+consultation.date
                +"' and  c.startHour="
                +consultation.hour+" and  c.duration="
                +Double.parseDouble(consultation.duration)+" and c.gap="
                +Integer.parseInt(consultation.gap)+" and  c.room='"
                +consultation.room+"' and  c.employee_idemployee="
                +Integer.parseInt(consultation.idEmployee));


        while(rs.next()){
            id = rs.getInt(1);


            System.out.println("id:"+rs.getInt(1));
        }
        return id;
    }

    public void addEmployee(Employee employee) throws SQLException {
        Statement stmt= this.connection.createStatement();

            int rs=stmt.executeUpdate("INSERT INTO `practices`.`employee` ( `name`, `surname`, `privilege`, `login`, `password`, `email`)VALUES" +
                    " ('"
                    +employee.name+"','"
                    +employee.surname+"','"
                    +employee.privilege+"','"
                    +employee.login+"','"
                    +employee.password+"','"
                    +employee.email+"')");
            System.out.println(rs);



    }

    public void addConsultation(Consultation consultation) throws SQLException {
        String [] separated  = consultation.date.split("/");
        String formatedDate = separated[2]+"-"+separated[1]+"-"+separated[0];
        consultation.setDate(formatedDate);
        double formatedDuration = Double.parseDouble(consultation.duration);
      //  int formatedHour = Integer.parseInt(consultation.hour);
        int formatedGap = Integer.parseInt(consultation.gap);
        int formatedId = Integer.parseInt(consultation.idEmployee);
        System.out.println("INSERT INTO `practices`.`consultation` ( `data`, `startHour`, `duration`, `gap`, `room`, `employee_idemployee`) VALUES (" +
                "'"
                +formatedDate+"',"
                +consultation.hour+","
                +formatedDuration+","
                +formatedGap+",'"
                +consultation.room+"',"
                +formatedId+")");
        Statement stmt= this.connection.createStatement();
        int rs=stmt.executeUpdate("INSERT INTO `practices`.`consultation` ( `data`, `startHour`, `duration`, `gap`, `room`, `employee_idemployee`) VALUES ('" +
                formatedDate+"',"
                +consultation.hour+","
                +formatedDuration+","
                +formatedGap+",'"
                +consultation.room+"',"
                +formatedId+")");
       // int rs=stmt.executeUpdate("INSERT INTO `practices`.`consultation` ( `data`, `startHour`, `duration`, `gap`, `room`, `employee_idemployee`) VALUES ( '02/09/2021',"+13+","+ 2.0+","+ 10+","+ "'s306'"+","+ 13+")");




        addMeetings(consultation);

    }

    public void addMeetings(Consultation consultation) throws SQLException {
        int numberOfMeetings = (int) Math.round(Double.parseDouble(consultation.duration)*60.0/Double.parseDouble(consultation.gap));
        int [] hour;
        int temp;
        int rs;
        int gap = Integer.parseInt(consultation.gap);
        int id= getConsultationId(consultation);
        hour = new int[numberOfMeetings];
        String [] minutes;
        minutes = new String[numberOfMeetings];
        minutes[0]="00";

        hour[0]=consultation.getHour();

        for(int i = 1; i<numberOfMeetings; i++)
        {
            if(Integer.parseInt(minutes[i-1])+gap == 60){
                minutes[i]="00";
                hour[i]=hour[i-1]+1;
            }else
            {
                temp = Integer.parseInt(minutes[i-1])+gap;
                if(temp>0 && temp<10)
                    minutes[i]="0"+temp;
                else
                    minutes[i]=String.valueOf(temp);
                hour[i]=hour[i-1];
            }

        }

        Statement stmt= this.connection.createStatement();
        for(int i=0; i<numberOfMeetings; i++)
        {
            System.out.println("INSERT INTO `practices`.`meeting` ( `hour`, `minutes`, `consultation_idcunsultation`, `student_idstudent`) VALUES (" +
                    hour[i]+",'"
                    +minutes[i]+"',"
                    +id+","
                    +null+")");
            rs=stmt.executeUpdate("INSERT INTO `practices`.`meeting` ( `hour`, `minutes`, `consultation_idconsultation`, `student_idstudent`) VALUES (" +
                    hour[i]+",'"
                    +minutes[i]+"',"
                    +id+","
                    +null+")");

        }
        connection.close();


    }

    public List<Meeting> getMeetings() throws SQLException {
        Statement stmt= this.connection.createStatement();
        ArrayList<Meeting> meet = new ArrayList<>();


        ResultSet rs=stmt.executeQuery("select m.idmeeting,c.data,m.hour,m.minutes,m.student_idstudent,s.name,s.surname,c.employee_idemployee,e.name,e.surname,c.idconsultation from practices.meeting m \n" +
                "inner join practices.consultation c on m.consultation_idconsultation = c.idconsultation \n" +
                "inner join practices.employee e on c.employee_idemployee = e.idemployee\n" +
                "left join practices.student s on m.student_idstudent = s.idstudent\n");
        while(rs.next()){
           // System.out.println(rs.getInt(1));
            meet.add(new Meeting(rs.getInt(1),rs.getString(2),rs.getInt(3)
                    ,rs.getString(4),rs.getInt(5), rs.getString(6),
                    rs.getString(7),rs.getInt(8),rs.getString(9),
                    rs.getString(10),rs.getInt(11)));

        }
        connection.close();

        return meet;
    }

    public List<Meeting> getMeetingsOfEmployee(int employeeId) throws SQLException {
        Statement stmt= this.connection.createStatement();
        ArrayList<Meeting> meet = new ArrayList<>();


        ResultSet rs=stmt.executeQuery("select m.idmeeting,c.data,m.hour,m.minutes,m.student_idstudent,s.name,s.surname,c.employee_idemployee,e.name,e.surname,c.idconsultation from practices.meeting m \n" +
                "inner join practices.consultation c on m.consultation_idconsultation = c.idconsultation \n" +
                "inner join practices.employee e on c.employee_idemployee = e.idemployee\n" +
                "left join practices.student s on m.student_idstudent = s.idstudent\n" +
                "where c.employee_idemployee = "+employeeId);
        while(rs.next()){
            // System.out.println(rs.getInt(1));
            meet.add(new Meeting(rs.getInt(1),rs.getString(2),rs.getInt(3)
                    ,rs.getString(4),rs.getInt(5), rs.getString(6),
                    rs.getString(7),rs.getInt(8),rs.getString(9),
                    rs.getString(10),rs.getInt(11)));

        }
        connection.close();

        return meet;
    }

    public void joinConsultation(int meetingId, int studentId) throws SQLException {
        Statement stmt= this.connection.createStatement();
       // System.out.println(meetingId+"  "+studentId);
        int rs=stmt.executeUpdate("update practices.meeting m set m.student_idstudent ="+studentId+"  where m.idmeeting ="+meetingId);
        connection.close();
        }



    public void cancelJoining(int meetingId) throws SQLException {
        Statement stmt= this.connection.createStatement();
        int rs=stmt.executeUpdate("update practices.meeting m set m.student_idstudent = 0  where m.idmeeting ="+meetingId);
        connection.close();
    }

    public void cancelConsultation(int consultationId) throws SQLException {
        Statement stmt= this.connection.createStatement();
        int rs=stmt.executeUpdate("delete from practices.consultation m where m.idconsultation=  "+consultationId);
        connection.close();
    }

    public List<Employee> getEmployees() throws SQLException {
        Statement stmt= this.connection.createStatement();
        ArrayList<Employee> employeeList = new ArrayList<>();


        ResultSet rs=stmt.executeQuery("select * from practices.employee");
        while(rs.next()){

            employeeList.add(new Employee(rs.getInt(1),rs.getString(2),rs.getString(3)
                    ,rs.getString(4),rs.getString(5), rs.getString(6),
                    rs.getString(7)));
        }
        connection.close();


        return employeeList;
    }

    public List<Student> getStudents() throws SQLException {
        Statement stmt= this.connection.createStatement();
        ArrayList<Student> studentsList = new ArrayList<>();


        ResultSet rs=stmt.executeQuery("select * from practices.student");
        while(rs.next()){

            studentsList.add(new Student(rs.getInt(1),rs.getString(2),rs.getString(3)
                    ,rs.getString(4),rs.getString(5), rs.getString(6),
                    rs.getString(7)));
        }
        connection.close();


        return studentsList;
    }

    public void deleteEmployee(int idEmployee) throws SQLException {
        Statement stmt= this.connection.createStatement();
        int rs=stmt.executeUpdate("delete from practices.employee e where e.idemployee=  "+idEmployee);
        connection.close();
    }

    public void deleteStudent(int idStudent) throws SQLException {
        Statement stmt= this.connection.createStatement();
        int rs=stmt.executeUpdate("delete from practices.student s where s.idStudent=  "+idStudent);
        connection.close();
    }

    public void editEmployee(Employee employee) throws SQLException {
        Statement stmt= this.connection.createStatement();
        int rs=stmt.executeUpdate(" UPDATE `practices`.`employee`" +
                " SET " +
                "`name` = '"+employee.name +
                "',`surname` = '"+employee.surname +
                "',`privilege` = '"+employee.privilege +
                "',`login` = '"+employee.login +
                "',`password` ='"+employee.password +
                "',`email` = '"+employee.email +
                "' WHERE `idemployee` ="+employee.id);
        connection.close();
    }

    public void editStudent(Student student) throws SQLException {
        Statement stmt= this.connection.createStatement();
        int rs=stmt.executeUpdate(" UPDATE `practices`.`student`" +
                " SET " +
                "`name` = '"+student.name +
                "',`surname` = '"+student.surname +
                "',`login` = '"+student.login +
                "',`password` ='"+student.password +
                "',`index` ='"+student.index +
                "',`email` = '"+student.email +
                "' WHERE `idStudent` ="+student.id);
        connection.close();
    }



}
