<script setup lang="ts">
import {computed, Ref, ref} from 'vue'
import Category from '@/components/Category.vue'
import {useRoute, useRouter} from 'vue-router'
import CreateFeature from '@/components/createFeature.vue'
import CreateLanguage from '@/components/createLanguage.vue'
const router = useRouter()
const route = useRoute()

const showCreateLanguage = ref(false)

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
function goBack(){
    router.back()
}

const featureDisplay = computed(() => {
    return route.name == 'feature'
})
</script>

<template>
    <div class="grid h-full grid-nogutter">
        <Dialog v-model:visible="showCreateLanguage" modal header="Create language" :style="{ width: '25rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
            <create-language v-model:visible="showCreateLanguage"></create-language>
        </Dialog>
        <div class="col-2 h-full px-2">
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
                        <span></span>
                    </div>
                    <div>
                        <div v-for="val of selectedLanguage.categories">
                            <Category :category="val" class="mb-2" @click="openCategory(val)"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-10 px-2">
            <div class="bg-gray-50 p-2 border-round">
                <Button v-if="featureDisplay" icon="pi pi-arrow-left" class="text-color-secondary" link @click="goBack"/>
                <router-view></router-view>
            </div>
        </div>

    </div>
</template>
