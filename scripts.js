function isPalindrome(word) {
    // Base cases: empty word or word with single character is a palindrome
    if (word.length === 0 || word.length === 1) {
        return true;
    }
    
    // Compare characters at the ends of the word
    if (word[0] === word[word.length - 1]) {
        // If characters match, recursively check the rest of the word
        return isPalindrome(word.slice(1, -1));
    } else {
        // If characters don't match, it's not a palindrome
        return false;
    }
}

// Test cases
console.log(isPalindrome("gag")); // true
console.log(isPalindrome("kayak")); // true
console.log(isPalindrome("php")); // true
console.log(isPalindrome("radar")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("level")); // true

