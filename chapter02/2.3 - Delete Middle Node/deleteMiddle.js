// Delete a node in the middle of a singly linked list given access only to that node.  

const deleteNode = middleNode => {
    if (middleNode === null || middleNode.next === null) {
        throw new Error("must be a middle node");
    }
    
    middleNode.val = middleNode.next.val;
    middleNode.next = middleNode.next.next;
}