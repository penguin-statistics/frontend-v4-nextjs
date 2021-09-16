import React from 'react';

export type ErrorBoundaryProps = {}

type ErrorBoundaryState = {
  error?: Error
}

export class CustomizedErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {};
  }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return { error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // You can also log the error to an error reporting service

    console.log('Received Error', error, errorInfo);
  }

  render() {
    if (this.state.error) {
      // You can render any custom fallback UI
      return (
        <div style={{
          whiteSpace: 'pre-wrap'
        }}>
          <h1>Something went wrong...</h1>
          <p>
            Here is the error message produced by the exception in which caused this ErrorBoundary to catch: <code><pre style={{ whiteSpace: 'pre-wrap', lineHeight: 1.8 }}>{this.state.error?.message}</pre></code>
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}
