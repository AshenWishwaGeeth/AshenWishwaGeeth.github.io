import React, { useState } from "react";
import {
  Box,
  Fab,
  Paper,
  Typography,
  TextField,
  IconButton,
  Chip
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ChatIcon from "@mui/icons-material/Chat";
import SendIcon from "@mui/icons-material/Send";

// FAQ data
const faq = {
  hello: "Hello! 👋 I'm Ashen's portfolio assistant. How can I help you?",
  name: "My name is Ashen Wishwa Geeth. I am a Full-Stack Software Developer who enjoys building modern web and mobile applications.",
  skills:
    "Ashen's technical skills include React.js, React Native, Flutter, Expo, JavaScript, TypeScript, Java, Go (Gin), Spring Boot, HTML, CSS, and REST API development.",
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
      <Fab
        color="primary"
        sx={{ position: "fixed", bottom: 30, right: 30, zIndex: 1100 }}
        onClick={() => setShowChat(true)}
      >
        <ChatIcon />
      </Fab>

      {showChat && (
        <Paper
          elevation={6}
          sx={{
            position: "fixed",
            bottom: 100,
            right: 30,
            width: 350,
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