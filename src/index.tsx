import { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Button, Chip } from "react-native-paper";

export default function MainApp() {
	const [count, setCount] = useState(0);

	return (
		<View style={styles.container}>
			<View>
				<Image
					source={require("../assets/logo.png")}
					style={styles.image}
				/>
			</View>
			<Text>Welcome to DWoC 2023-24!</Text>
			<Button
				icon="plus"
				mode="contained"
				onPress={() => setCount(count + 1)}
			>
				Press me
			</Button>
			<Chip icon="information">Count: {count}</Chip>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		gap: 30,
		alignItems: "center",
		justifyContent: "center",
	},
	button: {
		marginTop: 20,
	},
	image: {
		width: 100,
		height: 100,
	},
});
