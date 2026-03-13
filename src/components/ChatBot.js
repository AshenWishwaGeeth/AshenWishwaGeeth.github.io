import React, { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  IconButton,
  Chip
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SmartToyRoundedIcon from "@mui/icons-material/SmartToyRounded";
import SendIcon from "@mui/icons-material/Send";

// FAQ data
const faq = {
  hello: "Hello! 👋 I'm Ashen's portfolio assistant. How can I help you?",
  name: "My name is Ashen Wishwa Geeth. I am a Full-Stack Software Developer who enjoys building modern web and mobile applications.",
  skills:
    "Ashen's technical skills include Laravel,React.js, React Native, Flutter, Expo, JavaScript, TypeScript, Java, Go (Gin), Spring Boot, HTML, CSS, and REST API development.",
  technologies:
    "Ashen works with many technologies including Firebase, Supabase (PostgreSQL), MySQL, SQLite, Git, GitHub, Java Swing, JDBC, and modern UI libraries like Material UI.",
  projects:
    "Ashen has developed multiple full-stack and mobile projects including a Blood Donation Mobile App, Credit Management Mobile App, Online Doctor Schedule System, Medical Appointment System with QR, and a Role-Based Authentication System.",
  mobile:
    "Ashen has experience building mobile applications using Flutter, React Native, and Expo with backend services like Firebase and Supabase.",
  backend:
    "Ashen builds backend systems using Go (Gin), Spring Boot, REST APIs, and secure authentication systems using JWT.",
  database:
    "Ashen has experience working with databases such as MySQL, SQLite, Firebase Firestore, and Supabase PostgreSQL.",
  github: "You can view Ashen's projects on GitHub: https://github.com/AshenWishwaGeeth",
  contact:
    "You can contact Ashen through the contact section of this portfolio or via LinkedIn and GitHub.",
  default:
    "Sorry, I didn't understand that. Try asking about skills, technologies, projects, mobile apps, backend, database, or GitHub."
};

// Button questions
const questions = [
  "Name",
  "Skills",
  "Technologies",
  "Projects",
  "Mobile",
  "Backend",
  "Database",
  "Contact",
  "GitHub"
];

// Map button labels to FAQ keys
const questionKeyMap = {
  Name: "name",
  Skills: "skills",
  Technologies: "technologies",
  Projects: "projects",
  Mobile: "mobile",
  Backend: "backend",
  Database: "database",
  Contact: "contact",
  GitHub: "github"
};

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! Ask me about Ashen 👋" }
  ]);
  const [input, setInput] = useState("");
  const [showChat, setShowChat] = useState(false);

  // Generate bot reply
  const getReply = (text) => {
    // Try direct mapping for button clicks (case-insensitive)
    const normalized = text.trim().toLowerCase();
    for (const key in questionKeyMap) {
      if (normalized === key.toLowerCase()) {
        return faq[questionKeyMap[key]];
      }
    }
    // Fallback for typed input
    if (normalized.includes("hello")) return faq.hello;
    if (normalized.includes("name")) return faq.name;
    if (normalized.includes("skill")) return faq.skills;
    if (normalized.includes("technolog")) return faq.technologies;
    if (normalized.includes("project")) return faq.projects;
    if (normalized.includes("mobile")) return faq.mobile;
    if (normalized.includes("backend")) return faq.backend;
    if (normalized.includes("database")) return faq.database;
    if (normalized.includes("contact")) return faq.contact;
    if (normalized.includes("github")) return faq.github;
    return faq.default;
  };

  // Handle button clicks
  const handleQuestionClick = (question) => {
    const reply = getReply(question);
    setMessages((prev) => [
      ...prev,
      { sender: "user", text: question },
      { sender: "bot", text: reply }
    ]);
  };

  // Handle text input send
  const handleSend = () => {
    if (!input) return;
    const reply = getReply(input);
    setMessages((prev) => [
      ...prev,
      { sender: "user", text: input },
      { sender: "bot", text: reply }
    ]);
    setInput("");
  };

  return (
    <>
      {/* Chat Icon (FAB) always visible */}
      <Box
        component="button"
        type="button"
        aria-label="Open portfolio chatbot"
        onClick={() => setShowChat(true)}
        sx={{
          position: "fixed",
          right: { xs: 16, sm: 24, md: 30 },
          bottom: { xs: 16, sm: 24, md: 30 },
          zIndex: 1100,
          display: "flex",
          alignItems: "center",
          gap: 1.2,
          pl: { xs: 1.25, sm: 1.6 },
          pr: 1,
          py: 1,
          border: "none",
          borderRadius: "999px",
          cursor: "pointer",
          background: "linear-gradient(135deg, #1565c0 0%, #42a5f5 100%)",
          color: "#ffffff",
          boxShadow: "0 14px 34px rgba(21, 101, 192, 0.28)",
          transform: "translateY(0) scale(1)",
          animation: "chatBotFloatIn 650ms cubic-bezier(0.2, 0.8, 0.2, 1)",
          transition:
            "transform 180ms ease, box-shadow 180ms ease, background 180ms ease",
          "&:hover": {
            background: "linear-gradient(135deg, #0d47a1 0%, #1e88e5 100%)",
            transform: "translateY(-2px) scale(1.05)",
            boxShadow: "0 18px 38px rgba(13, 71, 161, 0.34)"
          },
          "&:focus-visible": {
            outline: "3px solid rgba(66, 165, 245, 0.35)",
            outlineOffset: 3
          },
          "@keyframes chatBotFloatIn": {
            "0%": {
              opacity: 0,
              transform: "translateY(20px) scale(0.9)"
            },
            "100%": {
              opacity: 1,
              transform: "translateY(0) scale(1)"
            }
          }
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "0.84rem", sm: "0.95rem" },
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: "0.01em",
            whiteSpace: "nowrap"
          }}
        >
          Ask Me
        </Typography>
        <Box
          sx={{
            width: { xs: 42, sm: 48 },
            height: { xs: 42, sm: 48 },
            borderRadius: "50%",
            display: "grid",
            placeItems: "center",
            backgroundColor: "rgba(255, 255, 255, 0.18)",
            boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.2)"
          }}
        >
          <SmartToyRoundedIcon sx={{ fontSize: { xs: 22, sm: 26 } }} />
        </Box>
      </Box>

      {showChat && (
        <Paper
          elevation={6}
          sx={{
            position: "fixed",
            bottom: { xs: 76, sm: 94, md: 100 },
            right: { xs: 16, sm: 24, md: 30 },
            width: { xs: "calc(100vw - 32px)", sm: 350 },
            height: 450,
            display: "flex",
            flexDirection: "column",
            borderRadius: 3,
            overflow: "hidden",
            zIndex: 1000
          }}
        >
          {/* Header with Cancel Icon */}
          <Box sx={{ p: 2, backgroundColor: "#1976d2", color: "white", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <Typography variant="h6">Portfolio Chat</Typography>
            <IconButton sx={{ color: "white" }} onClick={() => setShowChat(false)}>
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Messages */}
          <Box
            sx={{
              flex: 1,
              p: 2,
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              gap: 1
            }}
          >
            {messages.map((msg, i) => (
              <Typography
                key={i}
                sx={{
                  alignSelf:
                    msg.sender === "user" ? "flex-end" : "flex-start",
                  backgroundColor:
                    msg.sender === "user" ? "#1976d2" : "#f0f0f0",
                  color: msg.sender === "user" ? "white" : "black",
                  borderRadius: 2,
                  p: 1.2,
                  maxWidth: "80%",
                  wordBreak: "break-word"
                }}
              >
                {msg.text}
              </Typography>
            ))}

            {/* Always show buttons under messages */}
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 1,
                mt: 1
              }}
            >
              {questions.map((q, index) => (
                <Chip
                  key={index}
                  label={q}
                  onClick={() => handleQuestionClick(q)}
                  clickable
                  color="primary"
                />
              ))}
            </Box>
          </Box>

          {/* Input */}
          <Box sx={{ display: "flex", p: 1, borderTop: "1px solid #ddd" }}>
            <TextField
              size="small"
              fullWidth
              placeholder="Type your question..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
            />
            <IconButton onClick={handleSend}>
              <SendIcon />
            </IconButton>
          </Box>
        </Paper>
      )}
    </>
  );
};

export default ChatBot;