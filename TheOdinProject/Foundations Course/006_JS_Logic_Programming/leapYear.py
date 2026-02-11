def leap_years(year):
    if year % 4 == 0:
        if year % 100 == 0:
            if year % 400 == 0:
                return True  # Divisible by 400, it's a leap year
            return False  # Divisible by 100 but not by 400, not a leap year
        return True  # Divisible by 4 but not by 100, it's a leap year
    return False  # Not divisible by 4, not a leap year
