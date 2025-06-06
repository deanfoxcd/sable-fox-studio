'use client';

import { Product } from '../types';

interface EditproductModalProps {
  product: Product;
  onClose: () => void;
}

const EditProductModal: React.FC<EditproductModalProps> = function ({
  product,
  onClose,
}) {
  return (
    <div>
      <p>{product.name}</p>
      <p onClick={() => onClose()}>Close</p>
    </div>
  );
};

export default EditProductModal;
