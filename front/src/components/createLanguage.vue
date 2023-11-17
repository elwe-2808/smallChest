<script setup lang="ts">
import {ref} from 'vue'
import {useLanguageService} from '@/services/rest/languageService'

const languageName = ref('')
const languageService = useLanguageService()

const props = defineProps<{visible: boolean}>()
const emits = defineEmits<{(e: 'update:visible', v: boolean)}>()

function saveLanguage(){
    languageService.save({name: languageName.value})
        .then(() => emits('update:visible', false))
}
</script>

<template>
<div>
    <div class="w-full">
        <span>Nom: </span>
        <input-text v-model="languageName"/>
    </div>
    <div class="w-full flex justify-content-center mt-4">
        <Button label="Sauvegarder" @click="saveLanguage"></Button>
    </div>
</div>
</template>

<style scoped lang="scss">

</style>
