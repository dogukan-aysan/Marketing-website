"use server";

export async function subscribeNewsletter(formData) {
  const email = formData.get("email");
  const res = await fetch("https://www.greatfrontend.com/api/projects/challenges/newsletter", {
    method: "POST",
    body: JSON.stringify({ email }),
  });
  const data = await res.json();
  return data;
}

export async function sendContactInfo(formData) {
  const res = await fetch("https://www.greatfrontend.com/api/projects/challenges/contact", {
    method: "POST",
    body: JSON.stringify({
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    }),
  });
  return await res.json();
}
