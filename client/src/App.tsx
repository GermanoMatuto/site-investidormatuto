import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { lazy, Suspense } from "react";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

const Home = lazy(() => import("./pages/Home"));
const OKX = lazy(() => import("./pages/OKX"));
const Gate = lazy(() => import("./pages/Gate"));
const BingX = lazy(() => import("./pages/BingX"));
const Exchanges = lazy(() => import("./pages/Exchanges"));
const Hardwallet = lazy(() => import("./pages/Hardwallet"));
const Kast = lazy(() => import("./pages/Kast"));
const Telegram = lazy(() => import("./pages/Telegram"));
const DeclareCripto = lazy(() => import("./pages/DeclareCripto"));
const Mentoria = lazy(() => import("./pages/Mentoria"));
const Curso = lazy(() => import("./pages/Curso"));
const Construction = lazy(() => import("./pages/Construction"));
const NotFound = lazy(() => import("./pages/NotFound"));

function PageLoader() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

function Router() {
  return (
    <Suspense fallback={<PageLoader />}>
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
        <Route path={"/mentoria"} component={Mentoria} />
        <Route path={"/curso"} component={Curso} />
        <Route path={"/binance"} component={Construction} />
        <Route path={"/404"} component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
