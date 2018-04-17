require_relative "./chuck.rb"

chuck = ChuckJokes.new

if ARGV.length == 0
    puts chuck.help
end

#for i in 
if ARGV[0] == "random"
     puts chuck.random
elsif ARGV.length == 2
    if ARGV[0] != "random" && ARGV[0].is_a? String && ARGV[1].is_a? String  
        puts chuck.replace_name("#{ARGV[0]} #{ARGV[1]}")
    end
# elsif ARGV[0].is_a? Integer
 #     puts chuck.get_joke_by_id(ARGV[0])
elsif ARGV[0].to_i > 0 
    chuck.get_joke_by_id(ARGV[0].to_i)
else
    puts "Use a real argument."
end
