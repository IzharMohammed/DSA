package Sorting;

class Solution
{
    
    static void swapArray(int[]arr,int j){
        int elem = arr[j];
        arr[j]=arr[j+1];
        arr[j+1]= elem;
    }
    
    //Function to sort the array using bubble sort algorithm.
	public static void bubbleSort(int arr[], int n)
    {
        
        for(int i =0 ; i < arr.length; i++){
            boolean swap=false;
            for(int j=0 ; j<arr.length-i-1 ; j++){
                if(arr[j]> arr[j+1]){
                    swapArray(arr,j);
                    swap=true;
                }
            }
            if(!swap){
               return;
            }
        }
        
    }
}
