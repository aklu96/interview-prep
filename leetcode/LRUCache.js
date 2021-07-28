/**
 * 146
 *
 *
 * Cache has some capacity
 * Only keeping track of least recently added: just use a queue (i.e. a hashmap with pointers to head and tail)
 * However, things get complicated if we consider that the get() method makes that key considered to be used more recently
 * This implementation makes sense with what the point of a cache is
 *
 * I thought through implementing a queue via a hashmap and head + tail pointers and an
 * inverse hashmap of the queue so we can have direct reference to the indices.
 * It's not true of O(1) but close.
 *
 * True O(1) can be achieved via a doubly linked list and a hashmap.
 * The hashmap stores key: {value, node}
 *
 * The doubly linked list has the ability to add to head, add to tail, and remove node in constant time as we have
 * reference to head and tail and removing a node is achieved through having reference to nodes on both ends.
 *
 * Searching is linear time in a linked list - but we don't need to search as we'll already have reference to the node in our hashmap
 *
 * workflow: get(4) -> access map[4].value = value -> access map[4].node -> removeNode(node) -> addToTail(node)
 * Don't need to update the hashmap as the node is the same object
 * Cool!
 *
 * This is the way it's normally done.
 *
*/