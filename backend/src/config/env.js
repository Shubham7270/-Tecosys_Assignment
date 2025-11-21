import dotenv from "dotenv";

dotenv.config();

export default {
  port: process.env.PORT || 5000,
  cdn: process.env.CDN_DOMAIN,
  widget: process.env.WIDGET_DOMAIN,
};
