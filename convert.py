lines = [line.rstrip('\n') for line in open('words.txt')]

print("{")
for i in range(0, len(lines)):
	if i%2 == 0:
		word = "\"" + lines[i].capitalize() + "\":"
		print(word),
	else:
		word = "\""+lines[i]+"\","
		print(word),
