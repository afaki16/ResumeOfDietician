export default {
  publicPath: '/',
  chainWebpack: config => {
    config.module
      .rule('fonts')
      .test(/\.(woff2?|ttf|eot|otf)$/)
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: 'fonts/[name].[ext]',
      })
  },
}
