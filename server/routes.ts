import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import fs from "fs";
import path from "path";
import nodemailer from "nodemailer";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission route
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;
      
      if (!name || !email || !subject || !message) {
        return res.status(400).json({ message: "All fields are required" });
      }
      
      // In a real application, we would send the email here
      // For now we'll just log it and return success
      console.log("Contact form submission:", { name, email, subject, message });
      
      // Example of how nodemailer would be implemented in production
      /*
      const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: parseInt(process.env.EMAIL_PORT || "587"),
        secure: process.env.EMAIL_SECURE === "true",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });
      
      await transporter.sendMail({
        from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
        to: "itssujan167@gmail.com",
        subject: `New Contact: ${subject}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage: ${message}`,
        html: `<p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Message:</strong><br>${message}</p>`,
      });
      */
      
      return res.status(200).json({ message: "Message sent successfully" });
    } catch (error) {
      console.error("Error sending contact form:", error);
      return res.status(500).json({ message: "Error sending message" });
    }
  });

  // Resume download endpoint
  app.get("/api/download-resume", (req, res) => {
    try {
      const resumePath = path.resolve(__dirname, "../attached_assets/Resume_Sujan_Basnet.pdf");
      
      if (fs.existsSync(resumePath)) {
        res.download(resumePath, "Sujan_Basnet_Resume.pdf");
      } else {
        console.error("Resume file not found at path:", resumePath);
        res.status(404).json({ message: "Resume file not found" });
      }
    } catch (error) {
      console.error("Error downloading resume:", error);
      res.status(500).json({ message: "Error downloading resume" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
