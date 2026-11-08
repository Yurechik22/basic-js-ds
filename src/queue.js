// const { ListNode } = require('../extensions/list-node.js');
 
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = null; // начало очереди (отсюда забираем)
    this.tail = null; // конец очереди (сюда добавляем)
  }
 
  getUnderlyingList() {
    return this.head;
  }
 
  enqueue(value) {
    // узел той же формы, что ListNode: { value, next }.
    // Обычный объект, потому что тесты сравнивают через deepStrictEqual,
    // а он проверяет и класс объекта.
    const node = { value, next: null };
 
    if (!this.head) {
      // очередь пустая: новый узел и начало, и конец
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node; // цепляем за последним
      this.tail = node;      // теперь он последний
    }
  }
 
  dequeue() {
    if (!this.head) return undefined;
 
    const value = this.head.value;
    this.head = this.head.next; // сдвигаем начало на следующий узел
 
    if (!this.head) this.tail = null; // очередь опустела
 
    return value;
  }
}
 
module.exports = {
  Queue
};
 