function isSubsequence(s: string, t: string): boolean {
    let sPointer = 0;
    
    for (const char of t) {
        if (sPointer === s.length) break;
        if (char === s[sPointer]) sPointer++;
    }

    return sPointer === s.length;
}