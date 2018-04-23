class Array
    def far_each
      # your implementation goes here
      #   remember you are being passed in a block
        for element in self
            yield element if block_given?
        end
    end
end

[1,2,3,4].far_each do |element|
    puts element - 1
end