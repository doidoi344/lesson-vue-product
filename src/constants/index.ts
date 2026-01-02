// ルート定義
export const ROUTES = {
  HOME: '/',
  CONTACT: '/contact',
  PRODUCTS: {
    ROOT: '/products',
    MANAGEMENT: '/management',
    CHILDREN: {
      WOMEN: 'women',
      MEN: 'men',
      KIDS: 'kids',
      OTHER: 'other',
    },
  },
} as const
