import { ThemeProvider } from "styled-components"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import { EventsProvider } from "./contexts/eventContext"
import { CalendarProvider } from "./contexts/CalendarContext"
import UpdateEvent from "./pages/UpdateEvent"
import GlobalStyles from "./components/styles/globals"

const theme = {
  media: {
    sm: "640px",
    md: "768px",
  },
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <CalendarProvider>
        <EventsProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/event/:id" element={<UpdateEvent />} />
            </Routes>
          </BrowserRouter>
        </EventsProvider>
      </CalendarProvider>
    </ThemeProvider>
  )
}

export default App
