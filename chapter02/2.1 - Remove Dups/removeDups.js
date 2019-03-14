class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// O(N) time, O(N) space, iterate through and push into a set.  
const removeDups = head => {
    let dupChecker = new Set();
    let previous = Node(null);
    while (head !== null) {
        if (dupChecker.has(head.val)) {
            previous.next = head.next;
        } else {
            dupChecker.add(head.val);
            previous = head;
        }
        head = head.next;
    }
}

// O(N^2) time, O(1) space, send a runner for each node value looking for duplicates.  
const removeDups2 = head => {
    let current = head;
    while (current !== null) {
        let runner = current;
        while (runner.next !== null) {
            if (runner.next.val === current.val) {
                runner.next = runner.next.next;
            } else {
                runner = runner.next
            }
        }
        current = current.next;
    }
}