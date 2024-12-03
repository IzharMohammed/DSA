import java.util.*;

public class Main {
    public static void main(String[] args) {

  int[] arr = new int[]{1,1,1,1,1,1,1,1,1,2,2,2,2,2,3,3,3,3,4,4,5,5,5,6,6,7,};
  Map<Integer,Integer> freqMap = new HashMap<>();
  
  for(int elem: arr){
    /* Method - 1 */
    // if(freqMap.containsKey(elem)){
    //   freqMap.put(elem,freqMap.get(elem)+1);
    // }else{
    //   freqMap.put(elem,1);
    // }
    
    /* Method -2  */
    freqMap.put(elem, freqMap.getOrDefault(elem,0)+1);
  }
  
  int maxNo = 0;
  int maxFreq=-1;
  Set<Map.Entry<Integer,Integer>> set = freqMap.entrySet();
  for(Map.Entry<Integer,Integer> entry: set){
    if(entry.getValue() > maxFreq){
      maxFreq= entry.getValue();
      maxNo= entry.getKey();
    }
  }

System.out.println("Max no "+ maxNo + " Max freq "+ maxFreq);

        // Map<String, Integer> map = new HashMap<String, Integer>();
        // map.put("izhar", 6);
        // map.put("random", 7);
        // map.put("java", 8);

        // // Itegrate the map one by one
        // Set<Map.Entry<String, Integer>> set = map.entrySet();
        // for (Map.Entry<String, Integer> entry : set) {
        //     System.out.println(entry.getKey() + "  " + entry.getValue());
        // }

  }
}