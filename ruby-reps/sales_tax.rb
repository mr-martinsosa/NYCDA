def sales_tax(number)
  tax = 0.088
  if(number.is_a? String)
    puts "Number please."
    return nil
  end
  new_tax = number * tax
  puts (number + new_tax).ceil
end

sales_tax(22)
sales_tax("hi")

