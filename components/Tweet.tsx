import React from 'react';
import { View, Text, Image,StyleSheet } from 'react-native';

const Tweet = ({tweet}) => {

 
	return (
		<View style={styles.container}>
			<Image src={tweet.user.image} style={styles.userimage} />
			<View style={styles.mainContainer}>
				<Text>{tweet.user.name}</Text>
				<Text style={styles.content}>{tweet.content}</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		padding: 10,
		borderBottomWidth: 1,
		borderColor: 'lightgrey',
    backgroundColor: '#fff',

	},
	userimage: {
		width: 50,
		height: 50,
		borderRadius: 50,
	},
  mainContainer: {
    marginLeft: 10,
		flex: 1,
  },
	name: {
		fontWeight: '600',
	},
	content: {
		lineHeight: 20,
		marginTop: 5,
	}
});

export default Tweet;
