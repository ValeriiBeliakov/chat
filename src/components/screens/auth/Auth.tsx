import { Button } from "@/components/ui/button/Button";
import Field from "@/components/ui/field/Field";
import { AtSign, KeyRound } from "lucide-react";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Auth",
};

interface AuthPageProps {
  type?: "login" | "register";
}

export default function Auth({ type }: AuthPageProps) {
  return (
    <div className="transform -translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2">
  <form className="flex flex-col gap-3 border border-border p-layout">
    <h1 className="text-center mb-5">{type}</h1>
    <Field placeholder="Введите email" type="email" Icon={AtSign}/>
    <Field placeholder="Введите пароль" type="password" Icon={KeyRound} className="mb-4" error={{message: "Не верный пароль",type:"min"}}/>
    <Button isLoading={false} className="mx-auto">{type}</Button>
  </form>
  </div>
  )
}
