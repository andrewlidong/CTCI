class AnimalShelter {
    constructor() {
        this._dogs = [];
        this._cats = [];
        this._id = 0;
    }

    enqueueCat(name) {
        this._cats.push({
            name: name,
            id: this._id++
        });
    }

    enqueueDog(name) {
        this._dogs.push({
            name: name,
            id: this._id++
        });
    }

    dequeueAny() {
        let dogId = this._dogs.length > 0 ? this._dogs[0].id : Number.POSITIVE_INFINITY;
        let catId = this._cats.length > 0 ? this._cats[0].id : Number.POSITIVE_INFINITY;

        if (dogId !== Number.POSITIVE_INFINITY || catId !== Number.POSITIVE_INFINITY) {
            return dogId < CatId ? this.dequeueDog() : this.dequeueCat();
        }
    }

    dequeueCat() {
        return this._cats.shift().name;
    }

    dequeueDog() {
        return this._dogs.shift().name;
    }
}