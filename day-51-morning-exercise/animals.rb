class Animal
  def initialize(type, height, gender, weight)
    @type = type
    @height = height
    @gender = gender
    @weight = weight
  end
end

def create_animal(type, height, gender, weight)
  animal = Animal.new(type, height, gender, weight)
  animal
end

def read_file
  all_animals = []
  lines = IO.readlines("animals.txt")
  lines.each do |line|
    words = line.split(/\W+/) #split words based on space and special characters
    all_animals.push(create_animal(words[0], words[2].to_i, words[4], words[6].to_i))
 end
 all_animals
end

all_animals = []
all_animals = read_file

all_animals.each do |animal|
  p animal
end
