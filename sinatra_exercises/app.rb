require "sinatra"
require "sinatra/reloader"

get "/" do
    erb :index
end

get "/double_time" do
    @text = "Martin"
    erb :double_time
end

get "/info" do
    @username, @password = params[:username], params[:password]
    erb :info
end

post "/info" do
    puts params

    redirect "/"
end