const tweets = [
  {
    id: 't0',
    user: {
      id: 'u1',
      username: 'Troym',
      name: 'Troy',
      image:
        'https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    },
    createdAt: '2020-08-27T12:00:00.000Z',
    content: 'Can you please check if the Subscribe button on Youtube works?',
    image:
      'https://images.unsplash.com/photo-1569038777837-5ee2b3ede1c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80',
    numberOfComments: 123,
    numberOfRetweets: 11,
    numberOfLikes: 10,
  },
  {
    id: '111111111',
    createdAt: '2023-04-28T08:30:00.000Z',
    user: {
      id: '123456789',
      name: 'Jeff B',
      username: 'bezos',
      image:
        'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/jeff.jpeg',
    },
    content:
      'Just had a great workout at the gym! 💪 #fitness #healthylifestyle',
    numberOfComments: 2,
    numberOfRetweets: 5,
    numberOfLikes: 25,
    impressions: 500,
  },
  {
    id: '222222222',
    createdAt: '2023-04-27T19:45:00.000Z',
    user: {
      id: '987654321',
      name: 'Miep',
      username: 'Miep',
      image:
        'https://images.unsplash.com/photo-1614644147798-f8c0fc9da7f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80',
    },
    content: 'Waiting for my train',
    image: 'https://images.unsplash.com/photo-1511820377299-7f87b34ce70f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80',
    numberOfComments: 10,
    numberOfRetweets: 20,
    numberOfLikes: 100,
    impressions: 1000,
  },
  {
    id: '333333333',
    createdAt: '2023-04-26T12:00:00.000Z',
    user: {
      id: '123456789',
      name: 'Jane Smith',
      username: 'janesmith',
      image:
        'https://images.unsplash.com/photo-1562514947-bf9cf8e45d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    },
    content:
      'Excited to announce that I will be speaking at the upcoming tech conference in San Francisco! 🎉 #womenintech',
    numberOfComments: 5,
    numberOfRetweets: 10,
    numberOfLikes: 50,
    impressions: 1000,
  },
  {
    id: 't1',
    user: {
      id: 'u1',
      username: 'Harpersurfs',
      name: 'Harper',
      image:
        'https://images.unsplash.com/photo-1581182830442-e8bc7babbf15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    },
    createdAt: '2020-08-27T12:00:00.000Z',
    content:
      "Had an amazing surf session this morning.",
    image:
      'https://images.unsplash.com/photo-1606945711379-e15c0fcc982b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80',
      
      
    numberOfComments: 123,
    numberOfRetweets: 11,
    numberOfLikes: 10,
  },
  {
    id: 't2',
    user: {
      id: 'u1',
      username: 'Veraz',
      name: 'Vera',
      image:
        'https://images.unsplash.com/photo-1610857686540-c510d807d838?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTF8OTk3MDQzNzZ8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    createdAt: '2020-08-27T12:00:00.000Z',
    content:
      "Hey Hey Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    numberOfComments: 4,
    numberOfRetweets: 11,
    numberOfLikes: 99,
  },
  {
    id: 't3',
    user: {
      id: 'u1',
      username: 'Hope',
      name: 'Hope',
      image:
        'https://images.unsplash.com/photo-1639495807560-a7a1fa5906a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    },
    createdAt: '2020-08-27T12:00:00.000Z',
    content: 'Hi there',
    numberOfComments: 4,
    numberOfRetweets: 11,
    numberOfLikes: 99,
  },
  {
    id: 't4',
    user: {
      id: 'u1',
      username: 'Elliocodes',
      name: 'Elliot',
      image:
        'https://images.unsplash.com/photo-1585150266154-5cc2f96bb9eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=701&q=80',
    },
    createdAt: '2020-08-27T12:00:00.000Z',
    content:
      "Hey Hey Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    numberOfComments: 4,
    numberOfRetweets: 11,
    numberOfLikes: 99,
  },
];

export default tweets;
