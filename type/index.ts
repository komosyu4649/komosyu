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
