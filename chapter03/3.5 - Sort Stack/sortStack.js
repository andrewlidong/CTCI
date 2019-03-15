const sortStack = stack => {
    let tempStack = [];
    tempStack.push(stack.pop());
    while (!isEmpty(stack)) {
        let curr = stack.pop();
        let count = 0;

        while (!isEmpty(tempStack) && curr < peek(tempStack)) {
            stack.push(tempStack.pop());
            count++;
        }
        tempStack.push(curr);
        for (let i = 0; i < count; i++) {
            tempStack.push(stack.pop());
        }
    }

    while (!isEmpty(tempStack)) {
        stack.push(tempStack.pop());
    }

    return stack;
}

const peek = stack => {
    return stack[stack.length - 1];
}

const isEmpty = stack => {
    return stack.length === 0;
}