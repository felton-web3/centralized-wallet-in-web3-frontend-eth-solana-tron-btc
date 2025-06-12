import { createI18n } from 'vue-i18n'
import en from './locales/en'
import zhCN from './locales/zh-CN'
import zhTW from './locales/zh-TW'
import ja from './locales/ja'
import th from './locales/th'

const messages = {
  'en': en,
  'zh-CN': zhCN,
  'zh-TW': zhTW,
  'ja': ja,
  'th': th
}

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('language') || 'zh-CN',
  fallbackLocale: 'en',
  messages,
  globalInjection: true
})

export default i18n 