class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // Insert at the end
    push(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length += 1;
        return this;
    }

    // Remove from the end
    pop() {
        if (!this.head) {
            return;
        } else if (this.head == this.tail) {
            this.head = this.tail = null;
            this.length = 0;
            return;
        }
        let secondLastNode = null;
        let currentNode = this.head;
        while (currentNode != this.tail) {
            secondLastNode = currentNode;
            currentNode = currentNode.next;
        }
        const temp = this.tail;
        secondLastNode.next = null;
        this.tail = secondLastNode;
        this.length -= 1;
        return temp;
    }

    // Remove from the beginning
    shift() {
        if (!this.head) {
            return;
        } else if (this.head == this.tail) {
            this.head = this.tail = null;
            this.length = 0;
            return;
        }
        const temp = this.head;
        this.head = this.head.next;
        this.length -= 1;
        return temp;
    }

    // Insert at the beginning
    unshift(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    // Get the node value at a specific index
    get(index) {
        if (index < 0 || index >= this.length) {
            return 'not found (Index out of bound)'
        }
        let counter = 0;
        let node = this.head;
        while(counter < index) {
            node = node.next;
            counter++;
        }
        return node;
    }

    // Set the index with newValue
    set(index, newValue) {
        const foundNode = this.get(index);
        // if (typeof foundNode === 'object') {
        if (foundNode.constructor === Node) {
            foundNode.value = newValue;
            return true
        }
        return false;
    }

    // Insert the node at a specific index
    insert(index, value) {
        if (index < 0 || index > this.length) {
            return false;
        }
        if (index === 0) {
            this.unshift(value);
        } else if (index === this.length) {
            this.push(value);
        } else {
            const previousNode = this.get(index-1);
            const newNode = new Node(value);
            newNode.next = previousNode.next;
            previousNode.next = newNode;
            this.length++;
        }
        return true;
    }

    // Remove a node from a specific index
    remove(index) {
        if (index < 0 || index >= this.length) {
            return false;
        }
        if (index === 0) {
            this.shift();
        } else if (index === (this.length-1)) {
            this.pop();
        } else {
            const previousNode = this.get(index-1);
            const removed = previousNode.next;
            previousNode.next = removed.next;
            this.length--;
        }
        return true;
    }

    // Reverse the whole linked list
    /** Example
     * length = 5 -> 3
     *                     31 -> 45 -> 67 -> 89 -> 90
     *     counter = 0     c  <- n     nn 
     *     counter = 1           c  <- n     nn
     *     counter = 2                 c  <- n     nn
     *     counter = 3                       c  <- n     nn
     *     counter = 4                             c     n     nn (Condition unsatisfied, break loop) 
     */
    reverse() {
        if (!this.head || this.head === this.tail) {
            return false;
        } 

        let currentNode = this.head;
        this.head = this.tail;
        this.tail = currentNode;

        let nextNode;
        let previousNode = null;
        let counter = 0;

        while(counter < this.length) {
            nextNode = currentNode.next;
            currentNode.next = previousNode;
            previousNode = currentNode;
            currentNode = nextNode;
            counter++;
        } counter++;

        return true;
    }
   
}

const list = new SinglyLinkedList();
list.push('Hi!');
list.push('How are ya?');
list.push('What you doing?');
list.push('Is everything ok?');
list.push('All well?');

// console.log('Head: ', list.head);
// console.log('Tail: ', list.tail);

// console.log('List after pushing items: ', list);

// list.pop();
// console.log('List after a pop: ', list);

// list.shift();
// console.log('List after shifting items: ', list);

// list.unshift('Hey!');
// console.log('List after unshifting items: ', list);

// const index = 0;
// console.log(`Item at index ${index} in the list is:`, list.get(index));

// const index = 9;
// const newValue = ':)';
// console.log(`Update successful at index ${index}:`, list.set(index, newValue));

// const index = -8;
// const value = '<3';
// console.log(`Insert successful at index ${index}:`, list.insert(index, value));

// const index = 2;
// console.log(`Remove successful at index ${index}:`, list.remove(index));

console.log('List reverse successful:', list.reverse());
