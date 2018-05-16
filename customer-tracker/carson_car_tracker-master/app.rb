require 'csv'
# Based on http://www.jonathanleighton.com/articles/2011/awesome-active-record-bug-reports/ 

# Run this script with `$ pry app.rb`
require 'sqlite3'
require 'active_record'

# Use `binding.pry` anywhere in this script for easy debugging
require 'pry'

# Connect to a sqlite3 database
# If you feel like you need to reset it, simply delete the file sqlite makes
ActiveRecord::Base.establish_connection(
  adapter: 'sqlite3',
  database: 'carson.sqlite'
)

# Define a minimal database schema
# Everytime the script is run it clears the databse, this 
# is okay while working on the carson's request.
# ActiveRecord::Schema.define do
#   create_table :cars, force: true do |t|
#     t.string :name
#     t.string :color
#     t.string :model
#     t.string :make
#     t.string :cost_price
#     t.string :sale_markup
#   end

  # Create more tables here


# end

# Define the models and relationships
class Car < ActiveRecord::Base
  has_many :transactions
  has_many :customers, through: :transactions
end

class Customer < ActiveRecord::Base
  has_many :transactions
  has_many :cars, through: :transactions
end

class Transaction < ActiveRecord::Base
  belongs_to :car
  belongs_to :customer

  has_many :customers, through: :transactions
  has_many :cars, through: :transactions
  
  def final_sales_price
    Car.cost_price + (Car.cost_price * Car.sale_markup) + (Car.cost_price * 0.088)
  end
end

# Create a few records...
# or import that CSV and create the appropriate records off of it. 
Car.destroy_all
Customer.destroy_all
Transaction.destroy_all

CSV.foreach("CAR_DATA.csv") do |row|
  Customer.create(
    first_name: row[1],
    last_name: row[2],
    email: row[3],
    gender: row[4],
    phone_number: row[5]
  )
  Car.create(
    model: row[6],
    make: row[7],
    cost_price: row[9],
    sale_markup: row[10]
  )
  # Transaction.create(
  #   car_id: row[0],
  #   customer_id: row[0],
  # )
end

# to let you use the terminal to CRUD the database. 
binding.pry