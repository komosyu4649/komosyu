// post

export type PostFrontMatter = {
  public: boolean
  title: string
  publishedDate: string
  modifiedDate: string
  description: string
  category: string
}

export type Post = {
  frontMatter: PostFrontMatter
  slug: string
}

export type Posts = {
  posts: [
    Post
  ]
}

export type FilteredPosts = {
  filteredPosts: [
    Post
  ]
}

export type PostContext = {
  frontMatter: PostFrontMatter
  content: string
  allContent: JSX.Element
}

// work

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

export type Works = {
  works: [
    slug: string,
    workData: WorkDetail
  ]
}

export type WorkData = {
  slug: string
  workData: WorkDetail
}
