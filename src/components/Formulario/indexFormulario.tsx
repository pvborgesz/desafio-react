import React, { useState } from "react";

import {
  Container,
  Title,
  Box,
  InputText,
  TextArea,
  CaptchaBox,
  InputButton,
  Group,
  ButtonArea,
  AssuntoText,
} from "./stylesFormulario";

interface FormType {
  nomeForm: string;
  emailForm: string;
  assuntoForm: string;
  mensagemForm: string;
}

const Formulario: React.FC = () => {
  const [nome, setNome] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [assunto, setAssunto] = useState<string>();
  const [mensagem, setMensagem] = useState<string>();
  const [flagSubmited, setFlagSubmited] = useState<boolean>(false);
  const [dataForm, setDataForm] = useState<any>({});
  const [jsonData, setJsonData] = useState<any>({});

  const configureForm = (): any => {
    let aux: any = {
      nomeForm: nome,
      emailForm: email,
      assuntoForm: assunto,
      mensagemForm: mensagem,
    };

    setDataForm(aux);

    if (nome && email && assunto && mensagem) {
      setFlagSubmited(true);
      setJsonData(JSON.stringify(aux));
    } else {
      setFlagSubmited(false);
      alert("Um ou mais campos não preenchidos, favor preencher corretamente.");
    }

    console.log(jsonData);
    console.log(aux, "dataform");
    console.log(flagSubmited, "flag");
  };

  return (
    <>
      <Container>
        <Title>
          <p>Fale Conosco</p>
        </Title>
        <Box>
          <Group>
            <InputText
              placeholder="Nome"
              required
              onChange={(e) => {
                setNome(e.target.value);
              }}
            ></InputText>
            <InputText
              placeholder="Email"
              type={"email"}
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></InputText>
          </Group>
          <AssuntoText
            required
            placeholder="Assunto"
            onChange={(e) => {
              setAssunto(e.target.value);
              // console.log(nome);
            }}
          ></AssuntoText>
          <TextArea
            required
            placeholder="Mensagem"
            onChange={(e) => {
              setMensagem(e.target.value);
              // console.log(nome);
            }}
          ></TextArea>
          <CaptchaBox></CaptchaBox>
          <ButtonArea>
            <InputButton
              placeholder="Enviar"
              type="button"
              onClick={(e) => {
                e.persist();
                configureForm();
              }}
            >
              Enviar
            </InputButton>
          </ButtonArea>
        </Box>
        <div className="response">
          <br />
          <hr />
          <div>
            {flagSubmited ? (
              <>
                <p>Nome: {dataForm?.nomeForm}</p>
                <p>Email: {dataForm?.emailForm}</p>
                <p>Assunto: {dataForm?.assuntoForm}</p>
                <p>Mensagem: {dataForm?.mensagemForm}</p>
                <hr />
                Em Json:<pre> {jsonData}</pre>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Formulario;
