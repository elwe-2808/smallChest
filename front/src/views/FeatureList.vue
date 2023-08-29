<template>
	<div class="slide-from-bottom pt-32 flex justify-center">
		<div class="w-1/2">
			<div class="input-icon">
				<i class="fa-solid fa-magnifying-glass"></i>
				<input class="w-full" />
			</div>
		</div>
	</div>
</template>

<style>
@keyframes slideFromBottom {
	0% {
		transform: translateY(50vh);
		opacity: 0;
	}
	100% {
		transform: translateY(0);
		opacity: 1;
	}
}


.slide-from-bottom {
	/* This section calls the slideInFromLeft animation we defined above */
	animation: 0.5s ease-out 0s 1 slideFromBottom;
}

</style>
