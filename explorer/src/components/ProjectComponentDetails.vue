<template>
	<div class="component-details">
		<div class="content">
			<h1>Showtime !</h1>
			<p>{{ path }}</p>
		</div>
	</div>
</template>

<script>
	export default {
		mixins: [],

		metaInfo () {
			return {
				title: this.name && `${this.name} - ${this.$t('views.project-component-details.title')}`
			}
		},

		props: {
			path: {
				type: String,
				required: true
			}
		},

		computed: {
			name () {
				return this.path
					.split('/')
					.pop()
					.replace(/\.\w+$/, '') // Remove the file extension from the end
			},

			folder () {
				return this.path
					.split('/')
					.slice(0, -1) // remove fileName
					.join('/')
					.replace(/^\.\//, '') // Remove the "./" from the beginning
			}
		},

		data () {
			return {

			}
		},

		methods: {

		}
	}
</script>

<style  scoped>

</style>
