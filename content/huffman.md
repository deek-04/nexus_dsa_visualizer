# Huffman Coding

Huffman coding is a lossless data compression algorithm that assigns variable-length codes to characters based on their frequency. More frequent characters get shorter codes, resulting in efficient compression. It uses a binary tree structure where each leaf represents a character.

## Operations

### Frequency Analysis (O(n))
- Count occurrence of each character in input
- Create frequency table for all characters
- Foundation for building Huffman tree
- Determines code length for each character

### Build Huffman Tree (O(n log n))
- Create leaf node for each character with frequency
- Use min-heap to store nodes by frequency
- Repeatedly extract two minimum nodes
- Create parent node with combined frequency
- Continue until single root node remains

### Generate Codes (O(n))
- Traverse tree from root to each leaf
- Assign 0 for left branch, 1 for right branch
- Path from root to leaf forms character code
- Shorter paths for higher frequency characters

### Encoding (O(n))
- Replace each character with its Huffman code
- Concatenate codes to form compressed output
- No code is prefix of another (prefix-free)
- Output is sequence of bits

### Decoding (O(n))
- Start at root of Huffman tree
- Read bits one at a time
- Traverse left for 0, right for 1
- Output character when leaf is reached
- Return to root and continue

### Tree Serialization (O(n))
- Store tree structure for decoding
- Include character-code mapping
- Can use preorder traversal
- Necessary for decompression

## Properties
- Optimal prefix-free code
- No code is prefix of another code
- Greedy algorithm produces optimal result
- Compression ratio depends on frequency distribution
- More effective for skewed frequency distributions
- Requires tree structure for decoding
- Lossless compression technique

## Applications
- File compression (ZIP, GZIP)
- Image compression (JPEG uses variant)
- Data transmission optimization
- Multimedia codecs
- Network protocol optimization
- Text file compression
- Fax machine encoding
- MP3 audio compression (modified version)
