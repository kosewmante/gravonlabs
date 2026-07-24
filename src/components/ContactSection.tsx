import { useState } from 'react';
import { Mail, ArrowRight, CheckCircle2 } from 'lucide-react';

// TODO(gravonlabs): confirm the real inbox — this was info@gravonlabs.com on the old site.
const CONTACT_EMAIL = 'info@gravonlabs.com';

export const ContactSection = () => {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', subject: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(formData.subject || 'Project enquiry — GravonLabs');
    const body = encodeURIComponent(
      `Name: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\n\n${formData.message}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="section section--ink">
      <div className="container">
        <div className="contact-inner">
          <div className="contact-copy">
            <div className="eyebrow">Get in touch</div>
            <h2 className="contact-title">Let&rsquo;s talk about the thing that can&rsquo;t be wrong.</h2>
            <p>
              Tell us what you&rsquo;re trying to fix. We&rsquo;ll tell you honestly whether
              we&rsquo;re the right team for it — and if we are, how we&rsquo;d approach it.
            </p>
            <div className="contact-direct">
              <a href={`mailto:${CONTACT_EMAIL}`}>
                <Mail size={18} />
                <span className="mono">{CONTACT_EMAIL}</span>
              </a>
              <span className="hero-note" style={{ margin: 0 }}>Typically replies within one business day</span>
            </div>
          </div>

          <div className="contact-card">
            {isSubmitted ? (
              <div className="contact-ok">
                <span className="contact-ok-badge"><CheckCircle2 size={30} /></span>
                <h3>Your email is ready to send</h3>
                <p>
                  We&rsquo;ve opened a draft to <strong>{CONTACT_EMAIL}</strong> in your mail app.
                  Hit send and we&rsquo;ll get back to you within one business day.
                </p>
                <button
                  className="btn btn--secondary"
                  onClick={() => { setIsSubmitted(false); setFormData({ firstName: '', lastName: '', email: '', subject: '', message: '' }); }}
                >
                  Write another
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First name</label>
                    <input id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Jordan" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last name</label>
                    <input id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Okafor" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="email">Work email <span className="required">*</span></label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@company.com" required />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="e.g. Fraud model review" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">What are you trying to solve? <span className="required">*</span></label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="A couple of sentences is plenty to start." required />
                </div>
                <button type="submit" className="btn btn--primary btn--block btn--lg">
                  Send message
                  <ArrowRight size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
