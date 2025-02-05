import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './app/index.tsx'
import { ApolloProvider } from '@apollo/client'
import { client } from './services/graphql/client.ts'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApolloProvider client={client} >
      <App />
      <Toaster />
    </ApolloProvider>
  </StrictMode>,
)
