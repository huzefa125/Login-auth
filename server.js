// Load environment variables early
import "dotenv/config";
import app from "./src/app.js";
import db from "./src/db/db.js";
const PORT = process.env.PORT || 3000;
db();
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
