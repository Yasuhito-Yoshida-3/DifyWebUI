import type { FC } from 'react'
import Image from 'next/image'
import classNames from 'classnames'
import { APP_INFO } from '@/config'

interface AnswerProps {
  item: { id: string; content: string }
  className?: string
}

const Answer: FC<AnswerProps> = ({ item, className }) => {
  return (
    <div className={classNames('flex items-start mb-3', className)}>
      {/* AIアイコン */}
      <Image
        src={APP_INFO.bot_avatar || '/bot-avatar.png'}
        alt="AI"
        width={52}
        height={52}
        className="rounded-full mr-2 shrink-0"
      />
      {/* 吹き出し */}
      <div className="max-w-[720px] rounded-2xl bg-gray-100 px-3 py-2">
        {item.content}
      </div>
    </div>
  )
}

export default Answer
