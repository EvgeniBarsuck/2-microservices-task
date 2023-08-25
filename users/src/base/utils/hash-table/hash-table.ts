import * as crypto from 'crypto';
import { LinkedList } from '../linked-list/linked-list';

interface HashTableStorage<T> {
  [key: string]: LinkedList<T>;
}

export class HashTable<T> {
  private table: HashTableStorage<T>;

  constructor(table: HashTableStorage<T>) {
    this.table = table;
  }

  private hashFunction(value: string): string {
    return crypto.createHash('sha256', {}).update(value).digest('hex');
  }

  private findByKey(key: string) {
    if (this.table[key]) {
      return this.table[key];
    }

    return null;
  }

  public set(value: T, key: string) {
    const createHashFromKey = this.hashFunction(key);

    const checkIsisExist = this.findByKey(createHashFromKey);

    if (checkIsisExist) {
      checkIsisExist.addNode(value, key);

      return;
    }

    this.table[createHashFromKey] = new LinkedList<T>(value, key);
  }

  public get(key: string) {
    const createHashFromKey = this.hashFunction(key);

    return this.table[createHashFromKey].get(key);
  }
}
