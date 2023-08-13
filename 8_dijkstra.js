// Поиск кратчайшего пути Алгоритм Дейкстры!

function dijkstra(graph, start, end) {
    let distances = {};
    let path = {};
    let visited = new Set();

    for (const key in graph) {
        if (key !== start) {
            distances[key] = Infinity;
        } else {
            distances[start] = 0;
        }
    }
    while (!visited.has(end)) {
        let lowestDistance = Infinity;
        let node = null;

        for (const key in distances) {
            if (lowestDistance > distances[key] && !visited.has(key)) {
                lowestDistance = distances[key];
                node = key;
            }
        }
        let neighbors = graph[node];
        for (const key in neighbors) {
            const newDistance = distances[node] + neighbors[key];
            if (newDistance < distances[key]) {
                distances[key] = newDistance;
                path[key] = node;
            }
        }
        visited.add(node);
    }

    const shortPath = [];
    let current = end;
    while (current !== start) {
        shortPath.unshift(current);
        current = path[current];
    }
    shortPath.unshift(start);
    return shortPath;
}

const graph = {
    A: { B: 20, J: 8 },
    B: { A: 20, C: 2 },
    C: { B: 2, D: 3 },
    D: { C: 3, I: 4 },
    I: { D: 4, E: 4 },
    E: { I: 4, Z: 1 },
    Z: { K: 1, E: 1 },
    K: { J: 6, Z: 1 },
    J: { A: 8, K: 6 },
};
// console.log(dijkstra(graph, 'A', 'I'));

function allSortDistances(graph, start) {
    let distances = {};
    let visited = new Set();

    for (const key in graph) {
        if (key !== start) {
            distances[key] = Infinity;
        } else {
            distances[start] = 0;
        }
    }

    while (visited.size !== Object.keys(graph).length) {
        let lowestDistance = Infinity;
        let node = null;
        for (const key in distances) {
            if (lowestDistance > distances[key] && !visited.has(key)) {
                lowestDistance = distances[key];
                node = key;
            }
        }
        const neighbors = graph[node];
        for (const key in neighbors) {
            const newDistance = distances[node] + neighbors[key];
            if (newDistance < distances[key]) {
                distances[key] = newDistance;
            }
        }
        visited.add(node);
    }
    return distances;
}

// console.log(allSortDistances(graph, 'A'));
