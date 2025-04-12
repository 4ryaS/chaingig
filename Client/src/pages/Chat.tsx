import React, { useState } from 'react';
import { Send, Bot } from 'lucide-react';

const Chat = () => {
  const contacts = ['Alice Client', 'Bob Project', 'Charlie Team'];

  const [selectedContact, setSelectedContact] = useState(contacts[0]);

  const [chatMessages, setChatMessages] = useState<Record<string, { id: number; sender: string; text: string }[]>>({
    'Alice Client': [
      { id: 1, sender: 'client', text: 'Hi, I need help with a smart contract project' },
      { id: 2, sender: 'freelancer', text: 'Hello! I\'d be happy to help. Could you provide more details?' },
      { id: 3, sender: 'bot', text: 'Reminder: All agreements will be secured through smart contracts' }
    ],
    'Bob Project': [],
    'Charlie Team': []
  });

  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    const currentMessages = chatMessages[selectedContact] || [];
    const updated = [
      ...currentMessages,
      { id: currentMessages.length + 1, sender: 'freelancer', text: newMessage }
    ];

    setChatMessages({ ...chatMessages, [selectedContact]: updated });
    setNewMessage('');

    // Simulate client reply
    setTimeout(() => {
      const reply = {
        id: updated.length + 1,
        sender: 'client',
        text: 'Got it! Let me get back to you shortly.'
      };
      setChatMessages((prev) => ({
        ...prev,
        [selectedContact]: [...prev[selectedContact], reply]
      }));
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSendMessage();
  };

  return (
    <div className="h-[calc(100vh-6rem)] flex">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-800 p-4 rounded-l-xl">
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4 text-white">Conversations</h2>
          <div className="relative">
            <input
              type="text"
              placeholder="Search chats..."
              className="w-full bg-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>
        <div className="space-y-2">
          {contacts.map((name) => (
            <div
              key={name}
              onClick={() => setSelectedContact(name)}
              className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer ${
                selectedContact === name ? 'bg-gray-700' : 'hover:bg-gray-700'
              }`}
            >
              <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold">
                {name[0]}
              </div>
              <div>
                <div className="font-medium text-white">{name}</div>
                <div className="text-sm text-gray-400 truncate w-40">
                  {chatMessages[name]?.[chatMessages[name].length - 1]?.text || 'No messages yet'}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Window */}
      <div className="flex-1 bg-gray-900 flex flex-col">
        <div className="p-4 bg-gray-800 border-b border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold">
              {selectedContact[0]}
            </div>
            <div>
              <div className="font-medium text-white">{selectedContact}</div>
              <div className="text-sm text-gray-400">Online</div>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {(chatMessages[selectedContact] || []).map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.sender === 'freelancer' ? 'justify-end' : 'justify-start'
              }`}
            >
              {message.sender === 'bot' ? (
                <div className="flex items-center space-x-2 bg-gray-800 rounded-lg p-3 max-w-md">
                  <Bot className="h-5 w-5 text-purple-500" />
                  <p className="text-white">{message.text}</p>
                </div>
              ) : (
                <div
                  className={`rounded-lg p-3 max-w-md ${
                    message.sender === 'freelancer' ? 'bg-purple-500' : 'bg-gray-800'
                  }`}
                >
                  <p className="text-white">{message.text}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="p-4 bg-gray-800">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 bg-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button
              className="p-2 bg-purple-500 rounded-lg hover:bg-purple-600"
              onClick={handleSendMessage}
            >
              <Send className="h-5 w-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
