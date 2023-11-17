<script setup lang="ts">
import {computed} from 'vue'
import {useRoute, useRouter} from 'vue-router'
import Selector from '@/components/Selector.vue'
const router = useRouter()
const route = useRoute()

function goBack(){
    router.back()
}

const featureDisplay = computed(() => {
    return route.name == 'feature'
})
</script>

<template>
    <div class="grid h-full grid-nogutter">

        <div class="col-2 h-full px-2">
            <Selector></Selector>
        </div>

        <div class="col-10 px-2">
            <div class="bg-gray-50 p-2 border-round">
                <Button v-if="featureDisplay" icon="pi pi-arrow-left" class="text-color-secondary" link @click="goBack"/>
                <router-view></router-view>
            </div>
        </div>

    </div>
</template>
