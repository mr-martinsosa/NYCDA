def pig_latin(sentence)
    pig_sentence = sentence.split
    new_pig_sentence = []
    pig_sentence.each do |word|
        if word.length > 1
            if word[0] == 'a' || word[0] == 'e' || 
                word[0] == 'i' || word[0] == 'o' ||
                word[0] == 'u'
                
                temp_word = word 
				temp_first_letter = temp_word[0] 
				temp_word += temp_first_letter.concat("ay ") 
				temp_word = temp_word[1..-1]
                word = temp_word
                new_pig_sentence.push(word) 
            else
                temp_word = word 
                temp_first_letter = temp_word[0]
                temp_word += temp_first_letter.concat("ay ") 
                temp_word = temp_word[1..-1]
                word = temp_word
                new_pig_sentence.push(word)
            end
        end
    end
    #pig_sentence.join
    new_pig_sentence.join
end

puts pig_latin("Hello it is me")