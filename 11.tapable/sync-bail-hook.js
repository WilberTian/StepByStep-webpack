const {SyncBailHook} = require('tapable');

const hook = new SyncBailHook(['name']);

hook.tap('prepare', (task) => {
    console.log(task, '-', 'prepare');
});
hook.tap('learn', (task) => {
    console.log(task, '-', 'learn');
    return 'skip follwing step'
});
hook.tap('summarize', (task) => {
    console.log(task, '-', 'summarize');
});

hook.call('learning webpack');