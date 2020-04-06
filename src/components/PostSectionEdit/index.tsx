/* eslint-disable no-empty */
import { useForm, useFieldArray } from "react-hook-form";
import * as Yup from "yup";
import {
  Container,
  Image,
  Content,
  Head,
  Cell,
  Rows,
  Row,
  ProductPrice,
  ProductName,
  ProductNameField,
  ProductPriceField,
  AppendButton,
  Plus,
  DeleteButton,
  TrashCan,
  Edit
} from "./styles";
import Button from "../Button";
import { ServerProduct, ServerFile, ServerUser } from "-/services";
import PostImageDrop from "../ImageDrop/PostImageDrop";

const schema = Yup.object().shape({
  name: Yup.string().required(),
  price: Yup.string().required()
});
interface Props {
  defaultValues: any;
  children: React.ReactNode;
}

const PostSectionEdit: React.FC<Props> = ({ defaultValues, children }) => {
  const methods = useForm({
    validationSchema: schema,
    defaultValues
  });
  const { handleSubmit, register, control, getValues, setValue } = methods;
  const { fields, append, remove } = useFieldArray({
    control,
    name: "products"
  });
  const onSubmit = async data => {
    const newProduct: { name: string; id?: number; price: number } = {
      name: data.name,
      price: data.price
    };
    const {
      data: { id }
    } = await ServerProduct.create(newProduct);
    newProduct.id = id;
    append(data);
    setValue("name", "");
    setValue("price", "");
  };
  const handleUpdate = async () => {
    const { products } = getValues({ nest: true });
    await ServerProduct.update({ products });
  };
  const handleImageChange = async file => {
    try {
      let postId = null;
      if (file) {
        const avatarResponse = await ServerFile.upload(file);
        postId = avatarResponse.data.id;
      }
      await ServerUser.update({
        post: null,
        postId
      });
    } catch (err) {}
  };
  return (
    <Container>
      <PostImageDrop
        defaultValue={defaultValues?.post?.url || ""}
        onChange={handleImageChange}
      />
      <Content>
        <Head>
          <Cell size="60%">Produto</Cell>
          <Cell size="40%">Preço</Cell>
        </Head>
        <Rows>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Row>
              <ProductNameField
                name="name"
                size="50%"
                placeholder="Nome do Produto"
                ref={register}
              />
              <ProductPriceField
                ref={register}
                name="price"
                size="30%"
                placeholder="Preço"
                step="0.05"
                type="number"
              />
              <AppendButton size="20%">
                <Plus />
              </AppendButton>
            </Row>

            {fields.map(({ id, name, price }, index) => (
              <Row key={id}>
                <ProductNameField
                  size="50%"
                  required
                  name={`products[${index}].name`}
                  defaultValue={name}
                  ref={register()}
                  placeholder="Nome do Produto"
                />
                <ProductPriceField
                  size="30%"
                  required
                  name={`products[${index}].price`}
                  defaultValue={price}
                  ref={register()}
                  step="0.05"
                  placeholder="Preço"
                  type="number"
                />
                <DeleteButton
                  type="button"
                  onClick={() => {
                    remove(index);
                    if (id) {
                      ServerProduct.delete(parseInt(id, 10));
                    }
                  }}
                  size="20%"
                >
                  <TrashCan />
                </DeleteButton>
                {/* <AppendButton size="20%">
                  <Edit />
                </AppendButton> */}
              </Row>
            ))}
          </form>
          <Button type="submit" onClick={handleUpdate}>
            Atualizar
          </Button>
        </Rows>
      </Content>
      {children}
    </Container>
  );
};

export default PostSectionEdit;
