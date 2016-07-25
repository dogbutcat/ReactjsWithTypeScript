/**
 * Created by oliver on 7/23/16.
 */
module.exports = {
    entry: ['./src/app.tsx'],
    output: {
        filename: './public/bundle.js'
    },
    resolve:{
        extensions:['','.ts','.tsx','.js']
    },
    module:{
        loaders:[
            {test:/\.tsx?$/,loader:'ts'}]
    }
};