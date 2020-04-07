import { Form } from "@unform/web";
import { useToggle, useThrottle } from "react-use";
import Axios from "axios";
import { FormHandles } from "@unform/core";
import * as Yup from "yup";
import { useRouter } from "next/router";
import { setCookie } from "nookies";
import { useForm, FormContext } from "react-hook-form";
import { useEffect } from "react";
import { toast } from "react-toastify";
import Column from "-/components/Colunm";
import VesgoRow from "-/components/VesgoRow";
import SideSpace from "-/components/SideSpace";
import Input, { MaskedInput } from "-/components/Input";
import Button from "-/components/Button";
import SideBanner from "-/components/SideBanner";
import HideableSection from "-/components/HideableSection";
import validate from "-/utils/validate";
import { useStoreActions } from "-/lib/EasyPeasy";
import SelectInput from "-/components/AsyncSelect";
import ProductTypes from "-/lib/ProductTypes";
import { ServerUser } from "-/services";
import Footer from "-/components/Footer";
import useGuestRoute from "-/utils/hooks/useGuestRoute";

Yup.setLocale({
  mixed: {
    required: "Obrigatorio"
  },
  string: {
    email: "Email Invalido",
    // eslint-disable-next-line no-template-curly-in-string
    min: "Deve possuir ${min} caracteres"
  }
});
const schema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string()
    .email()
    .required(),
  password: Yup.string().required(),
  // passwordConfirmation: Yup.string().required(),
  type: Yup.object().required(),
  cep: Yup.string()
    .min(9)
    .required(),
  zap: Yup.string()
    .required()
    .matches(/\(\d{2,}\) \d{4,}-\d{4}/g, "Não está preenchido"),
  street: Yup.string().required(),
  district: Yup.string().required(),
  city: Yup.string().required(),
  state: Yup.string().required()
});

const Register = () => {
  useGuestRoute();
  const routes = useRouter();
  const login = useStoreActions(state => state.user.login);
  const methods = useForm({
    validationSchema: schema
  });
  const { handleSubmit, setValue, watch, setError, clearError } = methods;
  const cepValue = watch("cep");
  const type = watch("type");
  const cep = useThrottle(cepValue, 1000);
  const fetchCep = React.useCallback(
    async value => {
      try {
        const cleanCep = value.replace("-", "");
        const { data: localInfo } = await Axios.get(
          `https://viacep.com.br/ws/${cleanCep}/json/`
        );
        setValue("street", localInfo.logradouro);
        setValue("district", localInfo.bairro);
        setValue("state", localInfo.uf);
        setValue("city", localInfo.localidade);
      } catch (error) {
        setValue("street", "");
        setValue("district", "");
        setValue("state", "");
        setValue("city", "");
      }
    },
    [setValue, setError, clearError]
  );
  useEffect(() => {
    const fn = async () => {
      if (cep && cep.length < 9) return;

      await fetchCep(cep);
    };
    fn();
  }, [cep]);
  const handleAdvance = async data => {
    try {
      await ServerUser.register({
        ...data,
        type: data.type.value,
        productType: data.productType?.value || null,
        address: {
          district: data.district,
          street: data.street,
          city: data.city,
          state: data.state,
          cep: data.cep
        }
      });
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
      routes.push("/");
      login({ token });
    } catch (err) {
      if (err.response?.data?.error) {
        toast(err.response.data?.error);
      }
    }
  };
  return (
    <>
      <FormContext {...methods}>
        <Column>
          <VesgoRow align="flex-start">
            <SideSpace title="Cadastro">
              <form onSubmit={handleSubmit(handleAdvance)}>
                <Input
                  label="Nome da sua Loja"
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
                {/* <Input
                label="Confirmar Senha"
                name="passwordConfirmation"
                type="password"
              /> */}
                <SelectInput
                  label="Tipo"
                  name="type"
                  options={[
                    { label: "Comerciante", value: "trader" },
                    {
                      label: "Entregador",
                      value: "deliveryman"
                    }
                  ]}
                />
                {type && type.value === "trader" && (
                  <SelectInput
                    label="Tipo de Produtos"
                    name="productType"
                    defaultValue={ProductTypes[0]}
                    options={ProductTypes}
                  />
                )}
                <MaskedInput
                  mask="(99) 99999-9999"
                  label="Whatsapp"
                  name="zap"
                  type="text"
                />
                <MaskedInput mask="99999-999" label="CEP" name="cep" />
                <Input label="Estado" name="state" disabled type="text" />
                <Input label="Cidade" name="city" disabled type="text" />
                <Input label="Bairro" name="district" disabled type="text" />
                <Input label="Rua" name="street" disabled type="text" />

                <Button type="submit">Cadastrar</Button>
              </form>
            </SideSpace>
            <SideBanner />
          </VesgoRow>
        </Column>
      </FormContext>
      <Footer />
    </>
  );
};

export default Register;
