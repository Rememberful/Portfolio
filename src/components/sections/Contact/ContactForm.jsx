import { useState, useCallback } from "react";
import { ORANGE, getInputStyle } from "../../../constants/theme";
import { CONTACT_EMAIL, subjectLabels } from "../../../data/profile";

export function ContactForm({ T, isMobile }) {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sendStatus, setSendStatus] = useState("idle"); // idle | sent | error
  const inp = getInputStyle(T);

  const handleChange = useCallback((e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }, []);

  // Opens the visitor's own email app (mailto) — no backend needed.
  const handleSendMessage = useCallback(() => {
    if (!form.name || !form.email || !form.message) {
      setSendStatus("error");
      return;
    }

    const subjectText = subjectLabels[form.subject] || "Portfolio Contact";
    const mailSubject = `${subjectText} — from ${form.name}`;
    const mailBody =
      `Name: ${form.name}\n` +
      `Email: ${form.email}\n` +
      (form.subject ? `Subject: ${subjectText}\n` : "") +
      `\n${form.message}`;

    const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;
    window.location.href = mailtoUrl;

    setSendStatus("sent");
  }, [form]);

  return (
    <div className="no-print">
      <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "14px", marginBottom: "14px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <label style={{ fontSize: "12px", color: T.text }}>Name</label>
          <input name="name" value={form.name} onChange={handleChange} placeholder="Your Name" style={inp} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <label style={{ fontSize: "12px", color: T.text }}>Email</label>
          <input name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" style={inp} />
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "14px" }}>
        <label style={{ fontSize: "12px", color: T.text }}>Subject</label>
        <select name="subject" value={form.subject} onChange={handleChange} style={{ ...inp, appearance: "none" }}>
          <option value="">Select a topic...</option>
          <option value="job">Job Opportunity</option>
          <option value="collab">Collaboration</option>
          <option value="project">Project Inquiry</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "16px" }}>
        <label style={{ fontSize: "12px", color: T.text }}>Message</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Tell me about the opportunity..."
          style={{ ...inp, minHeight: "140px", resize: "vertical" }}
        />
      </div>

      <button
        onClick={handleSendMessage}
        style={{
          width: "100%",
          background: ORANGE,
          border: "none",
          borderRadius: "10px",
          color: "#fff",
          fontWeight: "700",
          fontSize: "15px",
          padding: "16px",
          cursor: "pointer",
          letterSpacing: "0.5px",
        }}
      >
        Send Message
      </button>

      {sendStatus === "sent" && (
        <p style={{ color: "#4ade80", fontSize: "13px", marginTop: "12px" }}>Opening your email app to send this message...</p>
      )}
      {sendStatus === "error" && (
        <p style={{ color: "#f87171", fontSize: "13px", marginTop: "12px" }}>Please fill in your name, email, and message first.</p>
      )}
    </div>
  );
}
