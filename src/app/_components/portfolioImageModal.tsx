import Image from 'next/image';

const PortfolioImageModal = ({
  imageName,
  onClose,
}: {
  imageName: string;
  onClose: () => void;
}) => {
  return (
    <div
      className='fixed inset-0 bg-opacity-90 flex items-center justify-center z-50 backdrop-blur-sm'
      onClick={onClose}
    >
      <Image
        src={imageName}
        alt=''
        width={1200}
        height={800}
        style={{
          maxHeight: '90vh',
          maxWidth: '90vw',
          width: 'auto',
          height: 'auto',
          borderRadius: '8px',
          boxShadow: '0 4px 32px rgba(0,0,0,0.1)',
        }}
        // Optionally, priority or quality props
      />
    </div>
  );
};

export default PortfolioImageModal;
