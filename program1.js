function longestSubstring(s) {
    const charIndexMap = {};
    let maxLength = 0;
    let start = 0;

    for (let end = 0; end < s.length; end++) {
        const currentChar = s[end];
        if (currentChar in charIndexMap && charIndexMap[currentChar] >= start) {
            start = charIndexMap[currentChar] + 1;
        }
        charIndexMap[currentChar] = end;
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}

module.exports = { longestSubstring };
