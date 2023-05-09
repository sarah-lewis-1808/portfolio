import { createRoot } from 'react-dom/client'
// import { Auth0Provider } from '@auth0/auth0-react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './components/App'

// create a new instance of QueryClient
const queryClient = new QueryClient()

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(
    // <Auth0Provider
    //   domain="dev-ty7ee0rngw3ifoyu.us.auth0.com"
    //   clientId="ZrrSwrP55LW2gRBk3MJIrfugBQnFLuwP"
    //   redirectUri={window.location.origin}
    //   audience="https://sarah-lewis.netlify.app/admin"
    // >
    <QueryClientProvider client={queryClient}>
      <Router>
        <App />
      </Router>
    </QueryClientProvider>
    // </Auth0Provider>
  )
})
