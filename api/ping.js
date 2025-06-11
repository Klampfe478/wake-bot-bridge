export default async function handler(req, res) {
  const target = "https://317797e1-89aa-42d2-a9b6-c25cd8a0c982-00-3s387r4cb4eli.riker.replit.dev";
  try {
    const response = await fetch(target);
    console.log("✅ Ping gesendet an Replit:", target);
    res.status(200).json({ status: "pinged", replit: target });
  } catch (error) {
    console.error("❌ Fehler beim Pingen:", error);
    res.status(500).json({ error: "Fehler beim Pingen", detail: error.message });
  }
}
