import { Link } from '@remix-run/react'

export const Header = () => {
  return (
    <header className='h-24 md:h-28 flex items-center sticky top-0 bg-white md:static z-10'>
      <div className='container mx-auto max-w-[1120px] relative'>
        <h1 className='font-bold text-xl md:text-3xl text-center'>
          <Link to='/'>SELECT * FROM ハヤト;</Link>
        </h1>
      </div>
    </header>
  )
}
