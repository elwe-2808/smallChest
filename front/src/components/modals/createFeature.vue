<script setup lang="ts">
import {ref} from 'vue'

const feature = ref({
    name: '',
    description: '',
    category: null,
    language: null,
    framework: null,
    technical: '',
    code: ''
})

const categories = ref([
    {name: 'decorator', language: 1, id: 1},
    {name: 'middleware', language: 2, id: 2}
])

const languages = [
    {
        name: 'Java',
        id: 1,
    },
    {
        name: 'Javascript',
        id: 2,
    },
]

const frameworks = [
    {
        name: 'VueJs',
        id: 1,
    },
    {
        name: 'Angular',
        id: 2,
    },
]
</script>

<template>
<div>
    <div>
        <span>Name: </span>
        <InputText v-model="feature.name" class="w-full"></InputText>
    </div>
    <div class="mt-3">
        <span>Description: </span>
        <Textarea v-model="feature.description"  class="w-full"></Textarea>
    </div>
    <div class="grid mt-3">
        <div class="col-4">
            <div>Category: </div>
            <Dropdown class="w-full" v-model="feature.category" :options="categories" option-label="name"></Dropdown>
        </div>
        <div class="col-4">
            <div>Languages: </div>
            <Dropdown class="w-full" v-model="feature.language" :options="languages" option-label="name"></Dropdown>
        </div>
        <div class="col-4">
            <div>Framework: </div>
            <Dropdown class="w-full" v-model="feature.framework" :options="frameworks" option-label="name"></Dropdown>
        </div>
    </div>
    <div class="mt-3">
        <span>Information technique: </span>
        <Textarea  class="w-full" v-model="feature.technical" rows="5" cols="30" />
    </div>
    <div class="mt-3">
        <span>Code: </span>
        <Textarea class="w-full" v-model="feature.technical" rows="5" cols="30" />
    </div>
    <div class="mt-3 flex justify-content-center">
        <Button label="Sauvegarder"></Button>
    </div>
</div>
</template>

<style scoped lang="scss">

</style>
