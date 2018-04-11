def snake_eyes()
  dice_one_rand = Random.new
  dice_two_rand = Random.new
  
  dice_one = 0
  dice_two = 0

  counter = 0

  (1..100).each do
   dice_one = dice_one_rand.rand(1..6)
   dice_two = dice_two_rand.rand(1..6)

   if dice_one == dice_two
     counter += 1
   end
  end

   puts "Snake Eyes rolled #{counter} times"
end

snake_eyes()
