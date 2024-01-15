import { StatusBar } from "expo-status-bar";
import { PaperProvider } from "react-native-paper";

import MainApp from "./src";

export default function App() {
	return (
		<PaperProvider>
			<MainApp />
			<StatusBar style="auto" />
		</PaperProvider>
	);
}
