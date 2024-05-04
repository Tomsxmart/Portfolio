import Hero from "./hero/Hero";
import BgAnims from "./hero/components/BgAnims";
export default function Home() {
  return (
    <>
      <main className=" text-[#b0b2c3] min-h-screen">
        <Hero />
      </main>
      <BgAnims />
    </>
  );
}
