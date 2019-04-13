const { SyncLoopHook } = require('tapable');

const hook = new SyncLoopHook(['task']);

let idx = 0

hook.tap('prepare', (task) => {
    console.log(task, '-', 'prepare');
});
hook.tap('learn', (task) => {
    console.log(task, '-', 'learn');
    if (idx < 3) {
        idx += 1;
        return idx;
    } else {
        return undefined;
    }
});
hook.tap('summarize', (task) => {
    console.log(task, '-', 'summarize');
});

hook.call('learning webpack');