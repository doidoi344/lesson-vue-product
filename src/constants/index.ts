// ルート定義
export const ROUTES = {
  HOME: '/',
  CONTACT: {
    ROOT: '/contact',
    COMPLETE: '/contact/complete',
  },
  PRODUCTS: {
    ROOT: '/products',
    MANAGEMENT: 'products/management',
    CHILDREN: {
      WOMEN: 'women',
      MEN: 'men',
      KIDS: 'kids',
      OTHER: 'other',
    },
  },
} as const

// フォームフィールド値
export const FIELDS = {
  NAME: '名前',
  EMAIL: 'メールアドレス',
  MESSAGE: 'お問い合わせ内容',
} as const

// バリデーションメッセージ
export const VALIDATION_MESSAGES = {
  REQUIRED: (fieldName: string) => `${fieldName}は必須です`,
  INVALID: (fieldName: string) => `有効な${fieldName}を入力してください`,
} as const
