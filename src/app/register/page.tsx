import Auth from '@/components/screens/auth/Auth';
import type {Metadata} from 'next';
export const metadata:Metadata ={
title: 'Register'
}

export default function RegisterPage() {
 return (
  <Auth type={"register"}/>
)
}