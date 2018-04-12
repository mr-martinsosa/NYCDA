class Emoji
    def initialize(str)
        @str = str
    end
    
    def sad
        "#{@str} ☹"
    end

    def happy
        "#{@str} ☺"
    end

    def laughing
        "#{@str} 😂"
    end

    def angry
        "#{@str} 😡"
    end

    def original
        "#{@str}"
    end
end

str = "This is an okay program"
str_two = "Bruh what are those"
str_three = "I'm feeling pretty good"

sentence = Emoji.new(str)
puts sentence.angry
puts sentence.sad

sentence_two = Emoji.new(str_two)
puts sentence_two.laughing
puts sentence_two.sad

sentence_three = Emoji.new(str_three)
puts sentence_three.happy
puts sentence_three.angry