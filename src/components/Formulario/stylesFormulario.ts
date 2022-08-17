import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 20px;
  align-items: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

export const Title = styled.div`
  background: #000000;
  color: white;
  text-align: center;
  width: 28%;
  padding: 10px 25vw;
  border-radius: 5px;
  font-size: 30px;
  font-weight: bold;
  margin: 2%;
  box-shadow: 0px 20px 10px -15px #111;
`;

export const Group = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5vh 5vw 5vh 5vw;
  width: 75%;
  @media (min-width: 1200) {
    width: 50%;
  }
`;

export const InputText = styled.input`
  border: none;
  background-color: transparent;
  border-bottom: 1px solid #d8d8d8;

  width: 95%;

  ::placeholder {
    font-size: 16px;
  }
  padding: 10px 0 30px;
`;

export const AssuntoText = styled.input`
  margin-top: 20px;
  border: none;
  background-color: transparent;
  border-bottom: 1px solid #d8d8d8;

  width: 100%;
  ::placeholder {
    font-size: 16px;
  }
  padding: 10px 0 30px;
`;

export const ButtonArea = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const TextArea = styled.textarea`
  /* margin: 20px; */
  border: none;
  background-color: transparent;
  resize: none;
  outline: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  border-bottom: 1px solid #d8d8d8;

  /* maxlength: 20; */

  width: 100%;
  ::placeholder {
    font-size: 16px;
  }

  padding: 30px 0 60px;
  margin-right: 1vw;
`;

export const CaptchaBox = styled.div``;

export const InputButton = styled.button`
  padding: 20px;
  background: #000000;
  border: none;
  color: white;
  padding: 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  border-radius: 2px;
  margin-top: 1vh;
  width: 100px;
  box-shadow: 0px 1px 10px -15px #111;
`;
