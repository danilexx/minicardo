import { useForm, FormContext } from "react-hook-form";
import Axios from "axios";
import { useThrottle, useToggle } from "react-use";
import { useEffect, useCallback } from "react";
import * as Yup from "yup";
import { toast } from "react-toastify";
import {
  Container,
  AuthorInfos,
  Head,
  AuthorPic,
  Name,
  Map,
  Content,
  Row,
  Zap,
  ZapIcon,
  Number
} from "./styles";
import Input, { MaskedInput } from "-/components/Input";
import SelectInput from "../AsyncSelect";
import ProductTypes from "-/lib/ProductTypes";
import Button from "../Button";
import ImageDrop from "../ImageDrop";
import { ServerUser, ServerFile } from "-/services";

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
const AuthorEdit = ({ defaultValues }) => {
  const methods = useForm({
    defaultValues,
    validationSchema: schema
  });
  const { handleSubmit, watch, setValue, setError, clearError } = methods;
  const cepValue = watch("cep");
  const cep = useThrottle(cepValue, 1000);
  const fetchCep = useCallback(
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
  const [isPostDefault, toggle] = useToggle(false);
  const handleDefault = value => {
    toggle(value);
  };
  const onSubmit = async data => {
    try {
      let iconId = null;
      if (data.icon && !isPostDefault) {
        const avatarResponse = await ServerFile.upload(data.icon);
        iconId = avatarResponse.data.id;
      }
      await ServerUser.update({
        ...data,
        icon: null,
        ...(isPostDefault ? {} : { iconId }),
        productType: data.productType.value,
        address: {
          cep: data.cep,
          district: data.discrict,
          street: data.street,
          state: data.state,
          city: data.city
        }
      });
    } catch (err) {
      if (err.response?.data?.error) {
        toast(err.response.data?.error);
      }
    }
  };
  return (
    <Container>
      <AuthorInfos>
        <Head>
          <Name>Perfil</Name>
        </Head>
        <Content>
          <FormContext {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <ImageDrop
                handleDefault={handleDefault}
                defaultValue={defaultValues.icon ? defaultValues.icon.url : ""}
                name="icon"
              />
              <Input
                label="Nome da sua Loja"
                placeholder="ex: Jose"
                name="name"
                type="text"
              />
              <MaskedInput mask="99999-999" label="CEP" name="cep" />
              <Input label="Estado" name="state" disabled type="text" />
              <Input label="Cidade" name="city" disabled type="text" />
              <Input label="Bairro" name="district" disabled type="text" />
              <Input label="Rua" name="street" disabled type="text" />
              <SelectInput
                label="Tipo de Produtos"
                name="productType"
                defaultValue={ProductTypes.find(
                  e => e.value === defaultValues.productType
                )}
                options={ProductTypes}
              />
              <MaskedInput
                mask="(99) 99999-9999"
                label="Whatsapp"
                name="zap"
                type="text"
              />
              <Button>Atualizar</Button>
            </form>
          </FormContext>
        </Content>
      </AuthorInfos>
      <Zap>
        <ZapIcon />
        <Number>{watch("zap")}</Number>
      </Zap>
    </Container>
  );
};

export default AuthorEdit;
