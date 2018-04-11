def divide (num_one, num_two)
  num_one / num_two
end

def divide_and_display(num_one, num_two)
  if num_two >= 1
    num_three = divide(num_one, num_two)
    puts "The result of dividing #{num_one} by #{num_two} is #{num_three}"
  else
    puts "Second argument must be greater than or equal to 1"
  end
end

divide_and_display(4, 2)
divide_and_display(4, 0)



