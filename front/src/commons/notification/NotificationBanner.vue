<script setup lang="ts">
import {NotificationService, useNotification} from '@/services/notification/notificationService'
import type {Ref} from 'vue'
import type {NotificationData} from '@/services/notification/notification'
import {watch} from 'vue'
import BannerElement from '@/commons/notification/BannerElement.vue'

const notificationService: NotificationService = useNotification()
const notifQueue: Ref<NotificationData[]> = notificationService.notifications;


</script>

<template>
    <div class="fixed top-6 right-1/2 translate-middle w-full">
        <BannerElement :notification="alert"  v-for="alert in notifQueue" :key="alert.id"/>
    </div>
</template>

<style scoped lang="scss">
.translate-middle{
    transform: translateX(50%)
}

</style>
