import React from 'react'
import Link from 'next/link'
import cn from 'classnames'
import s from './ButtonRolling.module.scss'


interface ButtonProps {
    href: string
    text: string
    className?: string
    variant?: string
}

const Button = ({ href, className, variant, text }: ButtonProps) => {
    const buttonClasses = cn(s.button, className)

    return (
        <Link href={href}>
            <a className={buttonClasses}>{text}</a>
        </Link>
    )
}

export default Button