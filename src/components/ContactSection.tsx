import React, { useState } from 'react';

export const ContactSection: React.FC = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Format the message for a mailto link
        const emailSubject = encodeURIComponent(formData.subject || 'Contact Form Submission');
        const emailBody = encodeURIComponent(
            `Name: ${formData.firstName} ${formData.lastName}\n` +
            `Email: ${formData.email}\n\n` +
            `Message:\n${formData.message}`
        );

        // Open the mailto link to send to info@gravonlabs.com
        window.location.href = `mailto:info@gravonlabs.com?subject=${emailSubject}&body=${emailBody}`;
    };

    return (
        <section id="contact" className="contact-section">
            <div className="contact-container">
                <div className="contact-content">
                    <h2>Get in Touch <br className="hide-mobile" /><span className="text-teal">with Us</span></h2>
                    <p>Please complete the form opposite and we will arrage a call with you to discuss your needs.</p>
                </div>

                <div className="contact-form-wrapper glass-panel">
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="firstName">First Name</label>
                                <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Last Name</label>
                                <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email <span className="required">*</span></label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Your Message <span className="required">*</span></label>
                            <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" rows={5} required />
                        </div>
                        <button type="submit" className="btn-primary">Submit Form</button>
                    </form>
                </div>
            </div>
        </section>
    );
};
