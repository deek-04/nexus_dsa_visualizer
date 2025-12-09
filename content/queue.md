# Queue Data Structure

A queue is a fundamental linear data structure that operates on the First-In-First-Out (FIFO) principle. Imagine a line at a coffee shop—the first person to arrive is the first to be served. Elements enter at the rear and exit from the front, creating an orderly flow of data.

## Core Operations

### Enqueue (O(1))
- Adds a new element to the rear of the queue
- Executes in constant time for optimal performance
- Queue overflow occurs when adding to a full queue

### Dequeue (O(1))
- Removes and returns the element at the front
- Also operates in constant time
- Queue underflow occurs when removing from an empty queue

### Front/Peek (O(1))
- Examines the front element without removing it
- Useful for checking the next item to be processed
- Preserves the queue structure

## Key Properties
- Fixed capacity in array-based implementations
- Elements maintain arrival order
- Front element is accessible for removal
- Strict FIFO ordering ensures fairness
- Maintains two pointers: front and rear for efficient operations

## Real-World Applications
- **Process Scheduling**: Operating systems manage task execution using queues
- **Print Spooling**: Print jobs are processed in the order they're received
- **Graph Traversal**: Breadth-first search algorithms rely on queue structures
- **Web Servers**: Request handling follows queue-based processing
- **Message Systems**: Distributed systems use message queues for asynchronous communication
- **Data Streaming**: Buffers use queues to manage data flow

## Implementation Strategies
1. **Array-Based Implementation**
   - Straightforward approach with fixed capacity
   - Circular arrays maximize space efficiency

2. **Linked List Implementation**
   - Dynamic sizing adapts to varying loads
   - Slightly higher memory overhead per element

3. **Priority Queue Variant**
   - Elements carry priority values
   - Dequeue operations select highest/lowest priority items
