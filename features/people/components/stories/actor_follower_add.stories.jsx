import { Title, Body } from './actor_follower_add';
import { Story } from '@/components/core/story';

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

export const Basic = {
    args: {
        story: {
            "objectType": "com.stories.story",
            "id": 180058,
            "component": "com_people",
            "name": "actor_follower_add",
            "subject": {
              "id": 1,
              "objectType": "com.people.person",
              "name": "Nick Swinford",
              "body": "Heya, I'm Nick, just a laid back guy from Chicago, stuck living in Kentucky. I like to spend my free time playing video games, building websites and heading to the gym when I can. If you wanna chat, hit me up!\r\n\r\nI'm also the Fleet Admiral and Founder of Stonewall Fleet so if you have any questions or need any help, feel free to send me a message.\r\n\r\nhttps://www.stonewallgaming.net/articles/161470-nicholasjohn16-readme",
              "alias": "nicholasjohn16",
              "imageURL": {
                "small": {
                  "size": {
                    "width": 80,
                    "height": 80
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n1/com_people/avatars/small79c9174a3d48a9531fdf0dd86f1fc5ca.jpg"
                },
                "medium": {
                  "size": {
                    "width": 160,
                    "height": 160
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n1/com_people/avatars/medium79c9174a3d48a9531fdf0dd86f1fc5ca.jpg"
                },
                "large": {
                  "size": {
                    "width": 400,
                    "height": 400
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n1/com_people/avatars/large79c9174a3d48a9531fdf0dd86f1fc5ca.jpg"
                },
                "square": {
                  "size": {
                    "width": 56,
                    "height": 56
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n1/com_people/avatars/square79c9174a3d48a9531fdf0dd86f1fc5ca.jpg"
                },
                "original": {
                  "size": {
                    "width": 400,
                    "height": 400
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n1/com_people/avatars/original79c9174a3d48a9531fdf0dd86f1fc5ca.jpg"
                }
              },
              "coverURL": {
                "small": {
                  "size": {
                    "width": 80,
                    "height": 80
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n1/com_people/covers/smallfa5c376436c590e187aa37f742925514.png"
                },
                "medium": {
                  "size": {
                    "width": 160,
                    "height": 160
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n1/com_people/covers/mediumfa5c376436c590e187aa37f742925514.png"
                },
                "large": {
                  "size": {
                    "width": 400,
                    "height": 400
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n1/com_people/covers/largefa5c376436c590e187aa37f742925514.png"
                },
                "square": {
                  "size": {
                    "width": 56,
                    "height": 56
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n1/com_people/covers/squarefa5c376436c590e187aa37f742925514.png"
                },
                "original": {
                  "size": {
                    "width": 400,
                    "height": 400
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n1/com_people/covers/originalfa5c376436c590e187aa37f742925514.png"
                }
              },
              "author": null,
              "creationTime": "2008-09-27 03:00:42",
              "editor": null,
              "updateTime": "2022-11-22 06:30:53",
              "subscriberCount": 1,
              "followerCount": 290,
              "leaderCount": 349,
              "mutualCount": 258,
              "username": "nicholasjohn16",
              "givenName": "Nick",
              "familyName": "Swinford",
              "email": "nicholasjohn16@gmail.com",
              "usertype": "super-administrator",
              "gender": "male"
            },
            "target": {
              "id": 84873,
              "objectType": "com.groups.group",
              "name": "Captain's Quarters",
              "body": "Leadership group for Admirals and Fleet Captains of Stonewall Fleet #leadership #swf",
              "alias": "captain-s-quarters",
              "imageURL": {
                "small": {
                  "size": {
                    "width": 80,
                    "height": 80
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n84873/com_groups/avatars/small249332c9bc00ae165ae75c98a0e60485.jpg"
                },
                "medium": {
                  "size": {
                    "width": 160,
                    "height": 160
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n84873/com_groups/avatars/medium249332c9bc00ae165ae75c98a0e60485.jpg"
                },
                "large": {
                  "size": {
                    "width": 480,
                    "height": 480
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n84873/com_groups/avatars/large249332c9bc00ae165ae75c98a0e60485.jpg"
                },
                "square": {
                  "size": {
                    "width": 56,
                    "height": 56
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n84873/com_groups/avatars/square249332c9bc00ae165ae75c98a0e60485.jpg"
                },
                "original": {
                  "size": {
                    "width": 1080,
                    "height": 1080
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n84873/com_groups/avatars/original249332c9bc00ae165ae75c98a0e60485.jpg"
                }
              },
              "coverURL": [],
              "author": null,
              "creationTime": "2016-08-31 12:10:02",
              "editor": null,
              "updateTime": "2016-08-31 12:10:02",
              "subscriberCount": 7,
              "isLeader": true,
              "followerCount": 14,
              "administratorIds": [
                "1"
              ],
              "isAdministrated": true
            },
            "object": {
              "id": 175660,
              "objectType": "com.people.person",
              "name": "Jason Barnard",
              "body": "",
              "alias": "Okaybuddy0",
              "imageURL": {
                "small": {
                  "size": {
                    "width": 80,
                    "height": 120
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n175660/com_people/avatars/small1acb6a9248595cbc29d239fcfd431f1c.jpg"
                },
                "medium": {
                  "size": {
                    "width": 160,
                    "height": 240
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n175660/com_people/avatars/medium1acb6a9248595cbc29d239fcfd431f1c.jpg"
                },
                "large": {
                  "size": {
                    "width": 375,
                    "height": 563
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n175660/com_people/avatars/large1acb6a9248595cbc29d239fcfd431f1c.jpg"
                },
                "square": {
                  "size": {
                    "width": 56,
                    "height": 56
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n175660/com_people/avatars/square1acb6a9248595cbc29d239fcfd431f1c.jpg"
                },
                "original": {
                  "size": {
                    "width": 375,
                    "height": 563
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n175660/com_people/avatars/original1acb6a9248595cbc29d239fcfd431f1c.jpg"
                }
              },
              "coverURL": [],
              "author": null,
              "creationTime": "2022-04-16 01:19:10",
              "editor": null,
              "updateTime": "2024-01-26 22:01:37",
              "subscriberCount": 0,
              "isLeader": false,
              "isFollower": false,
              "isBlocked": false,
              "followerCount": 0,
              "leaderCount": 3,
              "mutualCount": 0,
              "username": "Okaybuddy0",
              "givenName": "Jason",
              "familyName": "Barnard",
              "email": "test@test.com",
              "usertype": "registered",
              "gender": "neutral"
            },
            "creationTime": "2024-07-16 22:22:18",
            "commands": [
              "delete"
            ]
          }
    }
}