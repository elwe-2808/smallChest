<script setup lang="ts">

const props = defineProps<{
    category: any
}>()
</script>

<template>
<Button :label="category.name" class="p-2 bg-bluegray-100 border-round w-full text-left text-black-alpha-90"></Button>
</template>

<style scoped lang="scss">

</style>
