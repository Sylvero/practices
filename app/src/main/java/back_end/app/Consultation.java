package back_end.app;

public class Consultation {
    String date;
    int hour;
    String gap;
    String duration;
    String room;
    String idEmployee;

    public Consultation() {
    }

    public Consultation(String date, int hour, String gap, String duration, String room, String idEmployee) {
        this.date = date;
        this.hour = hour;
        this.gap = gap;
        this.duration = duration;
        this.room = room;
        this.idEmployee = idEmployee;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public int getHour() {
        return hour;
    }

    public void setHour(int hour) {
        this.hour = hour;
    }

    public String getGap() {
        return gap;
    }

    public void setGap(String gap) {
        this.gap = gap;
    }

    public String getDuration() {
        return duration;
    }

    public void setDuration(String duration) {
        this.duration = duration;
    }

    public String getRoom() {
        return room;
    }

    public void setRoom(String room) {
        this.room = room;
    }

    public String getIdEmployee() {
        return idEmployee;
    }

    public void setIdEmployee(String idEmployee) {
        this.idEmployee = idEmployee;
    }
}

