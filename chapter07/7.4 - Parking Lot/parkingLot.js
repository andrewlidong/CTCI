class ParkingLot {
    constructor(spaces) { 
        this.capacity = spaces;
        this.carCount = 0;
        this.cars = {};
    }

    park(car) {
        if (this.carCount <= this.capacity) {
            if (this.cars[car.name] !== undefined) {
                console.log('car is already inside parking lot');
            } else {
                this.cars[car.name] = car;
                this.carCount++;
            }
        } else {
            console.log('the parking lot is full');
        }
    }

    exit(car) {
        if (this.carCount === 0) {
            console.log('there are no carsa here');
        } else if (this.cars[car.name] === undefined) {
            console.log('the car is not in the parking lot');
        } else {
            delete this.cars[car.name];
            this.carCount--;
        }
    }

    available() {
        return this.carCount < this.capacity;
    }
}