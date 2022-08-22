import { useRouter } from "next/router";

export default function PageSelect() {
  const { query } = useRouter();

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h3>{query.name}</h3>
      </div>
    </>
  );
}
