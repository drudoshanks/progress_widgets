import Image from "next/image";
import CircularSlider from "@/app/widgets/components/CircularSlider";
import BarSelector from "@/app/widgets/components/BarSelector";

export default function widgets() {
  return (
    <main className="flex min-h-screen flex-row items-center justify-around p-24">
      <div>
        <h1>Mental Health App</h1>
        <br />
        <br />
        <CircularSlider />
        <br />
      </div>
      <div>
        <BarSelector />
      </div>
    </main>
  );
}
