<template>
	<div class="project-components page">
		<ContentView
				:title="$t('views.project-components.title')"
				class="limit-width"
		>
			<div class="fill-height">
				<VueLoadingIndicator
						v-if="loading && !data"
						class="overlay"
				/>

				<NavContent
						v-else-if="data"
						:items="generateItems(data.components)"
						class="components"
				>
					<ComponentItem
						slot-scope="{ item, selected }"
						:component="item.component"
						:selected="selected"
					/>
				</NavContent>
			</div>
		</ContentView>
	</div>
</template>

<script>
	import RestoreRoute from '@vue/cli-ui/src/mixins/RestoreRoute'

	import ComponentItem from './ComponentItem.vue'

export default {
		data () {
			return {
				loading: true,
				data: null
			}
		},

		components: { ComponentItem },

		mixins: [
			RestoreRoute()
		],

		async created () {
			this.$watchSharedData(`project-components`, components => {
				this.data = { components }
				this.loading = false
			})
		},

		metaInfo () {
			return {
				title: this.$t('views.project-components.title')
			}
		},

		methods: {
			generateItems (components) {
				return components.map(
					component => ({
						route: {
							name: 'project-component-details',
							params: {
								path: component.path
							}
						},
						component
					})
				)
			}
		}
	}
</script>

<style scoped>
	.project-components .content-view .content {
		overflow-y: hidden;
	}
</style>
