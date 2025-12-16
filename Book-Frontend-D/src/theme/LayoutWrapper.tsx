import React from 'react';
import type {WrapperProps} from '@docusaurus/types';
import {useEffect} from 'react';

type LayoutWrapperProps = WrapperProps<{
  readonly layout: React.ComponentType;
}>;

export default function LayoutWrapper({layout: Layout, ...props}: LayoutWrapperProps): JSX.Element {
  const LayoutComponent = Layout;

  // Dynamically import and render the chatbot component
  useEffect(() => {
    import('./RagChatbot').then(({default: RagChatbot}) => {
      // Create a container for the chatbot
      const chatbotContainer = document.createElement('div');
      chatbotContainer.id = 'rag-chatbot-container';
      document.body.appendChild(chatbotContainer);

      // Render the chatbot component
      const renderChatbot = async () => {
        const ReactDOM = await import('react-dom/client');
        const root = ReactDOM.createRoot(chatbotContainer);
        root.render(<RagChatbot />);
      };

      renderChatbot();
    });
  }, []);

  return <LayoutComponent {...props} />;
}