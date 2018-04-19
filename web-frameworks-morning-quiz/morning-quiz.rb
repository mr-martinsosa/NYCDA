#1. What would you rename this function to? Why? How would you improve this code?
def no_name(x)
  l = x.length - 1 #the problem was that l wasnt set to length -1

  for i in 0..l
    x[i] = (x[i] * 1) * x[i]
  end

  x
end

puts no_name([-3, -12, 2]) # [9, 144, 4]

# 2. What is the difference between a function and a class?
# A function contains an organized set of code to be executed versus a class
# which containized an organized set of code to describe an object

# 3. Translate this Ruby code into Javascript:

# class Joke
#   attr_accessor :name, :content

#   def initialize(name, content)
#     @name = name
#     @content = content
#   end

#   def tell
#     @content
#   end
# end

# class GoodJoke < Joke
#   attr_accessor :funny

#   def initialize(name, content)
#     @funny = true
    
#     super(name, translation)
#   end
# end

# class BadJoke < Joke
#   attr_accessor :funny

#   def initialize(name, content)
#     @funny = false

#     super(name, translation)
#   end
# end

# bad_joke = BadJoke.new("knock knock", "knock, knock...")
# good_joke = GoodJoke.new("question", "what are those!?")

# puts good_joke.tell
# puts bad_joke.tell

#4. What is the code structure that is always needed in every HTML page?
#Meaning, what code do you always need to have on every html page?

#5. Label the following code into keywords, symbols and names that are defined by a
#developer in the following code:

#6. What are the concepts that we have learned so far, that are the most challenging for you?
#Callbacks and closures

#7. Is the following code correct? Why?

#8. Write down in words your process for solving number 2 and number 7?
# For number 2 I saw what concepts a function and a class shared and quickly saw the differences.
# Classes provide an more organized approach when dealing with groups of similar data whereas
# functions mainly just execute data in an organized way
# For number 7, I ran the code in case I didn't remember how Javascript executes addition or 
# concatination and observed the output.

#9. Given the following list of comments:

# That's what she said
# Minhal is amused...
# When would you use this?
# I am the html5 master!
# Third eye open
# [Whistle] Look at dat sauce
# This death wish coffee is all for me... Mwahaha!

# a. Describe this list in code form.
# This is an array of strings that contains random sayings from our class. The 6th index
# contains another array of length 1, with one string. 

# b. What code would I write to allow someone to swap a value from one 
# location on the list to another location on the list?

# 11. If you had to rate your confidence level so far in this course using a scale of 1-10
#  where 1 is "absolutely lost" and 10 is "extremely confident", where would you
#   place yourself? Why? What current habits are you utilizing to improve your 
#   confidence in the course?
# I rate myself an 8, because I am confidant in most of my answers, but my laziness
# sometimes prevents me from providing a better answer, or the ability to think a little better.
# I go to workshops and meetups after class to keep code fresh in my mind all the time.

# 12. What is best in life?
# Food, Video Games, Being lazy, Martin