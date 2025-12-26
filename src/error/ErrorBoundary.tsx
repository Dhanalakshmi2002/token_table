"use client";
import { Component } from "react";

export class ErrorBoundary extends Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    return this.state.hasError ? (
      <div className="text-red-400">Something went wrong.</div>
    ) : (
      this.props.children
    );
  }
}
