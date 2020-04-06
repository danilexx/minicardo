export const types = [
  "Roupas",
  "Calçados",
  "Acessórios",
  "Restaurantes",
  "Feito em Casa",
  "Bebidas",
  "Artesanato",
  "Mercado",
  "Papelaria",
  "Perfumaria",
  "Higiene Pessoal",
  "Produtos de Limpeza",
  "Pet Shop",
  "Bolsas",
  "Multicoisas"
];

export const images = [
  "/images/categories/roupas.png",
  "/images/categories/calçados.png",
  "/images/categories/acessorios.png",
  "/images/categories/restaurantes.png",
  "/images/categories/feito_em_casa.png",
  "/images/categories/bebidas.png",
  "/images/categories/artesanato.png",
  "/images/categories/mercado.png"
];

const ProductTypes = types.map((e: string) => ({
  label: e,
  value: e.toLowerCase()
}));
export default ProductTypes;
