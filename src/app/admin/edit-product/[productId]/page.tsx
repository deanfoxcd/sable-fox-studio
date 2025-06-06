import { getProductById } from '@/app/_lib/actions';

interface EditProductProps {
  params: { productId: string };
}

const EditProduct = async ({ params }: EditProductProps) => {
  const productId = Number(params.productId);
  const productArr = await getProductById(productId);
  const product = productArr?.[0];

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>${product.price}</p>
    </div>
  );
};

export default EditProduct;
