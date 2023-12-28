import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogPosts } from 'contentlayer/generated'
import Main from './Main'

export default async function Page() {
  const sortedPosts = sortPosts(allBlogPosts)
  const posts = allCoreContent(sortedPosts)
  return <Main posts={posts} />
}
