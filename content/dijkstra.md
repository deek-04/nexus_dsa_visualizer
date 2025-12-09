# Dijkstra's Algorithm

Dijkstra's algorithm finds the shortest path from a source vertex to all other vertices in a weighted graph with non-negative edge weights. It uses a greedy approach, always selecting the unvisited vertex with the smallest known distance.

## Operations

### Initialization (O(V))
- Set distance to source vertex as 0
- Set distance to all other vertices as infinity
- Mark all vertices as unvisited
- Create priority queue with source vertex
- Initialize predecessor array for path reconstruction

### Vertex Selection (O(log V))
- Extract vertex with minimum distance from priority queue
- Mark vertex as visited
- Process all adjacent vertices
- Uses min-heap for efficient selection

### Edge Relaxation (O(1))
- For each neighbor of current vertex
- Calculate distance through current vertex
- If new distance is smaller, update it
- Update predecessor for path tracking
- Add/update neighbor in priority queue

### Path Reconstruction (O(V))
- Start from destination vertex
- Follow predecessor pointers backward
- Build path from source to destination
- Reverse path for correct order

### Priority Queue Update (O(log V))
- Decrease key operation for updated distances
- Maintains heap property
- Ensures next minimum is always accessible
- Critical for algorithm efficiency

### Graph Representation (O(V + E))
- Adjacency list for sparse graphs
- Adjacency matrix for dense graphs
- Store edge weights with connections
- Affects overall space complexity

## Properties
- Works only with non-negative edge weights
- Greedy algorithm that produces optimal solution
- Time complexity: O((V + E) log V) with binary heap
- Time complexity: O(V²) with array implementation
- Space complexity: O(V) for distance and visited arrays
- Single-source shortest path algorithm
- Can be modified for single destination

## Applications
- GPS navigation and route planning
- Network routing protocols (OSPF)
- Social network analysis (degrees of separation)
- Flight route optimization
- Robot path planning
- Game AI pathfinding
- Traffic flow optimization
- Telecommunication network design
- Supply chain logistics
