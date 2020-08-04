import React from 'react'
import Icon from '../Icon'

class SubscribeFormModal extends React.Component {
  componentDidMount() {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://static.mailerlite.com/js/w/webforms.min.js?v253251d9ecd93b8e74c12a37f72e896f';
    this.div.appendChild(script);
  }

  render() {
    const { formId, formCode, onClose } = this.props
    const action = `https://app.mailerlite.com/webforms/submit/${formCode}`
    const className = `ml-subscribe-form ml-subscribe-form-${formId}`

    return (
      <div id={`mlb2-${formId}`} className={className} ref={e => (this.div = e)}>
        <form className="Contact-form" action={action} data-code={formCode} method="post">
          <div className="close-form">
            <span className="close" onClick={onClose}>&times;</span>
          </div>

          <input type="hidden" name="ml-submit" value="1" />
          <div className="Contact-form-info">
            Subscribe to our newsletter to get new products, guides and cheat sheets when they are published.
          </div>
          <div className="Contact-form-group">
            <input type="email" className="form-control bg-white" name="fields[email]" placeholder="Email" required />
          </div>
          <label className="Subscribe-checkbox-wrap">
            <input type="checkbox" className="Contact-checkbox" defaultChecked={true} required />
            <div className="Contact-checkbox-description">
              By signing up, you agree to Horizontal Systems Privacy Policy
            </div>
          </label>
          <div className="Contact-form-group">
            <button type="submit" className="btn primary btn-yellow w-full">Subscribe</button>
            <button type="button" className="btn loading btn-yellow w-full" disabled="disabled">Subscribe</button>
          </div>
        </form>

        <div className="Contact-success">
          <div className="done">
            <Icon name="done" />
          </div>
          <p className="done-text">
            Done! Check your email.
          </p>
        </div>
      </div>
    )
  }
}

export default SubscribeFormModal
