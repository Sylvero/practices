package back_end.app;

import back_end.app.AppApplication;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/students")
public class PersonApi {
    private List<AppApplication> students;
    public PersonApi(){
        students = new ArrayList<>();
        students.add(new AppApplication(1,"Jan","Kowalski"));
        students.add(new AppApplication(2,"Zbigniew","Zarzycki"));
    }

    @GetMapping
    public AppApplication getById(@RequestParam int index){
        Optional<AppApplication> first = students.stream().filter(element -> element.getId() == index).findFirst();
                return first.get();
    }

    @GetMapping("/all")
    public List<AppApplication> getAll(){
        return students;
    }





}
