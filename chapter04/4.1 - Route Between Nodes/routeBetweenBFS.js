const routeBetweenBFS = (graph, S, T) => {
    let discovered = new Set();
    let queue = [S];

    while (queue.length > 0) {
        let node = queue.shift();
        for (let neighbor of graph[node]) {
            if (!discovered.has(neighbor)) {
                if (neighbor === T) {
                    return true;
                }
                discovered.add(neighbor);
                queue.push(neighbor);
            }
        }
    }
    return false;
}