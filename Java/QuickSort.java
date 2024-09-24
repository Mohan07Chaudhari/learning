public class QuickSort {
    
    int[] input = {10,3,1,4,2,7,6,8,9,5};
    //int[] input1 = new int[10];


    private void merge(int start, int mid, int end) {

    }

    private void swap(int start, int end) {
        int temp = input[start];
        input[start] = input[end];
        input[end] = temp;
    }
    private int getPartitionPosition(int start, int end, int pivot) {
        int leftPointer = start;
        int rightPointer = end;
        
        while (true) {

            while (input[leftPointer] < pivot) {
                leftPointer++; 
            }

            while (input[rightPointer] > pivot) {
                rightPointer--;
            }

            if (leftPointer >= rightPointer) {
                break;
             } else {
                swap(leftPointer, rightPointer);
             }
        }

        //swap(leftPointer, end);
        return leftPointer;
    }

    private void mergeSort(int start, int end) {
        if (start < end) {
            int mid = (start + end) / 2;
            mergeSort(start, mid);
            mergeSort(mid + 1, end);
            merge(start, mid, end);
        } else {
            return; 
        }

    }

    private void printArray() {
        for (int i=0; i<input.length; i++) {
            System.out.print(input[i] + " ");
        }

        System.out.println();
    }

    private void quickSort(int start, int end) {
        if (start < end) {
            int pivot = input[end];
            int partitionPosition = getPartitionPosition(start, end, pivot);

            quickSort(start, partitionPosition - 1);
            quickSort(partitionPosition + 1, end);

        } else {
            return;
        }
    }

    public static void main(String[] args) {
        QuickSort qc = new QuickSort();

        qc.printArray();
        qc.quickSort(0, qc.input.length - 1);
        qc.printArray();

        // QuickSort ms = new QuickSort();
        // ms.mergeSort(0, qc.input.length);
    }


}
