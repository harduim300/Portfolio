import styles from './PrivacyPolicy.module.scss'

function PrivacyPolicy() {
  return (
    <section id='privacyPolicy' className={styles.privacyPolicy}>
      <div className={styles.privacyPolicyContainer}>
        <div className={styles.privacyPolicyContent}>

          <h1>Política de Cookies</h1>
          <p>
            Esta Política de Cookies explica como utilizamos cookies e tecnologias semelhantes em nosso site, em conformidade com as legislações vigentes, como o Regulamento Geral de Proteção de Dados (GDPR) da União Europeia e a Lei Geral de Proteção de Dados (LGPD) do Brasil.
          </p>

          <h2>O que são Cookies?</h2>
          <p>
            Cookies são pequenos arquivos de texto armazenados no seu dispositivo quando você acessa um site. Eles permitem que o site "lembre" de suas ações e preferências (como informações de login, idioma e outras configurações) por um período, facilitando a navegação e aprimorando sua experiência.
          </p>
          <p>
            Existem diferentes tipos de cookies:
          </p>
          <ul>
            <li><strong>Cookies de Sessão:</strong> São temporários e expiram quando você fecha o navegador.</li>
            <li><strong>Cookies Persistentes:</strong> Permanecem no dispositivo por um período determinado e são usados para lembrar suas preferências em visitas futuras.</li>
          </ul>

          <h2>Como Utilizamos os Cookies</h2>
          <p>
            Utilizamos cookies para:
          </p>
          <ul>
            <li>Garantir o funcionamento adequado do site;</li>
            <li>Melhorar a performance e a experiência do usuário;</li>
            <li>Personalizar conteúdos e anúncios;</li>
            <li>Analisar o tráfego e a utilização do site;</li>
            <li>Implementar medidas de segurança, como a prevenção contra spam e fraudes.</li>
          </ul>

          <h2>Cookies de Terceiros</h2>
          <p>
            Além dos cookies próprios, nosso site utiliza cookies de terceiros, que são definidos por serviços externos para fornecer funcionalidades adicionais e análise de dados. Exemplos:
          </p>
          <ul>
            <li>
              <strong>Facebook Pixel:</strong> Utilizado para mensurar conversões, otimizar anúncios e construir públicos personalizados. Consulte a <a href="https://www.facebook.com/policies/cookies/" target="_blank" rel="noopener noreferrer">Política de Cookies do Facebook</a> para mais detalhes.
            </li>
            <li>
              <strong>Google reCAPTCHA:</strong> Implementado para proteger nosso site contra spam e atividades maliciosas. Este serviço pode definir cookies para identificar comportamentos suspeitos. Para mais informações, veja a <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Política de Privacidade do Google</a> e as <a href="https://developers.google.com/recaptcha/docs/faq" target="_blank" rel="noopener noreferrer">Perguntas Frequentes do reCAPTCHA</a>.
            </li>
          </ul>

          <h2>Gerenciamento dos Cookies</h2>
          <p>
            Você pode gerenciar ou desativar os cookies por meio das configurações do seu navegador. Contudo, a desativação de cookies pode afetar negativamente a funcionalidade do site e sua experiência de navegação.
          </p>
          <p>
            Para saber mais sobre cookies e como gerenciá-los, visite:
          </p>
          <ul>
            <li>
              <a href="https://www.allaboutcookies.org/" target="_blank" rel="noopener noreferrer">All About Cookies</a>
            </li>
            <li>
              <a href="https://www.cookiebot.com/pt/" target="_blank" rel="noopener noreferrer">Cookiebot</a>
            </li>
          </ul>

          <h2>Alterações nesta Política de Cookies</h2>
          <p>
            Esta política pode ser atualizada periodicamente para refletir mudanças em nossas práticas ou em requisitos legais. Recomendamos que você a revise regularmente.
          </p>

          <h2>Contato</h2>
          <p>
            Se você tiver dúvidas ou sugestões sobre nossa Política de Cookies, entre em contato através do e-mail <a href="mailto:matheusharduimcorp@gmail.com">matheusharduimcorp@gmail.com</a>.
          </p>
        </div>
      </div>
    </section>
  )
}

export default PrivacyPolicy;
