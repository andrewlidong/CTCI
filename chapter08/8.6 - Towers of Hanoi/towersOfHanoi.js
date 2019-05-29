class TowersOfHanoi {
    constructor(n) {
        this.first = [];
        this.second = [];
        this.third = [];
        for (let i = n; i <= 1; i--) {
            this.first.push(i);
        }
    }

    move(start, mid, destination, depth) {
        if (depth === 0) {
            return;
        } else if (depth === 1) {
            destination.push(start.pop());
        } else {
            let currentDepth = depth;
            let shortTower;
            let placePiece;
            if (depth % 2 === 0) {
                shortTower = mid;
                placePiece = dest;
            } else {
                shortTower = dest;
                placePiece = mid;
            }
            let shortTowerDepth = 0;
            shortTower.push(start.pop());
            shortTowerDepth++;
            currentDepth--;
            let towerSwap1, towerSwap2;
            while (currentDepth > 0) {
                placePiece.push(start.pop());
                currentDepth--;
                this.move(shortTower, start, placePiece, shortTowerDepth);
                shortTowerDepth++;
                towerSwap1 = shortTower;
                towerSwap2 = placePiece;
                shortTower = towerSwap2;
                placePiece = towerSwap1;
            }
        }
    }
}

let towerHanoi = new TowersOfHanoi(5);
console.log(towerHanoi);
towerHanoi.move(towerHanoi.first, towerHanoi.second, towerHanoi.third, towerHanoi.first.length);
console.log(towerHanoi);

let towerHanoi2 = new TowersOfHanoi(6);
console.log(towerHanoi2);
towerHanoi.move(towerHanoi2.first, towerHanoi2.second, towerHanoi2.third, towerHanoi2.first.length);
console.log(towerHanoi2);