class User
    attr_accessor :password, :username, :decrypted_password
    
    def initialize(username, password)
        @username = username
        @password = simple_encrypt(password)
        @decrypted_password = simple_decrypt(password)
    end

    def simple_encrypt(text)
        text.split("").reverse().join("2")
    end
    
    def simple_decrypt(text)
        text.split("2").reverse().join("")
    end
end

user = User.new("O", "pass")

puts user.username # O
puts user.password # s2s2a2p
puts user.decrypted_password # pass
