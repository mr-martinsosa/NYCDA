require "sinatra"
require "sinatra/reloader"
require "googlebooks"

get "/" do
    erb :index
end

post "/" do
end