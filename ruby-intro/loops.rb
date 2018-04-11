colors = %w{green red purple}
names = %w{Martin Jonathan Maria}

colors_and_names = {
  name: names,
  color: colors
}

for color in colors do
  puts color
end

for name in names do
  puts name
end

colors_and_names[:color].each { |color| puts color }
colors_and_names[:name].each { |name| puts name }
