import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import OKX from "./pages/OKX";
import Gate from "./pages/Gate";
import BingX from "./pages/BingX";
import Kast from "./pages/Kast";
import Telegram from "./pages/Telegram";
import DeclareCripto from "./pages/DeclareCripto";
import Construction from "./pages/Construction";
import Exchanges from "./pages/Exchanges";
import Hardwallet from "./pages/Hardwallet";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/okx"} component={OKX} />
      <Route path={"/gate"} component={Gate} />
      <Route path={"/bingx"} component={BingX} />
      <Route path={"/exchanges"} component={Exchanges} />
      <Route path={"/hardwallet"} component={Hardwallet} />
      <Route path={"/kast"} component={Kast} />
      <Route path={"/telegram"} component={Telegram} />
      <Route path={"/imposto-de-renda"} component={DeclareCripto} />
      <Route path={"/mentoria"} component={Construction} />
      <Route path={"/curso"} component={Construction} />
      <Route path={"/binance"} component={Construction} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="dark"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
