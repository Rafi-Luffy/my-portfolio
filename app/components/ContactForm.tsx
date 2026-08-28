'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle, Loader2, Mail } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { sound } from './AudioEngine';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    emailjs.init('EfVzb_vj_Gl41lalV');
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    sound.click();
    setIsSubmitting(true);
    setShowError(false);

    try {
      const serviceID = 'service_4c7oyv1';
      const templateID = 'template_etibhz8';
      const publicKey = 'EfVzb_vj_Gl41lalV';

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Rafi',
        reply_to: formData.email
      };

      const result = await emailjs.send(serviceID, templateID, templateParams, publicKey);
      console.log('EmailJS Success:', result);

      setShowSuccess(true);
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => setShowSuccess(false), 6000);
    } catch (error: unknown) {
      console.error('EmailJS Error:', error);
      let err = 'Automated transmission issue';
      if (typeof error === 'object' && error !== null) {
        const emailErr = error as { text?: string; message?: string; status?: number };
        if (emailErr.text) {
          err = emailErr.text;
        } else if (emailErr.message) {
          err = emailErr.message;
        }
      }
      setErrorMessage(err);
      setShowError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const mailtoLink = `mailto:s.b.m.rafi01@gmail.com?subject=${encodeURIComponent(
    `Project Inquiry from ${formData.name || 'Portfolio Visitor'}`
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
  )}`;

  return (
    <div className="edition-contact-form-wrapper">
      <form onSubmit={handleSubmit} className="edition-contact-form">
        <div className="form-group-row">
          <div className="form-field">
            <label htmlFor="contact-name">Your Name</label>
            <input
              type="text"
              id="contact-name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              placeholder="e.g. Satoshi Nakamoto"
              className="form-input"
            />
          </div>

          <div className="form-field">
            <label htmlFor="contact-email">Email Address</label>
            <input
              type="email"
              id="contact-email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder="s.b.m.rafi01@gmail.com"
              className="form-input"
            />
          </div>
        </div>

        <div className="form-field">
          <label htmlFor="contact-message">Message / Project Inquiry</label>
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleInputChange}
            required
            placeholder="Tell me about the problem, vision, or role..."
            className="form-textarea"
          />
        </div>

        <div className="form-submit-row">
          <button
            type="submit"
            disabled={isSubmitting}
            className="form-submit-btn"
            onMouseEnter={() => sound.hover()}
          >
            {isSubmitting ? (
              <>
                <Loader2 size={16} className="spin-icon" /> Sending Message...
              </>
            ) : (
              <>
                Send Message <Send size={15} />
              </>
            )}
          </button>
        </div>

        <AnimatePresence>
          {showSuccess && (
            <motion.div
              className="form-alert-banner success"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <CheckCircle2 size={16} />
              <span>Thank you! Your message has been transmitted successfully. I will get back to you promptly.</span>
            </motion.div>
          )}

          {showError && (
            <motion.div
              className="form-alert-banner error"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <AlertCircle size={16} />
                <span>{errorMessage || 'Failed to transmit message via automated gateway.'}</span>
              </div>
              <a
                href={mailtoLink}
                className="social-pill"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '6px 14px',
                  fontSize: '12px',
                  marginTop: '4px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: '#ffffff',
                  borderColor: 'rgba(255, 255, 255, 0.3)'
                }}
              >
                <Mail size={14} /> Open in Email App (Direct Mailto)
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </div>
  );
}
