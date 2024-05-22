export default function Footer() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "40px",
        background:"black",
        color: "white",
        height: "300px"
      }}
    >
      <p>Danke für deine Besuch</p>
      <div style={{display: "flex", gap:"20px"}}>
        <a href="https://www.facebook.com/">Facebook</a>
        <a href="https://www.instagram.com/">Instagram</a>
      </div>
    </div>
  );
}
