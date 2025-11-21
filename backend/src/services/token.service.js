import crypto from "crypto";

export function generateSDN() {
  return "sdn_" + crypto.randomBytes(5).toString("hex");
}
