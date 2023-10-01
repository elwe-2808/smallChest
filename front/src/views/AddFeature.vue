<script setup lang="ts">
import {ref} from 'vue'
import {useRouter} from 'vue-router'
import {useNotification} from '@/services/notification/notificationService'
import MultiSelect from '@/commons/MultiSelect.vue'

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

const category = [
    { id: 1, name: 'Logical' },
    { id: 2, name: 'Design' },
    { id: 3, name: 'Data' },
    { id: 4, name: 'Computing' },
    { id: 5, name: 'Animation' }
]
const selectedCategory = ref([])

const languages = [
    { id: 1, name: 'Java' },
    { id: 2, name: 'Javascript' },
    { id: 3, name: 'Html' },
    { id: 4, name: 'SCSS' }
]
const selectedLanguages = ref([])
</script>

<template>
	<div class="flex justify-center dashboard">
		<div class="flex justify-evenly w-1/2 my-auto">
            <div class="w-3/4 section p-4 rounded-lg shadow-2xl">
                <h2 class="text-center">Create a new component</h2>
                <div class="grid grid-cols-2">

                    <div class="">
                        <label for="title">Title of the element</label>
                    </div>
                    <div class="">
                        <input class="line w-full" id="title" type="text" placeholder="My awesome component"/>
                    </div>

                    <div class="mt-8">
                        <label for="title">Categories</label>
                    </div>
                    <div class="mt-8">
                        <MultiSelect icon="fa-regular fa-folder" :options="category" :model-value="selectedCategory" label="name"></MultiSelect>
                    </div>

                    <div class="mt-8">
                        <label for="title">Languages</label>
                    </div>
                    <div class="mt-8">
                        <MultiSelect icon="fa-solid fa-code" :options="languages" :model-value="selectedLanguages" label="name"></MultiSelect>
                    </div>

                    <div class="mt-8">
                        <label for="title">Description</label>
                    </div>
                    <div class="mt-8">
                        <textarea class="w-full" rows="10"></textarea>
                    </div>
                </div>
            </div>
		</div>
	</div>
</template>
