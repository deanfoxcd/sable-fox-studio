import { BsCart3 } from 'react-icons/bs';

const FloatingCart: React.FC = function () {
  return (
    <div className='fixed bottom-10 right-10 z-50 text-black border rounded-full border-red-400 p-3 bg-white'>
      <BsCart3 className='w-8 h-8' />
    </div>
  );
};

export default FloatingCart;
