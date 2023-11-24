const getStringLength = (i: string) => i.length;

const searchString = (text: string, pattern: string) => {
    const textLength = getStringLength(text);
    const patternLength = getStringLength(pattern);

    let count = 0;

    for (let i = 0; i < textLength; i++) {
        for (let j = 0; j < patternLength; j++) {
            if (pattern[j] !== text[i + j]) break;
            if (j === patternLength - 1) count++;
        }
    }
    return count;
}
