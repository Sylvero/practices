package back_end.app;

public class Employee {
    int id;
    String name;
    String surname;
    String privilege;
    String login;
    String password;
    String email;

    public Employee(String name, String surname, String privilege, String login, String password, String email) {
        this.name = name;
        this.surname = surname;
        this.privilege = privilege;
        this.login = login;
        this.password = password;
        this.email = email;
    }



    public Employee() {
    }

    public Employee(int id, String name, String surname, String privilege, String login, String password, String email) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.privilege = privilege;
        this.login = login;
        this.password = password;
        this.email = email;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getPrivilege() {
        return privilege;
    }

    public void setPrivilege(String privilege) {
        this.privilege = privilege;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
