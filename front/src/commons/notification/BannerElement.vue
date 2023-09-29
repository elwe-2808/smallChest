<script setup lang="ts">
    import type {NotificationData} from '@/services/notification/notification'
    import {ref} from 'vue'
    import type {Ref} from 'vue'

    const prop = defineProps<{notification: NotificationData}>()
    const die: Ref<boolean> = ref(false)

    let timeoutId = -1;

    function close(){
        die.value = true
        setTimeout(prop.notification.close, 450)
    }

    function cancelTimeout(){
        if(timeoutId >= 0){
            clearTimeout(timeoutId);
        }
    }

    function resetTimeout(){
        timeoutId = setTimeout(close, prop.notification.liveTime)
    }

    function setup(){
        if(prop.notification.liveTime && prop.notification.liveTime > 0){
            resetTimeout();
        }
    }

    setup()

</script>

<template>
    <div class="text-gray-200 banner mx-auto rounded-lg flex justify-between mb-3"
         :class="[notification.uiBannerProps.bgClass, {'die': die}]"
         @mouseover="cancelTimeout"
         @mouseleave="resetTimeout"
    >
        <div class="py-3 px-3 font-semibold">{{notification.message}}</div>
        <div class="cancel-banner flex align-middle px-1 rounded-r-lg">
            <button class="cursor-pointer" @click="close"><i class="fa-solid fa-x"></i></button>
        </div>
    </div>
</template>

<style scoped lang="scss">
@keyframes appear {
    0% {
        opacity: 0;
        transform: translateY(-100%);
    }
    100%{
        opacity: 1;
    }
}
@keyframes disappear {
    0%{
        opacity: 1;
    }
    100% {
        opacity: 0;
        transform: translateY(-100%);
    }
}
.banner{
    transition: opacity ease 1s, margin-top ease 1s;
    animation: appear 500ms 1;

    &.die{
        z-index: 40;
        animation: disappear 500ms 1
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
