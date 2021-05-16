import styled, { css } from "styled-components";

export const Dropdown_Style = styled.div`
  .dropdown__wrapper {
    display: flex;
    flex-direction: column;
    margin: 0.5rem 0;
  }
  .dropdown__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    width: 100%;
    color: #bdbdbd;
    border-radius: 0.6rem;
    font-size: 1rem;
    font-weight: 500;
    background-color: #ffffff;
  }

  .dropdown__header__icon {
    font-size: 1.5rem;
  }

  .dropdown__list {
    top: 3.3rem;
    list-style: none;
    width: 100%;
    z-index: 10;
  }

  button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #ffffff;
    font-size: 16px;
    padding: 1.2rem;
    border: 0;
    width: 100%;
    text-align: left;

    &:hover {
      background-color: #f5f5f5;
    }
    &focus {
      cursor: pointer;
      font-weight: bold;
      background-color: #ccc;
    }
  }

  .button__icon {
    color: #e0e0e0;
    margin-left: 1rem;
    margin-right: 1rem;
  }

  .unchecked__icon {
    color: #e0e0e0;
  }

  .selected {
    color: #039be5;
  }

  .button__value {
    height: 100%;
    color: #616161;
    font-size: 0.8rem;
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  ${({ order }) =>
    order &&
    css`
      .dropdown__wrapper {
        position: relative;
      }

      .dropdown__list {
        i {
          display: none;
        }
      }

      .dropdown__header {
        border: 1px solid;
      }

      .dropdown__list {
        position: absolute;
        top: 3rem;
        border: 1px solid #e0e0e0;
        box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05),
          0 15px 40px rgba(166, 173, 201, 0.2);
      }

      .dropdown__header {
        display: flex;
        align-items: center;
        padding: 0 1rem;
        border-radius: 3rem;
        background-color: #white;
        font-size: 0.8rem;
        color: red;
        width: 10rem;
      }

      .dropdown__list__item {
        button {
          padding: 1rem;
        }
      }
    `}

  ${({ filter }) =>
    filter &&
    css`
      .dropdown__wrapper {
        display: flex;
        align-self: flex-end;
      }

      .dropdown__header__title {
        color: #616161;
        font-size: 0.8rem;
        font-weight: 500;
      }

      .button__value {
        height: 100%;
        color: #616161;
        font-size: 0.8rem;
        font-weight: 500;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .dropdown__list__item {
        button {
          padding: 0.25rem 0.5rem;
        }
      }
    `}
`;
