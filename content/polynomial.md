# Polynomial Multiplication

Polynomial multiplication using linked lists is an efficient way to represent and manipulate sparse polynomials. Each node in the linked list stores a coefficient and exponent pair, allowing dynamic memory usage and easy manipulation of polynomial terms.

## Operations

### Representation (O(n))
- Each node contains coefficient and exponent
- Nodes are sorted by decreasing exponent
- Only non-zero terms are stored
- Efficient for sparse polynomials

### Addition (O(m + n))
- Traverse both polynomials simultaneously
- Compare exponents at each step
- Add coefficients for matching exponents
- Copy terms with unique exponents
- Result is sorted by exponent

### Multiplication (O(m × n))
- Multiply each term of first polynomial with each term of second
- For each pair: multiply coefficients, add exponents
- Combine like terms (same exponent)
- Sort result by decreasing exponent
- More complex than addition

### Term-by-Term Multiplication (O(1))
- Multiply coefficients: coeff1 × coeff2
- Add exponents: exp1 + exp2
- Create new term with result
- Basic building block for polynomial multiplication

### Combining Like Terms (O(n))
- Scan result for terms with same exponent
- Add coefficients of matching terms
- Remove terms with zero coefficient
- Maintain sorted order by exponent

### Evaluation (O(n))
- Substitute value for variable
- Calculate each term: coefficient × value^exponent
- Sum all term values
- Uses Horner's method for efficiency

## Properties
- Space efficient for sparse polynomials
- Dynamic size grows with non-zero terms
- Terms stored in descending exponent order
- Easy insertion and deletion of terms
- No wasted space for zero coefficients
- Supports polynomials of any degree

## Applications
- Computer algebra systems
- Symbolic mathematics software
- Signal processing and filtering
- Curve fitting and interpolation
- Error correction codes
- Cryptography algorithms
- Scientific computing and simulations
