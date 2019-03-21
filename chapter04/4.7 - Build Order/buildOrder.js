const buildOrder = (projects, dependencies) => {
    let adj = {}, finished = [], discovered = new Set(), path = new Set();

    projects.forEach(project => adj[project] = []);
    dependencies.forEach(edge => adj[edge[1]].push(edge[0]));

    projects.forEach(project => topologicalSort(adj, discovered, finished, path, project));

    return finished.reverse();
}

const topologicalSort = (adj, discovered, finished, path, project) => {
    if (discovered.has(project)) {
        return;
    }

    discovered.add(project);
    path.add(project);
    for (let neighbour of adj[project]) {
        if (path.has(neighbour)) {
            throw new Error('dependencies are cyclic');
        }

        topologicalSort(adj, discovered, finished, path, neighbour);
    }
    path.delete(project);
    finished.push(project);
}