<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// In a real application, this data would come from a store like Pinia
const totalAssets = '12,345.67'
const assets = [
  { name: 'ETH', amount: '2.5', value: '7,500.00', price: '3,000.00' },
  { name: 'BTC', amount: '0.1', value: '4,000.00', price: '40,000.00' },
  { name: 'Solana', amount: '50', value: '500.00', price: '10.00' },
  { name: 'Tron', amount: '10000', value: '300.00', price: '0.03' },
  { name: 'USDT', amount: '45.67', value: '45.67', price: '1.00' },
]
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <div class="bg-white rounded-lg shadow-lg p-6">
      <h1 class="text-2xl font-bold mb-6">{{ $t('home.title') }}</h1>
      
      <!-- 总资产 -->
      <div class="mb-6">
        <h2 class="text-lg font-semibold mb-3">{{ $t('home.totalAssets') }}</h2>
        <div class="text-3xl font-bold text-blue-600">{{ totalAssets }}</div>
      </div>

      <!-- 资产明细 -->
      <div class="space-y-4">
        <div v-for="asset in assets" :key="asset.name" class="flex justify-between items-center">
          <span>{{ asset.name }}</span>
          <span>{{ asset.amount }} {{ asset.name }} (≈ {{ asset.value }} USDT)</span>
        </div>
      </div>

      <!-- 快捷操作 -->
      <div class="mt-8 grid grid-cols-2 gap-4">
        <button class="bg-blue-500 text-white py-3 rounded-lg">
          {{ $t('home.deposit') }}
        </button>
        <button class="bg-green-500 text-white py-3 rounded-lg">
          {{ $t('home.withdraw') }}
        </button>
      </div>

      <!-- 其他功能 -->
      <div class="mt-8 space-y-4">
        <button class="w-full bg-gray-100 py-3 rounded-lg flex justify-between items-center px-4">
          <span>{{ $t('home.internalTransfer') }}</span>
          <span>→</span>
        </button>
        <button class="w-full bg-gray-100 py-3 rounded-lg flex justify-between items-center px-4">
          <span>{{ $t('home.inviteFriends') }}</span>
          <span>→</span>
        </button>
        <button class="w-full bg-gray-100 py-3 rounded-lg flex justify-between items-center px-4">
          <span>{{ $t('home.vipFeatures') }}</span>
          <span>→</span>
        </button>
        <button class="w-full bg-gray-100 py-3 rounded-lg flex justify-between items-center px-4">
          <span>{{ $t('home.contactSupport') }}</span>
          <span>→</span>
        </button>
      </div>
    </div>
  </div>
</template>
