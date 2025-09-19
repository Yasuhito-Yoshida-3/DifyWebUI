import type { FC } from 'react'
import Image from 'next/image'
import classNames from 'classnames'
import { APP_INFO } from '@/config'

interface QuestionProps {
  id: string
  content: string
  className?: string
}

const Question: FC<QuestionProps> = ({ id, content, className }) => {
  return (
    <div className={classNames('flex items-start justify-end mb-3', className)}>
      {/* 吹き出し */}
      <div className="max-w-[720px] rounded-2xl bg-primary-50 px-3 py-2">
        {content}
      </div>
      {/* ユーザーアイコン */}
      <Image
        src={APP_INFO.user_avatar || '/user-avatar.png'}
        alt="User"
        width={52}
        height={52}
        className="rounded-full ml-2 shrink-0"
      />
    </div>
  )
}

export default Question
