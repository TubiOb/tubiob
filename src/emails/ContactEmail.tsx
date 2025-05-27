import { Body, Container, Head, Heading, Hr, Html, Preview, Section, Text } from "@react-email/components"

interface ContactEmailTemplateProps {
  name: string
  email: string
  message: string
}

export const ContactEmailTemplate = ({ name, email, message }: ContactEmailTemplateProps) => (
  <Html>
    <Head />
    <Preview>New message from {name} via your portfolio</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={header}>
          <Text style={badge}>New Message</Text>
          <Heading style={h1}>Contact Form Submission</Heading>
        </Section>

        <Section style={content}>
          <Section style={grid}>
            <Section style={gridItem}>
              <Text style={label}>From</Text>
              <Text style={value}>{name}</Text>
              <Text style={emailStyle}>{email}</Text>
            </Section>
          </Section>

          <Section style={messageSection}>
            <Text style={label}>Message</Text>
            <Text style={messageStyle}>{message}</Text>
          </Section>

          <Section style={actions}>
            <Text style={button}>
              <a href={`mailto:${email}`} style={buttonLink}>
                Reply
              </a>
            </Text>
          </Section>
        </Section>

        <Section style={footer}>
          <Hr style={footerHr} />
          <Text style={footerText}>This message was automatically generated from your portfolio contact form.</Text>
          <Text style={footerSubtext}>
            Sent on{" "}
            {new Date().toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
)

// Minimalist styles
const main = {
  backgroundColor: "#ffffff",
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif',
}

const container = {
  margin: "0 auto",
  maxWidth: "560px",
  padding: "40px 20px",
}

const header = {
  textAlign: "center" as const,
  marginBottom: "40px",
}

const badge = {
  backgroundColor: "#000000",
  color: "#ffffff",
  fontSize: "12px",
  fontWeight: "500",
  padding: "4px 12px",
  borderRadius: "12px",
  display: "inline-block",
  margin: "0 0 16px 0",
  textTransform: "uppercase" as const,
  letterSpacing: "0.5px",
}

const h1 = {
  color: "#000000",
  fontSize: "24px",
  fontWeight: "600",
  margin: "0",
  lineHeight: "32px",
}

const content = {
  border: "1px solid #e5e5e5",
  borderRadius: "8px",
  padding: "32px",
}

const grid = {
  marginBottom: "32px",
}

const gridItem = {
  marginBottom: "24px",
}

const label = {
  color: "#666666",
  fontSize: "14px",
  fontWeight: "500",
  margin: "0 0 8px 0",
}

const value = {
  color: "#000000",
  fontSize: "18px",
  fontWeight: "500",
  margin: "0 0 4px 0",
}

const emailStyle = {
  color: "#666666",
  fontSize: "16px",
  margin: "0",
}

const messageSection = {
  marginBottom: "32px",
}

const messageStyle = {
  color: "#000000",
  fontSize: "16px",
  lineHeight: "24px",
  margin: "0",
  whiteSpace: "pre-wrap" as const,
  padding: "16px",
  backgroundColor: "#f9f9f9",
  borderRadius: "4px",
}

const actions = {
  textAlign: "center" as const,
}

const button = {
  display: "inline-block",
  margin: "0",
}

const buttonLink = {
  backgroundColor: "#000000",
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: "500",
  padding: "12px 32px",
  borderRadius: "6px",
  textDecoration: "none",
  display: "inline-block",
}

const footer = {
  textAlign: "center" as const,
  marginTop: "40px",
  paddingTop: "24px",
  borderTop: "1px solid #e5e5e5",
}

const footerText = {
  color: "#999999",
  fontSize: "14px",
  margin: "0",
}

const footerHr = {
  borderColor: "#e5e7eb",
  margin: "0 0 24px 0",
}

const footerSubtext = {
  color: "#9ca3af",
  fontSize: "12px",
  textAlign: "center" as const,
  margin: "0",
}