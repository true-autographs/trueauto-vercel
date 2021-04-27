import React, { FC } from 'react'
import { ContentSection, ButtonRolling } from '@components/ui'
import s from './AgentWrapper.module.scss'
import cn from 'classnames'
import Image from 'next/image'

interface AgentWrapperProps {
  children: any
}

const AgentWrapper: React.FC<AgentWrapperProps> = ({ children }) => {
  return <div className={s.agentwrapper}>{children}</div>
}

export default AgentWrapper
