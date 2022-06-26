import { BehaviorSubject, Observable } from 'rxjs';
export class Queue {
    private arr: any = [];
    private queueSubject = new BehaviorSubject(null);
    queuePubSub = this.queueSubject as Observable<any>;
    enqueue<Type>(item: unknown): void {
        this.arr.push(item);
        this.queueSubject.next(item);
    }

    peek<T>(): T {
        return this.arr[0];
    }
    dequeue<T>(): T {
        const res = this.arr.shift();
        return res;
    }

    removeSubscription(): void {
        this.queueSubject.complete();
    }
}