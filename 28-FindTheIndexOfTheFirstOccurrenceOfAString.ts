function strStr(haystack: string, needle: string): number {
    // Number of times to iterate
    const iterate = needle.length > 1 
        ? (haystack.length - needle.length)
        : haystack.length; 

    // Iterate: basic cases
    for (let i=0; i<=iterate; i++) {
        const cmp = needle.length > 1
            ? haystack.slice(i, (needle.length + i))
            : haystack.charAt(i);
        if (needle === cmp) {
            return i;
        }
    }

    // Edge case: needle and haystack match
    if (needle === haystack) {
        return 0;
    }

    return -1;
};