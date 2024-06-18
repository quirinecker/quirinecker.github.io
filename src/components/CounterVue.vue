<script setup lang="ts">
import {ref} from 'vue'

const count = ref(0)

</script>

<template>
    <div @click="count++">
        {{ count }}
    </div>
</template>

<style scoped>

</style>
