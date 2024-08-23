import { NavLink } from '@remix-run/react'

const NAV_ITEMS = [
  {
    path: '/',
    name: 'トップ',
  },
  {
    path: '/marketing',
    name: 'マーケ',
  },
  {
    path: '/data-science',
    name: 'データ分析',
  },
  {
    path: '/beauty',
    name: '美容',
  },
]

export const Navbar = () => {
  return (
    <nav className='h-10 md:mb-6'>
      <ul className='flex justify-center font-semibold text-xs md:text-sm'>
        {NAV_ITEMS.map((item) => (
          <li
            key={`${item.name}_${item.path}`}
            className='h-12 w-32 flex items-center justify-center tracking-wide sm:tracking-widest hover:bg-muted hover:underline'
          >
            <NavLink
              to={item.path}
              prefetch='intent'
              className={({ isActive }) => (isActive ? 'underline' : '')}
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
