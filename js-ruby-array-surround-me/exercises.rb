class Animal
    attr_reader :name, :species, :height
    attr_writer :name

    def initialize(name, species, height)
        @name = name
        @species = species
        @height = height
    end

    def walk()
        puts "I am walking very slowly"
    end

    def run()
        puts "I am running very quickly"
    end
end

class Calculator
    def initialize()
    end

    def self.add(num_one, num_two)
        puts num_one + num_two
    end

    def self.subtract(num_two, num_one)
        puts num_two - num_one
    end

    def self.multiply(num_one, num_two)
        puts num_one * num_two
    end

    def self.divide(num_two, num_one)
        puts num_two / num_one
    end
end

class Giraffe < Animal
    def initialize(name, height)
        super(name, "Giraffe", height)
    end
end

class Lizard < Animal
    def initialize(name, height)
        super(name, "Lizard", height)
    end
end

class Student
    attr_reader :name, :gpa, :course 

    def initialize(name, gpa, course)
        @name = name
        @gpa = gpa
        @course = course
    end

end

class SeiStudent < Student
    attr_reader :name, :gpa, :course, :topics, :hours_slept

    def initialize(name, gpa)
        super(name, gpa, "sei")
    end

    def set_topics(topics)
        @topics = topics
    end
    
    def set_hours_slept(hours)
        @hours_slept = hours
    end

    def student_look_up()
        p "#{@name}: #{@gpa} and their course is: #{@course}"
    end

    def list_topics()
        p "#{@name}'s topics are: #{@topics[0]}, #{@topics[1]}, #{@topics[2]}"
    end

    def how_much_sleep()
        p "#{@name} has slept #{@hours_slept * 60} min"
    end

end

ahminal = Animal.new("ItsSomething", "YellowSpottedWhatever", "70 feet")
ahminal.walk
ahminal.run

Calculator.add(4, 2)
Calculator.subtract(4, 2)
Calculator.multiply(4, 2)
Calculator.divide(4, 2)

its_a_giraffe = Giraffe.new("Smallboi", "200 feet")
yoshi = Lizard.new("Yoshi", "400 feet")

p its_a_giraffe, yoshi

its_a_giraffe.walk
yoshi.walk

its_a_giraffe.run
yoshi.run

topics = ["design", "frontend programming", "backend programming"]

martin = SeiStudent.new("Martin", 4.0)

martin.student_look_up
martin.set_topics(topics)
martin.set_hours_slept(5)
martin.list_topics
martin.how_much_sleep