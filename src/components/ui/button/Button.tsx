import { InputHTMLAttributes } from "react";
import { Loader } from "../loader/Loader";
import styles from "./Button.module.scss";
import cn from "clsx";


interface IButton extends InputHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean,
  className?: string
}

export const Button = ({isLoading,children,className}:IButton) => {
    return <button className={cn(styles.button,className)}>{isLoading ? <Loader/> : children}</button>
}