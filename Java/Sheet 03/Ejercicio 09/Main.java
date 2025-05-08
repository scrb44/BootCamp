import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Main {
    public static void main(String[] args) {
        String regex = "^(.+)@(\\S+)$";
        String s1 = "test@example.com";
        String s2 = "adiasfd.com";

        Pattern p = Pattern.compile(regex);
        Matcher m1 = p.matcher(s1);
        Matcher m2 = p.matcher(s2);

        if (m1.find()) {
            System.out.println(s1 + " es un mail.");
        } else {
            System.out.println(s1 + " no es un mail.");
        }

        if (m2.find()) {
            System.out.println(s2 + " es un mail.");
        } else {
            System.out.println(s2 + " no es un mail.");
        }
    }
}