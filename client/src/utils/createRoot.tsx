import { ReactNode } from 'react';
import ReactDOM from 'react-dom/client';

function createElementInBody(tagName: string, id?: string) {
  const element = document.createElement(tagName);
  if (id) {
    element.id = id;
  }
  document.body.appendChild(element);
  return element;
}

export function createRoot(app: ReactNode, rootId: string) {
  const rootElement =
    document.getElementById(rootId) ?? createElementInBody('div', rootId);
  const root = ReactDOM.createRoot(rootElement);

  root.render(app);
}
