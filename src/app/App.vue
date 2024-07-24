<script setup lang="ts">
import { useLayout } from '@/shared/hooks/useLayout'

const { layout } = useLayout()
</script>

<template>
  <component :is="layout" />
</template>

<style lang="scss" scoped>
body {
  font-family: var(--font-family);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
