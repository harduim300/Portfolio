import axios from 'axios';

// Função para coletar os dados do usuário
const getUserData = () => {
    const fbp = getCookie('_fbp');  // Facebook Pixel ID
    const fbc = getCookie('_fbc');  // Facebook Click ID

    return {
        fbp: fbp,
        fbc: fbc,
    };
};

// Função para obter o valor de um cookie
const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
};

// Função para enviar o evento de conversão para o backend
async function sendEventToAPIConversion(event_name, custom_data) {
    const user_data = getUserData();  // Coleta os dados do usuário
    const event_source_url = window.location.href;  // URL da página atual

    try {
        const response = await axios.post('https://harduim-backend-portfolio.vercel.app/api/track-event-meta', {
            event_name: event_name,
            user_data: user_data,
            custom_data: custom_data,
            event_source_url: event_source_url
        });
    } catch (error) {
        console.error(`Erro ao enviar evento ${event_name}:`, error.message);
    }
}

// Função para verificar se o usuário aceitou os cookies
const checkCookieConsent = () => {
    const consent = localStorage.getItem('cookie-consent');
    if (consent === 'true') {
        return true;
    }
    return false;
};

// Se o consentimento for dado, inicializa o rastreamento
const enableTracking = () => {
    if (checkCookieConsent()) {
        // Adiciona o Pixel do Facebook, se consentido
        if (window.fbq) {
            fbq('init', '615892961175593');  // ID do Pixel
            fbq('track', 'PageView');  // Evento de visualização de página
        }
    }
};

// Dados de eventos para botões e páginas
const getButtonData = (button_action) => {
    return {
        event: 'button_click',
        button_action: button_action,
    };
};

const getInitForm = (init_form_action) => {
    return {
        event: 'init_form_action',
        form_action: init_form_action,
    };
};

const getPageData = (page_action) => {
    return {
        event: 'access_page',
        page_action: page_action,
    };
};

// Funções de rastreamento de eventos específicos
export const acessouPoliticaPrivacidade = () => {
    if (checkCookieConsent()) {
        fbq('track', 'PageView');
        const custom_data = getPageData('Acessou a Pagina Politica de Privacidade');
        sendEventToAPIConversion('PageView', custom_data);
    }
};

export const acessouProjetos = () => {
    if (checkCookieConsent()) {
        fbq('track', 'PageView');
        const custom_data = getPageData('Acessou a Secao Projetos');
        sendEventToAPIConversion('PageView', custom_data);
    }
};

export const acessouSobreMim = () => {
    if (checkCookieConsent()) {
        fbq('track', 'PageView');
        const custom_data = getPageData('Acessou a Secao Sobre Mim');
        sendEventToAPIConversion('PageView', custom_data);
    }
};

export const acessouContato = () => {
    if (checkCookieConsent()) {
        fbq('track', 'ViewContent');
        const custom_data = getPageData('Acessou a Secao Contato');
        sendEventToAPIConversion('ViewContent', custom_data);
    }
};

export const preencheuNome = () => {
    if (checkCookieConsent()) {
        fbq('track', 'Lead');
        const custom_data = getInitForm('Preencheu campo Nome do formulario');
        sendEventToAPIConversion('Lead', custom_data);
    }
};

export const preencheuEmail = () => {
    if (checkCookieConsent()) {
        fbq('track', 'Lead');
        const custom_data = getInitForm('Preencheu algum Email do formulario');
        sendEventToAPIConversion('Lead', custom_data);
    }
};

export const preencheuMensagem = () => {
    if (checkCookieConsent()) {
        fbq('track', 'Lead');
        const custom_data = getInitForm('Preencheu algum Mensagem do formulario');
        sendEventToAPIConversion('Lead', custom_data);
    }
};

export const contatoEnviouEmail = () => {
    if (checkCookieConsent()) {
        fbq('track', 'CompleteRegistration');
        const custom_data = getButtonData('Enviou um email');
        sendEventToAPIConversion('CompleteRegistration', custom_data);
    }
};

export const acessouMeuLinkedin = () => {
    if (checkCookieConsent()) {
        fbq('track', 'ViewContent');
        const custom_data = getButtonData('Acessou meu LinkedIn');
        sendEventToAPIConversion('ViewContent', custom_data);
    }
};

export const acessouMeuWhatsApp = () => {
    if (checkCookieConsent()) {
        fbq('track', 'ViewContent');
        const custom_data = getButtonData('Acessou meu WhatsApp');
        sendEventToAPIConversion('ViewContent', custom_data);
    }
};

export const acessouMeuGithub = () => {
    if (checkCookieConsent()) {
        fbq('track', 'PageView');
        const custom_data = getButtonData('Acessou meu Github');
        sendEventToAPIConversion('PageView', custom_data);
    }
};

// Inicializa o rastreamento ao carregar a página
enableTracking();
