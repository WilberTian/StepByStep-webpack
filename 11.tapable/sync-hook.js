const {SyncHook} = require('tapable');

const hook = new SyncHook(['task']);

hook.tap('prepare', (task) => {
    console.log(task, '-', 'prepare');
});
hook.tap('learn', (task) => {
    console.log(task, '-', 'learn');
});
hook.tap('summarize', (task) => {
    console.log(task, '-', 'summarize');
});

hook.call('learning webpack');