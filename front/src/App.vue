<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NotificationBanner from '@/commons/notification/NotificationBanner.vue'
</script>

<template>
    <NotificationBanner/>
	<div class="chest">
		<div class="background">
			<div></div>
			<div></div>
			<div></div>
		</div>
		<RouterView />
	</div>
</template>
