// Граф - это абстрактная математическая структура, представляющая собой совокупность
// узлов (вершин) и связей между ними (ребра). Графы используются для моделирования
// различных видов взаимосвязей между объектами или сущностями.
const graph = {};
graph.a = ['b', 'c'];
graph.b = ['f'];
graph.c = ['d', 'e'];
graph.d = ['f'];
graph.e = ['f'];
graph.f = ['g'];

// function breadthSearch(graph, start, end) {
//     let queue = [];
//     queue.push(start);
//     while (queue.length > 0) {
//         const current = queue.shift();
//         if (!graph[current]) {
//             graph[current] = [];
//         }
//         if (graph[current].includes(end)) {
//             return true;
//         } else {
//             queue = [...queue, ...graph[current]];
//         }
//     }
// }

function breadthSearch(graph, start, end) {
    let queue = [];
    queue.push(start);
    while (queue.length > 0) {
        const curretn = queue.shift();
        if (!graph[curretn]) {
            graph[curretn] = [];
        }
        if (graph[curretn].includes(end)) {
            return true;
        } else {
            queue = [...queue, ...graph[curretn]];
        }
    }
}

console.log(breadthSearch(graph, 'a', 'g'));
