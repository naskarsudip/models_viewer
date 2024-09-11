import dynamic from "next/dynamic";
// import Link from "next/link";

const Gallery = dynamic(() => import("@/components/threeDobjects/canvas"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="relative h-screen">
      <Gallery />
    </main>
  );
}

