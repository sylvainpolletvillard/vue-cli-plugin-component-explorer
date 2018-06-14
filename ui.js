const findFiles = require('glob')

module.exports = api => {
	console.log('ui.js')

	api.addView({
		id: 'project-components',
		name: 'project-components',
		icon: 'folder_special',
		tooltip: 'Composants'
	})

	api.addClientAddon({
		id: 'vue-cli-plugin-component-explorer',
		path: 'vue-cli-plugin-component-explorer/explorer/dist/'
	})

	try {
		// For each matching file name...
		findFiles('src/**/*.@(vue|jsx)', { cwd: api.getCwd() }, (err, files) => {
			if (err) {
				console.log('ERROR ', err)
			}

			const components = files.map(path => {
				const name = path
					.split('/')
					.pop()
					.replace(/\.\w+$/, '') // Remove the file extension from the end

				const folder = path
					.split('/')
					.slice(0, -1) // remove fileName
					.join('/')
					.replace(/^\.\//, '') // Remove the "./" from the beginning

				return { name, folder, path }
			})

			api.setSharedData('project-components', components)
		})
	} catch (err) {
		console.log('!!! ERROR ', err)
	}
}
