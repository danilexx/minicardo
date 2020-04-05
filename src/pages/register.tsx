import { Form } from "@unform/web";
import { useToggle } from "react-use";
import Axios from "axios";
import { FormHandles } from "@unform/core";
import * as Yup from "yup";
import { useRouter } from "next/router";
import { setCookie } from "nookies";
import Column from "-/components/Colunm";
import VesgoRow from "-/components/VesgoRow";
import SideSpace from "-/components/SideSpace";
import Input, { MaskedInput } from "-/components/Input";
import Button from "-/components/Button";
import SideBanner from "-/components/SideBanner";
import HideableSection from "-/components/HideableSection";
import validate from "-/utils/validate";
import { useStoreActions } from "-/lib/EasyPeasy";

Yup.setLocale({
  mixed: {
    required: "Obrigatorio"
  },
  string: {
    email: "Email Invalido"
  }
});
const schema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string()
    .email()
    .required(),
  password: Yup.string().required(),
  passwordConfirmation: Yup.string().required(),
  cep: Yup.string().required()
});

const Register = () => {
  const routes = useRouter();
  const [isExpanded, toggle] = useToggle(false);
  const formRef = React.useRef<FormHandles>(null);
  const login = useStoreActions(state => state.user.login);

  const handleAdvance = async data => {
    if (!formRef.current) return;
    const isValid = validate(schema, data, formRef);
    if (!isValid) return;
    if (!isExpanded) {
      const cep = data.cep.replace("-", "");
      const { data: localInfo } = await Axios.get(
        `https://viacep.com.br/ws/${cep}/json/`
      );
      const { setFieldValue } = formRef.current;
      setFieldValue("street", localInfo.logradouro);
      setFieldValue("district", localInfo.bairro);
      setFieldValue("state", localInfo.uf);
      setFieldValue("city", localInfo.localidade);
      toggle(true);
    }
    if (isExpanded) {
      setCookie(null, "token", "true", {
        maxAge: 30 * 24 * 60 * 60,
        path: "/"
      });
      routes.push("/");
      login();
    }
  };
  return (
    <Column>
      <VesgoRow align="flex-start">
        <SideSpace title="Cadastro">
          <Form ref={formRef} onSubmit={handleAdvance}>
            <Input
              label="Nome"
              placeholder="ex: Jose"
              name="name"
              type="text"
            />
            <Input
              label="Email"
              placeholder="ex: Jose@mail.com"
              name="email"
              type="email"
            />
            <Input label="Senha" name="password" type="password" />
            <Input
              label="Confirmar Senha"
              name="passwordConfirmation"
              type="password"
            />
            <MaskedInput mask="99999-999" label="CEP" name="cep" type="text" />
            <HideableSection hidden={!isExpanded}>
              <Input label="Estado" name="state" type="text" />
              <Input label="Cidade" name="city" type="text" />
              <Input label="Bairro" name="district" type="text" />
              <Input label="Rua" name="street" type="text" />
            </HideableSection>
            {isExpanded ? <Button>Cadastrar</Button> : <Button>Avançar</Button>}
          </Form>
        </SideSpace>
        <SideBanner />
      </VesgoRow>
    </Column>
  );
};

export default Register;
