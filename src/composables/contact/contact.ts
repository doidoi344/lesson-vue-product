import { useForm, useField } from 'vee-validate'
import { contactFormSchema } from '@/schemas'

export const useContact = () => {
  // フォームのセットアップ
  const { handleSubmit, errors, resetForm, isSubmitting } = useForm({
    validationSchema: contactFormSchema,
  })

  /**
   * フォーム送信処理
   */
  const onSubmit = handleSubmit(async (values) => {
    console.log('送信データ：', values)
    alert('送信完了')
    resetForm()
  })

  // 各フィールドセットアップ
  const { value: name } = useField<string>('name')
  const { value: email } = useField<string>('email')
  const { value: message } = useField<string>('message')

  return {
    name,
    email,
    message,
    errors,
    isSubmitting,
    resetForm,
    onSubmit,
  }
}
