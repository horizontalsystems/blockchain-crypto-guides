import { createElement } from 'react'
import cn from 'classnames'

import styles from './Container.module.scss'

function Container({ children, className, fluid, clipped = true }) {
  return createElement('div', {
    className: cn(className, {
      [styles['Container-clipped']]: clipped,
      [styles['Container-fluid']]: fluid,
      [styles['Container']]: !fluid
    }),
    children
  })
}

export default Container
