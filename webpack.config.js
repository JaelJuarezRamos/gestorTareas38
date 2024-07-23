const path = require('path');

module.exports = { 
    entry: './src/index.js', //punto de entrada de tu application
    output: {
        filename: 'bundle.js',//nombre del archivo de salida
        path: path.resolve(__dirname, 'dist'), //carpeta de salida     
    },
    module: {
        rules: [
            {
                test: /\.css$/, //regex para identificar archivos CSS
                use: ['style-loader', 'css-loader'], //louder para procesar archivos CSS
            },
            {
                test: /\.js$/, //regex para identificar archivos js
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader', //loader para transpilar JS
                    options: {
                        presets: ['@babel/preset-env'], //preset para transformar codigo para navegadores más antiguos
                    }
                }
            }
        ]
    },            
    devtool: 'source-map', // generar source-maps  para facilitar la depuracion
    devServer:{
        contentBase: path.resolve(__dirname, 'dist'), // carpeta desde donde obtenemos
        compress: true, // habilitamos comprecion gzip
        port: 9000 // puerto del servidor de desarrollo
        }
}