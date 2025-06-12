<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const isVip = ref(false)

const vipPerks = [
  '更低手续费',
  '更高的邀请好友分佣金比率',
  'HK线下服务点',
  '独立服务器节点',
  '更快的确认速度',
  '独立客服服务'
]

const { t } = useI18n()
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <div class="bg-white rounded-lg shadow-lg p-6">
      <h1 class="text-2xl font-bold mb-6">{{ t('vip.title') }}</h1>

      <!-- 当前VIP状态 -->
      <div class="mb-8">
        <div class="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-lg">
          <h2 class="text-xl font-semibold mb-2">{{ t('vip.currentLevel') }}</h2>
          <p class="text-3xl font-bold">VIP 1</p>
          <p class="mt-2">{{ t('vip.validUntil') }}: 2024-12-31</p>
        </div>
      </div>

      <!-- VIP权益 -->
      <div class="mb-8">
        <h2 class="text-lg font-semibold mb-4">{{ t('vip.benefits') }}</h2>
        <div class="space-y-4">
          <div class="flex items-center p-4 bg-gray-50 rounded-lg">
            <span class="text-2xl mr-4">💰</span>
            <div>
              <h3 class="font-semibold">{{ t('vip.lowerFees') }}</h3>
              <p class="text-sm text-gray-600">0.1% 交易手续费</p>
            </div>
          </div>

          <div class="flex items-center p-4 bg-gray-50 rounded-lg">
            <span class="text-2xl mr-4">🤝</span>
            <div>
              <h3 class="font-semibold">{{ t('vip.higherCommission') }}</h3>
              <p class="text-sm text-gray-600">70% 邀请佣金</p>
            </div>
          </div>

          <div class="flex items-center p-4 bg-gray-50 rounded-lg">
            <span class="text-2xl mr-4">🏢</span>
            <div>
              <h3 class="font-semibold">{{ t('vip.hkService') }}</h3>
              <p class="text-sm text-gray-600">香港线下服务点支持</p>
            </div>
          </div>

          <div class="flex items-center p-4 bg-gray-50 rounded-lg">
            <span class="text-2xl mr-4">⚡</span>
            <div>
              <h3 class="font-semibold">{{ t('vip.fasterConfirm') }}</h3>
              <p class="text-sm text-gray-600">更快的交易确认速度</p>
            </div>
          </div>

          <div class="flex items-center p-4 bg-gray-50 rounded-lg">
            <span class="text-2xl mr-4">👨‍💼</span>
            <div>
              <h3 class="font-semibold">{{ t('vip.dedicatedSupport') }}</h3>
              <p class="text-sm text-gray-600">专属客服服务</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 购买VIP按钮 -->
      <button class="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold">
        {{ t('vip.buyVip') }}
      </button>
    </div>
  </div>
</template> 