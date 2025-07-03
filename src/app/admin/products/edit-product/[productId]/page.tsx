import { getProductById } from '@/app/_lib/productActions';

// interface PageProps {
//   params: { productId: string };
// }

const EditProduct = async (props: unknown) => {
  const { productId } = (props as { params: { productId: string } }).params;
  const productArr = await getProductById(Number(productId));
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
