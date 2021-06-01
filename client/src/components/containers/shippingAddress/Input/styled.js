import styled from "styled-components";

const InputStyle = styled.div`
  .title {
    font-size: 0.9rem;
    color: #757575;
  }

  .row {
    display: flex;
    justify-content: flex-start;
  }

  .row-top {
    margin-bottom: 3rem;
  }

  .input-element {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
    margin: 0 1rem;
  }

  .input {
    position: relative;
    border: 1px solid #e0e0e0;
    width: 100%;
    height: 3rem;
    border-radius: 0.5rem;
    padding: 0.8rem 1rem;
    outline: none;
    transition: 0.3s ease all;
    border: 1px solid #bdbdbd;
  }

  .error-notification {
    width: max-content;
    position: absolute;
    margin: 0.25rem 0.25rem;
    font-weight: 500;
    font-size: 0.7rem;
    text-align: left;
    color: var(--error);
  }

  .validate-icon {
    position: absolute;
    right: 1rem;
    font-size: 0.6rem;
    bottom: 1rem;
    opacity: 0;
  }

  .input:focus {
    border: 2px solid var(--border);
    outline: none;
    box-shadow: 3px 0px 30px rgba(50, 50, 50, 0.01);
  }

  .success-message {
    justify-content: center;
    display: flex;
    border: 3px solid var(--success);
    padding: 0.5rem;
    width: 100%;
    height: 3rem;
    outline: none;
    border-radius: 0.5rem;
  }

  .error-message {
    justify-content: center;
    display: flex;
    border: 3px solid var(--error);
    padding: 0.5rem;
    width: 100%;
    height: 3rem;
    outline: none;
    border-radius: 0.5rem;
  }

  .success-toast {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 4rem;
    margin: 2rem 0;
    padding: 2rem 0.5rem;
    color: var(--success);
    border-left: 6px solid var(--success);
    border-bottom: 2px solid #e0e0e0;
    border-right: 2px solid #e0e0e0;
    border-top: 2px solid #e0e0e0;
    border-radius: 0.5rem;
    box-shadow: 0 0.1px 0px rgb(0 0 0 / 3%), 0 2px 2px rgb(0 0 0 / 5%),
      0 5px 5px rgb(0 0 0 / 6%);
  }

  .error-toast {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 4rem;
    margin: 2rem 0;
    padding: 2rem 0.5rem;
    color: var(--error);
    border-left: 6px solid var(--error);
    border-bottom: 2px solid #e0e0e0;
    border-right: 2px solid #e0e0e0;
    border-top: 2px solid #e0e0e0;
    border-radius: 0.5rem;
    box-shadow: 0 0.1px 0px rgb(0 0 0 / 3%), 0 2px 2px rgb(0 0 0 / 5%),
      0 5px 5px rgb(0 0 0 / 6%);
  }

  .toast-text {
    margin: 0;
    color: #212121;
  }

  .toast-span {
    margin: 0;
    color: #bdbdbd;
    font-size: 0.9rem;
  }

  .toast-col {
    margin: 0 0.5rem;
    text-align: left;
  }

  .icon-checked {
    color: var(--success);
    margin: 0 0.5rem;
  }

  .icon-error {
    color: var(--error);
    font-size: 0.8rem;
    margin: 0 0.5rem;
  }

  .exclamation-icon {
    margin: 0 0.5rem;
  }

  .label {
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
    font-weight: 500;
  }

  .label-error {
    color: var(--error);
  }

  p {
    margin-bottom: 1rem;
  }

  .error {
    opacity: 1;
    color: var(--error);
  }

  .success {
    opacity: 1;
    color: var(--success);
  }
`;

export default InputStyle;
