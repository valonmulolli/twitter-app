import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs, useNavigation } from 'expo-router';
import { Image, Pressable, useColorScheme } from 'react-native';

import Colors from '../../../constants/Colors';

export const unstable_settings = {
	initialRouteName: 'two',
};

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
	name: React.ComponentProps<typeof FontAwesome>['name'];
	color: string;
}) {
	return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

function AvatarHeader() {
	const navigation = useNavigation();

	return (
		<Pressable onPress={() => navigation.openDrawer()}>
			<Image
				src='https://pbs.twimg.com/profile_images/1590968738358079488/IY9Gx6Ok_400x400.jpg'
				style={{ width: 30, aspectRatio: 1, borderRadius: 40, marginLeft: 10 }}
			/>
		</Pressable>
	);
}

export default function TabLayout() {
	const colorScheme = useColorScheme();

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
			}}
		>
			
			<Tabs.Screen
				name='feed'
				options={{
					title: 'Feed',
					tabBarIcon: ({ color }) => <TabBarIcon name='code' color={color} />,
					headerRight: () => (
						<Link href='/modal' asChild>
							<Pressable>
								{({ pressed }) => (
									<FontAwesome
										name='info-circle'
										size={25}
										color={Colors[colorScheme ?? 'light'].text}
										style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
									/>
								)}
							</Pressable>
						</Link>
					),
					headerLeft: () => <AvatarHeader />,
				}}
			/>
			<Tabs.Screen
				name='two'
				options={{
					title: 'Tab Two',
					tabBarIcon: ({ color }) => <TabBarIcon name='code' color={color} />,
				}}
			/>
		</Tabs>
	);
}
