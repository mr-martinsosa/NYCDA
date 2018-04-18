def reverse_string(word)
    new_word_array = []
    new_word = ""
    for i in (word.length-1).downto(0)
        new_word_array.push(word[i])
    end
    new_word = new_word_array.join("")
end

puts reverse_string("Hi")