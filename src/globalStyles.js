import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Inter:wght@100..900&display=swap');

  body{
    font-family: "Inter", sans-serif;
    color: var(--base-color);
    background: #131313;
    font-weight: 400;
    line-height: 30px;
    font-size: 16px;
    --base-color: hsla(0,0%,100%,.65);
    --heading-color: #fff;
    --primary-color: #c9f31d;
    --lighter-color: #1f1f1f;
    --black-color: #070707;
    --border-color: hsla(0,0%,100%,.1);
  }

  .h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {
    line-height: 1.2;
  }

  .h2, h2 {
  font-size: 45px !important;
  }

  .h1, h1 {
  font-size: 65px;
  }

  .h4, h4 {
    line-height: 1.1;
    font-size: 24px;
}

  .h6, h6 {
    font-size: 16px;
  }

  .accordion-item .accordion-button, .form-control, .h1, .h2, .h3, .h4, .h5, .h6, .heading, .nice-select, h1, h2, h3, h4, h5, h6, input, select, textarea {
    color: #fff;
    font-family: 'DM Sans', sans-serif;
}

.padded-container{
  padding: 100px 30px;
}

  @media (min-width: 1200px) {
  .h1, h1 {
      font-size: 2.5rem;
    }
  }

@media only screen and (max-width: 1399px) {
 h1 {
      font-size: 55px;
  }
}
  @media (min-width: 1200px) {
    .h2, h2 {
        font-size: 2rem;
    }
}
  
    
    .button-primary{
    background: #c9f31d;
    z-index: 1;
    cursor: pointer;
    overflow: hidden;
    transition: .5s;
    font-weight: 600;
    text-align: center;
    padding: 10px 35px;
    align-items: center;
    position: relative;
    color: #000;
    border-radius: 15px;
    display: inline-flex;
    justify-content: center;
    text-transform: capitalize;
    font-size: 16px;
    border: 0;
    line-height: 30px;
    width:fit-content;
    margin-right:35px;
    font-family: "Inter", sans-serif;
    }

    .button-secondary{
    background: none;
    border:0;
    color:#fff;
    cursor: pointer;
    transition: .5s;
    font-size: 14px;
    align-items: center;
    display: inline-flex;
    text-transform: capitalize;
    text-decoration: underline;
    line-height:30px;
    font-family: "Inter", sans-serif;
    }
`;

export default GlobalStyle;
