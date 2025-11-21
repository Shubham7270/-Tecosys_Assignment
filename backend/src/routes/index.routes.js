import { Router } from "express";
import { generateChatbotDetails } from "../controllers/generator.controller.js";
import { serveEmbedScript } from "../controllers/generator.controller.js";
import { serveWidget } from "../controllers/widget.controller.js";

const router = Router();

router.post("/generate", generateChatbotDetails);
router.get("/embed.js", serveEmbedScript);
router.get("/widget/chat", serveWidget);

export default router;
