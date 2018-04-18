def linear_search(array, element)
    array.each_with_index do |item, index|
        if(item == element)
            return index
        end
    end
end

array = [5, 3, 10, 2, 14, 9]

puts linear_search(array, 14)
