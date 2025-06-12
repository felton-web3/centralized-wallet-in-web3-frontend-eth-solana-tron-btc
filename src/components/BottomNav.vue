<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <nav class="fixed bottom-0 left-0 right-0 bg-white border-t">
    <div class="flex justify-around items-center h-16">
      <RouterLink to="/" class="flex flex-col items-center justify-center flex-1 h-full">
        <span class="text-2xl">🏠</span>
        <span class="text-xs mt-1">{{ $t('common.home') }}</span>
      </RouterLink>
      
      <RouterLink to="/deposit" class="flex flex-col items-center justify-center flex-1 h-full">
        <span class="text-2xl">💰</span>
        <span class="text-xs mt-1">{{ $t('common.deposit') }}</span>
      </RouterLink>
      
      <RouterLink to="/vip" class="flex flex-col items-center justify-center flex-1 h-full">
        <span class="text-2xl">👑</span>
        <span class="text-xs mt-1">{{ $t('common.vip') }}</span>
      </RouterLink>
      
      <RouterLink to="/me" class="flex flex-col items-center justify-center flex-1 h-full">
        <span class="text-2xl">👤</span>
        <span class="text-xs mt-1">{{ $t('common.me') }}</span>
      </RouterLink>
    </div>
  </nav>
</template>

<style scoped>
.router-link-active {
  color: #3b82f6;
}
</style> 