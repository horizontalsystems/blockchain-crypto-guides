import cn from 'classnames'

function Button({ className, title, onClick }) {
  return (
    <button className={cn('Button', className)} onClick={onClick}>
      {title}
    </button>
  )
}

export default Button
