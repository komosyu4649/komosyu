export type Posts = {
  posts: [
    {
      frontMatter: {
        title: string
        date: string
        description: string
        category: string
      }
      slug: string
    }
  ]
}

export type Post = {
  frontMatter: {
    title: string
    date: string
    description: string
    category: string
  }
  slug: string
}

export type PostFrontMatter = {
  // frontMatter: {
  title: string
  date: string
  description: string
  category: string
  // }
}

export type PostContext = {
  frontMatter: {
    title: string
    date: string
    description: string
    category: string
  }
  content: string
}

export type workDetail = {
  thumbnail: string
  name: string
  type: string
  url: string
  description: string
  responsible: string
  technology: string
  about: string
}
