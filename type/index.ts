export type Posts = {
  posts: [
    {
      frontMatter: {
        title: string
        publishedDate: string
        modifiedDate: string
        description: string
        category: string
      }
      slug: string
    }
  ]
}

export type FilteredPosts = {
  filteredPosts: [
    {
      frontMatter: {
        title: string
        publishedDate: string
        modifiedDate: string
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
    publishedDate: string
    modifiedDate: string
    description: string
    category: string
  }
  slug: string
}

export type PostFrontMatter = {
  // frontMatter: {
  title: string
  publishedDate: string
  modifiedDate: string
  description: string
  category: string
  // }
}

export type PostContext = {
  frontMatter: {
    title: string
    publishedDate: string
    modifiedDate: string
    description: string
    category: string
  }
  content: string
  allContent: JSX.Element
}

export type Works = {
  works: [
    slug: string,
    workData: {
      public: boolean
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

export type WorkData = {
  slug: string
  workData: {
    public: boolean
    thumbnail: string
    name: string
    type: string
    url: string
    description: string
    responsible: string
    technology: string
    about: string
  }
}

export type WorkDetail = {
  public: boolean
  thumbnail: string
  name: string
  type: string
  date: string
  url: string
  description: string
  responsible: string
  technology: string
  about: string
}
