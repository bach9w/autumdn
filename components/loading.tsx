import Image from "next/image";
import Logo from "@/public/myride_logo.jpg";
const Loading = () => {
  return (
    <div className="flex min-h-screen min-w-full animate-pulse flex-col items-center justify-center text-black">
      <Image src={Logo} width={300} height={300} alt="Logo" />
    </div>
  );
};

export default Loading;
