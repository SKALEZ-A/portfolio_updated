import dynamic from "next/dynamic";

const RootLayout = dynamic(() => import("./layout"), { ssr: false });

export default function MyPage() {
  return <RootLayout />;
}
