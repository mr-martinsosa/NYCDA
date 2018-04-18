def binary_search(array, value)
    if(array.length == 1)
        if(array[0] == value)
            return "Found value"
        else
            return "Value not found"
        end
    end
    midpoint = array.length/2
    #if value <= midpoint loop from 0 - midpoint else loop from midpoint to end
    for i in midpoint
        if(array[i] == value)
            return "Located at index #{i}"
        end
    end
    binary_search(array[midpoint..(array.length-1)])
end

array = [1, 2, 3, 4, 5, 6 , 7]

#it broke =( 
binary_search(array, 6)