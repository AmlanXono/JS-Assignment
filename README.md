This repository contains solutions for the 6 JavaScript problems in Assignment 4.
Question 1: Digit Gatekeeper
 Method: Iterates from L to R-1 while applying divisibility checks, converting numbers to strings to filter out '0', adding up the digits, and running a prime-check loop.

  Time Complexity: O((R - L) * sqrt(S)), where S is the maximum digit sum, which is quite small (up to 54 for values up to 10^6).
Question 2: Roll-Seed Lock
  Method: Basic arithmetic is performed after a simple loop that does standard math operations exactly three times in order to isolate the middle digit.
  Time Complexity: O(1): The processes execute a constant three times regardless of the size of the input.

Question 3. Mirror Corridor
 Method: To verify the sum for both K-divisibility and palindrome properties, loop X from 0 to 10,000 using string reversal.
  Time Complexity: O(M * D), where M is the maximum limit (10000) and D is the number of digits in (N+X).
Question 4: Fare Calculator
  Method: Conditional `if` phrases are sequentially executed to apply modifiers to the base fare.
  Time Complexity: O(1)
Question 5: Disregarding Numbers
  Method: Uses a `while` loop to increase `m` and accumulate `sum`; values are omitted when `m % (seed + 2) === 0`.
  Time Complexity: O(m), constrained by the required quantity N.
Question 6: Contest Score Judge
  Method: After arithmetic formulas are directly executed, sequential boundary checks are carried out.
  Time Complexity: 0(1)
