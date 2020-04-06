import { Form } from "@unform/web";
import { useToggle } from "react-use";
import Axios from "axios";
import { FormHandles } from "@unform/core";
import * as Yup from "yup";
import { useRouter } from "next/router";
import { setCookie } from "nookies";
import { useForm, FormContext } from "react-hook-form";
import { toast } from "react-toastify";
import Column from "-/components/Colunm";
import VesgoRow from "-/components/VesgoRow";
import SideSpace from "-/components/SideSpace";
import Input, { MaskedInput } from "-/components/Input";
import Button from "-/components/Button";
import SideBanner from "-/components/SideBanner";
import HideableSection from "-/components/HideableSection";
import validate from "-/utils/validate";
import { useStoreState, useStoreActions } from "-/lib/EasyPeasy";
import { ServerUser } from "-/services";
import Footer from "-/components/Footer";
import useGuestRoute from "-/utils/hooks/useGuestRoute";
import Title from "-/components/Title";

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
  useGuestRoute();
  const routes = useRouter();
  const [isExpanded, toggle] = useToggle(false);
  const login = useStoreActions(state => state.user.login);
  const methods = useForm({
    validationSchema: schema
  });
  const { handleSubmit } = methods;
  const handleAdvance = async data => {
    try {
      const {
        data: { token }
      } = await ServerUser.login({
        email: data.email,
        password: data.password
      });
      setCookie(null, "token", token, {
        maxAge: 30 * 24 * 60 * 60,
        path: "/"
      });
      login({ token });
      routes.push("/");
    } catch (err) {
      if (err.response?.data?.error) {
        toast(err.response.data?.error);
      }
    }
  };
  return (
    <>
      <Title message="Login" />
      <Column style={{ minHeight: "69.5vh" }}>
        <VesgoRow align="flex-start">
          <SideSpace title="Cadastro">
            <FormContext {...methods}>
              <form onSubmit={handleSubmit(handleAdvance)}>
                <Input
                  label="Email"
                  placeholder="ex: Jose@mail.com"
                  name="email"
                  type="email"
                />
                <Input label="Senha" name="password" type="password" />
                <Button>Entrar</Button>
              </form>
            </FormContext>
          </SideSpace>
          <SideBanner />
        </VesgoRow>
      </Column>
      <Footer style={{ marginTop: "4.8rem" }} />
    </>
  );
};

export default Login;
