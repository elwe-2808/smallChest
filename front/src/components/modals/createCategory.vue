<script setup lang="ts">
import {Ref, ref} from 'vue'
import {useLanguageService} from '@/services/rest/languageService'
import type {Language} from '@/classes/Language'
import {useCategoryService} from '@/services/rest/categoryService'
const languageService = useLanguageService()
const categoryService = useCategoryService()

const languageList: Ref<Language[]> = ref([])

const categoryName = ref('')
const language: Ref<Language> = ref(null)

const props = defineProps<{visible: boolean}>()
const emits = defineEmits<{
    (e: 'update:visible', v: boolean),
    (e: 'created', v: Language)
}>()

function saveCategory(){
    categoryService.save({name: categoryName.value, language: language.value})
        .then((res) => {
            emits('update:visible', false)
            emits('created', res)
        })
}

async function loadLanguage(){
    languageList.value = await languageService.findAll()
}

async function setup(){
    await loadLanguage();
}

setup()
</script>

<template>
    <div>
        <div class="w-full">
            <span>Nom: </span>
            <input-text class="w-full" v-model="categoryName"/>
        </div>
        <div class="w-full">
            <span>Language: </span>
            <Dropdown class="w-full" v-model="language" :options="languageList" option-label="name"/>
        </div>
        <div class="w-full flex justify-content-center mt-4">
            <Button label="Sauvegarder" @click="saveCategory"></Button>
        </div>
    </div>
</template>

<style scoped lang="scss">

</style>
