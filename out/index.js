var map = [
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];
var canMove = function (m, sx, sy, tx, ty, speed) {
    var h = 7, w = 14;
    var dx = [0, -1, 0, 1], dy = [-1, 0, 1, 0];
    var visited = [];
    var q = [];
    q.push({ x: sx, y: sy, d: 0 });
    while (q && q.length > 0) {
        var c = q.shift();
        visited.push(c);
        for (var i = 0; i < 4; i++) {
            var nx = c.x + dx[i], ny = c.y + dy[i];
            var nc = { x: nx, y: ny, d: c.d + 1 };
            if (!existed(q, nc) &&
                !existed(visited, nc) &&
                nx >= 0 &&
                nx < w &&
                ny >= 0 &&
                ny < h &&
                m[ny][nx] == 0) {
                q.push(nc);
            }
        }
    }
    return existed(visited, { x: tx, y: ty }).d <= speed;
};
var existed = function (ar, c) {
    for (var i = 0; i < ar.length; i++) {
        if (ar[i].x == c.x && ar[i].y == c.y)
            return ar[i];
    }
    return null;
};
console.log(canMove(map, 13, 0, 0, 5, 18));
// console.log(canMove(map, 0, 0, 4, 4, 9));
// function validate(target: any, position: any, map: number[][], move: number) {
//   const { x, y } = target; // target to move to this position
//   const { x: cx, y: cy } = position; // postion of character
//   if (Math.abs(cx - x) + Math.abs(cy - y) - move > 0) return false; // shortest distance > move
//   if (move < 0 || map[y][x] !== 0 || cx < 0 || cx >= 14 || cy < 0 || cy >= 7)
//     return false; // out boundary or encounter obstacle
//   if (x === cx && y === cy) return true;
//   const dx = [0, 1, 0, -1];
//   const dy = [1, 0, -1, 0];
//   for (const i in dx) {
//     map[cy][cx] = -1;
//     const nCx = cx + dx[i];
//     const nCy = cy + dy[i];
//     if (nCx < 0 || nCx >= 14 || nCy < 0 || nCy >= 7 || map[nCy][nCx] !== 0)
//       continue; // out boundary or encounter obstacle
//     const newMap = map.map((m) => m.slice()); // clone the new map avoid references
//     if (validate(target, { x: nCx, y: nCy }, newMap, move - 1)) return true; // recursion validate
//   }
//   return false;
// }
// console.log(validate({ x: 0, y: 5 }, { x: 13, y: 0 }, map, 18));
//# sourceMappingURL=index.js.map