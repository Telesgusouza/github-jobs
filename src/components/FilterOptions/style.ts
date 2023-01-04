import styled from "styled-components";

export const Container = styled.nav`
  width: 100%;
  max-width: 300px;
  margin-top: 20px;
`;

export const ContainerCheckbox = styled.div`
  padding: 20px 10px;

  color: #334680;
  font-weight: 500;
  font-size: 14px;

  input {
    width: 15px;
    height: 15px;
    margin-right: 10px;
    border: 1px solid #b9bdcf;
    border-radius: 2px;

    cursor: pointer;
  }
`;

export const LocationSearch = styled.div`
  display: flex;
  flex-direction: column;

  strong {
    text-transform: uppercase;
    font-weight: 700;
    font-family: "poppins", sans-serif;
    font-size: 14px;

    color: #b9bdcf;
    margin-bottom: 10px;
  }

  form {
    display: flex;
    flex-direction: column;

    position: relative;
  }

  input {
    padding: 12px 14px;
    padding-left: 32px;
    border: none;

    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
    border-radius: 4px;

    transition: box-shadow 0.2s ease;

    &:focus {
      outline: 0;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    }
  }

  img {
    position: absolute;
    top: 14px;
    left: 10px;
    width: 15px;

    cursor: pointer;
  }
`;

export const ListCity = styled.ul`
  list-style: none;
  padding: 20px 9px;

  display: grid;
  grid-gap: 14px;

  li {
    display: flex;
    align-items: center;
    
    font-family: 'Poppins';
    font-size: 14px;
    font-weight: 500;
    color: #334680;
  }

  input {
    margin-right: 10px;
    width: 18px;
    height: 18px;
  }
`;
