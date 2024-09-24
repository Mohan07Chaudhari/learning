public class Fibonacci {
    
    private int getFibonacci(int input) {
        if (input == 0) {
            return 0;
        }

        if (input == 1) {
            return 1;
        }

        return getFibonacci(input-1) + getFibonacci(input-2);
    }

    public static void main(String[] args) {
        Fibonacci fb = new Fibonacci();
        int n = 10;

        for (int i=0; i<n; i++) {
            System.out.print(fb.getFibonacci(i) + " ");
        }
        
    }

}
