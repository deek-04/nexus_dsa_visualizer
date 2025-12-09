# Stack Data Structure

A stack is a fundamental linear data structure that operates on the Last-In-First-Out (LIFO) principle. Think of it like a stack of plates—you can only add or remove plates from the top. This simple yet powerful concept forms the backbone of many computing operations.

## Core Operations

### Push (O(1))
- Adds a new element to the top of the stack
- Operates in constant time, making it highly efficient
- Stack overflow occurs when attempting to push onto a full stack

### Pop (O(1))
- Removes and returns the element at the top
- Also operates in constant time
- Stack underflow occurs when attempting to pop from an empty stack

### Peek/Top (O(1))
- Examines the top element without removing it
- Useful for checking the next item to be processed
- Leaves the stack structure unchanged

## Key Properties
- Fixed capacity in array-based implementations
- Elements maintain insertion order
- Only the topmost element is directly accessible
- Strict adherence to LIFO ordering

## Real-World Applications
- **Function Calls**: Programming languages use stacks to manage function execution and local variables
- **Expression Parsing**: Compilers evaluate mathematical expressions using stack-based algorithms
- **Undo Functionality**: Text editors and applications track changes with stacks
- **Navigation History**: Web browsers implement back/forward navigation using stacks
- **Backtracking**: Algorithms for maze solving and puzzle solving rely on stack structures
