require 'faker'
require './student'
require './classroom'
require './grade'

# Our four classrooms for the first years
A = Classroom.new("1A")
B = Classroom.new("1B")
C = Classroom.new("1C")
D = Classroom.new("1D")

def gen_student
  s = Student.new(Faker::Name::name, rand(11..20))
  s.reportcard.add_grade(Grade.new("math", rand(0..100)))
  s.reportcard.add_grade(Grade.new("history", rand(0..100)))
  s.reportcard.add_grade(Grade.new("english", rand(0..100)))
  s.reportcard.add_grade(Grade.new("science", rand(0..100)))
  s
end

# Generate our students
1..25.times do |i|
  A.add_student(gen_student())
end
1..25.times do |i|
  B.add_student(gen_student())
end
1..25.times do |i|
  C.add_student(gen_student())
end
1..25.times do |i|
  D.add_student(gen_student())
end

# Check the rosters
A.roster
puts ""
B.roster
puts ""
C.roster
puts ""
D.roster
puts ""


############################################################
# CHALLENGE 1

def find_failing(classroom)
  classroom.students.each do |_key, value|
    total = 0
    value.reportcard.grades.each do |_k, v|
      total = total + v
    end
    if total > 200
      puts "#{value.name}: PASS"
    else
      puts "#{value.name}: FAIL"
    end
  end
  puts ""
end

find_failing A

############################################################
# CHALLENGE 2
def find_exceptional(classroom)
  counter = 0
  classroom.students.each do |_key, value|
      total = 0
      value.reportcard.grades.map do |_k, v|
        total = total + v
      end
      if total > 260
        puts "#{classroom.students.values[counter].name} is exceptional!"
      end
      counter += 1
    end
end

find_exceptional B

############################################################