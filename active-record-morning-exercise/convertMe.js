class User {
  constructor(username, password) {
    this.username = username
    this.password = this.simpleEncrypt(password)
  }

  get decryptedPassword() {
    return this.simpleDecrypt(this.password)
  }

  simpleEncrypt(text) {
    return text.split("").reverse().join(2)
  }

  simpleDecrypt(text) {
    return text.split(2).reverse().join("")
  }
}

// the following are tests for the class code
//  to make sure it has been defined properly
user = new User("O", "pass")

console.log(user.username) // O
console.log(user.password) // s2s2a2p
console.log(user.decryptedPassword) // pass