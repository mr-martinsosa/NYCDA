require "sinatra"
require "sinatra/reloader"
require "unirest"
require "rubyjokes"


joke = RubyJoke.new
# puts joke.get_joke({limitTo: ['nerdy','explicit']

get "/" do
    "Hello World"
end

get "/jokes/:type" do
    # if params[:type] == "nerdy"
    #     "<p> #{joke.get_joke({limitTo: ['nerdy']})} </p>"
    # elsif params[:type] == "explicit"
    #     "<p> #{joke.get_joke({limitTo: ['explicit']})} </p>"
    # end
    "<p> #{joke.get_joke({limitTo: [':type']})} </p>"
end

get "/surprise" do
    nerdy = joke.get_joke({limitTo: ['nerdy']})
    explicit = joke.get_joke({limitTo: ['explicit']})
    "<p> #{[nerdy, explicit].sample} </p>"
end
