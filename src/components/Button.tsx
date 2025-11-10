import type { ButtonHTMLAttributes } from 'react'

type Props = {
  variant?: 'primary' | 'secondary'
} & ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({ variant = 'primary', className = '', ...rest }: Props) {
  const base = 'px-4 py-2 rounded font-medium'
  const styles =
    variant === 'primary'
      ? 'bg-blue-600 text-white hover:bg-blue-700'
      : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
  return <button className={`${base} ${styles} ${className}`.trim()} {...rest} />
}
