import { Link } from '@remix-run/react'
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar'
import x from '~/image/x-icon.png'

export const Introduce = () => {
  return (
    <div className='border rounded p-5 space-y-4'>
      <div className='flex flex-row gap-3'>
        <Avatar>
          <AvatarImage src={''} alt='ショウジハヤトのアイコン' />
          <AvatarFallback>HS</AvatarFallback>
        </Avatar>
        <div className='space-y-2'>
          <p className='font-bold tracking-wider'>ショウジ ハヤト</p>
          <div className='flex flex-row gap-2 items-baseline'>
            <Link to='https://x.com/katze751' target='_blank'>
              <img src={x} width='20px' height='20px' />
            </Link>
          </div>
        </div>
      </div>
      <div className='py-1'>
        <p className='tracking-wider text-sm leading-6'>
          美容にこだわるマーケター。
        </p>
        <p className='tracking-wider text-sm leading-6'>データは多ければ多いほど大好物です。</p>
      </div>
    </div>
  )
}
