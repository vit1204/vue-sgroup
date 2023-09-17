module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      'import.meta.env.AWS_API': JSON.stringify(process.env.AWS_API),
      // ...
    }),
  ],
};
