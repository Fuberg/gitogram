import { feeds } from '../pages/feeds'
import { user } from '../pages/user'
import { stories } from '../pages/stories'

export default [
  {
    path: '/',
    component: feeds
  },
  {
    path: '/user',
    component: user
  },
  {
    path: '/stories',
    component: stories
  }
]
