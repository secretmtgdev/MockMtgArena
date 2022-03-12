// This article teaches you an in-depth approach to creating an event emitter
// It is similar to the way event emitters work in AngularJS
// https://tinyurl.com/2p9ambxy
class EventEmitter {
    // Creates a hash of events to listeners
    private _events: Map<string, Array<Function>>;

    constructor() {
        this._events = new Map<string, Array<Function>>();
    }

    on(name: string, listener: Function) {
        // The current event doesn't exist yet
        if(!this._events[name]) {
            this._events[name] = new Array<Function>();
        }

        this._events[name].push(listener);        
    }

    removeListener(name: string, newListener: Function) {
        if(!this._events[name]) {
            throw new Error(`Can't remove a listener. Event "${name}" doesn't exist.`);
        }

        this._events[name] = this._events[name].filter((listener: Function) => listener !== newListener);
    }

    emit(name: string, data) {
        if(!this._events[name]) {
            throw new Error(`Can't emit the event. The event "${name}" doesn't exist.`);
        }

        this._events[name].forEach((callback: Function) => {
            callback(data);
        })
    }
}

export default EventEmitter;