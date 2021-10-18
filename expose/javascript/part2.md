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
12. a. student.name
    b. student[Grad Year]
    c. student.greeting()
    d. (student[Favorite Teacher]).name
    e. (student.courseLoad)[0]

13. a. '32',  integers map to their exact string representation
    b. 1, Since there is a subtraction, the machine no longer assumes concatination and instead reverts to basic integer arithmetic
    c. 3 since null becomes 0
    d. '3null' since null becomes a string
    e. 4, since true becomes 1
    f. 0, since false and null become 0
    g. '3undefined', since undefined becomes a string and concatenation occurs.
    h. NaN, since undefined becomes NaN, and 3 minus NaN is still not a number

14. a. true, because string '2' becomes number 2
    b. false, because the comparison goes character by character, and '2' is greater than '1'
    c. true, because string '2' becomes 2.
    d. false, because === is strict equality, so since 2 and '2' are different types, it returns false right away
    e. false, because true becomes 1, and 2 =/= 1.
    f. true, because Boolean(2) is first evaluated to be true, and then the strict comparison returns true

15. == is a regular comparison which allows for type conversions whereas === is a strict comparison which does not allow for type conversions

17. first modify array will be called with the given parameters. A new array will be created. We will then iterate through the [1,2,3] array one at a time, first taking the "1" from the array, and the doSomething function will be called. The doSomething function will simply multiply this value by 2, and ultimately returns 2 here. Finally, this 2 will be pushed to the array we defined above. This iteration will happen 3 times, and we will finally return the array [2,4,6].
