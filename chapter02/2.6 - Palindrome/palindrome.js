// Implement a function to check if a linked list is a palindrome

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.stack = [];
    }

    push(val) {
        this.stack.push(val);
    }

    pop() {
        return this.stack.pop();
    }

    peek() {
        return this.stack[this.stack.length - 1];
    }

    isEmpty() {
        return this.stack.length === 0;
    }

    printStack() {
        for (let i = this.stack.length - 1; i >= 0; i--) {
            console.log(this.stack[i]);
        }
    }
}

// Reverse the node and check for equality. O(N) time, O(N) space.   
const isPalindrome = head => {
    let reversed = Node(reverseAndClone(head));
    return isEqual(head, reversed);
}

// O(N) time, O(N) space.  
const reverseAndClone = node => {
    let head = Node(null);
    while (node !== null) {
        let n = Node(node.val);
        n.next = head;
        head = n;
        node = node.next;
    }
    return head;
}

// O(N) time, O(1) space
const isEqual = (L1, L2) => {
    while (L1 !== null && L2 !== null) {
        if (L1.val !== L2.val) {
            return false;
        }
        L1 = L1.next;
        L2 = L2.next;
    }
    return L1 === null && L2 === null;
}

const isPalindrome2 = head => {
    let slow = Node(head.val);
    let fast = Node(head.val);
    let stack = new Stack();

    while (fast !== null && fast.next !== null) {
        stack.push(slow.val);
        slow = slow.next;
        fast = fast.next.next;
    }

    // Accounts for an odd number of nodes
    if (fast !== null) {
        slow = slow.next;
    }

    while (slow !== null) {
        let top = stack.pop();
        if (top !== slow.val) {
            return false;
        }
        slow = slow.next;
    }
    return true;
}
