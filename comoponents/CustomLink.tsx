import Link from 'next/link'

const CustomLink = ({ children, href }: { children: string; href: string }) => {
  return href.startsWith('/') || href.startsWith('#') ? (
    <Link href={href}>
      <a>{children}</a>
    </Link>
  ) : (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  )
}

export default CustomLink
