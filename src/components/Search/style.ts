import styled from "styled-components";
import bgSearch from "../../assets/backgroundImg.png";

export const Container = styled.nav`
  padding: 40px 80px;
  border-radius: 8px;

  background-image: url(${bgSearch});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  form {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;

    display: flex;
    background-color: white;
    padding: 4px;
    border-radius: 4px;
  }

  div {
    position: relative;
    width: 100%;
  }

  img {
    position: absolute;
    top: 11px;
    left: 8px;
    width: 15px;
  }

  input {
    width: 100%;
    padding: 12px 17px;
    padding-left: 32px;
    font-size: 12px;

    border: none;

    &:focus {
      outline: 0;
    }
  }

  button {
    border: none;
    outline: 0;
    color: white;

    border-radius: 4px;
    background-color: #1e86ff;

    font-weight: 500;
    font-size: 12px;

    padding: 10px 30px;
  }

  @media (max-width: 740px) {
    padding: 20px 40px;
  }

  @media (max-width: 520px) {
    padding: 25px 18px;
    form {
        flex-direction: column;
    }
  }
`;
