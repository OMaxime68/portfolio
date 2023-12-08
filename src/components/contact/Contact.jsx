import React, { useRef, useState } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
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
        process.env.REACT_APP_EMAILJS_SERVICEID,
        process.env.REACT_APP_EMAILJS_TEMPLATEID,
        form.current,
        process.env.REACT_APP_EMAILJS_USERID
      )
      .then(
        (result) => {
          toast.success(t('contact.form.successMessage', { name: formData.name }), {
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
          toast.error(t('contact.form.errorMessage'), {
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
        <h2 className="section__title">{t('contact.title')}</h2>

        <div className="contact__container grid">
          <div className="contact__info">
            <h3 className="contact__title">{t('contact.info.title')}</h3>
            <p className="contact__details" dangerouslySetInnerHTML={{ __html: t('contact.info.talkAbout') }}></p>
          </div>

          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <div className="contact__form-group">
              <div className="contact__form-div">
                <input
                  type="text"
                  name="name"
                  className="contact__form-input"
                  placeholder={t('contact.form.namePlaceholder')}
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
                  placeholder={t('contact.form.emailPlaceholder')}
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
                placeholder={t('contact.form.subjectPlaceholder')}
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
                placeholder={t('contact.form.messagePlaceholder')}
                value={formData.message}
                onChange={handleInputChange}
                disabled={isSubmitting}
                required
              ></textarea>
            </div>

            <button className="btn" type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <span style={{ marginRight: '19px' }}>{t('contact.form.sendingMessage')}</span>
                  <i className="fas fa-spinner fa-spin"></i>
                </>
              ) : (
                t('contact.form.submitButton')
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