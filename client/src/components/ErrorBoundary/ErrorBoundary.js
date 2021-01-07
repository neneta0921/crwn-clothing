import React from 'react';

import { ErrorImageOverlay, ErrorImageContainer, ErrorImageText } from './ErrorBoundaryStyle';

export class ErrorBoundary extends React.Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    // process the error
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }

    return (
      <ErrorImageOverlay>
        <ErrorImageContainer imageUrl="https://i.imgur.com/A040Lxr.png" />
        <ErrorImageText>Sorry This Page is Lost in Space</ErrorImageText>
      </ErrorImageOverlay>
    );
  }
}
