const path = require('path');

module.exports = {
    entry: './src/index.js', // Giriş noktası dosyanızı belirtin
    output: {
        path: path.resolve(__dirname, 'dist'), // Çıktı dizini
        filename: 'bundle.js' // Çıktı dosyası adı
    },
    module: {
        rules: [
            {
                test: /\.json$/, // JSON dosyalarını tanımlayan test
                use: 'json-loader', // json-loader'ı kullan
                type: 'javascript/auto' // Ek bir yapılandırma
            }
        ]
    }
};
