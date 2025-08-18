/**
 * 134. Gas Station
 * 
 * Problem Statement:
 * There are n gas stations along a circular route, where the amount of gas at the ith station is gas[i].
 * You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from the ith station 
 * to the next (i + 1)th station. You begin the journey with an empty tank at one of the gas stations.
 * 
 * Given two integer arrays gas and cost, return the starting gas station's index if you can travel around 
 * the circuit once in the clockwise direction, otherwise return -1. If there exists a solution, 
 * it is guaranteed to be unique.
 * 
 * Problem Link: https://leetcode.com/problems/gas-station/
 */

/**
 * Solution Approach:
 * 
 * The solution uses a greedy algorithm with the following key insights:
 * 1. Total Gas Check: If the total gas available is less than the total cost required, 
 *    it's impossible to complete the circuit (return -1 immediately).
 * 2. Single Pass with Tracking: If total gas is sufficient, we can find the starting station by:
 *    - Tracking current fuel level as we iterate through stations
 *    - Whenever fuel becomes negative, we know the current starting point is invalid, so we:
 *      * Reset fuel to 0
 *      * Set the next station as the new potential starting point
 *    - The last valid starting point found will be our solution
 * 
 * Concept:
 * This problem demonstrates the "greedy algorithm" paradigm where we make locally optimal choices
 * (resetting the starting point when we can't proceed) that lead to a globally optimal solution.
 * The key insight is that if you can't reach station B from station A, then any station between
 * A and B can't reach B either (so we can skip checking them).
 * 
 * Time Complexity: O(n) - We make two passes through the array (one for total calculation, one for finding start)
 * Space Complexity: O(1) - We use constant extra space
 */

/**
 * Determines the starting gas station index that allows traveling around the circuit once
 * @param gas - Array representing gas available at each station
 * @param cost - Array representing gas cost to travel to next station
 * @returns Starting index if circuit can be completed, otherwise -1
 */
function canCompleteCircuit(gas: number[], cost: number[]): number {
    // Initialize result to -1 (no solution found yet)
    let result = -1;

    // Variables to track total gas available and total cost required
    let totalGas = 0, totalCost = 0;

    // First pass: Calculate total gas and total cost
    for (let i = 0; i < gas.length; i++) {
        totalGas += gas[i];
        totalCost += cost[i];
    }

    // If total gas is insufficient, immediately return -1
    if (totalGas < totalCost) {
        return -1;
    }

    // Variables to track current fuel and potential starting index
    let fuel = 0, startIdx = 0;

    // Second pass: Find the valid starting index
    for (let i = 0; i < gas.length; i++) {
        // Update fuel: add gas from current station and subtract cost to next station
        fuel += gas[i] - cost[i];

        // If fuel becomes negative, we can't reach next station from current start
        if (fuel < 0) {
            // Reset fuel and try next station as new starting point
            fuel = 0;
            startIdx = i + 1;
        }
    }

    // Return the found starting index (guaranteed to work if totalGas >= totalCost)
    return startIdx;
}

/**
 * Test Cases
 */

// Example 1 from problem statement
console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2])); // Output: 3

// Example 2 from problem statement
console.log(canCompleteCircuit([2, 3, 4], [3, 4, 3])); // Output: -1

// Additional test cases
console.log(canCompleteCircuit([5, 1, 2, 3, 4], [4, 4, 1, 5, 1])); // Output: 4
console.log(canCompleteCircuit([4, 5, 2, 6, 5, 3], [3, 2, 7, 3, 2, 9])); // Output: -1
console.log(canCompleteCircuit([5, 8, 2, 8], [6, 5, 6, 6])); // Output: 3

/**
 * Explanation of Test Case 1:
 * gas = [1,2,3,4,5], cost = [3,4,5,1,2]
 * 
 * Start at index 3:
 * - Station 3: 0 + 4 = 4
 * - Station 4: 4 - 1 + 5 = 8
 * - Station 0: 8 - 2 + 1 = 7
 * - Station 1: 7 - 3 + 2 = 6
 * - Station 2: 6 - 4 + 3 = 5
 * - Back to Station 3: 5 - 5 = 0 (just enough)
 * 
 * Thus index 3 is the correct starting point.
 */

/**
 * Explanation of Test Case 2:
 * gas = [2,3,4], cost = [3,4,3]
 * 
 * Total gas = 9, total cost = 10 → 9 < 10 → immediately return -1
 * No possible starting point will work.
 */