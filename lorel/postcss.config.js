module.exports = {
  plugins: {
  	'autoprefixer':{
  		browsers: 'last 15 versions'
  	},
  	cssnano:{
  		preset: 'default',
        discardComments: {removeAll: true}
  	}
  }
}