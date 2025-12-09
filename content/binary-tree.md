# Binary Search Tree (BST)

A Binary Search Tree is a hierarchical data structure where each node has at most two children (left and right). The BST property ensures that for every node, all values in the left subtree are smaller, and all values in the right subtree are greater than the node's value.

## Operations

### Insertion (O(log n) average, O(n) worst)
- Start at root and compare value with current node
- Move left if value is smaller, right if larger
- Insert at the first empty position found
- Worst case occurs in skewed trees

### Deletion (O(log n) average, O(n) worst)
- Find the node to delete
- Case 1: Node has no children - simply remove it
- Case 2: Node has one child - replace with child
- Case 3: Node has two children - replace with inorder successor or predecessor

### Search (O(log n) average, O(n) worst)
- Start at root and compare target with current node
- Move left if target is smaller, right if larger
- Return node if found, null if not present
- Efficient for balanced trees

### Inorder Traversal (O(n))
- Visit left subtree, then node, then right subtree
- Produces sorted sequence of values
- Used for retrieving elements in sorted order

### Preorder Traversal (O(n))
- Visit node, then left subtree, then right subtree
- Used for creating copy of tree
- Useful for prefix expression evaluation

### Postorder Traversal (O(n))
- Visit left subtree, then right subtree, then node
- Used for deleting tree
- Useful for postfix expression evaluation

### Level-order Traversal (O(n))
- Visit nodes level by level from top to bottom
- Uses queue data structure
- Also called breadth-first traversal

## Properties
- Each node has at most two children
- Left subtree contains only smaller values
- Right subtree contains only larger values
- No duplicate values (in standard BST)
- Height determines operation efficiency
- Balanced BST has height O(log n)

## Applications
- Database indexing for fast lookups
- File system directory structures
- Expression trees in compilers
- Auto-complete features in search engines
- Priority queue implementation
- Sorting algorithms (tree sort)
