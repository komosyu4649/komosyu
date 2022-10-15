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

export type Works = {
  works: [
    slug: string,
    workData: {
      thumbnail: string
      name: string
      type: string
      url: string
      description: string
      responsible: string
      technology: string
      about: string
    }
  ]
}

export type WorkDetail = {
  thumbnail: string
  name: string
  type: string
  url: string
  description: string
  responsible: string
  technology: string
  about: string
}
