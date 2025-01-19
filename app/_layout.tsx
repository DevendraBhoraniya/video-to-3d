import { Stack } from "expo-router";
import { Provider } from "react-redux";
import "../global.css";
import { persistor, store } from "@/src/store/store";
import { PersistGate } from "redux-persist/integration/react";

export default function RootLayout() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Stack>
          <Stack.Screen name="home" />
          <Stack.Screen name="+not-found" />
        </Stack>
      </PersistGate>
    </Provider>
  );
}
