const opBrace = '{';
const cloBrace = '}';

function Navbar() {
  return (
    <div className="sticky top-0 bg-blue-dark  text-gray-light text-3xl p-3">
      {opBrace} Alan Palacios {cloBrace}
      <ul className=" ml-8 hidden md:inline-block">
        <li className="inline-block font-light">Projects</li>
        <li className="inline-block ml-5 font-light">Contact</li>
      </ul>
    </div>

  );
}

export default Navbar;
