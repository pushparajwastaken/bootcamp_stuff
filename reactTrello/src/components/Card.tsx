import { useDrag } from "react-dnd";

export function Card({ title, description, isDragging, id }: any) {
  const [{ opacity }, dragRef] = useDrag(() => ({
    type: "card",
    item: { title, description },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
  }));
  return (
    <div
      style={{
        opacity,
        border: "1px solid #b2bec3",
        borderRadius: 10,
        padding: 20,
        margin: 20,
        cursor: "pointer",
      }}
      ref={dragRef}
    >
      {title}
      <div style={{ height: 1, width: "100%", background: "black" }}></div>
      {description}
    </div>
  );
}
