/**
 * LeetCode Problem 55: Jump Game
 * Problem Link: https://leetcode.com/problems/jump-game/
 * 
 * PROBLEM DESCRIPTION:
 * Given an integer array nums, you start at the first index. Each element represents
 * your maximum jump length at that position. Return true if you can reach the last index.
 * 
 * THEORY & CONCEPTS:
 * 
 * 1. GREEDY ALGORITHM APPROACH:
 *    - A greedy algorithm makes the locally optimal choice at each step
 *    - Hopes that this leads to a globally optimal solution
 *    - For this problem: work backwards to find the "leftmost good position"
 *    - Key insight: if we can reach position i from position j, and i can reach
 *      the end, then j can also reach the end
 * 
 * 2. WHAT IS GREEDY ALGORITHM?
 *    Definition: An algorithmic paradigm that follows the problem-solving heuristic
 *    of making the locally optimal choice at each stage.
 *    
 *    Characteristics:
 *    - Makes choices that seem best at the moment
 *    - Never reconsiders previous choices
 *    - Doesn't guarantee optimal solution for all problems
 *    - Works when local optimum leads to global optimum
 * 
 * 3. REAL-WORLD APPLICATIONS OF GREEDY ALGORITHMS:
 *    
 *    Financial & Economics:
 *    - Currency exchange (choosing best exchange rates)
 *    - Stock trading (buy low, sell high decisions)
 *    - Resource allocation in budgeting
 *    
 *    Computer Science:
 *    - Huffman coding (data compression)
 *    - Dijkstra's shortest path algorithm
 *    - Minimum spanning tree (Kruskal's, Prim's)
 *    - Activity selection (scheduling problems)
 *    
 *    Operations Research:
 *    - Job scheduling to minimize completion time
 *    - Fractional knapsack problem
 *    - Load balancing in distributed systems
 *    
 *    Daily Life Examples:
 *    - GPS navigation (choosing immediate best route)
 *    - Vending machine change-making
 *    - Task prioritization (doing most urgent first)
 *    - Shopping (buying cheapest items first with limited budget)
 * 
 * 4. INTERVIEW CLUES FOR GREEDY APPROACH:
 *    
 *    Problem Characteristics:
 *    ✓ "Minimum/Maximum" optimization problems
 *    ✓ "Earliest/Latest" scheduling problems  
 *    ✓ Problems where local optimum seems to lead to global optimum
 *    ✓ "Can you reach/achieve X?" feasibility problems
 *    ✓ Interval scheduling problems
 *    ✓ Problems involving sorting + making choices
 *    
 *    Keywords to Look For:
 *    - "minimum number of..."
 *    - "maximum profit/value..."
 *    - "earliest deadline..."
 *    - "can you reach..."
 *    - "optimal strategy..."
 *    
 *    Red Flags (Greedy Won't Work):
 *    ✗ Need to consider all possible combinations
 *    ✗ Future choices depend heavily on past decisions
 *    ✗ Problem asks for "number of ways" to do something
 *    ✗ Optimal substructure requires considering multiple options
 * 
 * 5. WHY GREEDY WORKS FOR JUMP GAME:
 *    - If we can reach the end from position i, and we can reach i from j,
 *      then we can reach the end from j
 *    - Working backwards, we find the leftmost position that can reach the end
 *    - This leftmost position gives us the "greedy choice"
 *    - We don't need to explore multiple paths - one good path is enough
 * 
 * ALGORITHM WALKTHROUGH:
 * Example 1: nums = [2,3,1,1,4]
 * 
 * Initial: fPosition = 4 (last index)
 * 
 * Step 1: idx = 3, nums[3] = 1
 *         Can idx=3 reach fPosition=4? 3 + 1 = 4 >= 4 ✓
 *         Update: fPosition = 3
 * 
 * Step 2: idx = 2, nums[2] = 1  
 *         Can idx=2 reach fPosition=3? 2 + 1 = 3 >= 3 ✓
 *         Update: fPosition = 2
 * 
 * Step 3: idx = 1, nums[1] = 3
 *         Can idx=1 reach fPosition=2? 1 + 3 = 4 >= 2 ✓  
 *         Update: fPosition = 1
 * 
 * Step 4: idx = 0, nums[0] = 2
 *         Can idx=0 reach fPosition=1? 0 + 2 = 2 >= 1 ✓
 *         Update: fPosition = 0
 * 
 * Result: fPosition = 0, return true
 * 
 * Example 2: nums = [3,2,1,0,4]
 * 
 * Initial: fPosition = 4 (last index)
 * 
 * Step 1: idx = 3, nums[3] = 0
 *         Can idx=3 reach fPosition=4? 3 + 0 = 3 >= 4 ✗
 *         fPosition remains 4
 * 
 * Step 2: idx = 2, nums[2] = 1
 *         Can idx=2 reach fPosition=4? 2 + 1 = 3 >= 4 ✗
 *         fPosition remains 4
 * 
 * Step 3: idx = 1, nums[1] = 2  
 *         Can idx=1 reach fPosition=4? 1 + 2 = 3 >= 4 ✗
 *         fPosition remains 4
 * 
 * Step 4: idx = 0, nums[0] = 3
 *         Can idx=0 reach fPosition=4? 0 + 3 = 3 >= 4 ✗
 *         fPosition remains 4
 * 
 * Result: fPosition = 4 ≠ 0, return false
 */

function canJump(nums: number[]): boolean {
    // GREEDY APPROACH: Work backwards to find leftmost "good" position
    // fPosition represents the leftmost index from which we can reach the end
    // Initially, only the last position can reach itself
    let fPosition = nums.length - 1;

    // BACKWARD ITERATION: Check each position from right to left
    // We iterate backwards because we want to find the leftmost reachable position
    // This embodies the greedy choice: always update to the leftmost good position
    for (let idx = nums.length - 2; idx >= 0; idx--) {
        
        // REACHABILITY CHECK: Can current position reach our target position?
        // idx + nums[idx] gives us the farthest we can jump from position idx
        // If this reaches or exceeds fPosition, then idx is a "good" position
        if (idx + nums[idx] >= fPosition) {
            
            // GREEDY CHOICE: Update target to current position
            // This is the key greedy decision: if idx can reach fPosition,
            // then reaching idx is sufficient to reach the end
            // We greedily choose the leftmost such position
            fPosition = idx;
        }
        
        // If current position cannot reach fPosition, we skip it
        // This represents the greedy rejection of suboptimal choices
    }

    // FINAL VALIDATION: Can we reach the target from the starting position?
    // fPosition = 0 means we found a path from start (index 0) to end
    // fPosition > 0 means there's a gap we cannot bridge from the start
    return fPosition === 0;
}

/**
 * TIME COMPLEXITY: O(n)
 * - n = length of nums array
 * - Single pass through the array from right to left
 * - Each iteration performs constant time operations
 * - No nested loops or recursive calls
 * 
 * SPACE COMPLEXITY: O(1)
 * - Only using a single variable (fPosition) for tracking
 * - No additional data structures that scale with input size
 * - Constant extra space regardless of input size
 * 
 * WHY THIS IS OPTIMAL:
 * - We must examine each element at least once to determine reachability: Ω(n)
 * - We examine each element exactly once: O(n)
 * - Therefore optimal time complexity: Θ(n)
 * - Space usage is minimal and cannot be improved
 * 
 * GREEDY ALGORITHM PROOF OF CORRECTNESS:
 * 
 * Claim: The leftmost position that can reach the end is sufficient
 * 
 * Proof by contradiction:
 * - Suppose there exists a valid path that doesn't go through the leftmost good position
 * - This path must start from index 0 and reach some position j > leftmost good position
 * - Since j can reach the end, and leftmost good position is the LEFTMOST that can reach end,
 * - This contradicts our definition of "leftmost good position"
 * - Therefore, reaching the leftmost good position is necessary and sufficient
 * 
 * ALTERNATIVE APPROACHES COMPARISON:
 * 
 * 1. Dynamic Programming: O(n²) time, O(n) space
 *    - For each position, check all reachable positions
 *    - More intuitive but less efficient
 * 
 * 2. BFS/DFS: O(n²) time, O(n) space  
 *    - Explore all possible paths
 *    - Overkill for this problem
 * 
 * 3. Greedy (Forward): O(n) time, O(1) space
 *    - Track maximum reachable position while moving forward
 *    - Equivalent efficiency, different implementation
 * 
 * 4. Greedy (Backward - This Solution): O(n) time, O(1) space
 *    - Work backwards to find leftmost good position
 *    - Clean and intuitive implementation
 * 
 * EXAMPLES:
 * 1. nums = [2,3,1,1,4] → true (can reach end)
 * 2. nums = [3,2,1,0,4] → false (stuck at index 3)
 * 3. nums = [0] → true (already at end)
 * 4. nums = [1,0,1] → false (can't pass index 1)
 * 5. nums = [1,1,1,1] → true (can reach end step by step)
 * 
 * INTERVIEW TIPS FOR GREEDY PROBLEMS:
 * 1. Look for "optimal substructure" properties
 * 2. Check if local optimum leads to global optimum
 * 3. Consider both forward and backward approaches
 * 4. Verify your greedy choice with small examples
 * 5. Prove correctness before implementing
 * 6. Consider edge cases where greedy might fail
 */