import java.text.SimpleDateFormat;
import java.util.Date;

public class DateExample {
    public static void main(String[] args) {
        SimpleDateFormat f1 = new SimpleDateFormat("dd/MM/yyyy");
        SimpleDateFormat f2 = new SimpleDateFormat("MM/dd/yyyy");
        SimpleDateFormat f3 = new SimpleDateFormat("EEEE dd 'de' MMMM 'del' yyyy");
        SimpleDateFormat f4 = new SimpleDateFormat("G dd/MM/yyyy");

        System.out.println(f1.format(new Date()));
        System.out.println(f2.format(new Date()));
        System.out.println(f3.format(new Date()));
        System.out.println(f4.format(new Date()));
    }
}