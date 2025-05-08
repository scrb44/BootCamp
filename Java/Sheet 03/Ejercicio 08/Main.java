public class Main {
    public static double divide(int a, int b) {
        if (b == 0)
            throw new ArithmeticException("Error: División por cero");

        return a / b;
    }

    public static void main(String[] args) {
        try {
            System.out.println(divide(10, 5));
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }

        try {
            System.out.println(divide(10, 0));
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }
}