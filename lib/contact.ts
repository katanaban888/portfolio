export type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

/**
 * Contact form submission.
 *
 * Currently a frontend-only stub: it simulates a short delay and always
 * succeeds. To connect a real backend later, replace the body with:
 *
 *   // Formspree example:
 *   const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
 *     method: "POST",
 *     headers: { "Content-Type": "application/json", Accept: "application/json" },
 *     body: JSON.stringify(payload),
 *   });
 *   if (!res.ok) throw new Error("Failed to send");
 */
export async function submitContactForm(
  payload: ContactPayload
): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 900));
  void payload; // replace with a real request — see comment above
}
