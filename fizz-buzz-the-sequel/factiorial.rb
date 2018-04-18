def factorial(num)
  if num == 0 
    return 1
  elsif num == 1 
    return num 
  end

    num * factorial(num - 1)
end

def normal_factorial(num)
    total = 1
    1.upto num do |i|
        total *= i 
    end
    total
end

puts factorial(15)
puts normal_factorial(15)