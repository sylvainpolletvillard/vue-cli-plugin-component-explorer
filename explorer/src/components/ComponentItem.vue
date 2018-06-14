<template>
	<div class="component-item list-item"
		 :class="{ selected }"
		v-tooltip.right="$t(component.path)">
		<div class="content">
			<ListItemInfo
					:name="component.name"
					:description="component.folder"
					:selected="selected"
			/>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			component: {
				type: Object,
				required: true
			},

			selected: {
				type: Boolean,
				default: false
			}
		}
	}
</script>

<style scoped>
	.component-item {
		padding: 12px;
	}

	.list-item-info {
		flex: auto 1 1;
		width: 0;
	}

	.description {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
</style>
