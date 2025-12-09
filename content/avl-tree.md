# AVL Tree

An AVL Tree is a self-balancing Binary Search Tree where the height difference between left and right subtrees (balance factor) of any node is at most 1. Named after inventors Adelson-Velsky and Landis, it maintains O(log n) height through automatic rebalancing.

## Operations

### Insertion (O(log n))
- Insert node like standard BST
- Update height of ancestor nodes
- Check balance factor of each ancestor
- Perform rotations if balance factor exceeds ±1
- Guarantees logarithmic height

### Deletion (O(log n))
- Delete node like standard BST
- Update height of ancestor nodes
- Check balance factor of each ancestor
- Perform rotations to restore balance
- May require multiple rotations

### Search (O(log n))
- Same as BST search operation
- Guaranteed logarithmic time due to balanced height
- More efficient than unbalanced BST

### Left Rotation (O(1))
- Used when right subtree is heavier
- Pivot node becomes left child of its right child
- Maintains BST property while reducing height
- Updates heights of affected nodes

### Right Rotation (O(1))
- Used when left subtree is heavier
- Pivot node becomes right child of its left child
- Maintains BST property while reducing height
- Updates heights of affected nodes

### Left-Right Rotation (O(1))
- Double rotation for left-heavy with right-heavy child
- First perform left rotation on left child
- Then perform right rotation on node
- Resolves complex imbalance patterns

### Right-Left Rotation (O(1))
- Double rotation for right-heavy with left-heavy child
- First perform right rotation on right child
- Then perform left rotation on node
- Resolves complex imbalance patterns

## Properties
- Balance factor = height(left subtree) - height(right subtree)
- Balance factor must be -1, 0, or 1 for all nodes
- Height is always O(log n) for n nodes
- Stricter balancing than Red-Black trees
- More rotations during insertion/deletion
- Faster lookups due to better balance

## Applications
- Database systems requiring frequent lookups
- In-memory sorted data with frequent searches
- File systems with balanced directory structures
- Real-time systems needing predictable performance
- Dictionary implementations
- Sets and maps in standard libraries
