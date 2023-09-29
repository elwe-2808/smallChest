<script setup lang="ts">
import {NotificationService, useNotification} from '@/services/notification/notificationService'
import type {Ref} from 'vue'
import type {NotificationData} from '@/services/notification/notification'
import BannerElement from '@/commons/notification/BannerElement.vue'

const notificationService: NotificationService = useNotification()
const notifQueue: Ref<NotificationData[]> = notificationService.notifications;


</script>

<template>
    <div class="fixed top-6 right-1/2 banner--container mx-auto z-50">
        <BannerElement :notification="alert"  v-for="alert in notifQueue" :key="alert.id"/>
    </div>
</template>

<style scoped lang="scss">
.banner--container{
    width: 30%;
    transform: translateX(50%)
}

</style>
