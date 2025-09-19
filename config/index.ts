import type { AppInfo } from '@/types/app'
export const APP_ID = `${process.env.NEXT_PUBLIC_APP_ID}`
export const API_KEY = `${process.env.NEXT_PUBLIC_APP_KEY}`
export const API_URL = `${process.env.NEXT_PUBLIC_API_URL}`
export const APP_INFO: AppInfo = {
  title: 'ChatGPT5',
  description: 'ChatGPT5のアプリです。',
  copyright: 'Omron',
  privacy_policy: 'https://docs.dify.ai/ja-jp/guides/application-publishing/based-on-frontend-templates',
  default_language: 'ja',
  disable_session_same_site: false, // set it to true if you want to embed the chatbot in an iframe
  // 追加
  user_avatar: '/user-avatar.png',
  bot_avatar: '/bot-avatar.png',
}

export const isShowPrompt = false
export const promptTemplate = 'I want you to act as a javascript console.'

export const API_PREFIX = '/api'

export const LOCALE_COOKIE_NAME = 'locale'

export const DEFAULT_VALUE_MAX_LEN = 48
