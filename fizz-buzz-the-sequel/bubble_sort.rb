def bubble_sort(array)
    array.each do
        swapped = 0
        array.each_with_index do |item, index|
            # puts index 
            # puts index + 1
            # puts item 
            # puts item + 1
            if array[index + 1] != nil
                if array[index] > array[index + 1]
                    array[index], array[index + 1] = array[index + 1], array[index]
                end
            end
            swapped += 1
        end
        break if swapped == 0
    end
end

array = [5, 3, 10, 2, 14, 9]

puts bubble_sort(array)