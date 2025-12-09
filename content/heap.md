# Heap Data Structure

A heap is a complete binary tree that satisfies the heap property. In a max-heap, each parent node is greater than or equal to its children. In a min-heap, each parent node is less than or equal to its children. Heaps are typically implemented using arrays for efficient storage.

## Operations

### Insertion (O(log n))
- Add element at the end of array (bottom-right of tree)
- Bubble up (heapify up) to restore heap property
- Compare with parent and swap if needed
- Continue until heap property is satisfied

### Extract Min/Max (O(log n))
- Remove and return root element (min or max)
- Replace root with last element
- Bubble down (heapify down) to restore heap property
- Compare with children and swap with smaller/larger child

### Heapify (O(log n))
- Restore heap property for a subtree
- Used after insertion or deletion
- Bubble down from given node to leaves
- Ensures parent-child relationship is correct

### Build Heap (O(n))
- Convert unsorted array into heap
- Start from last non-leaf node
- Apply heapify to each node moving upward
- More efficient than n insertions

### Peek (O(1))
- Return root element without removing
- Returns minimum in min-heap
- Returns maximum in max-heap
- Does not modify heap structure

### Delete (O(log n))
- Remove specific element from heap
- Replace with last element
- Heapify up or down as needed
- Less common than extract operation

## Properties
- Complete binary tree structure
- Height is always O(log n)
- Array representation: parent at i, children at 2i+1 and 2i+2
- Root contains minimum (min-heap) or maximum (max-heap)
- No ordering between siblings
- Efficient for priority-based operations

## Applications
- Priority queue implementation
- Heap sort algorithm
- Dijkstra's shortest path algorithm
- Huffman coding compression
- Job scheduling in operating systems
- Event-driven simulation systems
- Finding k largest/smallest elements
- Median maintenance in streaming data
