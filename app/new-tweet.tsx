import {
	View,
	Text,
	StyleSheet,
	Image,
	TextInput,
	Pressable,
	SafeAreaView,
} from 'react-native';
import { useState } from 'react';
import { Link, useRouter } from 'expo-router';

const user = {
	id: 'u1',
	username: 'Harpersurfs',
	name: 'Harper',
	image:
		'https://images.unsplash.com/photo-1581182830442-e8bc7babbf15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
};


export default function NewTweet() {
	const [text, setText] = useState('');
  const router = useRouter()

	const onTweetPress = () => {
		console.warn('Tweeted!',text);

    setText('')
    router.back()
	};

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
			<View style={styles.container}>
				<View style={styles.buttonContainer}>
					<Link href='../' style={{ fontSize: 18 }}>
						Cancel
					</Link>

					<Pressable onPress={onTweetPress} style={styles.button}>
						<Text style={styles.buttonText}>Tweet</Text>
					</Pressable>
				</View>

				<View style={styles.inputContainer}>
					<Image src={user.image} style={styles.image} />
					<TextInput
						value={text}
						onChangeText={setText}
						placeholder="What's happening?"
						multiline
						numberOfLines={5}
						style={{ flex: 1 }}
					/>
				</View>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 10,
		flex: 1,
	},
	buttonContainer: {
		flexDirection: 'row',
		marginVertical: 10,
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	button: {
		backgroundColor: '#B9DCF7',
		padding: 10,
		paddingHorizontal: 20,
		borderRadius: 50,
	},
	buttonText: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 16,
	},
	inputContainer: {
		flexDirection: 'row',
	},
	image: {
		width: 50,
		aspectRatio: 1,
		borderRadius: 50,
		marginRight: 10,
	},
});
