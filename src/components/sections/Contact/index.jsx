import { Reveal } from "../../common/Reveal";
import { EmailCopyRow } from "./EmailCopyRow";
import { ContactForm } from "./ContactForm";
import { useUI } from "../../../context/ThemeContext";
import { CONTACT_EMAIL } from "../../../data/profile";
import { getSectionStyle, getBigTitleStyle } from "../../../constants/theme";

// Default export so this section can be code-split via React.lazy in
// App.jsx — it's the last section on the page and has no reason to be
// part of the initial bundle.
export default function ContactSection() {
  const { T, isMobile } = useUI();
  const section = getSectionStyle(T, isMobile);
  const bigTitle = getBigTitleStyle(isMobile);

  return (
    <section id="contact" style={{ ...section, borderBottom: "none" }}>
      <Reveal>
        <div style={bigTitle}>CONTACT</div>
        <div style={{ ...bigTitle, color: T.text, marginBottom: "32px" }}>ME</div>

        <EmailCopyRow T={T} />

        <div className="print-only" style={{ display: "none", fontSize: "13px", color: T.text, marginBottom: "16px" }}>
          Reach out via email: {CONTACT_EMAIL}
        </div>

        <ContactForm T={T} isMobile={isMobile} />
      </Reveal>
    </section>
  );
}
