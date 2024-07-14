import AppLayout from './components/AppLayout'
import Content from './components/Content'
import Sidebar from './components/Sidebar'
import { AppProvider } from './context/AppContext'

function App(): JSX.Element {
  return (
    <AppProvider>
      <AppLayout>
        <Sidebar />
        <Content />
      </AppLayout>
    </AppProvider>
  )
}

export default App
