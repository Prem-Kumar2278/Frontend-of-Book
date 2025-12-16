import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import styles from './RagChatbot.module.css';

const RagChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{id: number, text: string, isUser: boolean}[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    // Add user message
    const userMessage = {
      id: Date.now(),
      text: inputValue,
      isUser: true
    };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // Simulate API call to RAG system
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        text: "I'm your AI assistant for the Physical AI & Humanoid Robotics curriculum. I can help answer questions about vision-language-action integration, robotic systems, and embodied intelligence based on the course materials.",
        isUser: false
      };
      setMessages(prev => [...prev, botResponse]);
      setIsLoading(false);
    }, 1000);
  };

  useEffect(() => {
    // Check if we're in the browser before accessing DOM
    if (typeof window !== 'undefined') {
      // Find the container div that was injected via the plugin
      const container = document.getElementById('rag-chatbot-container');
      if (container) {
        // Move this component's DOM to the container
        // This is handled by React's rendering, so we just need to render the content
      }
    }
  }, []);

  return (
    <div className={styles.chatbotContainer}>
      {/* Chatbot button */}
      <button
        className={clsx(styles.chatbotButton, {[styles.open]: isOpen})}
        onClick={toggleChat}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? '×' : '💬'}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className={styles.chatWindow}>
          <div className={styles.chatHeader}>
            <h3>Ask the Book</h3>
            <button
              className={styles.closeButton}
              onClick={toggleChat}
              aria-label="Close chat"
            >
              ×
            </button>
          </div>

          <div className={styles.chatMessages}>
            {messages.length === 0 ? (
              <div className={styles.welcomeMessage}>
                <p>Hello! I'm your AI assistant for the Physical AI & Humanoid Robotics curriculum.</p>
                <p>Ask me anything about the course content!</p>
              </div>
            ) : (
              messages.map((message) => (
                <div
                  key={message.id}
                  className={clsx(
                    styles.message,
                    {[styles.userMessage]: message.isUser, [styles.botMessage]: !message.isUser}
                  )}
                >
                  <div className={styles.messageText}>{message.text}</div>
                </div>
              ))
            )}

            {isLoading && (
              <div className={clsx(styles.message, styles.botMessage)}>
                <div className={styles.messageText}>
                  <span className={styles.typingIndicator}>AI is thinking...</span>
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSend} className={styles.chatInputForm}>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask about robotics..."
              className={styles.chatInput}
              disabled={isLoading}
            />
            <button
              type="submit"
              className={styles.sendButton}
              disabled={isLoading || !inputValue.trim()}
            >
              →
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default RagChatbot;