import { useQuery } from "@tanstack/react-query";
import HoverItem from "./HoverItem";

export default function HoverEffect() {
  const { data, isLoading } = useQuery(["hoverItems"], async () => {
    const items = await fetch("/data/hoverImage.json");
    const itemsData = await items.json();
    return itemsData;
  });
  console.log(data);

  return (
    <section id="wrap">
      <ul className="hover-ul-list">
        {data &&
          data.map((item) => {
            return <HoverItem key={item.id} item={item} />;
          })}
      </ul>
    </section>
  );
}
