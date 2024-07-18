import Image from "next/image";
import CircularSlider from "@/app/widgets/components/CircularSlider";
import BarSelector from "@/app/widgets/components/BarSelector";

export default function widgets() {
  return (
    <div className="flex min-h-screen flex-row items-center justify-around p-24">
      <div>
        <h1 className='mb-6 font-bold text-[1.3rem]'>Mental Health App</h1>
        <CircularSlider />
      </div>
      <div>
        <BarSelector />
      </div>
    </div>
  );
}
