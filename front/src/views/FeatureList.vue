<template xmlns="http://www.w3.org/1999/html">
	<div class="slide-from-bottom pt-32 flex justify-center">
		<div class="w-1/2 grid grid-cols-4 card p-3">
			<div class="input-icon col-span-4 text-white">
				<i class="fa-solid fa-magnifying-glass"></i>
				<input class="w-full font-semibold" />
			</div>
            <div class="col-span-2 mt-2 pr-2">
                <MultiSelect icon="fa-regular fa-folder" :options="category" :model-value="selectedCategory" label="name"></MultiSelect>
            </div>
            <div class="col-span-2 mt-2 pl-2">
                <MultiSelect icon="fa-solid fa-code" :options="languages" :model-value="selectedLanguages" label="name"></MultiSelect>
            </div>
		</div>
	</div>
<div class="bg-red">
    element
</div>
    <div class="grid grid-cols-2 mt-10 w-1/2 mx-auto z-0">
        <div>
            <Feature></Feature>
        </div>
        <div>
            <Feature></Feature>
        </div>
    </div>

</template>

<style lang="scss">
@keyframes slideFromBottom {
	0% {
		transform: translateY(50vh);
		opacity: 0;
	}
	100% {
		transform: translateY(0);
		opacity: 1;
	}
}

.slide-from-bottom {
	animation: 0.5s ease-out 0s 1 slideFromBottom;
}

.card {
    background-color: rgba(20, 51, 119, 0.34);
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.feature {
    img {
        width: 80%;
    }
}

</style>
<script setup lang="ts">
import {ref} from 'vue'
import MultiSelect from '@/commons/MultiSelect.vue'
import Feature from '@/components/Feature.vue'
import type {FeatureServices} from '@/services/rest/featureServices'
import {useFeatureService} from '@/services/rest/featureServices'

const featureService: FeatureServices = useFeatureService();

const category = [
    { id: 1, name: 'Logical' },
    { id: 2, name: 'Design' },
    { id: 3, name: 'Data' },
    { id: 4, name: 'Computing' },
    { id: 5, name: 'Animation' }
]
const selectedCategory = ref([])

const languages = [
    { id: 1, name: 'Java' },
    { id: 2, name: 'Javascript' },
    { id: 3, name: 'Html' },
    { id: 4, name: 'SCSS' }
]
const selectedLanguages = ref([])

featureService.findAll();
</script>
