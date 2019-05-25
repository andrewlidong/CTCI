class Emloyee {
    constructor(name) {
        this.name = name;
    }

    dispatch(call, queue) {
        let context = this;
        setTimeout(function() {
            queue.add(context);
            cconsole.log(`adding ${context.name} back to queue`);
        }, call.time);
    }
}

class Call {
    constructor(time) {
        this.time = time;
    }
}

class CallCenter {
    constructor() {
        this.respondentQ = new Queue();
        this.managerQ = new Queue();
        this.directorQ = new Queue();
        this.open = false;
        this.init = false;
    }

    start() {
        if (this.init) {
            console.log('already initialized');
            return;
        }
        // 3 employees of each type
        for (let i = 0; i < 3; i++) {
            this.respondentQ.add(new Employee(`resp${i}`));
            this.managerQ.add(new Employee(`manager${i}`));
            this.directorQ.add(new Employee(`director${i}`));
        }
        this.init = true;
    }

    dispatchCall(call) {
        let employee;
        if (!this.respondentQ.isEmpty()) {
            employee = this.respondentQ.remove();
            console.log(employee, 'will be deployed');
            employee.dispatch(call, this.respondentQ);
            console.log('a respondent will be taking your call!');
        } else if (!this.managerQ.isEmpty()) {
            employee = this.managerQ.remove();
            console.log(employee, 'will be deployed');
            employee.dispatch(call, this.managerQ);
            console.log('a manager will be taking your call!');
        } else if (!this.directorQ.isEmpty()) {
            employee = this.directorQ.remove();
            console.log(employee, 'will be deployed');
            employee.dispatch(call, this.directorQ);
            console.log('a director will be taking your call!');
        } else {
            console.log('There is no available staff to take your call');
        }
    }
}

let cc = new CallCenter();
cc.start();