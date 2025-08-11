function lengthOfLongestSubstring(s: string): number {
   const charSet: Set<string> = new Set();
    let maxLength = 0;
    let left = 0;

    for (let right = 0; right < s.length; right++) {
      while (charSet.has(s[right])) {
        charSet.delete(s[left]);
        left++;
      }

      charSet.add(s[right]);
      maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};