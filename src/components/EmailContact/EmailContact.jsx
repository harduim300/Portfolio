import style from './EmailContact.module.scss'
import React, { useState, useRef } from "react";
import ReCAPTCHA from 'react-google-recaptcha';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { contatoEnviouEmail, preencheuEmail, preencheuMensagem, preencheuNome } from '../../../metaTracking';

const EmailContact = () => {
  const recaptchaRef = useRef(null);
  const [captchaValue, setCaptchaValue] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false); // Estado para controle do botão

  const resetRecaptcha = () => {
    if (recaptchaRef.current) {
      recaptchaRef.current.reset();
      setCaptchaValue(null);
    }
  };

  const handleRecaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captchaValue) {
      toast.error('Por favor complete a verificação do ReCAPTCHA!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      return;
    }

    setIsSubmitting(true); // Desabilita o botão de envio

    // 1. Primeiro verifica o reCAPTCHA no backend
    const recaptchaResponse = await fetch('http://localhost:3000/api/verify-recaptcha', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token: captchaValue }),
    });

    const recaptchaResult = await recaptchaResponse.json();

    if (!recaptchaResult.success) {
      toast.error('Falha na verificação do reCAPTCHA. Tente novamente.', { theme: 'dark', transition: Bounce });
      setIsSubmitting(false);
      setCaptchaValue(null);
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          captcha: captchaValue,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success('Mensagem foi enviada com sucesso ! Agora, verifique sua caixa de entrada do email...', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
        setFormData({ name: '', email: '', message: '' });
        setCaptchaValue(null);
      } else {
        toast.error(`Erro ao enviar mensagem: ${result.error || 'Unknown error'}`, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
        resetRecaptcha();

      }
    } catch (error) {
      console.error('Error submitting the form:', error);
      toast.error(`Erro ao enviar email: ${result.error || 'Unknown error'}. Por favor tente novamente mais tarde !`, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    } finally {
      setIsSubmitting(false); // Reabilita o botão de envio
    }
  };

  return (
    <section id='email-form' className={style.email_form_container}>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
      <div className={style.email_form_content}>
        <div className={style.email_form_title}>
          <h1>Entre em Contato</h1>
          <div className={style.email_title_border} />
        </div>
        <form onSubmit={handleSubmit} className={style.email_form}>
          <input
            type="text"
            name="name"
            placeholder="Digite seu nome..."
            required
            value={formData.name}
            onChange={handleInputChange}
            onClick={preencheuNome}
            className={style.input_field}
          />
          <input
            type="email"
            name="email"
            placeholder="Digite seu email..."
            required
            value={formData.email}
            onChange={handleInputChange}
            onClick={preencheuEmail}
            className={style.input_field}
          />
          <textarea
            name="message"
            placeholder="Escreva aqui sua mensagem..."
            required
            value={formData.message}
            onChange={handleInputChange}
            onClick={preencheuMensagem}
            className={style.textarea_field}
          ></textarea>
          <div className={style.recaptcha_placeholder}>
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey="6LdK6NoqAAAAAF_P59K6NAtSY2LZB6d8XkWgwPay"
              onChange={handleRecaptchaChange}
            />
          </div>
          <button 
            onClick={contatoEnviouEmail}
            type="submit" 
            className={style.submit_button} 
            disabled={isSubmitting} // Desabilita o botão enquanto o envio está em progresso
          >
            {isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailContact;
