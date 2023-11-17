<script setup lang="ts">

import Category from '@/components/Category.vue'
import {useRouter} from 'vue-router'
import {ref} from 'vue'
import type {Ref} from 'vue'
import {useLanguageService} from '@/services/rest/languageService'
import CreateCategory from '@/components/modals/createCategory.vue'
import CreateLanguage from '@/components/modals/createLanguage.vue'
const languageService = useLanguageService()
const router = useRouter()


const showCreateLanguage = ref(false)
const showCreateCategory = ref(false)

const language = ref([
    {
        name: 'Java',
        id: 1,
        categories: [
            {name: 'decorator', language: 1, id: 1},
            {name: 'middleware', language: 2, id: 2}
        ]
    },
    {
        name: 'Javascript',
        id: 2,
        categories: [
            {name: 'directive', language: 2, id: 3},
            {name: 'components', language: 1, id: 4}
        ]
    },
])

const selectedLanguage: Ref<any> = ref(null)

function openCategory(category: any){
    router.push({ name: 'features', params: { categoryId: category.id } })
}

async function loadLanguage(){
    language.value = await languageService.findAll()
}

async function setup(){
    await loadLanguage();
}

setup()
</script>

<template>
    <Dialog v-model:visible="showCreateLanguage" modal header="Create language" :style="{ width: '25rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
        <create-language v-model:visible="showCreateLanguage" @created="loadLanguage"></create-language>
    </Dialog>
    <Dialog v-model:visible="showCreateCategory" modal header="Create category" :style="{ width: '25rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
        <create-category v-model:visible="showCreateCategory" @created="loadLanguage"></create-category>
    </Dialog>
    <div class="bg-gray-200  p-2 border-round">
        <div v-if="!selectedLanguage">
            <div class="flex justify-content-between align-items-center">
                <span></span>
                <h1 class="text-center text-lg m-0">Langages</h1>
                <a @click="showCreateLanguage = true" href="#"><i class="pi pi-plus"></i></a>
            </div>
            <div class="mt-4">
                <div v-for="val of language">
                    <Category :category="val" class="mb-2" @click="selectedLanguage = val"/>
                </div>
            </div>
        </div>
        <div v-else>
            <div class="flex justify-content-between align-items-center mb-2 mt-2">
                <Button icon="pi pi-arrow-left" class="text-color-secondary" link @click="selectedLanguage = null"/>
                <h1 class="text-center text-lg m-0">Category</h1>
                <a @click="showCreateCategory = true" href="#"><i class="pi pi-plus"></i></a>
            </div>
            <div>
                <div v-for="val of selectedLanguage.categories">
                    <Category :category="val" class="mb-2" @click="openCategory(val)"/>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">

</style>
