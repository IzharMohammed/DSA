package Sorting;

class insertion
{  
  static void insert(int arr[],int i)
  {
      int elem = arr[i];
      arr[i]=arr[i-1];
      arr[i-1]=elem;
  }
  
  //Function to sort the array using insertion sort algorithm.
  public void insertionSort(int arr[], int n)
  {
     for(int i=1 ; i < arr.length ; i++){
         for(int j = i ; j>0 && arr[j]<arr[j-1] ; j--){
             insert(arr,j);
         }
     }
  }
}