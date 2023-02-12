const Queue = require('./queue');

describe('Queue', () => {
let queue;

beforeEach(() => {
queue = new Queue();
});

test('should be empty initially', () => {
expect(queue.isEmpty()).toBe(true);
});

test('enqueue should add a node to the end of the queue', () => {
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
expect(queue.peekQueue()).toBe(1);
});

test('dequeue should remove the node from the front of the queue', () => {
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
expect(queue.dequeue()).toBe(1);
expect(queue.dequeue()).toBe(2);
expect(queue.dequeue()).toBe(3);
expect(queue.isEmpty()).toBe(true);
});

test('peekQueue should return the value of the node at the front of the queue', () => {
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
expect(queue.peekQueue()).toBe(1);
expect(queue.peekQueue()).toBe(1);
});
});