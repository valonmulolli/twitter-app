import { StyleSheet, View, Text,FlatList } from 'react-native';
import Tweet from '../../../../components/Tweet';
import { Entypo } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { useTweetsApi } from '../../../../lib/api/tweets';
import { useQuery } from '@tanstack/react-query';
import { ActivityIndicator } from 'react-native';

export default function TabOneScreen() {
	const {ListTweets} = useTweetsApi();

	const {data, isLoading,error} = useQuery({
		queryKey: ['tweets',''],
		queryFn: ListTweets,
	});

	if (isLoading) {
		return <ActivityIndicator/>
	}

	if (error) {
		return <Text>{error.message}</Text>
	}

	return (
		<View style={styles.page}>
			<FlatList
				data={data}
				renderItem={({ item }) => <Tweet tweet={item} />} />

			<Link href='/new-tweet' asChild>
				<Entypo
					name='plus'
					size={24}
					color='white'
					style={styles.floatingButton}
				/>
			</Link>
		</View>
	);
}

const styles = StyleSheet.create({
	page: {
		flex: 1,
		backgroundColor: 'white',
	},
	floatingButton: {
		backgroundColor: '#1C9BF0',
		borderRadius: 25,
		padding: 15,
		position: 'absolute',
		right: 15,
		bottom: 15,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
		overflow: 'hidden',
	},
});
