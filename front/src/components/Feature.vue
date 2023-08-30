<template>
	<div class="feature-card bg-blue-950 flex flex-col items-center">
		<div class="flex justify-center w-80">
			<img src="src/assets/img.png" class="w-full">
		</div>
		<div class="bg-blue-600 w-60 rounded-2xl p-5 desc">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget tempor risus, quis mollis leo. Praesent ut erat varius, mollis neque eu, mollis diam. Quisque non ullamcorper leo, eget lobortis ante. Suspendisse velit urna, luctus sed ex eu, viverra consectetur tellus. Phasellus volutpat consequat urna, congue aliquet lacus.
		</div>
	</div>

</template>


<script>
export default {
	name: 'Feature'
}
</script>

<style scoped lang="scss">
.feature-card {
	.desc {
		margin: -35px;
	}
}
</style>