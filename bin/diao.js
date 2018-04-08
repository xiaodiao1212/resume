#!/usr/bin/env node
var program = require('commander');
var color = require('colors-cli/toxic')
var appInfo = require('./../package.json');
var resume = require('./../lib/resume.js');
var info = require('./../lib/info.json');
var basicinfo = info.basicinfo;//基本信息数据：
var log = console.log;

program
    // .allowUnknownOption()//不报错误
    .version(appInfo.version)
    .usage('rs -[options] <package>')
    .parse(process.argv);

program
    .command('resume [cmd]')
    .alias('rs')
    .description('这里是我的简历详情！'.x10)
    .option("-b, --basicinfo [type]", "基本信息")
    .option("-e, --education [type]", "教育经历")
    .option("-s, --skill   [type]", "技能")
    .option("-i, --interest   [type]", "兴趣爱好")
    .action(function(cmd, options){
        var nm = typeof options.name=='string'?options.name:""
        // log('resume "%s" 使用 %s 模式', cmd, nm);
        // log("test:",program);

        resume(cmd,options);

    }).on('--help', function() {

        // 图片文字 http://ascii.mastervb.net/text_to_ascii.php

        // log('Ⓦ Ⓒ Ⓙ');
        log('                                 '.x10);
        log('                                 '.x10);
        log(' _____   _____  ______   ______  '.x10);
        log('| | \ \   | |  | |  | | / |  | \ '.x10);
        log('| |  | |  | |  | |__| | | |  | | '.x10);
        log('|_|_/_/  _|_|_ |_|  |_| \_|__|_/ '.x10);
        log('                                 '.x10);
        log('                                 '.x10);

        // log(' __     __     ______       __    ');
        // log('/\\ \\  _ \\ \\   /\\  ___\\     /\\ \\   ');
        // log('\\ \\ \\/ ".\\ \\  \\ \\ \\____   _\\_\\ \\  ');
        // log(' \\ \\__/".~\\_\\  \\ \\_____\\ /\\_____\\ ');
        // log('  \\/_/   \\/_/   \\/_____/ \\/_____/ ');


        // log('  basicinfo 说明:');
        log();
        log('    rs  预览简历');
        log();
        log('    -b, --basicinfo 基本信息');
        for (var a in basicinfo.data) {
            log("       "+ a + ': ' + basicinfo.data[a].info)
        };
        log('    -e, --education 教育经历');
        log('    -s, --skill 教育经历');
        log('    -i, --interest 教育经历');
        log();
    });

//默认不传参数输出help
if (!process.argv[2]) {
    program.help();
    console.log("走没有这个");
}

program.parse(process.argv);