const cheerio = require('cheerio');
const request = require('request');

const list = [];

request('https://www.firstpost.com/', (err, response, html) => {
    if(!err && response.statusCode == 200) {
        const $ = cheerio.load(html);
        $('.big-thumb').each((i, el) => {
            const obj = {};
            obj.link = $(el).children('.thumb-img').attr('href');
            obj.img = $(el).children('.thumb-img').children('img').attr('src');
            obj.content = $(el).children('.title-wrap').children('.copy').text();
            list.push(obj);
        })
        console.log(list);
    }
})
