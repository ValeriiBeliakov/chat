import cn from 'clsx';
import styles from "./Field.module.scss";
import { TypeInputProps } from './field.types';
import type {Metadata} from 'next';
import { forwardRef } from 'react';


export const metadata:Metadata ={
title: 'Field'
}


const Field = forwardRef<HTMLInputElement, TypeInputProps>(
	({ error, style, Icon, className, ...rest }, ref) => {
		return (
			<label className={cn(styles.field, className)} style={style}>
				{Icon && (
					<div className={styles.icon}>
						<Icon />
					</div>
				)}
				<input ref={ref} {...rest} />
				{error && <div className={styles.error}>{error.message}</div>}
			</label>
		)
	}
)

Field.displayName = 'Field'

export default Field
