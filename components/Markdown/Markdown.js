import styles from './Markdown.module.scss'

export default function Markdown({ content }) {
  return <div className={styles['markdown']} dangerouslySetInnerHTML={{ __html: content }} />
}
