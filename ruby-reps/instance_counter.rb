def instance_counter(sentence)
  char_counter = Hash.new
  sentence = sentence.gsub(" ", "").downcase
  puts sentence
  sentence.each_char do |char|
    char_counter[char] = sentence.count(char)
  end
  puts char_counter.max_by{|k,v| v}
end

instance_counter("Bob is a very nice gardener")

