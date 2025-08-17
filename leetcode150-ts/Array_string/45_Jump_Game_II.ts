/**
 * ============================================================================
 * LEETCODE 45: JUMP GAME II - COMPLETE ANALYSIS & SOLUTIONS
 * ============================================================================
 * 
 * Problem: Find minimum number of jumps to reach the last index
 * Link: https://leetcode.com/problems/jump-game-ii/
 * 
 * Key Insights:
 * - We're guaranteed to reach the end (given in problem)
 * - Need to find MINIMUM jumps (optimization problem)
 * - Each position tells us maximum jump distance, not exact distance
 * 
 * ============================================================================
 */

/**
 * ============================================================================
 * GREEDY APPROACH - OPTIMAL SOLUTION
 * ============================================================================
 * 
 * GREEDY STRATEGY EXPLANATION:
 * 
 * Think of this like planning a road trip with gas stations:
 * - You want to minimize stops (jumps)
 * - At each stop, you look ahead and choose the station that gets you furthest
 * - You don't actually stop until you HAVE to (when current fuel runs out)
 * 
 * Algorithm Logic:
 * 1. Track current "reachable range" with current jumps
 * 2. While exploring this range, keep extending future reachable range
 * 3. When we exhaust current range, we MUST make another jump
 * 4. Update our range to the furthest we discovered
 * 
 * Visual Example: nums = [2,3,1,1,4]
 * Index:  0  1  2  3  4
 * Value:  2  3  1  1  4
 * 
 * Jump 0: At index 0, can reach indices 1,2 (coverage = 2)
 * - Explore range [1,2]: from 1 can reach 4, from 2 can reach 3
 * - Best coverage becomes 4
 * 
 * Jump 1: Must jump now (reached end of current range)
 * - New range becomes [3,4], can reach index 4 (destination)
 * 
 * Total: 2 jumps
 */

function jumpGreedy(nums: number[]): number {
    let totalJumps = 0;           // Count of jumps made
    const destination = nums.length - 1;  // Target index
    let coverage = 0;             // Furthest index reachable with current jumps
    let lastJumpIdx = 0;          // Boundary of current jump range

    // Base case: already at destination
    if (nums.length === 1) return 0;

    // Greedy strategy: extend coverage as much as possible before jumping
    for (let i = 0; i < nums.length; i++) {
        // Update coverage: furthest we can reach from current position
        coverage = Math.max(coverage, i + nums[i]);

        // When we've explored all positions reachable with current jumps
        if (i === lastJumpIdx) {
            // We MUST make another jump now
            lastJumpIdx = coverage;  // Update boundary to furthest reachable
            totalJumps++;           // Increment jump count

            // Early termination: if we can reach destination
            if (coverage >= destination) {
                return totalJumps;
            }
        }
    }

    return totalJumps;
}

/**
 * ============================================================================
 * RECURSIVE APPROACH WITH MEMOIZATION - EDUCATIONAL SOLUTION
 * ============================================================================
 * 
 * This approach explores all possible paths and finds the minimum.
 * Uses top-down dynamic programming with memoization to avoid recomputation.
 * 
 * Logic:
 * 1. From current position, try all possible jumps
 * 2. For each jump, recursively find minimum jumps from new position
 * 3. Return 1 + minimum of all recursive results
 * 4. Use memoization to cache results for each position
 */

function jumpRecursive(nums: number[]): number {
    const memo = new Map<number, number>(); // Memoization cache

    function minJumpsFrom(index: number): number {
        // Base case: reached or passed destination
        if (index >= nums.length - 1) return 0;

        // Check if already computed
        if (memo.has(index)) return memo.get(index)!;

        let minJumps = Infinity;
        const maxJump = nums[index];

        // Try all possible jumps from current position
        for (let jump = 1; jump <= maxJump; jump++) {
            const nextIndex = index + jump;

            // Ensure we don't go out of bounds
            if (nextIndex < nums.length) {
                const jumpsFromNext = minJumpsFrom(nextIndex);
                minJumps = Math.min(minJumps, 1 + jumpsFromNext);
            }
        }

        // Cache and return result
        memo.set(index, minJumps);
        return minJumps;
    }

    return minJumpsFrom(0);
}

/**
 * ============================================================================
 * DYNAMIC PROGRAMMING APPROACH - BOTTOM-UP SOLUTION
 * ============================================================================
 * 
 * Build solution from destination backwards to starting position.
 * More intuitive than recursive but less efficient than greedy.
 */

function jumpDP(nums: number[]): number {
    const n = nums.length;
    const dp = new Array(n).fill(Infinity); // dp[i] = min jumps to reach end from i
    dp[n - 1] = 0; // Base case: already at destination

    // Work backwards from second-to-last position
    for (let i = n - 2; i >= 0; i--) {
        const maxJump = nums[i];

        // Try all possible jumps from current position
        for (let jump = 1; jump <= maxJump; jump++) {
            const nextIndex = i + jump;

            // Ensure we don't go out of bounds
            if (nextIndex < n) {
                dp[i] = Math.min(dp[i], 1 + dp[nextIndex]);
            }
        }
    }

    return dp[0]; // Return minimum jumps from start
}

/**
 * ============================================================================
 * COMPLEXITY ANALYSIS
 * ============================================================================
 * 
 * GREEDY APPROACH:
 * - Time Complexity: O(n) - single pass through array
 * - Space Complexity: O(1) - only using constant extra space
 * - Why optimal: Each position visited exactly once
 * 
 * RECURSIVE WITH MEMOIZATION:
 * - Time Complexity: O(n²) - worst case, each position computed once, 
 *   but each computation might check O(n) next positions
 * - Space Complexity: O(n) - memoization table + recursion stack
 * 
 * DYNAMIC PROGRAMMING:
 * - Time Complexity: O(n²) - nested loops over array
 * - Space Complexity: O(n) - DP array storage
 * 
 * ============================================================================
 */

/**
 * ============================================================================
 * REAL-WORLD APPLICATIONS OF GREEDY ALGORITHMS
 * ============================================================================
 * 
 * 1. **NETWORK ROUTING**
 *    - Choose path that gets data closest to destination at each hop
 *    - Internet routers use greedy approach for packet forwarding
 * 
 * 2. **RESOURCE ALLOCATION**
 *    - CPU scheduling: assign tasks to minimize total completion time
 *    - Memory management: allocate memory blocks optimally
 * 
 * 3. **FINANCIAL ALGORITHMS**
 *    - Currency exchange: find sequence of exchanges for best rate
 *    - Portfolio optimization: greedy selection of highest return investments
 * 
 * 4. **LOGISTICS & TRANSPORTATION**
 *    - Delivery route optimization
 *    - Flight connection planning (minimize layovers)
 * 
 * 5. **COMPRESSION ALGORITHMS**
 *    - Huffman coding: build optimal prefix codes greedily
 *    - LZ77/LZ78: greedy pattern matching for compression
 * 
 * 6. **MACHINE LEARNING**
 *    - Decision tree construction (greedy feature selection)
 *    - Gradient descent optimization
 * 
 * 7. **GAME ALGORITHMS**
 *    - Pathfinding in games (A* uses greedy heuristics)
 *    - AI decision making (choose locally optimal moves)
 * 
 * ============================================================================
 */

/**
 * ============================================================================
 * TEST CASES & EXAMPLES
 * ============================================================================
 */

// Test function to validate all approaches
function testJumpGame() {
    const testCases = [
        { nums: [2, 3, 1, 1, 4], expected: 2 },
        { nums: [2, 3, 0, 1, 4], expected: 2 },
        { nums: [1, 1, 1, 1], expected: 3 },
        { nums: [1], expected: 0 },
        { nums: [2, 1], expected: 1 },
        { nums: [1, 2, 3], expected: 2 }
    ];

    console.log("Testing Jump Game II Solutions...\n");

    testCases.forEach((test, index) => {
        const greedyResult = jumpGreedy(test.nums);
        const recursiveResult = jumpRecursive(test.nums);
        const dpResult = jumpDP(test.nums);

        console.log(`Test Case ${index + 1}: [${test.nums.join(',')}]`);
        console.log(`Expected: ${test.expected}`);
        console.log(`Greedy: ${greedyResult}`);
        console.log(`Recursive: ${recursiveResult}`);
        console.log(`DP: ${dpResult}`);
        console.log(`✓ All match: ${greedyResult === recursiveResult && recursiveResult === dpResult && dpResult === test.expected}\n`);
    });
}

/**
 * ============================================================================
 * DETAILED WALKTHROUGH: nums = [2,3,1,1,4]
 * ============================================================================
 *
 * GREEDY APPROACH STEP-BY-STEP:
 *
 * Initial: jumps=0, coverage=0, lastJumpIdx=0, destination=4
 *
 * i=0: nums[0]=2
 *   - coverage = max(0, 0+2) = 2
 *   - i == lastJumpIdx (0), so we must jump
 *   - lastJumpIdx = 2, jumps = 1
 *   - coverage (2) < destination (4), continue
 *
 * i=1: nums[1]=3
 *   - coverage = max(2, 1+3) = 4
 *   - i != lastJumpIdx (2), keep exploring
 *
 * i=2: nums[2]=1
 *   - coverage = max(4, 2+1) = 4
 *   - i == lastJumpIdx (2), so we must jump
 *   - lastJumpIdx = 4, jumps = 2
 *   - coverage (4) >= destination (4), return 2
 *
 * Result: 2 jumps minimum
 *
 * ============================================================================
 */

// Uncomment to run tests
// testJumpGame();