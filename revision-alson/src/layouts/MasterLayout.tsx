import Navbar from "../components/Navbar";

interface MasterLayout {
  children: JSX.Element;
}

const MasterLayout = ({ children }: MasterLayout) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default MasterLayout;
