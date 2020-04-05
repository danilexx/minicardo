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
import { useStoreState, useStoreActions } from "-/lib/EasyPeasy";

Yup.setLocale({
  mixed: {
    required: "Obrigatorio"
  },
  string: {
    email: "Email Invalido"
  }
});
const schema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required(),
  password: Yup.string().required()
});

const Login = () => {
  const routes = useRouter();
  const [isExpanded, toggle] = useToggle(false);
  const login = useStoreActions(state => state.user.login);
  const formRef = React.useRef<FormHandles>(null);
  const handleAdvance = async data => {
    if (!formRef.current) return;
    const isValid = validate(schema, data, formRef);
    if (!isValid) return;
    setCookie(null, "token", "true", {
      maxAge: 30 * 24 * 60 * 60,
      path: "/"
    });
    login();
    routes.push("/");
  };
  return (
    <Column style={{ minHeight: "69.5vh" }}>
      <VesgoRow align="flex-start">
        <SideSpace title="Cadastro">
          <Form ref={formRef} onSubmit={handleAdvance}>
            <Input
              label="Email"
              placeholder="ex: Jose@mail.com"
              name="email"
              type="email"
            />
            <Input label="Senha" name="password" type="password" />
            <Button>Entrar</Button>
          </Form>
        </SideSpace>
        <SideBanner />
      </VesgoRow>
    </Column>
  );
};

export default Login;
