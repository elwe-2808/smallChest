<template>
    <div class="bg-gray-100 p-4 border-round">

        <h2 class="text-lg">Click outside directive</h2>

        <div class="grid">
            <div class="col col-2">Description</div>
            <div class="col col-10">blablabla</div>

            <div class="col col-2"><span>Catégorie:</span> <span class="font-bold">Directive</span></div>

            <div class="col col-2"><span>Langage:</span> <span class="font-bold">TS</span></div>

            <div class="col col-2"><span>Framework:</span> <span class="font-bold">Vue.JS</span></div>
        </div>

        <div>
            <h2 class="text-lg">Technique</h2>
            <div>
                test
            </div>
        </div>

        <div>
            <h2 class="text-lg">Code</h2>
            <div>
                test
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{featureId: number}>()

</script>

<style scoped lang="scss">
</style>
