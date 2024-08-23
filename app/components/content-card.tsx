import { format } from '@formkit/tempo'
import { Link } from '@remix-run/react'
import { Badge } from '~/components/ui/badge'

interface Props {
  content: Blog
}

export const ContentCard = ({ content }: Props) => {
  const createdAt = format({
    date: content.createdAt,
    format: 'YYYY/MM/DD',
    locale: 'ja',
    tz: 'Asia/Tokyo',
  })

  return (
    <Link
      to={`/${content.category.slug}/${content.id}`}
      className='max-w-[330px]'
    >
      <div className='border col-span-1 space-y-4 pb-4'>
        <div className='h-[180px]'>
          <img
            src={content.eyecatch.url}
            width='330'
            height='180'
            alt={`${content.title}のアイキャッチ`}
            loading='lazy'
            className='h-[180px]'
          />
        </div>
        <div className='px-3 space-x-2'>
          {content.tags.map((tag) => (
            <Badge key={tag.id} variant='outline' className='h-8 space-x-1'>
              <span>#</span>
              <span>{tag.name}</span>
            </Badge>
          ))}
        </div>
        <div className='px-4'>
          <p className='h-16 font-bold'>{content.title}</p>
          <p className='text-muted-foreground text-end text-sm'>{createdAt}</p>
        </div>
      </div>
    </Link>
  )
}
