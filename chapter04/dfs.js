const dfsSearch = root => {
    if (!root) {
        return;
    }
    visit(root);
    root.visited = true;
    for (let i = 0; i < root.adjacent.length; i++) {
        if (root.adjacent[i].visited === false) {
            search(root.adjacent[i])
        }
    }
}