import styles from './Markdown.module.css'

export default function Markdown({ content }) {
  return <div className={styles['markdown']} dangerouslySetInnerHTML={{ __html: content }} />
}
