def fibonacci(num)
    if num == 0
        return 0
    elsif num == 1
        return 1
    # elsif num == 2
    #     return "#{num - 2}, #{num - 1}, #{num - 1}"
    else
        return fibonacci( num -1 ) + fibonacci( num - 2)
    end
end

puts fibonacci(6)