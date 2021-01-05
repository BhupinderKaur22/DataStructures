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
        secondLastNode.next = null;
        this.tail = secondLastNode;
        this.length -= 1;
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

console.log('List after pushing items: ', list);
list.pop();
console.log('List after a pop: ', list);