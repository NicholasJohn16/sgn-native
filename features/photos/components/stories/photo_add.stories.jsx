import {Title, Body} from './photo_add';
import { Story } from '@/components/ui/story';

const template = (args) => (
    <Story story={args.story}>
    {{
        title: <Title story={args.story} />,
        body: <Body story={args.story} />
    }}
    </Story>
)

const meta = {
    component: template,
}

export default meta;

export const SinglePhoto = {
    args: {
        story: {
            "objectType": "com.stories.story",
            "id": 179932,
            "component": "com_photos",
            "name": "photo_add",
            "subject": {
              "id": 179929,
              "objectType": "com.people.person",
              "name": "Night Requiem",
              "body": "",
              "alias": "NightsofRequiem",
              "imageURL": {
                "small": {
                  "size": {
                    "width": 80,
                    "height": 107
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n179929/com_people/avatars/small6aba12a1200d30b40e7da78de766496e.jpg"
                },
                "medium": {
                  "size": {
                    "width": 160,
                    "height": 213
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n179929/com_people/avatars/medium6aba12a1200d30b40e7da78de766496e.jpg"
                },
                "large": {
                  "size": {
                    "width": 480,
                    "height": 640
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n179929/com_people/avatars/large6aba12a1200d30b40e7da78de766496e.jpg"
                },
                "square": {
                  "size": {
                    "width": 56,
                    "height": 56
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n179929/com_people/avatars/square6aba12a1200d30b40e7da78de766496e.jpg"
                },
                "original": {
                  "size": {
                    "width": 1278,
                    "height": 1704
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n179929/com_people/avatars/original6aba12a1200d30b40e7da78de766496e.jpg"
                }
              },
              "coverURL": [],
              "author": null,
              "creationTime": "2023-12-19 01:41:54",
              "editor": null,
              "updateTime": "2023-12-19 01:49:34",
              "subscriberCount": 0,
              "isLeader": false,
              "isFollower": false,
              "isBlocked": false,
              "followerCount": 0,
              "leaderCount": 1,
              "mutualCount": 0,
              "username": "NightsofRequiem",
              "givenName": "Night",
              "familyName": "Requiem",
              "email": "nightsofrequiem@hotmail.com",
              "usertype": "registered",
              "gender": "male"
            },
            "target": {
              "id": 179929,
              "objectType": "com.people.person",
              "name": "Night Requiem",
              "body": "",
              "alias": "NightsofRequiem",
              "imageURL": {
                "small": {
                  "size": {
                    "width": 80,
                    "height": 107
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n179929/com_people/avatars/small6aba12a1200d30b40e7da78de766496e.jpg"
                },
                "medium": {
                  "size": {
                    "width": 160,
                    "height": 213
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n179929/com_people/avatars/medium6aba12a1200d30b40e7da78de766496e.jpg"
                },
                "large": {
                  "size": {
                    "width": 480,
                    "height": 640
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n179929/com_people/avatars/large6aba12a1200d30b40e7da78de766496e.jpg"
                },
                "square": {
                  "size": {
                    "width": 56,
                    "height": 56
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n179929/com_people/avatars/square6aba12a1200d30b40e7da78de766496e.jpg"
                },
                "original": {
                  "size": {
                    "width": 1278,
                    "height": 1704
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n179929/com_people/avatars/original6aba12a1200d30b40e7da78de766496e.jpg"
                }
              },
              "coverURL": [],
              "author": null,
              "creationTime": "2023-12-19 01:41:54",
              "editor": null,
              "updateTime": "2023-12-19 01:49:34",
              "subscriberCount": 0,
              "isLeader": false,
              "isFollower": false,
              "isBlocked": false,
              "followerCount": 0,
              "leaderCount": 1,
              "mutualCount": 0,
              "username": "NightsofRequiem",
              "givenName": "Night",
              "familyName": "Requiem",
              "email": "nightsofrequiem@hotmail.com",
              "usertype": "registered",
              "gender": "male"
            },
            "object": {
              "id": 179931,
              "objectType": "com.photos.photo",
              "name": null,
              "body": null,
              "alias": null,
              "imageURL": {
                "large": {
                  "size": {
                    "width": 1024,
                    "height": 1365
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n179929/com_photos/2b569950de89d304e42e34cee95f608b_large.jpg"
                },
                "medium": {
                  "size": {
                    "width": 640,
                    "height": 853
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n179929/com_photos/2b569950de89d304e42e34cee95f608b_medium.jpg"
                },
                "small": {
                  "size": {
                    "width": 240,
                    "height": 320
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n179929/com_photos/2b569950de89d304e42e34cee95f608b_small.jpg"
                },
                "square": {
                  "size": {
                    "width": 100,
                    "height": 100
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n179929/com_photos/2b569950de89d304e42e34cee95f608b_square.jpg"
                },
                "original": {
                  "size": {
                    "width": 1278,
                    "height": 1704
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n179929/com_photos/2b569950de89d304e42e34cee95f608b_original.jpg"
                }
              },
              "author": {
                "id": 179929,
                "objectType": "com.people.person",
                "name": "Night Requiem",
                "body": "",
                "alias": "NightsofRequiem",
                "imageURL": {
                  "small": {
                    "size": {
                      "width": 80,
                      "height": 107
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n179929/com_people/avatars/small6aba12a1200d30b40e7da78de766496e.jpg"
                  },
                  "medium": {
                    "size": {
                      "width": 160,
                      "height": 213
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n179929/com_people/avatars/medium6aba12a1200d30b40e7da78de766496e.jpg"
                  },
                  "large": {
                    "size": {
                      "width": 480,
                      "height": 640
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n179929/com_people/avatars/large6aba12a1200d30b40e7da78de766496e.jpg"
                  },
                  "square": {
                    "size": {
                      "width": 56,
                      "height": 56
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n179929/com_people/avatars/square6aba12a1200d30b40e7da78de766496e.jpg"
                  },
                  "original": {
                    "size": {
                      "width": 1278,
                      "height": 1704
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n179929/com_people/avatars/original6aba12a1200d30b40e7da78de766496e.jpg"
                  }
                },
                "coverURL": [],
                "author": null,
                "creationTime": "2023-12-19 01:41:54",
                "editor": null,
                "updateTime": "2023-12-19 01:49:34",
                "subscriberCount": 0,
                "isLeader": false,
                "isFollower": false,
                "isBlocked": false,
                "followerCount": 0,
                "leaderCount": 1,
                "mutualCount": 0,
                "username": "NightsofRequiem",
                "givenName": "Night",
                "familyName": "Requiem",
                "email": "nightsofrequiem@hotmail.com",
                "usertype": "registered",
                "gender": "male"
              },
              "creationTime": "2023-12-19 01:47:36",
              "editor": {
                "id": 179929,
                "objectType": "com.people.person",
                "name": "Night Requiem",
                "body": "",
                "alias": "NightsofRequiem",
                "imageURL": {
                  "small": {
                    "size": {
                      "width": 80,
                      "height": 107
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n179929/com_people/avatars/small6aba12a1200d30b40e7da78de766496e.jpg"
                  },
                  "medium": {
                    "size": {
                      "width": 160,
                      "height": 213
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n179929/com_people/avatars/medium6aba12a1200d30b40e7da78de766496e.jpg"
                  },
                  "large": {
                    "size": {
                      "width": 480,
                      "height": 640
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n179929/com_people/avatars/large6aba12a1200d30b40e7da78de766496e.jpg"
                  },
                  "square": {
                    "size": {
                      "width": 56,
                      "height": 56
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n179929/com_people/avatars/square6aba12a1200d30b40e7da78de766496e.jpg"
                  },
                  "original": {
                    "size": {
                      "width": 1278,
                      "height": 1704
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n179929/com_people/avatars/original6aba12a1200d30b40e7da78de766496e.jpg"
                  }
                },
                "coverURL": [],
                "author": null,
                "creationTime": "2023-12-19 01:41:54",
                "editor": null,
                "updateTime": "2023-12-19 01:49:34",
                "subscriberCount": 0,
                "isLeader": false,
                "isFollower": false,
                "isBlocked": false,
                "followerCount": 0,
                "leaderCount": 1,
                "mutualCount": 0,
                "username": "NightsofRequiem",
                "givenName": "Night",
                "familyName": "Requiem",
                "email": "nightsofrequiem@hotmail.com",
                "usertype": "registered",
                "gender": "male"
              },
              "updateTime": "2023-12-19 01:47:36",
              "openToComment": true,
              "numOfComments": 0,
              "lastCommentTime": null,
              "lastComment": null,
              "lastCommenter": null,
              "subscriberCount": 1,
              "voteUpCount": 0,
              "owner": {
                "id": 179929,
                "objectType": "com.people.person",
                "name": "Night Requiem",
                "body": "",
                "alias": "NightsofRequiem",
                "imageURL": {
                  "small": {
                    "size": {
                      "width": 80,
                      "height": 107
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n179929/com_people/avatars/small6aba12a1200d30b40e7da78de766496e.jpg"
                  },
                  "medium": {
                    "size": {
                      "width": 160,
                      "height": 213
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n179929/com_people/avatars/medium6aba12a1200d30b40e7da78de766496e.jpg"
                  },
                  "large": {
                    "size": {
                      "width": 480,
                      "height": 640
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n179929/com_people/avatars/large6aba12a1200d30b40e7da78de766496e.jpg"
                  },
                  "square": {
                    "size": {
                      "width": 56,
                      "height": 56
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n179929/com_people/avatars/square6aba12a1200d30b40e7da78de766496e.jpg"
                  },
                  "original": {
                    "size": {
                      "width": 1278,
                      "height": 1704
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n179929/com_people/avatars/original6aba12a1200d30b40e7da78de766496e.jpg"
                  }
                },
                "coverURL": [],
                "author": null,
                "creationTime": "2023-12-19 01:41:54",
                "editor": null,
                "updateTime": "2023-12-19 01:49:34",
                "subscriberCount": 0,
                "isLeader": false,
                "isFollower": false,
                "isBlocked": false,
                "followerCount": 0,
                "leaderCount": 1,
                "mutualCount": 0,
                "username": "NightsofRequiem",
                "givenName": "Night",
                "familyName": "Requiem",
                "email": "nightsofrequiem@hotmail.com",
                "usertype": "registered",
                "gender": "male"
              }
            },
            "creationTime": "2023-12-19 01:47:37",
            "commands": [
              "vote",
              "comment",
              "delete"
            ]
          }
    }
}

export const MultiplePhotos = {
    args: {
        story: {
            "objectType": "com.stories.story",
            "id": 179983,
            "component": "com_photos",
            "name": "photo_add",
            "subject": {
              "id": 179971,
              "objectType": "com.people.person",
              "name": "Matt Morgan ",
              "body": "",
              "alias": "Matt_Morgan",
              "imageURL": [],
              "coverURL": [],
              "author": null,
              "creationTime": "2024-01-05 06:06:11",
              "editor": null,
              "updateTime": "2024-01-05 08:47:06",
              "subscriberCount": 0,
              "isLeader": false,
              "isFollower": false,
              "isBlocked": false,
              "followerCount": 0,
              "leaderCount": 1,
              "mutualCount": 0,
              "username": "Matt_Morgan",
              "givenName": "Matt",
              "familyName": "Morgan ",
              "email": "matt.morgan94109@gmail.com",
              "usertype": "registered",
              "gender": "neutral"
            },
            "target": {
              "id": 179971,
              "objectType": "com.people.person",
              "name": "Matt Morgan ",
              "body": "",
              "alias": "Matt_Morgan",
              "imageURL": [],
              "coverURL": [],
              "author": null,
              "creationTime": "2024-01-05 06:06:11",
              "editor": null,
              "updateTime": "2024-01-05 08:47:06",
              "subscriberCount": 0,
              "isLeader": false,
              "isFollower": false,
              "isBlocked": false,
              "followerCount": 0,
              "leaderCount": 1,
              "mutualCount": 0,
              "username": "Matt_Morgan",
              "givenName": "Matt",
              "familyName": "Morgan ",
              "email": "matt.morgan94109@gmail.com",
              "usertype": "registered",
              "gender": "neutral"
            },
            "objects": [
              {
                "id": 179972,
                "objectType": "com.photos.photo",
                "name": null,
                "body": null,
                "alias": null,
                "imageURL": {
                  "large": {
                    "size": {
                      "width": 1024,
                      "height": 640
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n179971/com_photos/de51e6b6ce33e5de975fe52e75681e0c_large.jpg"
                  },
                  "medium": {
                    "size": {
                      "width": 640,
                      "height": 400
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n179971/com_photos/de51e6b6ce33e5de975fe52e75681e0c_medium.jpg"
                  },
                  "small": {
                    "size": {
                      "width": 240,
                      "height": 150
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n179971/com_photos/de51e6b6ce33e5de975fe52e75681e0c_small.jpg"
                  },
                  "square": {
                    "size": {
                      "width": 100,
                      "height": 100
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n179971/com_photos/de51e6b6ce33e5de975fe52e75681e0c_square.jpg"
                  },
                  "original": {
                    "size": {
                      "width": 1920,
                      "height": 1200
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n179971/com_photos/de51e6b6ce33e5de975fe52e75681e0c_original.jpg"
                  }
                },
                "author": {
                  "id": 179971,
                  "objectType": "com.people.person",
                  "name": "Matt Morgan ",
                  "body": "",
                  "alias": "Matt_Morgan",
                  "imageURL": [],
                  "coverURL": [],
                  "author": null,
                  "creationTime": "2024-01-05 06:06:11",
                  "editor": null,
                  "updateTime": "2024-01-05 08:47:06",
                  "subscriberCount": 0,
                  "isLeader": false,
                  "isFollower": false,
                  "isBlocked": false,
                  "followerCount": 0,
                  "leaderCount": 1,
                  "mutualCount": 0,
                  "username": "Matt_Morgan",
                  "givenName": "Matt",
                  "familyName": "Morgan ",
                  "email": "matt.morgan94109@gmail.com",
                  "usertype": "registered",
                  "gender": "neutral"
                },
                "creationTime": "2024-01-05 08:51:19",
                "editor": {
                  "id": 179971,
                  "objectType": "com.people.person",
                  "name": "Matt Morgan ",
                  "body": "",
                  "alias": "Matt_Morgan",
                  "imageURL": [],
                  "coverURL": [],
                  "author": null,
                  "creationTime": "2024-01-05 06:06:11",
                  "editor": null,
                  "updateTime": "2024-01-05 08:47:06",
                  "subscriberCount": 0,
                  "isLeader": false,
                  "isFollower": false,
                  "isBlocked": false,
                  "followerCount": 0,
                  "leaderCount": 1,
                  "mutualCount": 0,
                  "username": "Matt_Morgan",
                  "givenName": "Matt",
                  "familyName": "Morgan ",
                  "email": "matt.morgan94109@gmail.com",
                  "usertype": "registered",
                  "gender": "neutral"
                },
                "updateTime": "2024-01-05 08:51:19",
                "openToComment": true,
                "numOfComments": 0,
                "lastCommentTime": null,
                "lastComment": null,
                "lastCommenter": null,
                "subscriberCount": 1,
                "voteUpCount": 0,
                "owner": {
                  "id": 179971,
                  "objectType": "com.people.person",
                  "name": "Matt Morgan ",
                  "body": "",
                  "alias": "Matt_Morgan",
                  "imageURL": [],
                  "coverURL": [],
                  "author": null,
                  "creationTime": "2024-01-05 06:06:11",
                  "editor": null,
                  "updateTime": "2024-01-05 08:47:06",
                  "subscriberCount": 0,
                  "isLeader": false,
                  "isFollower": false,
                  "isBlocked": false,
                  "followerCount": 0,
                  "leaderCount": 1,
                  "mutualCount": 0,
                  "username": "Matt_Morgan",
                  "givenName": "Matt",
                  "familyName": "Morgan ",
                  "email": "matt.morgan94109@gmail.com",
                  "usertype": "registered",
                  "gender": "neutral"
                }
              },
              {
                "id": 179974,
                "objectType": "com.photos.photo",
                "name": null,
                "body": null,
                "alias": null,
                "imageURL": {
                  "large": {
                    "size": {
                      "width": 1024,
                      "height": 819
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n179971/com_photos/9150c73e30682e0954f63b417d892cab_large.jpg"
                  },
                  "medium": {
                    "size": {
                      "width": 640,
                      "height": 512
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n179971/com_photos/9150c73e30682e0954f63b417d892cab_medium.jpg"
                  },
                  "small": {
                    "size": {
                      "width": 240,
                      "height": 192
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n179971/com_photos/9150c73e30682e0954f63b417d892cab_small.jpg"
                  },
                  "square": {
                    "size": {
                      "width": 100,
                      "height": 100
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n179971/com_photos/9150c73e30682e0954f63b417d892cab_square.jpg"
                  },
                  "original": {
                    "size": {
                      "width": 1280,
                      "height": 1024
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n179971/com_photos/9150c73e30682e0954f63b417d892cab_original.jpg"
                  }
                },
                "author": {
                  "id": 179971,
                  "objectType": "com.people.person",
                  "name": "Matt Morgan ",
                  "body": "",
                  "alias": "Matt_Morgan",
                  "imageURL": [],
                  "coverURL": [],
                  "author": null,
                  "creationTime": "2024-01-05 06:06:11",
                  "editor": null,
                  "updateTime": "2024-01-05 08:47:06",
                  "subscriberCount": 0,
                  "isLeader": false,
                  "isFollower": false,
                  "isBlocked": false,
                  "followerCount": 0,
                  "leaderCount": 1,
                  "mutualCount": 0,
                  "username": "Matt_Morgan",
                  "givenName": "Matt",
                  "familyName": "Morgan ",
                  "email": "matt.morgan94109@gmail.com",
                  "usertype": "registered",
                  "gender": "neutral"
                },
                "creationTime": "2024-01-05 08:51:21",
                "editor": {
                  "id": 179971,
                  "objectType": "com.people.person",
                  "name": "Matt Morgan ",
                  "body": "",
                  "alias": "Matt_Morgan",
                  "imageURL": [],
                  "coverURL": [],
                  "author": null,
                  "creationTime": "2024-01-05 06:06:11",
                  "editor": null,
                  "updateTime": "2024-01-05 08:47:06",
                  "subscriberCount": 0,
                  "isLeader": false,
                  "isFollower": false,
                  "isBlocked": false,
                  "followerCount": 0,
                  "leaderCount": 1,
                  "mutualCount": 0,
                  "username": "Matt_Morgan",
                  "givenName": "Matt",
                  "familyName": "Morgan ",
                  "email": "matt.morgan94109@gmail.com",
                  "usertype": "registered",
                  "gender": "neutral"
                },
                "updateTime": "2024-01-05 08:51:21",
                "openToComment": true,
                "numOfComments": 0,
                "lastCommentTime": null,
                "lastComment": null,
                "lastCommenter": null,
                "subscriberCount": 1,
                "voteUpCount": 0,
                "owner": {
                  "id": 179971,
                  "objectType": "com.people.person",
                  "name": "Matt Morgan ",
                  "body": "",
                  "alias": "Matt_Morgan",
                  "imageURL": [],
                  "coverURL": [],
                  "author": null,
                  "creationTime": "2024-01-05 06:06:11",
                  "editor": null,
                  "updateTime": "2024-01-05 08:47:06",
                  "subscriberCount": 0,
                  "isLeader": false,
                  "isFollower": false,
                  "isBlocked": false,
                  "followerCount": 0,
                  "leaderCount": 1,
                  "mutualCount": 0,
                  "username": "Matt_Morgan",
                  "givenName": "Matt",
                  "familyName": "Morgan ",
                  "email": "matt.morgan94109@gmail.com",
                  "usertype": "registered",
                  "gender": "neutral"
                }
              },
              {
                "id": 179975,
                "objectType": "com.photos.photo",
                "name": null,
                "body": null,
                "alias": null,
                "imageURL": {
                  "large": {
                    "size": {
                      "width": 1024,
                      "height": 1365
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n179971/com_photos/ee45b4791ebe7f3c9602c15ffda7911e_large.jpg"
                  },
                  "medium": {
                    "size": {
                      "width": 640,
                      "height": 853
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n179971/com_photos/ee45b4791ebe7f3c9602c15ffda7911e_medium.jpg"
                  },
                  "small": {
                    "size": {
                      "width": 240,
                      "height": 320
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n179971/com_photos/ee45b4791ebe7f3c9602c15ffda7911e_small.jpg"
                  },
                  "square": {
                    "size": {
                      "width": 100,
                      "height": 100
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n179971/com_photos/ee45b4791ebe7f3c9602c15ffda7911e_square.jpg"
                  },
                  "original": {
                    "size": {
                      "width": 3024,
                      "height": 4032
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n179971/com_photos/ee45b4791ebe7f3c9602c15ffda7911e_original.jpg"
                  }
                },
                "author": {
                  "id": 179971,
                  "objectType": "com.people.person",
                  "name": "Matt Morgan ",
                  "body": "",
                  "alias": "Matt_Morgan",
                  "imageURL": [],
                  "coverURL": [],
                  "author": null,
                  "creationTime": "2024-01-05 06:06:11",
                  "editor": null,
                  "updateTime": "2024-01-05 08:47:06",
                  "subscriberCount": 0,
                  "isLeader": false,
                  "isFollower": false,
                  "isBlocked": false,
                  "followerCount": 0,
                  "leaderCount": 1,
                  "mutualCount": 0,
                  "username": "Matt_Morgan",
                  "givenName": "Matt",
                  "familyName": "Morgan ",
                  "email": "matt.morgan94109@gmail.com",
                  "usertype": "registered",
                  "gender": "neutral"
                },
                "creationTime": "2024-01-05 08:51:22",
                "editor": {
                  "id": 179971,
                  "objectType": "com.people.person",
                  "name": "Matt Morgan ",
                  "body": "",
                  "alias": "Matt_Morgan",
                  "imageURL": [],
                  "coverURL": [],
                  "author": null,
                  "creationTime": "2024-01-05 06:06:11",
                  "editor": null,
                  "updateTime": "2024-01-05 08:47:06",
                  "subscriberCount": 0,
                  "isLeader": false,
                  "isFollower": false,
                  "isBlocked": false,
                  "followerCount": 0,
                  "leaderCount": 1,
                  "mutualCount": 0,
                  "username": "Matt_Morgan",
                  "givenName": "Matt",
                  "familyName": "Morgan ",
                  "email": "matt.morgan94109@gmail.com",
                  "usertype": "registered",
                  "gender": "neutral"
                },
                "updateTime": "2024-01-05 08:51:22",
                "openToComment": true,
                "numOfComments": 0,
                "lastCommentTime": null,
                "lastComment": null,
                "lastCommenter": null,
                "subscriberCount": 1,
                "voteUpCount": 0,
                "owner": {
                  "id": 179971,
                  "objectType": "com.people.person",
                  "name": "Matt Morgan ",
                  "body": "",
                  "alias": "Matt_Morgan",
                  "imageURL": [],
                  "coverURL": [],
                  "author": null,
                  "creationTime": "2024-01-05 06:06:11",
                  "editor": null,
                  "updateTime": "2024-01-05 08:47:06",
                  "subscriberCount": 0,
                  "isLeader": false,
                  "isFollower": false,
                  "isBlocked": false,
                  "followerCount": 0,
                  "leaderCount": 1,
                  "mutualCount": 0,
                  "username": "Matt_Morgan",
                  "givenName": "Matt",
                  "familyName": "Morgan ",
                  "email": "matt.morgan94109@gmail.com",
                  "usertype": "registered",
                  "gender": "neutral"
                }
              },
              {
                "id": 179978,
                "objectType": "com.photos.photo",
                "name": null,
                "body": null,
                "alias": null,
                "imageURL": {
                  "large": {
                    "size": {
                      "width": 1024,
                      "height": 819
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n179971/com_photos/a04759ab32ea6c848d39c99850562028_large.png"
                  },
                  "medium": {
                    "size": {
                      "width": 640,
                      "height": 512
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n179971/com_photos/a04759ab32ea6c848d39c99850562028_medium.png"
                  },
                  "small": {
                    "size": {
                      "width": 240,
                      "height": 192
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n179971/com_photos/a04759ab32ea6c848d39c99850562028_small.png"
                  },
                  "square": {
                    "size": {
                      "width": 100,
                      "height": 100
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n179971/com_photos/a04759ab32ea6c848d39c99850562028_square.png"
                  },
                  "original": {
                    "size": {
                      "width": 1280,
                      "height": 1024
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n179971/com_photos/a04759ab32ea6c848d39c99850562028_original.png"
                  }
                },
                "author": {
                  "id": 179971,
                  "objectType": "com.people.person",
                  "name": "Matt Morgan ",
                  "body": "",
                  "alias": "Matt_Morgan",
                  "imageURL": [],
                  "coverURL": [],
                  "author": null,
                  "creationTime": "2024-01-05 06:06:11",
                  "editor": null,
                  "updateTime": "2024-01-05 08:47:06",
                  "subscriberCount": 0,
                  "isLeader": false,
                  "isFollower": false,
                  "isBlocked": false,
                  "followerCount": 0,
                  "leaderCount": 1,
                  "mutualCount": 0,
                  "username": "Matt_Morgan",
                  "givenName": "Matt",
                  "familyName": "Morgan ",
                  "email": "matt.morgan94109@gmail.com",
                  "usertype": "registered",
                  "gender": "neutral"
                },
                "creationTime": "2024-01-05 08:51:26",
                "editor": {
                  "id": 179971,
                  "objectType": "com.people.person",
                  "name": "Matt Morgan ",
                  "body": "",
                  "alias": "Matt_Morgan",
                  "imageURL": [],
                  "coverURL": [],
                  "author": null,
                  "creationTime": "2024-01-05 06:06:11",
                  "editor": null,
                  "updateTime": "2024-01-05 08:47:06",
                  "subscriberCount": 0,
                  "isLeader": false,
                  "isFollower": false,
                  "isBlocked": false,
                  "followerCount": 0,
                  "leaderCount": 1,
                  "mutualCount": 0,
                  "username": "Matt_Morgan",
                  "givenName": "Matt",
                  "familyName": "Morgan ",
                  "email": "matt.morgan94109@gmail.com",
                  "usertype": "registered",
                  "gender": "neutral"
                },
                "updateTime": "2024-01-05 08:51:26",
                "openToComment": true,
                "numOfComments": 0,
                "lastCommentTime": null,
                "lastComment": null,
                "lastCommenter": null,
                "subscriberCount": 1,
                "voteUpCount": 0,
                "owner": {
                  "id": 179971,
                  "objectType": "com.people.person",
                  "name": "Matt Morgan ",
                  "body": "",
                  "alias": "Matt_Morgan",
                  "imageURL": [],
                  "coverURL": [],
                  "author": null,
                  "creationTime": "2024-01-05 06:06:11",
                  "editor": null,
                  "updateTime": "2024-01-05 08:47:06",
                  "subscriberCount": 0,
                  "isLeader": false,
                  "isFollower": false,
                  "isBlocked": false,
                  "followerCount": 0,
                  "leaderCount": 1,
                  "mutualCount": 0,
                  "username": "Matt_Morgan",
                  "givenName": "Matt",
                  "familyName": "Morgan ",
                  "email": "matt.morgan94109@gmail.com",
                  "usertype": "registered",
                  "gender": "neutral"
                }
              },
              {
                "id": 179980,
                "objectType": "com.photos.photo",
                "name": null,
                "body": null,
                "alias": null,
                "imageURL": {
                  "large": {
                    "size": {
                      "width": 1024,
                      "height": 576
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n179971/com_photos/c85cdf379cd679a76eb4593bca9f9bad_large.png"
                  },
                  "medium": {
                    "size": {
                      "width": 640,
                      "height": 360
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n179971/com_photos/c85cdf379cd679a76eb4593bca9f9bad_medium.png"
                  },
                  "small": {
                    "size": {
                      "width": 240,
                      "height": 135
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n179971/com_photos/c85cdf379cd679a76eb4593bca9f9bad_small.png"
                  },
                  "square": {
                    "size": {
                      "width": 100,
                      "height": 100
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n179971/com_photos/c85cdf379cd679a76eb4593bca9f9bad_square.png"
                  },
                  "original": {
                    "size": {
                      "width": 1920,
                      "height": 1080
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n179971/com_photos/c85cdf379cd679a76eb4593bca9f9bad_original.png"
                  }
                },
                "author": {
                  "id": 179971,
                  "objectType": "com.people.person",
                  "name": "Matt Morgan ",
                  "body": "",
                  "alias": "Matt_Morgan",
                  "imageURL": [],
                  "coverURL": [],
                  "author": null,
                  "creationTime": "2024-01-05 06:06:11",
                  "editor": null,
                  "updateTime": "2024-01-05 08:47:06",
                  "subscriberCount": 0,
                  "isLeader": false,
                  "isFollower": false,
                  "isBlocked": false,
                  "followerCount": 0,
                  "leaderCount": 1,
                  "mutualCount": 0,
                  "username": "Matt_Morgan",
                  "givenName": "Matt",
                  "familyName": "Morgan ",
                  "email": "matt.morgan94109@gmail.com",
                  "usertype": "registered",
                  "gender": "neutral"
                },
                "creationTime": "2024-01-05 08:51:30",
                "editor": {
                  "id": 179971,
                  "objectType": "com.people.person",
                  "name": "Matt Morgan ",
                  "body": "",
                  "alias": "Matt_Morgan",
                  "imageURL": [],
                  "coverURL": [],
                  "author": null,
                  "creationTime": "2024-01-05 06:06:11",
                  "editor": null,
                  "updateTime": "2024-01-05 08:47:06",
                  "subscriberCount": 0,
                  "isLeader": false,
                  "isFollower": false,
                  "isBlocked": false,
                  "followerCount": 0,
                  "leaderCount": 1,
                  "mutualCount": 0,
                  "username": "Matt_Morgan",
                  "givenName": "Matt",
                  "familyName": "Morgan ",
                  "email": "matt.morgan94109@gmail.com",
                  "usertype": "registered",
                  "gender": "neutral"
                },
                "updateTime": "2024-01-05 08:51:30",
                "openToComment": true,
                "numOfComments": 0,
                "lastCommentTime": null,
                "lastComment": null,
                "lastCommenter": null,
                "subscriberCount": 1,
                "voteUpCount": 0,
                "owner": {
                  "id": 179971,
                  "objectType": "com.people.person",
                  "name": "Matt Morgan ",
                  "body": "",
                  "alias": "Matt_Morgan",
                  "imageURL": [],
                  "coverURL": [],
                  "author": null,
                  "creationTime": "2024-01-05 06:06:11",
                  "editor": null,
                  "updateTime": "2024-01-05 08:47:06",
                  "subscriberCount": 0,
                  "isLeader": false,
                  "isFollower": false,
                  "isBlocked": false,
                  "followerCount": 0,
                  "leaderCount": 1,
                  "mutualCount": 0,
                  "username": "Matt_Morgan",
                  "givenName": "Matt",
                  "familyName": "Morgan ",
                  "email": "matt.morgan94109@gmail.com",
                  "usertype": "registered",
                  "gender": "neutral"
                }
              },
              {
                "id": 179981,
                "objectType": "com.photos.photo",
                "name": null,
                "body": null,
                "alias": null,
                "imageURL": {
                  "large": {
                    "size": {
                      "width": 1024,
                      "height": 538
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n179971/com_photos/a1ce8a5a0cc3845fac9b94f4ea45529d_large.jpg"
                  },
                  "medium": {
                    "size": {
                      "width": 640,
                      "height": 336
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n179971/com_photos/a1ce8a5a0cc3845fac9b94f4ea45529d_medium.jpg"
                  },
                  "small": {
                    "size": {
                      "width": 240,
                      "height": 126
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n179971/com_photos/a1ce8a5a0cc3845fac9b94f4ea45529d_small.jpg"
                  },
                  "square": {
                    "size": {
                      "width": 100,
                      "height": 100
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n179971/com_photos/a1ce8a5a0cc3845fac9b94f4ea45529d_square.jpg"
                  },
                  "original": {
                    "size": {
                      "width": 1201,
                      "height": 631
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n179971/com_photos/a1ce8a5a0cc3845fac9b94f4ea45529d_original.jpg"
                  }
                },
                "author": {
                  "id": 179971,
                  "objectType": "com.people.person",
                  "name": "Matt Morgan ",
                  "body": "",
                  "alias": "Matt_Morgan",
                  "imageURL": [],
                  "coverURL": [],
                  "author": null,
                  "creationTime": "2024-01-05 06:06:11",
                  "editor": null,
                  "updateTime": "2024-01-05 08:47:06",
                  "subscriberCount": 0,
                  "isLeader": false,
                  "isFollower": false,
                  "isBlocked": false,
                  "followerCount": 0,
                  "leaderCount": 1,
                  "mutualCount": 0,
                  "username": "Matt_Morgan",
                  "givenName": "Matt",
                  "familyName": "Morgan ",
                  "email": "matt.morgan94109@gmail.com",
                  "usertype": "registered",
                  "gender": "neutral"
                },
                "creationTime": "2024-01-05 08:51:30",
                "editor": {
                  "id": 179971,
                  "objectType": "com.people.person",
                  "name": "Matt Morgan ",
                  "body": "",
                  "alias": "Matt_Morgan",
                  "imageURL": [],
                  "coverURL": [],
                  "author": null,
                  "creationTime": "2024-01-05 06:06:11",
                  "editor": null,
                  "updateTime": "2024-01-05 08:47:06",
                  "subscriberCount": 0,
                  "isLeader": false,
                  "isFollower": false,
                  "isBlocked": false,
                  "followerCount": 0,
                  "leaderCount": 1,
                  "mutualCount": 0,
                  "username": "Matt_Morgan",
                  "givenName": "Matt",
                  "familyName": "Morgan ",
                  "email": "matt.morgan94109@gmail.com",
                  "usertype": "registered",
                  "gender": "neutral"
                },
                "updateTime": "2024-01-05 08:51:30",
                "openToComment": true,
                "numOfComments": 0,
                "lastCommentTime": null,
                "lastComment": null,
                "lastCommenter": null,
                "subscriberCount": 1,
                "voteUpCount": 0,
                "owner": {
                  "id": 179971,
                  "objectType": "com.people.person",
                  "name": "Matt Morgan ",
                  "body": "",
                  "alias": "Matt_Morgan",
                  "imageURL": [],
                  "coverURL": [],
                  "author": null,
                  "creationTime": "2024-01-05 06:06:11",
                  "editor": null,
                  "updateTime": "2024-01-05 08:47:06",
                  "subscriberCount": 0,
                  "isLeader": false,
                  "isFollower": false,
                  "isBlocked": false,
                  "followerCount": 0,
                  "leaderCount": 1,
                  "mutualCount": 0,
                  "username": "Matt_Morgan",
                  "givenName": "Matt",
                  "familyName": "Morgan ",
                  "email": "matt.morgan94109@gmail.com",
                  "usertype": "registered",
                  "gender": "neutral"
                }
              }
            ],
            "creationTime": "2024-01-05 08:51:32",
            "commands": [
              "delete"
            ]
          }
    }
}