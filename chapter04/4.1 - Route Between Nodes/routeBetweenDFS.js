const routeBetweenDFS = (graph, S, T) => {
    return dfs(graph, new Set(), S, T);
}

const dfs = (graph, discovered, S, T) => {
    if (S === T) {
        return true;
    }

    discovered.add(S);
    for (let neighbor of graph[S]) {
        if (!discovered.has(neighbor)) {
            if (dfs(graph, discovered, neighbor, T)) {
                return true;
            }
        }
    }
    return false;
}