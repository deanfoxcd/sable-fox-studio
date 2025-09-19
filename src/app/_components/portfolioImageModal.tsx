import Image from 'next/image';

const PortfolioImageModal = ({
  imageName,
  onClose,
}: {
  imageName: string;
  onClose: () => void;
}) => {
  return (
    <div className='h-200 w-200'>
      <Image
        src={imageName}
        alt=''
        fill
        onClick={() => onClose()}
      />
    </div>
  );
};

export default PortfolioImageModal;
