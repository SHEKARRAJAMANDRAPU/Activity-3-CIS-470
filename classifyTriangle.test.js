
const  classifyTriangle  = require('./classifyTriangle');

describe('classifyTriangle: Required input conditions -  See readme for more details', () => {
    test('should classify an Equilateral triangle', () => {
      expect(classifyTriangle(10, 10, 10)).toBe('Equilateral');
      // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
    });
  
    test('should classify an Isosceles triangle', () => {
      expect(classifyTriangle(10, 10, 5)).toBe('Isosceles');
    // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
    });
  
    test('should classify a Scalene triangle', () => {
      expect(classifyTriangle(10, 12, 14)).toBe('Scalene');
      // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
    });

  
    test('should return error for invalid inputs', () => {
      expect(classifyTriangle(0, 10, 10)).toBe('Error: Input conditions C1, C2, or C3 failed.');
        // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
    });
  
    test('should return "Not a Triangle" for invalid triangle sides', () => {
      expect(classifyTriangle(1, 2, 3)).toBe('Not a Triangle');
      // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
    });
    // #1 Verify lower bound for side b
test('should produce an error when b is below the lower bound', () => {
  expect(classifyTriangle(10, 0, 10)).toBe('Error: Input conditions C1, C2, or C3 failed.');
});

// #2 Check lower bound for side c
test('should generate an error when c is below the lower bound', () => {
  expect(classifyTriangle(10, 10, 0)).toBe('Error: Input conditions C1, C2, or C3 failed.');
});

// #3 Validate upper bound for side a
test('should return an error when a exceeds the upper bound', () => {
  expect(classifyTriangle(201, 10, 10)).toBe('Error: Input conditions C1, C2, or C3 failed.');
});

// #4 Examine upper bound for side b
test('should return an error when b exceeds the upper bound', () => {
  expect(classifyTriangle(10, 201, 10)).toBe('Error: Input conditions C1, C2, or C3 failed.');
});

// #5 Assess upper bound for side c
test('should return an error when c exceeds the upper bound', () => {
  expect(classifyTriangle(10, 10, 201)).toBe('Error: Input conditions C1, C2, or C3 failed.');
});

// #6 Validate condition a >= b + c
test('should indicate "Not a Triangle" when a is greater than or equal to b + c', () => {
  expect(classifyTriangle(100, 10, 10)).toBe('Not a Triangle');
});

// #7 Confirm condition b >= a + c
test('should indicate "Not a Triangle" when b is greater than or equal to a + c', () => {
  expect(classifyTriangle(10, 100, 10)).toBe('Not a Triangle');
});

// #8 Ensure an equilateral triangle above the upper bounds triggers an error
test('should return an error for equilateral triangle exceeding upper bounds', () => {
  expect(classifyTriangle(1000, 1000, 1000)).toBe('Error: Input conditions C1, C2, or C3 failed.');
});

// #9 Verify an equilateral triangle below the lower bounds triggers an error
test('should return an error for equilateral triangle below lower bounds', () => {
  expect(classifyTriangle(-10, -10, -10)).toBe('Error: Input conditions C1, C2, or C3 failed.');
});

// #10 Check for an isosceles triangle with b equal to c
test('should identify "Isosceles" when sides are valid and b equals c', () => {
  expect(classifyTriangle(5, 10, 10)).toBe('Isosceles');
});

// #11 Check for an isosceles triangle with a equal to c
test('should identify "Isosceles" when sides are valid and a equals c', () => {
  expect(classifyTriangle(10, 5, 10)).toBe('Isosceles');
});

// #12 Confirm that scalene is not returned when all sides are different and a >= b + c
test('should return "Not a Triangle" when conditions C4, C5, or C6 are not met, even with different sides', () => {
  expect(classifyTriangle(150, 32, 64)).toBe('Not a Triangle');
});

// #13 Ensure an isosceles triangle above the upper bounds triggers an error
test('should return an error for isosceles triangle exceeding upper bounds', () => {
  expect(classifyTriangle(1000, 1000, 1001)).toBe('Error: Input conditions C1, C2, or C3 failed.');
});

// #14 Ensure a scalene triangle above the upper bounds triggers an error
test('should return an error for scalene triangle exceeding upper bounds', () => {
  expect(classifyTriangle(1000, 1001, 1002)).toBe('Error: Input conditions C1, C2, or C3 failed.');
});

// #15 Check that b is accepted when on the lower bound
test('should identify "Isosceles" even when b is on the lower bound', () => {
  expect(classifyTriangle(10, 1, 10)).toBe('Isosceles');
});

// #16 Check that c is accepted when on the lower bound
test('should identify "Isosceles" even when c is on the lower bound', () => {
  expect(classifyTriangle(10, 10, 1)).toBe('Isosceles');
});

// #17 Check that a is accepted when on the upper bound
test('should identify "Scalene" even when a is on the upper bound', () => {
  expect(classifyTriangle(200, 199, 198)).toBe('Scalene');
});

// #18 Check that b is accepted when on the upper bound
test('should identify "Scalene" even when b is on the upper bound', () => {
  expect(classifyTriangle(199, 200, 198)).toBe('Scalene');
});

// #19 Check that c is accepted when on the upper bound
test('should identify "Scalene" even when c is on the upper bound', () => {
  expect(classifyTriangle(198, 199, 200)).toBe('Scalene');
});

// #20 Ensure an isosceles triangle below the lower bounds triggers an error
test('should return an error for isosceles triangle below lower bounds', () => {
  expect(classifyTriangle(-1000, -1000, -1001)).toBe('Error: Input conditions C1, C2, or C3 failed.');
});


  });
  