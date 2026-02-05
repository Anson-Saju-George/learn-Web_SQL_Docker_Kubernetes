# Write a program that takes a user’s input and prints the numbers from one to the number the user entered.
# However, for multiples of three print Fizz instead of the number and for the multiples of five print Buzz.
# For numbers which are multiples of both three and five print FizzBuzz.

count = 0
n = int(input("Enter a number: "))
for i in range(1, n + 1):
    if i % 3 == 0 and i % 5 == 0:
        # print("FizzBuzz")
        # print(i)
        count += 1
    # elif i % 3 == 0:
    #     print("Fizz")
    # elif i % 5 == 0:
    #     print("Buzz")
    # else:
    #     print(i)
print(f"Total FizzBuzz count: {count}")