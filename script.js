document.getElementById("year").textContent = new Date().getFullYear();

document.querySelector(".quote-form")?.addEventListener("submit", (event) => {
  event.preventDefault();

  const form = event.currentTarget;
  const data = new FormData(form);
  const name = String(data.get("name") || "").trim();
  const email = String(data.get("email") || "").trim();
  const message = String(data.get("message") || "").trim();

  const subject = encodeURIComponent(`Website enquiry${name ? ` from ${name}` : ""}`);
  const body = encodeURIComponent(
    [
      name ? `Name: ${name}` : "",
      email ? `Email: ${email}` : "",
      "",
      message || "No message provided.",
    ]
      .filter(Boolean)
      .join("\n")
  );

  window.location.href = `mailto:bryce@coastlineplumbingqld.com.au?subject=${subject}&body=${body}`;
});
