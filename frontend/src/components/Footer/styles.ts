import styled from 'styled-components';

export const StyledFooter = styled.footer`
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    background-color: rgba(53, 53, 53, 0.05);
    padding: 4rem 0;


    .footer__title {
        font-size: 1rem;
        font-weight: 600;
        margin-bottom: 0.75rem;
        margin-top: 1.438rem;
    }

    .footer__title-social {
        margin-top: 0;
    }

    .footer__link {
        font-size: 1rem;
        font-weight: 400;
        text-decoration: none;
        color: #000;
        margin-bottom: 1rem;
    }
`
export const FirstHalfContainer = styled.div`
    display:flex;
    flex-flow: row nowrap;
    padding-left: 8rem;

    @media (min-width: 1500px) {
        padding-left: 10rem;
    }
`

export const SecondHalfContainer = styled.div`
    position: relative;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    margin-left: 3.25rem;
`

export const FooterInfoContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    padding-right: 14.938rem;
`

export const FooterMenuContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: flex-start;

`

export const SocialMediaContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    margin-top: 0.8rem;

    .company-info__social-icons-container {
        display: flex;
        flex-flow: row nowrap;
        gap: 1rem;
    }
`

export const CompanyInfoContainer = styled.div`
    padding-top: 2.313rem;
    width: 19.188rem;
    height: 100%;
    
    .company-info__title {
        font-weight: 700;
    }

    .company-info__text {
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.5rem;
    }

    .company-info__email {
        font-size: 1rem;
        font-weight: 500;
        margin: 0;
        margin-top: 0.938rem;
    }
`

export const FooterMailingContainer = styled.div`
    position: absolute;
    top: 60%;
    left: 0;
    width: 500px;

    .mailing-list__label{
        font-size: 0.75rem;
        font-weight: 300;
        margin-bottom: 0.4rem;
    }

    .input-mail {
        width: 18.563rem;
        height: 3.125rem;
    }

    .input-mail::placeholder {
        font-size: 1rem;
        font-weight: 400;
        padding-left: 0.5rem;
        color: rgba(53, 53, 53, 0.4);
    }

    .button-mail-list {
        font-size: 1rem;
        font-weight: 600;
        padding: 0.75rem 2.875rem;
        width: 9.75rem;
        color: #FFF;
        background-color: #353535;
        border: 0;
        border-radius: 8px;
        margin-left: 1.5rem;
    }
`

export const MailingListForm = styled.form`
    display: flex;
    flex-flow: row nowrap;
`

export const StyledCopyright = styled.div`
    margin-top: 2rem;
    font-size: 0.75rem;
    font-weight: 400;
`