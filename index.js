function isPalindrome(str) {
  let len = str.length;
  let start = 0;
  let end = len - 1;

  str = str.replace(/[^a-z0-9]/gi, "").toLowerCase();

  while (start < end) {
    if (str[start] !== str[end]) {
      return false;
    }

    start++;
    end--;
  }

  return true;
}

console.log(isPalindrome("Madam"));
console.log(isPalindrome("Doctor"));
console.log(isPalindrome("A man, a plan, a canal: Panama"));
