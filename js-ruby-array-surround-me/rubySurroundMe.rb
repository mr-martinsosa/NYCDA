def surround_me(protectee, array)
  protected_person = [protectee]
  array.reverse.each do |value|
    # protected_person.unshift(value)
    # protected_person.push(value)
    protected_person.unshift(value).push(value)
  end
  puts protected_person.join(" ").to_s().gsub("," , " ")
end

array = [
  "Ming-Kinghal",
  "a-aron",
  "yorvi"
]

surround_me("rachel", array)

