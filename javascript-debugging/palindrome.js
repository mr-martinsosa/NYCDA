function palindrome(word){
	if (word.length === 1) return true
	if (word.charAt(0) === word.charAt(word.length-1)){
		word = word.slice(1)
		word = word.slice(length-1)
		return palindrome(word)
	}else{
		return false
	}
}


let word = "racecar"
palindrome(word)