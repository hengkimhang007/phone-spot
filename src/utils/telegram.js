const TELEGRAM_TOKEN = "8697029234:AAGVV9Z2791cHFXlMeQOnVWgtKGceHEC6kk";
const CHAT_ID = "1679715310";

export const sendTelegram = async (cart, form, total) => {
  const items = cart.map((item) =>
    `  • ${item.name} x${item.qty || 1} — ${item.price}`
  ).join("\n");

  const text =
    `🛒 *New Order Received!*\n\n` +
    `👤 *Name:* ${form.fullName}\n` +
    `📞 *Phone:* ${form.phone}\n` +
    `📍 *Address:* ${form.address}, ${form.district}, ${form.province}\n` +
    (form.note ? `📝 *Note:* ${form.note}\n` : "") +
    `\n*Items:*\n${items}\n\n` +
    `💰 *Total: $${total.toLocaleString()}*`;

  await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: CHAT_ID, text, parse_mode: "Markdown" }),
  });
};
