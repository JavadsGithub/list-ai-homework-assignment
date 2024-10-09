import CryptoJS from "crypto-js";

export const encryptString = (text: string, salt?: string) => {
  const passPhrase = salt ?? String(process.env["ENCRYPTION_SALT"]!);
  return CryptoJS.AES.encrypt(text, passPhrase).toString();
};

export const decryptString = (ciphertext: string, salt?: string) => {
  const passPhrase = salt ?? String(process.env["ENCRYPTION_SALT"]!);
  const bytes = CryptoJS.AES.decrypt(ciphertext, passPhrase);
  const originalText = bytes.toString(CryptoJS.enc.Utf8);
  return originalText;
};
