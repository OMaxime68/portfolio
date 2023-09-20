import React, { useRef, useState } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    // Vérifiez si tous les champs obligatoires sont remplis
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast.error('Please fill in all required fields.', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      return;
    }

    setIsSubmitting(true);

    emailjs
      .sendForm(
        'service_iiw01nk',
        'template_osx1qeh',
        form.current,
        '1fNp01iIpV6khrGb2'
      )
      .then(
        (result) => {
          toast.success(`Thank you ${formData.name} ! Your message has been sent. 🚀`, {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
          });

          setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
          });
        },
        (error) => {
          toast.error(`An error occurred while sending your message. Please try again later. 😞`, {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
          });
          console.error(error);
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <section className="contact container section" id="contact">
        <h2 className="section__title">Get In Touch</h2>

        <div className="contact__container grid">
          <div className="contact__info">
            <h3 className="contact__title">Let's talk about everything!</h3>
            <p className="contact__details">Don't like forms? Send me an email at <a href="mailto:maximeowallerpro@gmail.com">maximeowallerpro@gmail.com</a>. 👋</p>
          </div>

          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <div className="contact__form-group">
              <div className="contact__form-div">
                <input
                  type="text"
                  name="name"
                  className="contact__form-input"
                  placeholder="Insert your name"
                  value={formData.name}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  required
                />
              </div>

              <div className="contact__form-div">
                <input
                  type="email"
                  name="email"
                  className="contact__form-input"
                  placeholder="Insert your email"
                  value={formData.email}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  required
                />
              </div>
            </div>

            <div className="contact__form-div">
              <input
                type="text"
                name="subject"
                className="contact__form-input"
                placeholder="Insert your subject"
                value={formData.subject}
                onChange={handleInputChange}
                disabled={isSubmitting}
                required
              />
            </div>

            <div className="contact__form-div contact__form-area">
              <textarea
                name="message"
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Write your message"
                value={formData.message}
                onChange={handleInputChange}
                disabled={isSubmitting}
                required
              ></textarea>
            </div>

            <button className="btn" type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <span>Sending...</span>
                  <i className="fas fa-spinner fa-spin"></i>
                </>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default Contact;