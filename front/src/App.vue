<script setup lang="ts">
import {RouterLink, RouterView, useRoute} from 'vue-router'
import NotificationBanner from '@/commons/notification/NotificationBanner.vue'
import {ref} from 'vue'
import CreateFeature from '@/components/createFeature.vue'

const showCreate = ref(false)
</script>

<template>
    <NotificationBanner/>
    <DynamicDialog />
    <Dialog v-model:visible="showCreate" modal header="Create feature" :style="{ width: '75rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
        <create-feature></create-feature>
    </Dialog>
	<div class="chest h-full">
        <div class="p-2">
            <div class="flex justify-content-end bg-gray-200 p-2 border-round">
                <Button label="Add feature" class="p-button-lg" @click="showCreate = true"></Button>
            </div>
        </div>
		<RouterView />
	</div>
</template>
