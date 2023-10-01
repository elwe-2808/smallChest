<script setup lang="ts">
import {ref} from 'vue'
import {useRouter} from 'vue-router'
import {useNotification} from '@/services/notification/notificationService'

const router = useRouter()
const notificationService = useNotification()
let hide = ref<boolean>(false)

function goTo(path: string) {
	hide.value = true;
	setTimeout(() => router.push(path), 700)
}

function error(){
    notificationService.warning("Les catégories ne sont pas encore implémentée.");
}
</script>

<template>
	<div class="flex justify-center dashboard">
		<div class="flex justify-evenly w-1/2 h-48 my-auto">

			<div class="card-dashboard flex justify-center flex-col align-middle rounded-lg shadow-2xl pt-5" :class="{'hide': hide}" @click="goTo('create')">
				<div class="flex justify-center">
					<i class="fa-solid fa-plus text-white icon"></i>
				</div>
				<div class="flex justify-center mt-2">
					<h1 class="text-white text-center text-2xl">Ajouté</h1>
				</div>
			</div>

			<div class="card-dashboard flex justify-center flex-col align-middle rounded-lg shadow-2xl pt-5" :class="{'hide': hide}" @click="goTo('features')">
				<div class="flex justify-center">
					<i class="fa-regular fa-eye icon text-white"></i>
				</div>
				<div class="flex justify-center mt-2">
					<h1 class="text-white text-center text-2xl">Tout voir</h1>
				</div>
			</div>

			<div class="card-dashboard flex justify-center flex-col align-middle rounded-lg shadow-2xl pt-5" :class="{'hide': hide}" @click="error()">
				<div class="flex justify-center">
					<i class="fa-regular fa-folder-open icon text-white"></i>
				</div>
				<div class="flex justify-center mt-2">
					<h1 class="text-white text-center text-2xl">Catégorie</h1>
				</div>
			</div>

		</div>
	</div>
</template>
