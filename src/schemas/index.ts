import * as yup from 'yup'
import { FIELDS, VALIDATION_MESSAGES } from '@/constants'

// バリデーションスキーマの定義
export const contactFormSchema = yup.object({
  name: yup.string().required(VALIDATION_MESSAGES.REQUIRED(FIELDS.NAME)),
  email: yup
    .string()
    .email(VALIDATION_MESSAGES.INVALID(FIELDS.EMAIL))
    .required(VALIDATION_MESSAGES.REQUIRED(FIELDS.EMAIL)),
  message: yup.string().required(VALIDATION_MESSAGES.REQUIRED(FIELDS.MESSAGE)),
})
