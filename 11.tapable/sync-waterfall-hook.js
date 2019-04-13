const {SyncWaterfallHook} = require('tapable');

const hook = new SyncWaterfallHook(['name']);

hook.tap('prepare', (task) => {
    console.log(task);
    console.log('start prepare');
    return 'prepare';
});
hook.tap('learn', (task) => {
    console.log(task, 'done')
    console.log('start learn');
    return 'learn';
});
hook.tap('summarize', (task) => {
    console.log(task, 'done')
    console.log('start summarize');
    console.log('summarize done');
});

hook.call('learning webpack');