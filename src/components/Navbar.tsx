import Navitem from "./Navitem";

function Navbar() {
  return (
    <div className="absolute bg-white flex items-center justify-between h-16 w-full shadow-md px-12 text-sm">
      <div>O</div>
      <div className="flex">
        <Navitem isActive={true}>HOME</Navitem>
        <Navitem>TENTANG KAMI</Navitem>
        <Navitem>PROGRAM</Navitem>
        <Navitem>KONTRIBUSI</Navitem>
        <Navitem>PARTNER</Navitem>
        <Navitem>BERITA TERKINI</Navitem>
      </div>
    </div>
  );
}

export default Navbar;
