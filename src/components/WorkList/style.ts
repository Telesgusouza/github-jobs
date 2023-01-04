import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: fit-content;
  margin-left: 30px;
  margin-top: 40px;

  ul {
    width: 100%;
    list-style: none;

    display: grid;
    grid-gap: 30px;
  }

  @media (max-width: 890px) {
    margin-left: 0;
  }
`;

export const Job = styled.li`
  position: relative;

  display: flex;
  border-radius: 4px;
  padding: 10px;
  padding-right: 20px;

  background-color: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);

  img {
    width: 100px;
    height: 100px;
    border-radius: 4px;

    object-fit: cover;
  }

  @media (max-width: 560px) {
    padding-bottom: 30px;
  }
`;

export const JobContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  div:nth-child(1) {
    width: 100%;
    max-width: 500px;

    font-family: "Roboto";
    color: #334680;
    margin: 0 14px;

    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;

    p,
    h2 {
      width: 100%;

      overflow: hidden;
      text-overflow: ellipsis;
    }

    p,
    h2,
    div {
      cursor: default;
    }

    p {
      margin-bottom: 10px;
      font-size: 13px;
      font-weight: 700;
    }

    h2 {
      font-weight: 400;
      font-size: 18px;

      width: 100%;
      max-width: 200px;

      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;

      @media (max-width: 440px) {
        max-width: 150px;
        background-color: red;
      }

      @media (max-width: 340px) {
        max-width: 100px;
      }
    }

    div {
      width: fit-content;
      margin-top: 24px;
      font-weight: 700;
      font-size: 12px;
      padding: 6px 8px;
      border: 1px solid #334680;
      border-radius: 4px;
    }
  }
`;

export const InfoJob = styled.div`
  position: absolute;
  bottom: 8px;
  right: 10px;

  height: fit-content;
  margin-top: 85px;

  display: flex;
  color: #b9bdcf;

  font-size: 12px;
  font-weight: 500;
  white-space: nowrap;

  img {
    width: 13px;
    height: 13px;
    margin-right: 7px;
  }

  div {
    margin: 0;
    width: fit-content;
    display: flex;
    align-items: center;

    &:nth-child(1) {
      color: #b9bdcf;
      width: fit-content;
      margin-left: 0px;
    }

    &:nth-child(2) {
      width: fit-content;
    }
  }

  @media (max-width: 560px) {
    right: initial;
    left: 10px;
  }
`;
