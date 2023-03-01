import { Box, Text, render } from "ink";
import { useEffect } from "react";
import { UncontrolledTextInput } from "ink-text-input";
import { ErrorBoundary } from "react-error-boundary";

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      throw new Error("you lose.");
    }, 2000);
  }, []);

  return (
    <Box>
      <Text>Enter your name: </Text>
      <UncontrolledTextInput />
    </Box>
  );
};

export function renderApp() {
  const app = render(
    <ErrorBoundary
      fallback={
        <Box>
          <Text>Error occurred.</Text>
        </Box>
      }
    >
      <App />
    </ErrorBoundary>
  );

  return app.waitUntilExit();
}
