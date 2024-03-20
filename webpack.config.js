const path = require("path");

module.exports = {
    entry: "./src/Components/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
        ],
    },
    watch: true,
    watchOptions: {
        aggregateTimeout: 500,
        ignored: /node_modules/,
        poll: 1000,
    },
    devtool: "source-map",
};
