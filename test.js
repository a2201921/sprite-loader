const Spritesmith = require('spritesmith')
const fs = require('fs')
const path = require('path')

const spirtes = [path.join(__dirname,'./loaders/image/icon1.png'), path.join(__dirname,'./loaders/image/icon2.png')]

Spritesmith.run({ src: spirtes }, (err, result) => {
    console.log(err)
    console.log(result.image)
    console.log(result.coordinates)
    console.log(result.properties)
    fs.writeFileSync(path.join(__dirname,'dist/sprite.jpg'),result.image)
})
