const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const path = require('path');

module.exports = (env, { mode }) => ({
	// Fichier d'entrée :
	entry: './src/app.js',
	// Fichier de sortie :
	output: {
		path: path.resolve(__dirname, './build'),
		filename: 'app.bundle.js',
		// configuration du fast-refresh [1/4]
		// pour que webpack serve publie le js dans un sous-dossier fictif build
		publicPath: '/build/',
	},
	// compatibilité anciens navigateurs (si besoin du support de IE11 ou android 4.4)
	// NB: configuration du fast-refresh [2/4] :
	// pour que webpack serve fonctionne il ne faut pas activer cette option en mode development
	target: mode === 'production' ? ['web', 'es5'] : undefined,
	// connexion webpack <-> babel :
	module: {
		rules: [
			{
				test: /\.js$/, // tous les fichiers js ...
				exclude: /node_modules/, // ... sauf le dossier node_modules ...
				use: {
					// ... seront compilés par babel !
					loader: 'babel-loader',
				},
			},
		],
	},
	// configuration du fast refresh [3/4]
	plugins: [mode === 'development' && new ReactRefreshWebpackPlugin()].filter(
		Boolean
	),
	// configuration du fast-refresh [4/4]
	// choix du port du serveur webpack qui va servir notre application
	devServer: {
		port: 8000,
	},
	devtool: 'eval-cheap-module-source-map',
});
