<script setup lang="ts">
import {ref} from 'vue'
import {useRouter} from 'vue-router'

const router = useRouter()
let hide = ref<boolean>(false)

function goTo(path: string) {
	hide.value = true;
	setTimeout(() => router.push(path), 700)
}
</script>

<template>
	<div class="flex justify-center dashboard">
		<div class="flex justify-evenly w-1/2 h-48 my-auto">

			<div class="col card-dashboard flex justify-center flex-col align-middle rounded-lg shadow-2xl" :class="{'hide': hide}" @click="goTo('features')">
				<div class="flex justify-center">
					<i class="fa-solid fa-plus text-white icon"></i>
				</div>
				<div class="flex justify-center mt-2">
					<h1 class="text-white text-center">Ajouté</h1>
				</div>
			</div>

			<div class="col card-dashboard flex justify-center flex-col align-middle rounded-lg shadow-2xl" :class="{'hide': hide}" @click="goTo('features')">
				<div class="flex justify-center">
					<i class="fa-regular fa-eye icon text-white"></i>
				</div>
				<div class="flex justify-center mt-2">
					<h1 class="text-white text-center">Tout voir</h1>
				</div>
			</div>

			<div class="col card-dashboard flex justify-center flex-col align-middle rounded-lg shadow-2xl" :class="{'hide': hide}" @click="goTo('features')">
				<div class="flex justify-center">
					<i class="fa-regular fa-folder-open icon text-white"></i>
				</div>
				<div class="flex justify-center mt-2">
					<h1 class="text-white text-center">Catégorie</h1>
				</div>
			</div>

		</div>
	</div>
</template>
