// Find the kth to last element of a singly linked list

// O(n) time, O(1) space.  Send two runners, one k apart.  
const kthLast = (head, k) => {
    let slow = head;
    let fast = head;

    for (let i = 0; i < k; i++) {
        if (fast === null) throw new Error("k is too big");
        fast = fast.next;
    }

    while (fast !== null) {
        fast = fast.next;
        slow = slow.next;
    }
    return slow;
}