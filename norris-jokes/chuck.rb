require "colorize"
require "httparty"

class ChuckJokes
    def help
        puts "Use random to get a random quote"
        puts "Use get_joke_by_id(id_number) to get a joke by id"
        puts "Use replace_name(name) to replace Chuck's name with a name"
    end
  
    def get_joke_by_id(id)
        response = HTTParty.get("http://api.icndb.com/jokes/#{id}")
        "#{id}- #{response["value"]["joke"]}"
    end
  
    def replace_name(name)
        random_joke = random
        random_joke.gsub!("Chuck Norris", name)
    end
  
    def random
        response = HTTParty.get('http://api.icndb.com/jokes/random/3')
        "#{response["value"][0]["id"]}- #{response["value"][0]["joke"]}"
    end
end

chuck = ChuckJokes.new

puts chuck.random
puts chuck.get_joke_by_id(15)
puts chuck.replace_name("Martin")