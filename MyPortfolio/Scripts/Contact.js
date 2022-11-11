const contactForm = document.querySelector("#contact-form");
const sendEmail = (e) => {
  e.preventDefault();
  const email = contactForm.elements["email"].value.trim();
  const name = contactForm.elements["name"].value.trim();
  const subject = contactForm.elements["subject"].value.trim();
  const msg = contactForm.elements["message"].value.trim();

  Email.send({
    SecureToken: "04b7aa47-d38e-4dc2-888f-339c00ff022c",
    // Host: "smtp.gmail.com",
    // Username: "famousks232@gmail.com",
    // Password: "9520D65E8C2087F1514B198E7FB16CB5B66A",
    To: "shubh6441@gmail.com",
    From: "famousks232@gmail.com",
    Subject: subject,
    Body: msg + "<br/>" + name + "<br/>" + email,
  }).then((message) => alert("Message sent"));
  contactForm.elements["email"].value = "";
  contactForm.elements["name"].value = "";
  contactForm.elements["subject"].value = "";
  contactForm.elements["message"].value = "";
};
contactForm.addEventListener("submit", sendEmail);
