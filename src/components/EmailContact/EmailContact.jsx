import style from './EmailContact.module.scss'
import React, { useState } from "react";
import ReCAPTCHA from 'react-google-recaptcha';


const EmailContact = () => {
    const [captchaValue, setCaptchaValue] = useState(null);

    const handleRecaptchaChange = (value) => {
      setCaptchaValue(value);
    };
    const handleSubmit = () => {
        if (captchaValue) {
          console.log("Form submitted with captcha:", captchaValue);
          // Você pode enviar o formulário ou realizar outra ação
        } else {
          alert("Por favor, complete o reCAPTCHA!");
        }
    };
    return (
        <section id='email-form' className={style.email_form_container}>
            <div className={style.email_form_content}>
                <div className={style.email_form_title}>
                    <h1>Entre em Contato</h1>
                    <div className={style.email_title_border}/>
                </div>
                <form onSubmit={handleSubmit} className={style.email_form}>
                    <input 
                        type="text" 
                        placeholder="Digite seu nome" 
                        required 
                        className={style.input_field} 
                    />
                    <input 
                        type="email" 
                        placeholder="Digite seu email" 
                        required 
                        className={style.input_field} 
                    />
                    <textarea 
                        placeholder="Escreva sua mensagem..." 
                        required 
                        className={style.textarea_field}
                    ></textarea>
                    <div className={style.recaptcha_placeholder}>
                    <ReCAPTCHA
                            sitekey="6LcdsFsqAAAAAGXbrCFCXKhyVnWeLpXjwBQ3w-hR" // Substitua com sua chave do reCAPTCHA
                            onChange={handleRecaptchaChange}
                        />
                    </div>
                    <button 
                        type="submit" 
                        className={style.submit_button}
                    >
                        Enviar
                    </button>
                </form>
            </div>
        </section>
    );
}

export default EmailContact;