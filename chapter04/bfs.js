const bfsSearch = root => {
    let queue = new queue();
    root.marked = true;
    queue.enqueue(root);

    while (!queue.isEmpty()) {
        r = queue.dequeue();
        visit(r);
        for (let i = 0; i < r.adjacent.length; i++) {
            let n = r.adjacent[i];
            if (n.marked === false) {
                n.marked = true;
                queue.enqueue(n);
            }
        }
    }
}