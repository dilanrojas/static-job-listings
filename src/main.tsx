import { createRoot } from 'react-dom/client'
import { FiltersProvider } from './context/JobsContext.tsx'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <FiltersProvider>
    <App />
  </FiltersProvider>,
)