# Message Queue System

A message queue is a communication mechanism that enables asynchronous message passing between different parts of a system. It follows the producer-consumer pattern where producers send messages to a queue, and consumers retrieve and process them independently.

## Operations

### Enqueue/Send (O(1))
- Producer adds message to end of queue
- Message contains data and metadata
- Non-blocking operation for producer
- Allows decoupling of sender and receiver

### Dequeue/Receive (O(1))
- Consumer retrieves message from front of queue
- Message is removed after successful processing
- Can be blocking or non-blocking
- Supports multiple consumers

### Peek (O(1))
- View next message without removing it
- Useful for checking message priority
- Does not affect queue state
- Helps in message filtering

### Acknowledge (O(1))
- Consumer confirms successful message processing
- Message is permanently removed from queue
- Prevents message loss on consumer failure
- Enables reliable message delivery

### Dead Letter Queue (O(1))
- Failed messages moved to separate queue
- Prevents blocking of main queue
- Allows manual inspection and retry
- Important for error handling

### Priority Handling (O(log n))
- Messages processed by priority level
- Uses heap or priority queue internally
- High-priority messages processed first
- Useful for time-sensitive operations

## Properties
- Asynchronous communication between components
- Decouples producers from consumers
- Buffers messages during load spikes
- Supports multiple producers and consumers
- Guarantees message ordering (FIFO)
- Enables fault tolerance and reliability
- Scales horizontally with distributed queues

## Applications
- Microservices communication
- Task scheduling and job processing
- Event-driven architectures
- Email and notification systems
- Order processing in e-commerce
- Log aggregation and processing
- Real-time data streaming
- Load balancing across workers
- Distributed system coordination
