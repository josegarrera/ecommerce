import styled from "styled-components";

const ContactStyle = styled.div`
  body {
    background-color: #fafafa;
  }

  .container {
    margin: 0 auto;
    max-width: 75%;
    min-width: 60%;
    padding-top: 80px;
  }

  .box_1 {
    text-align: center;
    vertical-align: auto;
    padding: 30px;
  }

  .box_1 > .main__title {
    font-size: 40px;
    font-weight: bold;
    vertical-align: auto;
  }

  .box_1 > .main__subtitle {
    margin-top: 25px;
    font-size: 20px;
    color: #bdbdbd;
    font-weight: bold;
    vertical-align: auto;
  }

  .box_2 {
    margin-top: 80px;
  }

  .box_2 > h1 {
    margin-top: 100px;
    margin-bottom: 70px;
    font-size: 30px;
  }

  .contact__cards {
    display: flex;
    margin-top: 50px;
    justify-content: center;
  }

  .contact__card {
    width: 30%;
    border-radius: 5px;
    margin-right: 10px;
    background: linear-gradient(rgba(242, 143, 78, 1), rgba(236, 106, 42, 1));
    padding: 40px;
  }

  .contact__card > ul > li > i {
    font-size: 50px;
  }

  .contact__card > ul > li {
    margin-top: 30px;
    margin-bottom: 30px;
    color: #fff;
  }

  .contact__card ul > li > h3 {
    font-size: 20px;
    font-weight: bold;
  }

  .contact__card ul > li > p {
    font-size: 12px;
  }

  .post__comment__box {
    margin: 0 auto;
    padding-right: 10%;
    padding-left: 10%;
    text-justify: newspaper;
  }

  .post__comment__box h1 {
    color: #212121;
    font-size: 20px;
    margin-top: 100px;
    margin-bottom: 30px;
    text-align: left;
  }

  .comment__text__area {
    margin-top: 30px;
    height: 200px;
    padding: 25px;
    width: 100%;
    border: 1px #bdbdbd solid;
  }

  .input__group {
    display: block;
    justify-content: space-between;
    margin-top: 20px;
    width: 100%;
  }

  .comment__input {
    height: 60px;
    margin-top: 30px;
    width: 100%;
    font-size: 13px;
    padding: 25px;
    border: 1px #bdbdbd solid;
  }

  .submit__button {
    height: 60px;
    width: 100%;
    margin-top: 50px;
    color: #fff;
    background-color: black;
    vertical-align: middle;
  }
`;

export default ContactStyle;
