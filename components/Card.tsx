import Image from "next/image"

interface CardProps {
  title: string
  type?: string
  imageUrl?: string
  content: string
  webUrl?: string
  date?: string | Date
  category?: string
  author?: {
    name: string
    avatar: string
  }
}

const Card = ({
  title,
  type,
  webUrl,
  content,
  category,
  author,
  imageUrl,
}: CardProps) => {
  return (
    <li className="flex w-full h-auto">
      <div className="flex flex-col h-full rounded-lg shadow-lg overflow-hidden bg-white dark:bg-gray-800">
        {imageUrl && (
          <div className="h-48 w-full relative">
            <Image src={imageUrl} alt={title} layout="fill" objectFit="cover" />
          </div>
        )}
        <div className="p-6 flex-grow">
          <div className="flex items-center justify-between mb-2">
            {category && (
              <span className="px-2 py-1 text-xs font-bold rounded bg-violet-600 text-white">
                {category}
              </span>
            )}
          </div>
          <h3 className="text-xl font-bold mb-2 hover:underline">
            <a href={webUrl}>{title}</a>
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-4">
            {content}
          </p>
        </div>
        <div className="p-6 pt-0 mt-auto">
          <div className="flex items-center justify-between">
            <a
              href={webUrl}
              className="text-violet-600 hover:underline dark:text-violet-400"
            >
              Lire Plus
            </a>
            {author && (
              <div className="flex items-center">
                <Image
                  src={author.avatar}
                  alt={`Avatar de ${author.name}`}
                  width={30}
                  height={30}
                  className="rounded-full mr-2"
                />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {author.name}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </li>
  )
}

export default Card
