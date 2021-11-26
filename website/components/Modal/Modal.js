import Container from '../Container'

class Modal extends React.Component {
  static propTypes = {}

  hideModal = () => {
    this.props.showModal(null)
    this.detachShortcut()
  }

  attacheShortcut = event => {
    if (event.keyCode === 27) {
      this.hideModal()
    }
  }

  detachShortcut = () => {
    window.removeEventListener('keydown', this.attacheShortcut)
  }

  componentWillUnmount() {
    this.detachShortcut()
  }

  componentDidMount() {
    window.addEventListener('keydown', this.attacheShortcut)
  }

  componentDidUpdate() {
    if (!this.props.modal) return

    const manager = this.manager
    const childes = manager.childNodes

    const modal = childes.length && manager.childNodes[0]
    if (!!modal) {
      modal.style.zIndex = 1001
      modal.style.opacity = 1
      modal.style.display = 'block'
    }
  }

  render() {
    if (!this.props.modal) return null

    return (
      <div className="modal-container" ref={ref => this.manager = ref}>
        <Container className="modal fadeInUp">
          {/*<span className="close" onClick={this.hideModal}>&times;</span>*/}
          {this.props.modal}
        </Container>
        <div className="lean-overlay" onClick={this.hideModal} />
      </div>
    )
  }
}

export default Modal
