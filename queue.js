//@ts-check

export function createQueue() {
    /**
     * 
     * @type {(() => void)[]}
     */
    const queue = [];

    /**
     * 
     * @param {() => void} callback 
     */
    async function add(callback) { await queue.push(callback); }

    /**
     * 
     * @param {() => void} callback 
     */
    async function cancel(callback) {
        for (let x = 0; x < queue.length; x++)
            if (callback === queue[x])
                await queue.splice(x, 1); return;
    }

    async function execute() { 
        if (queue.length) {
            const callback = queue[0];
            await queue.splice(0, 1);
            callback();
        }
    }

    return {
        add,
        cancel,
        execute
    };
}