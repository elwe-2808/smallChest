<script setup lang="ts">
import {Listbox, ListboxButton, ListboxOption, ListboxOptions} from '@headlessui/vue'
import {ref, watch} from 'vue'

const props = withDefaults(defineProps<{
    options: any[],
    modelValue: any[],
    label?: string,
    icon?: string
}>(), {
    label: 'title',
    icon: ''
});

const emit = defineEmits<{
    (e: 'update:modelValue', value: any)
}>();

const selectedValue = ref<any[]>(props.modelValue);

watch(() => props.modelValue, () => {
    selectedValue.value = props.modelValue;
})

watch(() => selectedValue, () => {
    emit('update:modelValue', selectedValue.value)
})

function getDisplayName(prop: any){
    if(typeof prop === 'object'){
        return prop[props.label]
    }
    return prop
}

</script>

<template>
    <div class="relative">
        <Listbox v-model="selectedValue" multiple>
            <ListboxButton class="ch-form flex justify-between px-3 w-full">
            <span>
                <i class="mr-2" :class="icon" v-if="icon"></i>
                <span class="text-left font-bold text-md truncate w-full">
                          {{ selectedValue.map((val) => getDisplayName(val)).join(', ') }}
                </span>
            </span>
            <span class="ml-2">
              <i class="fa-solid fa-chevron-down"></i>
            </span>
            </ListboxButton>
            <ListboxOptions class="ch-form rounded mt-2 px-1 p-0.5 option-list">
                <ListboxOption v-for="opt in options" :value="opt"
                               class="my-1 p-1 rounded options flex justify-between">
                    <span>{{ getDisplayName(opt) }}</span>
                    <i class="fa-solid fa-check hidden ui-selected:block"></i>
                </ListboxOption>
            </ListboxOptions>
        </Listbox>
    </div>

</template>

<style scoped>
@keyframes unroll {
    0% {
        max-height: 0;
    }
    100% {
        max-height: 15em;
    }
}

.option-list{
        animation: 0.3s ease-in-out unroll;
        overflow: hidden;
        position: absolute;
        z-index: 100;
        background-color: #34587c;
        width: 100%;
    }
</style>
