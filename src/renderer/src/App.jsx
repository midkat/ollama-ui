import AppLayout from "./components/AppLayout"
import Content from "./Content"

function App() {

  return (
    <AppLayout>
      <AppLayout.sidebar>
        <Sidebar />
      </AppLayout.sidebar>
      <AppLayout.content>
        <Content />
      </AppLayout.content>
    </AppLayout>
  )
}

export default App

