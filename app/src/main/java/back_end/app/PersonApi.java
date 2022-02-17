package back_end.app;

import org.springframework.web.bind.annotation.*;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/students")
public class PersonApi {

    private List<Student> students;
    private List<Student> student;

    public PersonApi() throws SQLException {
        sqlServer conn = new sqlServer();
        conn.connectToDb();
        students = new ArrayList<>();


    }

    @GetMapping
    public Student getById(@RequestParam int index) {
        Optional<Student> first = students.stream().filter(element -> element.getId() == index).findFirst();
        return first.get();
    }

    @GetMapping("/all")
    public List<Student> getAll() {
        return students;
    }

    @GetMapping("/login")
    public Object check(@RequestParam String login, @RequestParam String password) throws SQLException {
        System.out.println(login + " " + password);
        sqlServer conn = new sqlServer();
        conn.connectToDb();
        String table = conn.checkTable(login, password);
        if (table.equals("employee")) {
            return conn.getEmployee(login, password);
        } else if (table.equals("student")) {
            return conn.getStudent(login, password);
        } else
            return conn.fakeUsr();


    }


    @PostMapping("/saveStudent")
    public String StudentForm(@RequestBody Student student) throws SQLException {
        sqlServer conn = new sqlServer();
        conn.connectToDb();
        conn.addStudent(student);

        return student.getLogin() + " został dodany!";
    }

    @PostMapping("/saveEmployee")
    public String EmployeeForm(@RequestBody Employee employee) throws SQLException {
        sqlServer conn = new sqlServer();
        conn.connectToDb();
        conn.addEmployee(employee);
        return employee.getLogin() + " został dodany!";
    }

    @PostMapping("/saveConsultation")
    public String ConsultationForm(@RequestBody Consultation consultation) throws SQLException {
        sqlServer conn = new sqlServer();
        conn.connectToDb();
        System.out.println(consultation.date + " " + consultation.hour + " " + consultation.gap + " " + consultation.duration + " " + consultation.room + " " + consultation.idEmployee + " ");
        conn.addConsultation(consultation);
        //  return employee.getLogin()+" został dodany!";
        return "dodano konsultacje";
    }

    @GetMapping("/getMeetings")
    public List<Meeting> getMeetings() throws SQLException {
        sqlServer conn = new sqlServer();
        conn.connectToDb();
        return conn.getMeetings();
    }

    @GetMapping("/getMeetingsOfEmployee")
    public List<Meeting> getMeetingsOfEmployee(@RequestParam int employeeId) throws SQLException {
        sqlServer conn = new sqlServer();
        conn.connectToDb();
        return conn.getMeetingsOfEmployee(employeeId);
    }

    @GetMapping("/joinConsultation")
    public String[] joinConsultation(@RequestParam int meetingId, @RequestParam int studentId) throws SQLException {
        sqlServer conn = new sqlServer();
        System.out.println(meetingId + " " + studentId);
        conn.connectToDb();
        conn.joinConsultation(meetingId, studentId);
        return new String[]{"Dołączono pomyślnie"};
    }


    @GetMapping("/cancelJoining")
    public String[] cancelJoining(@RequestParam int meetingId) throws SQLException {
        sqlServer conn = new sqlServer();
        System.out.println(meetingId);
        conn.connectToDb();
        conn.cancelJoining(meetingId);
        return new String[]{"Anulowano dołączenie"};
    }

    @GetMapping("/cancelConsultation")
    public String[] cancelConsultation(@RequestParam int consultationId) throws SQLException {
        sqlServer conn = new sqlServer();
       // System.out.println(meetingId);
        conn.connectToDb();
        conn.cancelConsultation(consultationId);
        return new String[]{"Anulowano konsultacje"};
    }

    @GetMapping("/getEmployees")
    public List<Employee> getEmployees() throws SQLException {
        sqlServer conn = new sqlServer();
        conn.connectToDb();
        return conn.getEmployees();
    }

    @GetMapping("/getStudents")
    public List<Student> getStudents() throws SQLException {
        sqlServer conn = new sqlServer();
        conn.connectToDb();
        return conn.getStudents();
    }

    @GetMapping("/deleteEmployee")
    public String[] deleteEmployee(@RequestParam int idEmployee) throws SQLException {
        sqlServer conn = new sqlServer();
        conn.connectToDb();
        conn.deleteEmployee(idEmployee);
        return new String[]{"usunięto pracownika o id: "+idEmployee};
    }

    @GetMapping("/deleteStudent")
    public String[] deleteStudent(@RequestParam int idStudent) throws SQLException {
        sqlServer conn = new sqlServer();
        conn.connectToDb();
        conn.deleteStudent(idStudent);
        return new String[]{"usunięto studenta o id: "+idStudent};
    }

    @PostMapping("/editEmployee")
    public String EditEmployee(@RequestParam int idEmployee,@RequestBody Employee employee) throws SQLException {
        sqlServer conn = new sqlServer();
        employee.setId(idEmployee);

        conn.connectToDb();
        conn.editEmployee(employee);
        return "Pracownik został zapisany!";

    }

    @PostMapping("/editStudent")
    public String EditStudent(@RequestParam int idStudent,@RequestBody Student student) throws SQLException {
        sqlServer conn = new sqlServer();
        student.setId(idStudent);
        conn.connectToDb();
        conn.editStudent(student);
        return "Pracownik został zapisany!";

    }


}










