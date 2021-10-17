1. Console will print 3, as this is the length of the prices parameter.
2. Console will print 150 as var remains defined outside of the for loop
3. Console will print 150 as var is defined within this scope as well
4. This function return the array [50,100,150] as expected as the discounted variable is a global variable
5. There will be a reference error because i is not defined in the scope outside of the for loop
6. There will again be a reference error because discounted price is online defined inside the scope of the for loop and will be lost after leaving the for loop
7. This will print 150 because finalPrice is defined outside of the for loop, so the let is still present within this scope.
8. This function return the array [50,100,150] as expected as the discounted variable is defined properly and let is viable in this scope.
9. There will be a reference error because i is not defined in the scope outside of the for loop
10. Console will return 3, as this is how it was defined originally. 
11. The function will return an empty array as it was defined as a constant empty array from the beginning of the function. However, there will be errors, specifically in line 8, when we are trying to update the array because it is defined as a constant and therefore cannot be changed.
