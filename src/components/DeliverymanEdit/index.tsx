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
import ImageDrop from "../ImageDrop";
import { ServerUser, ServerFile } from "-/services";
import ViewButton from "../ViewButton";

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
    .min(15)
    .required(),
  street: Yup.string().required(),
  district: Yup.string().required(),
  city: Yup.string().required(),
  state: Yup.string().required()
});

const DeliverymanEdit = ({ defaultValues }: any) => {
  const routes = useRouter();
  const methods = useForm({
    validationSchema: schema,
    defaultValues
  });
  const { handleSubmit, setValue, watch, errors } = methods;
  const cepValue = watch("cep");
  const cep = useThrottle(cepValue, 1000);
  useEffect(() => {
    const fn = async () => {
      try {
        if (cep && cep.length < 9) return;
        const cleanCep = cep.replace("-", "");
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
    };
    fn();
  }, [cep]);
  const [isIconDefault, toggle] = useToggle(false);
  const handleAdvance = async data => {
    try {
      let iconId = null;
      if (data.icon && !isIconDefault) {
        const avatarResponse = await ServerFile.upload(data.icon);
        iconId = avatarResponse.data.id;
      }
      await ServerUser.update({
        ...data,
        icon: null,
        iconId,
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

  const handleDefault = value => {
    toggle(value);
  };
  return (
    <FormContext {...methods}>
      <Column>
        <VesgoRow align="flex-start">
          <SideSpace title="Perfil">
            <form onSubmit={handleSubmit(handleAdvance)}>
              <ImageDrop
                defaultValue={defaultValues.icon ? defaultValues.icon.url : ""}
                name="icon"
                handleDefault={handleDefault}
              />
              <Input
                label="Nome"
                placeholder="ex: Jose"
                name="name"
                type="text"
              />
              <MaskedInput mask="99999-999" label="CEP" name="cep" />
              <Input label="Estado" name="state" disabled type="text" />
              <Input label="Cidade" name="city" disabled type="text" />
              <Input label="Bairro" name="district" disabled type="text" />
              <Input label="Rua" name="street" disabled type="text" />
              <MaskedInput
                mask="(99) 99999-9999"
                label="Whatsapp"
                name="zap"
                type="text"
              />
              <Button type="submit">Atualizar</Button>
            </form>
          </SideSpace>
          <SideBanner>
            <ViewButton
              href="/deliveryman/[id]"
              as={`/deliveryman/${defaultValues.id}`}
            />
          </SideBanner>
        </VesgoRow>
      </Column>
    </FormContext>
  );
};

export default DeliverymanEdit;
