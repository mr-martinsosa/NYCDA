require "sinatra"
require "sinatra/reloader"
require "sinatra/activerecord"
# require "./models"
require "sinatra/flash"

set :database, "sqlite3:lings.db"

get "/" do
    erb :index
end

get "/admin" do
    redirect "/"
end

