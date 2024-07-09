package BinarySearch_problems;

/*
 You have ‘n’(n <= 10"5) boxes of chocolate. Each box contains a[i] (a[i] <= 10000) chocolates. You need to distribute these boxes among ‘m’ students such
that the maximum number of chocolates allocated to a student is minimum.

      a) One box will be allocated to exactly one student.

      b) All the boxes should be allocated.

      ¢) Each student has to be allocated at least one box.

      d) Allotment should be in contiguous order, for instance, a student cannot be allocated box 1 and box 3, skipping box 2.

Calculate and return that minimum possible number.
Assume that it is always possible to distribute the chocolates.

The first line of input will contain the value of n, the number of boxes.

The second line of input will contain the n numbers denoting the number of chocolates in each box.
The third line will contain the m, number of students.

Input

4

1234 67 90

2

Output

113
 */

 

 class Main {

    static boolean Divisible(int [] arr , int noOfStudents , int maxChocolates){
        int currentStudents = 1 , currentChocolates=0;
        
        for(int i = 0 ; i < arr.length ; i++){
            if(arr[i] > maxChocolates){
                return false;
            }
            

             if (currentChocolates + arr[i] > maxChocolates) {
                // Allocate chocolates to the next student
                currentStudents++;
                currentChocolates = arr[i];
                if (currentStudents > noOfStudents) {
                    return false;
                }
            } else {
                currentChocolates += arr[i];
            }
        }

        return true;
        
    }
     
     static int MinValue(int [] arr , int noOfStudents){
            int start = 0, end = 0, ans = -1;
        for (int chocolates : arr) {
            end += chocolates;
        }
         while(start <= end){
             int mid = start + (end - start)/2;
             if(Divisible(arr , noOfStudents , mid)){
                 ans = mid;
                 end = mid -1;
                  System.out.println("end"+end);
                  System.out.println("ans"+ans);
             }else{
                 start = mid + 1;
             }
         }
         return ans;
     }
  
    public static void main(String[] args) {
       int[]arr={5, 3 , 1 , 4, 2};
        int m = 3;
        System.out.println(MinValue(arr,m));

    }
}
