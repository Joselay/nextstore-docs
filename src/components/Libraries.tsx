import Image from 'next/image'

import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'
import logoNode from '@/images/logos/node.svg'
import logoNext from '@/images/logos/next.svg'
import logoReact from '@/images/logos/react.svg'
import logoBun from '@/images/logos/bun.svg'

const libraries = [
  {
    href: 'https://nodejs.org/',
    name: 'Node',
    description:
      'A popular JavaScript runtime built on Chrome’s V8 JavaScript engine, designed for building scalable network applications and server-side scripting.',
    logo: logoNode,
  },
  {
    href: 'https://nextjs.org/',
    name: 'Next.js',
    description:
      'A powerful React-based framework for building fast, scalable web applications with server-side rendering, static site generation, and API routes.',
    logo: logoNext,
  },
  {
    href: 'https://react.dev/',
    name: 'React',
    description:
      'A JavaScript library for building user interfaces, known for its component-based architecture and fast rendering using a virtual DOM.',
    logo: logoReact,
  },
  {
    href: 'https://bun.sh/',
    name: 'Bun',
    description:
      'A modern JavaScript runtime that is fast and efficient, focusing on speed and performance for both server-side and client-side applications.',
    logo: logoBun,
  },
]

export function Libraries() {
  return (
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="official-libraries">
        Official libraries
      </Heading>
      <div className="not-prose mt-4 grid grid-cols-1 gap-x-6 gap-y-10 border-t border-zinc-900/5 pt-10 sm:grid-cols-2 xl:max-w-none xl:grid-cols-3 dark:border-white/5">
        {libraries.map((library) => (
          <div key={library.name} className="flex flex-row-reverse gap-6">
            <div className="flex-auto">
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
                {library.name}
              </h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                {library.description}
              </p>
              <p className="mt-4">
                <Button href={library.href} variant="text" arrow="right">
                  Read more
                </Button>
              </p>
            </div>
            <Image
              src={library.logo}
              alt=""
              className="h-12 w-12"
              unoptimized
            />
          </div>
        ))}
      </div>
    </div>
  )
}
