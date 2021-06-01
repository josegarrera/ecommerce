import styled from "styled-components";

const ToastStyle = styled.div`
  .error-toast {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 4rem;
    margin-top: 2rem;
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
`;

export default ToastStyle;
