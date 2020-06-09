const fs = require('fs');
var compress_images = require('compress-images'); 

var INPUT_path_to_your_images, OUTPUT_path;
 
INPUT_path_to_your_images = './images/**/*.{jpg,JPG,jpeg,JPEG,png,svg,gif}';
OUTPUT_path = './compressed-images/';


/*
*  Compress and store files in output directory
*/
compress_images(INPUT_path_to_your_images, OUTPUT_path, {compress_force: false, statistic: true, autoupdate: true}, false,
                                            {jpg: {engine: 'mozjpeg', command: ['-quality', '50']}},
                                            {png: {engine: 'pngquant', command: ['--quality=20-90']}},
                                            {svg: {engine: 'svgo', command: '--multipass'}},
                                            {gif: {engine: 'gifsicle', command: ['--colors', '64', '--use-col=web']}}, function(error, completed, statistic){
            console.log('-------------');
            console.log(error);
            console.log(completed);
            console.log(statistic);
            console.log('-------------');                                   
});



/**
 * Rename image files function
 * @param {*} oldName 
*

const renameImage = (oldName) => {
    var newName = f.slice(17)
    fs.rename(`./compressed-images/${oldName}`, `./compressed-images/${newName}`, (err) => {
        if(err) throw err
    } )
}

fs.readdir('./compressed-images', (err, files) => {
    if(err) throw err;
     files.map(renameImage)
})

 */
