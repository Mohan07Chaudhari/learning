public class Palindrome {
    
    private boolean isPalindrome(String input) {

        int start = 0;
        int end = input.length() - 1;

        while (start < end) {
            if(input.charAt(start) == input.charAt(end)) {
                start++;
                end--;
            } else {
                return false;
            }
        }

        return true;
    }

    public static void main(String[] args) {
        Palindrome pl = new Palindrome();

        String input1 = "abc";
        boolean isPalindrome1 = pl.isPalindrome(input1);
        System.out.println("Result of " + input1 + " : " + isPalindrome1);

        String input2 = "racecar";
        boolean isPalindrome2 = pl.isPalindrome(input2);
        System.out.println("Result of " + input2 + " : " + isPalindrome2);
    }

}
