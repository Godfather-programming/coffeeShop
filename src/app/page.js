import HomePage from "@/src/components/templates/HomePage";

export const metadata = {
  title: "Coffee Shop",
  description: "This is a coffee shop site",
  icons: {icon: "/fav-icon.png"}
};

export default function Home() {
  return <div className="">
    <HomePage />
  </div>;
}
