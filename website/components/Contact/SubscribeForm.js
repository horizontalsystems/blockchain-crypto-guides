import React from 'react'
import Icon from '../Icon'

class SubscribeForm extends React.Component {
  componentDidMount() {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://static.mailerlite.com/js/w/webforms.min.js?v253251d9ecd93b8e74c12a37f72e896f';
    this.div.appendChild(script);
  }

  render() {
    const { formId, formCode } = this.props
    const action = `https://app.mailerlite.com/webforms/submit/${formCode}`
    const className = `ml-subscribe-form ml-subscribe-form-${formId}`

    return (
      <div id={`mlb2-${formId}`} className={className} ref={e => (this.div = e)}>
        <form className="Contact-form Bottom-form" action={action} data-code={formCode} method="post">
          <input type="hidden" name="ml-submit" value="1" />

          <div className="Contact-form-group">
            <input type="email" className="form-control" name="fields[email]" placeholder="Email" required />
            <button type="submit" className="btn primary btn-yellow">Subscribe</button>
            <button type="button" className="btn loading btn-yellow" disabled="disabled">Subscribe</button>
          </div>
          <label className="Subscribe-checkbox-wrap">
            <input type="checkbox" className="Contact-checkbox" defaultChecked={true} required />
            <div className="Contact-checkbox-description">
              By signing up, you agree to Horizontal Systems Privacy Policy
            </div>
          </label>
        </form>

        <div className="Contact-success">
          <p>Done! Check your email.</p>
        </div>
      </div>
    )
  }
}

export default SubscribeForm
