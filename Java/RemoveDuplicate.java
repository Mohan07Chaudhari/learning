public class RemoveDuplicate {
    public static int[] removeDuplicates(int[] nums) {
        int i = 0;
        int j = 0;
        int k = i+1;
        int[] result = new int[nums.length];

        while (i < nums.length) {
            result[j] = nums[i];
            j++;

            while ((k < nums.length) && (nums[k] == nums[i])) {
                k++;
            }

            i = k;
        }

        return result;
    }


    public static void main(String[] args) {
        int[] input = {1,1,2};
        int[] result = removeDuplicates(input);

        for (int i=0; i<result.length; i++) {
            System.out.println(result[i] + " ");
        }
    }
}
