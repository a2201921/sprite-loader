const { runLoaders } = require('loader-runner')
const path = require('path')
const fs = require('fs')

runLoaders({
    resource: './loaders/index.css',
    loaders: [path.resolve(__dirname, './loaders/sprite-loader.js')],
    readResource: fs.readFile.bind(fs),
}, (err, res) => {
    console.log(err ? err : res)
})