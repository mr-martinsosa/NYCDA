def divisible?(number, divider)
  divider = divider.to_i
  if (number % divider).zero?
    true
  else
    false
  end
end

def number_divisible_filter(number, dividers)
  bool_array = []
  dividers.each do |divider|
    begin
      if divisible?(number, divider)
        bool_array.push(true)
      else
        bool_array.push(false)
      end
    rescue ZeroDivisionError => error
      bool_array.push(false)
    end
  end
  bool_array
end

def numbers_divisible_filter(numbers, dividers)
  array_of_bool_arrays = []
  
  numbers.each do |number|
    array_of_bool_arrays.push(number_divisible_filter(number, dividers))
  end
  
  array_of_bool_arrays
end

p number_divisible_filter(10, [3, 2, -5, 7]) # [false, true, true, false]
p number_divisible_filter(10, [0, 0, 0, 2]) # [false, false, false, true]
p numbers_divisible_filter([21, 6, 23], [3, 2, -5, 7]) 
# [[true, false, false, true], [true, true, false, false], [false, false, false, false]]