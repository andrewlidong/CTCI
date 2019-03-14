// You have two numbers represented by a linked list where each node contains a single digit.The digits are in reverse order.Write a function that adds the two numbers and return the sum as a linked list backwards

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// Recurse with an adder.  max(L1 + L2) time, max(L1 + L2) space.  
const sumLists = (L1, L2) => {
    return addLists(L1, L2, 0);
}

const addLists = (L1, L2, carry) {
    if (L1 === null && L2 === null && carry === 0) {
        return null;
    }

    let result = new Node(null);
    let value = carry;
    if (L1 !== null) {
        value += L1.val;
    }
    if (L2 !== null) {
        value += L2.val;
    }

    result.val = value % 10;

    if (L1 !== null || L2 !== null) {
        let more = Node(addLists(L1 === null ? null : L1.next, L2 === null ? null : L2.next, value >= 10 ? 1 : 0));
        result.next = more;
    }
    
    return result;
}