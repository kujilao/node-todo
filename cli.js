#!/usr/bin/evn node
const { Command } = require('commander')
const program = new Command()
const api = require('./index')


program
    .option('--xxx')

program.command('add')
    .description('add a task')
    .argument('<strings...>', 'one or more strings')
    .action((strings, options) => {
        const words = strings.join(options.separator)
        api.add(words).then(() => { console.log('添加成功') }, () => { '添加失败' })
    });
program.command('clear')
    .description('clear all tasks')
    .action(() => {
        api.clear().then(() => { console.log('清除成功') }, () => { console.log('清除失败'); })
    });
if (process.argv.length < 3)
    api.showAll()
else
    program.parse(process.argv)
