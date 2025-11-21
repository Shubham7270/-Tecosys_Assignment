import { generateSDN } from "../services/token.service.js";
import env from "../config/env.js";
import { success } from "../utils/response.js";

export const generateChatbotDetails = (req, res) => {
  const { email, website } = req.body;
  const token = generateSDN();

  const embedScript = `<script src="${env.cdn}/api/embed.js" data-sdn="${token}" async></script>`;

  const embedJs = `(function () {
  const el = document.currentScript;
  const sdn = el.getAttribute("data-sdn");
  const iframe = document.createElement("iframe");
  iframe.src = "${env.widget}/api/widget/chat?sdn=" + encodeURIComponent(sdn);
  iframe.style.position = "fixed";
  iframe.style.bottom = "20px";
  iframe.style.right = "20px";
  iframe.style.width = "360px";
  iframe.style.height = "520px";
  iframe.style.border = "none";
  iframe.style.borderRadius = "12px";
  iframe.style.zIndex = "999999";
  iframe.style.transition = "all 0.3s ease";
  document.body.appendChild(iframe);
})();`;

  return success(res, {
    token,
    embedScript,
    embedJs,
    previewUrl: `${env.widget}/api/widget/chat?sdn=${token}`,
  });
};

export const serveEmbedScript = (req, res) => {
  const script = `
    (function(){
      const el = document.currentScript;
      const token = el.getAttribute('data-sdn');
      const iframe = document.createElement('iframe');
      iframe.src = '${env.widget}/api/widget/chat?sdn=' + encodeURIComponent(token);
      iframe.style.position='fixed';
      iframe.style.right='20px';
      iframe.style.bottom='20px';
      iframe.style.width='360px';
      iframe.style.height='520px';
      iframe.style.border='none';
      iframe.style.borderRadius='12px';
      iframe.style.zIndex='999999';
      document.body.appendChild(iframe);
    })();
  `;
  res.setHeader("Content-Type", "application/javascript");
  res.send(script);
};
