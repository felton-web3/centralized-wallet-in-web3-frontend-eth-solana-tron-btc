<template>
  <div class="container mx-auto px-4 py-8">
    <div class="bg-white rounded-lg shadow-lg p-6">
      <h1 class="text-2xl font-bold mb-6">{{ $t('me.profile') }}</h1>
      
      <!-- 语言选择 -->
      <div class="mb-6">
        <h2 class="text-lg font-semibold mb-3">{{ $t('common.language') }}</h2>
        <select 
          v-model="selectedLanguage" 
          @change="changeLanguage"
          class="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="en">{{ $t('languages.en') }}</option>
          <option value="zh-CN">{{ $t('languages.zh-CN') }}</option>
          <option value="zh-TW">{{ $t('languages.zh-TW') }}</option>
          <option value="ja">{{ $t('languages.ja') }}</option>
          <option value="th">{{ $t('languages.th') }}</option>
        </select>
      </div>

      <!-- 其他个人信息 -->
      <div class="space-y-4">
        <div class="flex items-center">
          <span class="w-24">{{ $t('me.avatar') }}:</span>
          <div class="w-12 h-12 rounded-full bg-gray-200"></div>
        </div>
        
        <div class="flex items-center">
          <span class="w-24">{{ $t('me.email') }}:</span>
          <span>user@example.com</span>
        </div>
        
        <div class="flex items-center">
          <span class="w-24">{{ $t('me.phone') }}:</span>
          <span>+86 123 4567 8900</span>
        </div>
        
        <div class="flex items-center">
          <span class="w-24">{{ $t('me.kyc') }}:</span>
          <span class="text-red-500">{{ $t('me.kyc') }}</span>
        </div>
      </div>

      <!-- 安全中心 -->
      <div class="mt-8">
        <h2 class="text-lg font-semibold mb-3">{{ $t('me.security') }}</h2>
        <div class="space-y-2">
          <div class="flex items-center justify-between">
            <span>{{ $t('me.whitelist') }}</span>
            <button class="text-blue-500">→</button>
          </div>
          <div class="flex items-center justify-between">
            <span>{{ $t('me.referrals') }}</span>
            <button class="text-blue-500">→</button>
          </div>
          <div class="flex items-center justify-between">
            <span>{{ $t('me.commission') }}</span>
            <button class="text-blue-500">→</button>
          </div>
        </div>
      </div>

      <!-- 资金情况 -->
      <div class="mt-8">
        <h2 class="text-lg font-semibold mb-3">{{ $t('me.assets') }}</h2>
        <div class="space-y-2">
          <div class="flex items-center justify-between">
            <span>{{ $t('me.totalAssets') }}</span>
            <span>10,000 USDT</span>
          </div>
          <div class="flex items-center justify-between">
            <span>{{ $t('me.availableBalance') }}</span>
            <span>8,000 USDT</span>
          </div>
          <div class="flex items-center justify-between">
            <span>{{ $t('me.frozen') }}</span>
            <span>1,500 USDT</span>
          </div>
          <div class="flex items-center justify-between">
            <span>{{ $t('me.riskFunds') }}</span>
            <span>500 USDT</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale, t } = useI18n()
const selectedLanguage = ref(locale.value)

onMounted(() => {
  // 从 localStorage 获取保存的语言设置
  const savedLanguage = localStorage.getItem('language')
  if (savedLanguage) {
    selectedLanguage.value = savedLanguage
    locale.value = savedLanguage
  }
})

const changeLanguage = () => {
  locale.value = selectedLanguage.value
  localStorage.setItem('language', selectedLanguage.value)
}
</script> 