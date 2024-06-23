import React, { useState } from 'react';
import '../css/AiChatbot.css'; // 引入自定义的 CSS 文件
import { Layout, Input, Button } from 'antd';

const { Content } = Layout;

const AiChatbot: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState<{ user: string; ai: string }[]>([]);

  const sendMessage = async () => {
    if (inputValue.trim() === '') return;

    try {
      // 假设后端接口为 /api/chatbot
      const response = await fetch('/api/chatbot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: inputValue }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setMessages([...messages, { user: inputValue, ai: data.reply }]);
      setInputValue('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <Layout className="ai-chatbot-container">
      <Content className="chat-container">
        <div className="chatbox">

        {/* 添加居中的文字 */}
        <div style={{ textAlign: 'center', marginBottom: '10px' }}>
          <span style={{ fontSize: '18px', fontWeight: 'bold' }}>aaaaxbb店铺</span>
        </div>
          {messages.map((msg, index) => (
            <div key={index} className={`message ${index % 2 === 0 ? 'user-message' : 'ai-message'}`}>
              <span className="message-content">{msg.user}</span>
              <span className="message-content">{msg.ai}</span>
            </div>
          ))}
        </div>

        <div className="input-container">
          <Input
            className="message-input"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type your message here..."
          />
          <Button type="primary" className="send-button" onClick={sendMessage}>
            Send
          </Button>
        </div>
      </Content>
    </Layout>
  );
};

export default AiChatbot;
