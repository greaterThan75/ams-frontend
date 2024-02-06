import { Navigator } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { PaperProvider } from "react-native-paper";

import MainApp from "./src";
import Home from "./src/Home";

export default function App() {
	return (
		<PaperProvider>
			<Navigator>
				<MainApp />
				<Home />
			</Navigator>
		</PaperProvider>
	);
}
