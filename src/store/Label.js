import { EventEmitter } from 'fbemitter';

class LabelEmitter extends EventEmitter {
    addListener(eventType, callback) {
        if (this.listeners(eventType).length === 0) {
            super.addListener(eventType, callback);
        }
    }
}

const labelEmitter = new LabelEmitter();

export default labelEmitter;