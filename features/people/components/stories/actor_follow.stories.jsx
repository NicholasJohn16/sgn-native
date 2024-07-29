import { Title, Body } from './actor_follow';
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

export const Basic = {
    args: {
        story: {
            "objectType": "com.stories.story",
            "id": 180005,
            "component": "com_people",
            "name": "actor_follow",
            "subject": {
              "id": 180002,
              "objectType": "com.people.person",
              "name": "Neal Autrey",
              "body": "I'm 40, have a dark sense of humor, and need more gaming friends. I mostly play city/empire builders, FPS, & MOBA.\r\nMost common games in my rotation are LoL, Anno 1800, Stellaris, Champions Online (I also have STO), Age of Wonders 4, Tropico 6, and Skyrim. Would love someone to play Borderlands with as my husband hates the art style. ",
              "alias": "Niru83",
              "imageURL": {
                "small": {
                  "size": {
                    "width": 80,
                    "height": 60
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n180002/com_people/avatars/small863013fbdfd3f82ed52e345765de6e9c.jpg"
                },
                "medium": {
                  "size": {
                    "width": 160,
                    "height": 120
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n180002/com_people/avatars/medium863013fbdfd3f82ed52e345765de6e9c.jpg"
                },
                "large": {
                  "size": {
                    "width": 480,
                    "height": 360
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n180002/com_people/avatars/large863013fbdfd3f82ed52e345765de6e9c.jpg"
                },
                "square": {
                  "size": {
                    "width": 56,
                    "height": 56
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n180002/com_people/avatars/square863013fbdfd3f82ed52e345765de6e9c.jpg"
                },
                "original": {
                  "size": {
                    "width": 960,
                    "height": 720
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n180002/com_people/avatars/original863013fbdfd3f82ed52e345765de6e9c.jpg"
                }
              },
              "coverURL": [],
              "author": null,
              "creationTime": "2024-01-06 01:43:53",
              "editor": null,
              "updateTime": "2024-01-06 10:16:49",
              "subscriberCount": 0,
              "isLeader": false,
              "isFollower": false,
              "isBlocked": false,
              "followerCount": 0,
              "leaderCount": 2,
              "mutualCount": 0,
              "username": "Niru83",
              "givenName": "Neal",
              "familyName": "Autrey",
              "email": "neal.m.autrey@gmail.com",
              "usertype": "registered",
              "gender": "male"
            },
            "target": {
              "id": 179961,
              "objectType": "com.people.person",
              "name": "Michael Ullinger",
              "body": "",
              "alias": "calullinger",
              "imageURL": {
                "small": {
                  "size": {
                    "width": 80,
                    "height": 80
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n179961/com_people/avatars/small13ee4e90ca98cb73725b19f9fe6ce77c.jpg"
                },
                "medium": {
                  "size": {
                    "width": 160,
                    "height": 160
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n179961/com_people/avatars/medium13ee4e90ca98cb73725b19f9fe6ce77c.jpg"
                },
                "large": {
                  "size": {
                    "width": 480,
                    "height": 480
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n179961/com_people/avatars/large13ee4e90ca98cb73725b19f9fe6ce77c.jpg"
                },
                "square": {
                  "size": {
                    "width": 56,
                    "height": 56
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n179961/com_people/avatars/square13ee4e90ca98cb73725b19f9fe6ce77c.jpg"
                },
                "original": {
                  "size": {
                    "width": 624,
                    "height": 624
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n179961/com_people/avatars/original13ee4e90ca98cb73725b19f9fe6ce77c.jpg"
                }
              },
              "coverURL": [],
              "author": null,
              "creationTime": "2023-12-31 22:45:19",
              "editor": null,
              "updateTime": "2024-01-01 00:05:39",
              "subscriberCount": 0,
              "isLeader": false,
              "isFollower": false,
              "isBlocked": false,
              "followerCount": 1,
              "leaderCount": 1,
              "mutualCount": 0,
              "username": "calullinger",
              "givenName": "Michael",
              "familyName": "Ullinger",
              "email": "mikeyullinger@me.com",
              "usertype": "registered",
              "gender": "male"
            },
            "creationTime": "2024-01-06 10:38:05",
            "commands": [
              "delete"
            ]
          }
    }
};