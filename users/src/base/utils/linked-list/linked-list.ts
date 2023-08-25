export class LinkedList<T> {
  private value: Node<T>;

  constructor(value: T, key: string) {
    this.value = new Node(value, key);
  }

  private getLast(): Node<T> {
    let node = this.value;

    while (node.next) {
      node = node.next;
    }

    return node;
  }

  public addNode(value: T, key: string) {
    const lastNode = this.getLast();

    lastNode.next = new Node(value, key);
  }

  public get(key: string): Node<T> | null {
    let node = this.value;
    let element = null;

    while (node && !element) {
      if (node.key === key) {
        element = node;
      } else {
        node = node.next;
      }
    }

    return element;
  }
}

class Node<T> {
  public value: T;
  public key: string;
  public next: Node<T> | null;

  constructor(value: T, key: string) {
    this.value = value;
    this.key = key;
  }
}
