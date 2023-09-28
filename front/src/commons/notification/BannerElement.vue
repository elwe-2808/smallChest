<script setup lang="ts">
    import type {NotificationData} from '@/services/notification/notification'
    import {Ref, ref} from 'vue'

    const prop = defineProps<{notification: NotificationData}>()
    const show: Ref<boolean> = ref(false)

    function getSeverityColor(): string {
        switch (prop.notification.severity) {
            case 'success': return 'bg-emerald-700'
            case 'warning': return 'bg-orange-600'
            case 'error': return 'bg-red-800'
            case 'info': return 'bg-sky-700'
        }
    }

    setTimeout(() => {
        show.value = true
    }, 10)
</script>

<template>
    <div :class="[getSeverityColor(), show ? 'show' : 'hide']" class="text-white banner mx-auto rounded-lg flex justify-between mb-3">
        <div class="p-2 pl-3">{{notification.message}}</div>
        <div class="cancel-banner flex align-middle pl-1 rounded-r-lg">
            <button class="cursor-pointer"><i class="fa-solid fa-x"></i></button>
        </div>
    </div>
</template>

<style scoped lang="scss">
.banner{
    width: 30%;
    transition: opacity ease 1s, margin-top ease 1s;;

    &.hide{
        opacity: 0;
        margin: -100%;
    }
    &.show{
        opacity: 100;
        margin: 10px;
    }
}
.cancel-banner{
    width: 25px;
    button{
        background-color: transparent;
        color: rgba(255, 255, 255, 0.8);
        i{
            transition: font-size ease 200ms;
        }
        &:hover{
            i{
                font-size: 1rem;
            }
        }
    }
}
</style>
