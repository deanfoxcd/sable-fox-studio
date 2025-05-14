import '../globals.css';

const Navbar: React.FC = function () {
  return (
    <div>
      <ul className='flex justify-center gap-10 font-cormorant text-xl'>
        <li>About</li>
        <li>Portfolio</li>
        <li>Commission</li>
        <li>Journal</li>
        <li>Inquire</li>
      </ul>
    </div>
  );
};

export default Navbar;
