import VueProgress from 'vue-progress-path'
import ProjectComponents from './components/ProjectComponents.vue'
import ProjectComponentDetails from './components/ProjectComponentDetails.vue'

// You can install additional vue plugins
// using the global 'Vue' variable
Vue.use(VueProgress, {
	defaultShape: 'circle'
})

// Register a custom component
// (works like 'Vue.component')
ClientAddonApi.component('component-explorer', ProjectComponents)

// Add routes to vue-router under a /addon/<id> parent route.
// For example, addRoutes('foo', [ { path: '' }, { path: 'bar' } ])
// will add the /addon/foo/ and the /addon/foo/bar routes to vue-router.
// Here we create a new '/addon/vue-webpack/' route with the 'test-webpack-route' name
ClientAddonApi.addRoutes('components', [
	{
		path: '',
		name: 'project-components',
		component: ProjectComponents,
		children: [
			{
				path: ':path',
				name: 'project-component-details',
				component: ProjectComponentDetails,
				props: true
			}
		]
	}
])

// You can translate your plugin components
// Load the locale files (uses vue-i18n)
const locales = require.context('../locales', true, /[a-z0-9]+\.json$/i)
locales.keys().forEach(key => {
	const locale = key.match(/([a-z0-9]+)\./i)[1]
	ClientAddonApi.addLocalization(locale, locales(key))
})
