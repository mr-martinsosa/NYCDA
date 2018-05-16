def smallest(array)
    array.sort.first
  end
  
  def largest(array)
    array.sort.last
  end
  
test_array = [98, -43, 7, -2, 19, 240]
  
p smallest(test_array) # -43
p largest(test_array) # 240