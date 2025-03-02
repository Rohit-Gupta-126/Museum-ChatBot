"use client";
import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      {!isOpen && (
        <motion.button
          className="w-16 h-16 bg-terracotta-700/80 rounded-full flex items-center justify-center text-white shadow-lg"
          whileHover={{ scale: 1.1 }}
          onClick={() => setIsOpen(true)}
        >
          <span className="text-2xl">💬</span>
        </motion.button>
      )}

      {isOpen && (
        <motion.div
          className="w-96 max-sm:w-[calc(100vw-3rem)] h-[520px] glass-panel shadow-xl flex flex-col"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="p-4 border-b border-terracotta-500/40 flex justify-between items-center">
            <h3 className="text-white font-decorative">Museum Assistant</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-white"
            >
              ×
            </button>
          </div>
          <div className="p-4 flex-1 overflow-y-auto">
            {/* Chat messages would go here */}
          </div>
          <div className="p-4 border-t border-terracotta-500/40 bg-opacity-50 flex items-center space-x-2 justify-stretch">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 p-3 w-3/4 rounded-lg bg-sienna-600/50 text-white focus:outline-none"
            />
            <button className="ancient-button">Send</button>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
