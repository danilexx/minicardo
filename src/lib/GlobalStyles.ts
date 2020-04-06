import { lighten } from "polished";
import { createGlobalStyle } from "./StyledComponents";

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    min-height: 100vh;
  }
  * {
    box-sizing: border-box;
  }
  #__next{
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  html{
    font-size: 62.5%;
    background-color: ${props => props.theme.background};
  }

  div{
    /* padding: 2rem; */
    &#__next{
      padding: 0;
    }
  }

  @media (max-width: 1080) {
    html {
      font-size: 58%;
    }
  }

  @media (max-width: 600px) {
    html{
      font-size: 50%;
    }
  }

  p {
    font-size: 1.4rem;
  }

  span {
    font-size: 2rem;
  }
  .react-select__menu{
    z-index: 60 !important;
    /* overflow: auto; */
  }
  .react-select__option{
    z-index: 60 !important;
    font-family: Roboto, Arial;
    font-size: 1.5rem !important;
    cursor: pointer !important;
    @media (max-width: 600px) {
      font-size: 2rem !important;
    }
  }
  .react-select__option.react-select__option--is-selected{
  }
  .react-select__option.react-select__option--is-focused{
    background-color: ${props =>
      lighten(0.25, props.theme.secondary)} !important;
  }

  * {
    font-family: "Roboto", "Arial";
  }
  .__react_component_tooltip.zap-tool{
    
    background-color: ${props => props.theme.zap} !important;
    color: ${props => props.theme.white} !important;
  }
  .__react_component_tooltip.show.zap-tool{
    opacity: 1;
  }

  .Toastify__toast.Toastify__toast--default.minicardo-error-toast {
    background: ${props => props.theme.danger};
  }
  .Toastify__toast-body.minicardo-error-toast {
    color: white;
    font-size: 2rem;
    text-align: center;
  }
  .Toastify__progress-bar.Toastify__progress-bar--animated.Toastify__progress-bar--default {
    background: white;
}
`;
