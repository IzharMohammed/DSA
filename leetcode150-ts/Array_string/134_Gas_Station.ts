function canCompleteCircuit(gas: number[], cost: number[]): number {
    let result = -1;
    let totalGas = 0, totalCost = 0;
    for (let i = 0; i < gas.length; i++) {
        totalGas += gas[i];
        totalCost += cost[i];
    }

    if (totalGas < totalCost) {
        return -1;
    }

    let feul = 0, startIdx = 0;

    for (let i = 0; i < gas.length; i++) {
        feul += gas[i] - cost[i];
        if (feul < 0) {
            feul = 0;
            startIdx = i + 1;
        }
    }

    return startIdx;
};