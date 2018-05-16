def summer(arg_one, arg_two)
  arg_one + arg_two
end

def multiplier(arg_one, arg_two)
  arg_one * arg_two
end

def combiner(arg_one, arg_two)
  arg_sum = summer(arg_one, arg_two)
  arg_product = multiplier(arg_one, arg_two)
  arg_answer = []
  arg_answer.push(arg_sum, arg_product)
end

arg_answer = combiner(5, 10)

p arg_answer
