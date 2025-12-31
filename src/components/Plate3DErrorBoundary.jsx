import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100%',
      color: '#026a61',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <div>
        <p style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>
          Plate image not found
        </p>
        <p style={{ fontSize: '0.9rem', color: '#666' }}>
          Please add plate.jpg to the public folder
        </p>
      </div>
    </div>
  )
}

export default function Plate3DErrorBoundary({ children }) {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      {children}
    </ErrorBoundary>
  )
}

