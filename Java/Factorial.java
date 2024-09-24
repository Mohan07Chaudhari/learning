public class Factorial {

    private static int factorial(int input) {
        if (input == 0) {
            return 1;
        } else {
            return input * factorial(input-1);
        }
    }

    public static void main(String args[]) {
        int x = 3;
        System.out.println("Factorial of " + x + " is: " + factorial(x));
    }
}