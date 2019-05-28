class LinkedList {
    constructor(key, value) {
        this.keyValuePair = [key, value];
        this.next = null;
    }

    insert(key, value) {
        if (this.next === null) {
            this.next = new LinkedList(key, value);
        } else {
            this.next.insert(key, value);
        }
    }

    find(key) {
        if (this.keyValuePair[0] === key) {
            return this.keyValuePair[1];
        } else if (this.next !== null) {
            return this.next.find(key);
        } else {
            return null;
        }
    }

    replace(key, value) {
        if (this,keyValuePair[0] === key) {
            this.keyValuePair = [key, value];
        } else if (this.next !== null) {
            this.next.replace(key);
        }
    }

    delete(key) {
        if (this.keyValuePair[0] === key) {
            // need to delete node
        } else if (this.next !== null) {
            this.next.delete(key);
        }
    }
}

const getHash = function(key, limit) {
    if (typeof key !== 'string') {
        throw 'error, key is not a string';
    } else {
        let answer = 0;
        for (let i = 0; i < key.length; i++) {
            answer += key[i];
        }
        return answer % limit;
    }
};

class HashTable {
    constructor() {
        this.array = [];
        this.limit = 8;
    }

    insert(key, value) {
        let hash = getHash(key, this.limit);
        if (this.array[hash] === undefined) {
            this.array[hash] = new LinkedList(key, value);
        } else {
            this.array[hash].insert(key, value);
        }
    }

    retrieve(key) {
        let hash = getHash(key, this.limit);
        if (this.array[hash] === undefined) {
            throw 'key does not exist';
        } else {
            return this.array[hash].find(key);
        }
    }

    delete(key) {
        let hash = getHash(key, this.limit);
        if (this.array[hash] === undefined) {
            throw 'key does not exist';
        } else {
            this.array[hash].delete(key);
        }
    }
}