import styled from "styled-components";
import Dropdown from "../../../containers/dropdown";

const DropdownStyle = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;

  .dropdown-menu {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    right: 0;
    padding: 4rem;
    height: 100%;
    width: 25rem;
    background: #201e1e;
    list-style: none;
    text-align: start;

    &hover {
      background: #5cabff;
    }

    .close-icon {
      cursor: pointer;
      position: absolute;
      color: #ffffff;
      font-size: 3rem;
      top: 1rem;
      right: 1rem;
      z-index: 100;
    }

    .dropdown-link {
      font-size: 2rem;
      margin: 5rem 0;
      color: #ffffff;
      cursor: pointer;
    }

    &hover {
      background: #5cabff;
    }
  }
`;

export default DropdownStyle;
