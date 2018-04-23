require "sinatra"
require "sinatra/reloader"
require "./classmate"

NAME = "Martin"
names = [
    "edward elric (alchemist / pokemon master)", 
    "ronnie the html G.O.A.T", 
    "team rocket", 
    "yorvin the dominican", 
    "mariia the edgecase queen"
]

martin = Classmate.new("Martin", "Mind Reading")
chris = Classmate.new("Chris", "Super Strength")
rashid = Classmate.new("Rashid", "Super Speed")
scott = Classmate.new("Scott", "Mind Reading")
kevin = Classmate.new("Kevin", "Teleportation")

get "/" do
    "Hello human, are you ready for us robots to take over!? |8-D|"
end

get "/sei" do
    "Welcome to class"
end

get "/my_name" do
    "Hello, my name is #{NAME}"
end

get "/names" do
    names.join(" ")
end

get "/martin" do
    martin.i_have_the_power
end

get "/chris" do
    chris.i_have_the_power
end

get "/rashid" do
    rashid.i_have_the_power
end
get "/scott" do
    scott.i_have_the_power
end

# get "/:name" do
#     params[:name].i_have_the_power
# end