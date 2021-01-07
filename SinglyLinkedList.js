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
