import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Inter:wght@100..900&display=swap');

  body{
    font-family: 'DM Sans', sans-serif;
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
