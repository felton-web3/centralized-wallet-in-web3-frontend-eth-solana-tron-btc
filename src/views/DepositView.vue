<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// Dummy data
const coins = ['USDT', 'ETH', 'BTC', 'SOL', 'TRX']
const networks = ['ERC20', 'TRC20', 'BEP20']

const selectedCoin = ref('')
const selectedNetwork = ref('')

const showNetworkSelection = computed(() => {
  return ['USDT', 'ETH', 'BTC'].includes(selectedCoin.value)
})

const selectCoin = (coin: string) => {
  selectedCoin.value = coin
  selectedNetwork.value = ''
}

const selectNetwork = (network: string) => {
  selectedNetwork.value = network
}

</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <div class="bg-white rounded-lg shadow-lg p-6">
      <h1 class="text-2xl font-bold mb-6">{{ $t('deposit.title') }}</h1>

      <!-- 选择币种 -->
      <div class="mb-6">
        <h2 class="text-lg font-semibold mb-3">{{ $t('deposit.selectCoin') }}</h2>
        <div class="grid grid-cols-3 gap-4">
          <button 
            v-for="coin in coins" 
            :key="coin"
            class="p-4 border rounded-lg text-center hover:bg-gray-50"
            :class="{ 'border-blue-500 bg-blue-50': selectedCoin === coin }"
            @click="selectCoin(coin)"
          >
            {{ coin }}
          </button>
        </div>
      </div>

      <!-- 选择网络 -->
      <div v-if="showNetworkSelection" class="mb-6">
        <h2 class="text-lg font-semibold mb-3">{{ $t('deposit.selectNetwork') }}</h2>
        <div class="grid grid-cols-2 gap-4">
          <button 
            v-for="network in networks" 
            :key="network"
            class="p-4 border rounded-lg text-center hover:bg-gray-50"
            :class="{ 'border-blue-500 bg-blue-50': selectedNetwork === network }"
            @click="selectNetwork(network)"
          >
            {{ network }}
          </button>
        </div>
      </div>

      <!-- 存款地址 -->
      <div v-if="selectedCoin" class="mb-6">
        <h2 class="text-lg font-semibold mb-3">{{ $t('deposit.depositNote') }}</h2>
        <div class="bg-gray-50 p-4 rounded-lg">
          <div class="flex justify-between items-center mb-2">
            <span class="font-mono">0x1234...5678</span>
            <button class="text-blue-500">{{ $t('deposit.copyAddress') }}</button>
          </div>
          <div class="w-48 h-48 mx-auto bg-white p-2">
            <!-- QR Code placeholder -->
            <div class="w-full h-full bg-gray-200"></div>
          </div>
          <button class="w-full mt-4 text-blue-500">{{ $t('deposit.scanQR') }}</button>
        </div>
      </div>

      <!-- 存款说明 -->
      <div v-if="selectedCoin" class="space-y-2 text-sm text-gray-600">
        <p>{{ $t('deposit.minAmount') }}: 10 USDT</p>
        <p>{{ $t('deposit.confirmations') }}: 6</p>
        <p>{{ $t('deposit.estimatedTime') }}: 10-30 minutes</p>
      </div>
    </div>
  </div>
</template> 