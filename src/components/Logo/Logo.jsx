import Image from "next/image";
import sky from "../../../public/assets/sky.png";

const Logo = () => {
  return (
    <div>
      <Image src={sky} alt="Sky Logo" width={200} className="w-32 mx-auto" />
    </div>
  );
};

export default Logo;
