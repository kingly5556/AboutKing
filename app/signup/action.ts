'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export async function signup(prevState: any, formData: FormData) {
  const supabase = await createClient()

  // ดึงข้อมูลจากฟอร์ม
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }
  const username = formData.get('username') as string

  // ตรวจสอบว่า email นี้มีอยู่แล้วหรือยัง
  const { data: existingUser } = await supabase
    .from('user')
    .select('email')
    .eq('email', data.email)

  if (existingUser && existingUser.length > 0) {
    return { message: 'This account is already registered.' }
  }

  // สมัครสมาชิกผ่าน auth
  const { data: signUpData, error: signUpError } = await supabase.auth.signUp(data)

  if (signUpError) {
    return signUpError
  }

  // ดึงข้อมูลผู้ใช้จากผลลัพธ์ของ signUp
  const user = signUpData.user

  // ถ้า user ถูกสร้างแล้ว (บางกรณีจะยังไม่มี user ถ้าใช้ email confirmation)
  if (user) {
    const { error: insertError } = await supabase
      .from('user')
      .insert([
        {
          user_name: username,
          email: data.email,
          // user_id: user.id, // เพิ่มได้ถ้ามี column user_id
        },
      ])

    if (insertError) {
      return insertError
    }
  }

  // ไปยังหน้าหลัก
  revalidatePath('/', 'layout')
  redirect('/')
}
