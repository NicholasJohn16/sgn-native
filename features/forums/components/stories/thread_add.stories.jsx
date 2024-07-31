import {Title, Body} from './thread_add';
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
            "id": 180011,
            "component": "com_forums",
            "name": "thread_add",
            "subject": {
              "id": 179876,
              "objectType": "com.people.person",
              "name": "Will Bou.",
              "body": "New to PC gaming!",
              "alias": "Aqua888",
              "imageURL": [],
              "coverURL": {
                "large": {
                  "size": {
                    "width": 838,
                    "height": 574
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n179876/com_people/covers/large569cfbcd8b067dfab31adaa365c3a468.jpg"
                },
                "medium": {
                  "size": {
                    "width": 640,
                    "height": 438
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n179876/com_people/covers/medium569cfbcd8b067dfab31adaa365c3a468.jpg"
                },
                "original": {
                  "size": {
                    "width": 838,
                    "height": 574
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n179876/com_people/covers/original569cfbcd8b067dfab31adaa365c3a468.jpg"
                }
              },
              "author": null,
              "creationTime": "2023-11-26 18:45:03",
              "editor": null,
              "updateTime": "2024-01-09 22:54:18",
              "subscriberCount": 0,
              "isLeader": false,
              "isFollower": false,
              "isBlocked": false,
              "followerCount": 0,
              "leaderCount": 1,
              "mutualCount": 0,
              "username": "Aqua888",
              "givenName": "Will",
              "familyName": "Bou.",
              "email": "Guy61386@yahoo.com",
              "usertype": "registered",
              "gender": "male"
            },
            "target": {
              "id": 179876,
              "objectType": "com.people.person",
              "name": "Will Bou.",
              "body": "New to PC gaming!",
              "alias": "Aqua888",
              "imageURL": [],
              "coverURL": {
                "large": {
                  "size": {
                    "width": 838,
                    "height": 574
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n179876/com_people/covers/large569cfbcd8b067dfab31adaa365c3a468.jpg"
                },
                "medium": {
                  "size": {
                    "width": 640,
                    "height": 438
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n179876/com_people/covers/medium569cfbcd8b067dfab31adaa365c3a468.jpg"
                },
                "original": {
                  "size": {
                    "width": 838,
                    "height": 574
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n179876/com_people/covers/original569cfbcd8b067dfab31adaa365c3a468.jpg"
                }
              },
              "author": null,
              "creationTime": "2023-11-26 18:45:03",
              "editor": null,
              "updateTime": "2024-01-09 22:54:18",
              "subscriberCount": 0,
              "isLeader": false,
              "isFollower": false,
              "isBlocked": false,
              "followerCount": 0,
              "leaderCount": 1,
              "mutualCount": 0,
              "username": "Aqua888",
              "givenName": "Will",
              "familyName": "Bou.",
              "email": "Guy61386@yahoo.com",
              "usertype": "registered",
              "gender": "male"
            },
            "object": {
              "id": 180010,
              "objectType": "com.forums.post",
              "name": "Introduction ",
              "body": "Hello! New to Stonewall gaming! I have been getting into PC gaming lately, most notably STO. The number of toons I have have been growing, but my newest one is Willum@aqua888#4750. Otherwise, I play Nintendo systems! \r\n\r\nI found Stonewall by searching in STO itself, as I was looking for gaymer-oriented socials within STO.\r\n\r\nI am excited for STO's 14th anniversary update that was just announced today!",
              "alias": "introduction",
              "author": {
                "id": 179876,
                "objectType": "com.people.person",
                "name": "Will Bou.",
                "body": "New to PC gaming!",
                "alias": "Aqua888",
                "imageURL": [],
                "coverURL": {
                  "large": {
                    "size": {
                      "width": 838,
                      "height": 574
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n179876/com_people/covers/large569cfbcd8b067dfab31adaa365c3a468.jpg"
                  },
                  "medium": {
                    "size": {
                      "width": 640,
                      "height": 438
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n179876/com_people/covers/medium569cfbcd8b067dfab31adaa365c3a468.jpg"
                  },
                  "original": {
                    "size": {
                      "width": 838,
                      "height": 574
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n179876/com_people/covers/original569cfbcd8b067dfab31adaa365c3a468.jpg"
                  }
                },
                "author": null,
                "creationTime": "2023-11-26 18:45:03",
                "editor": null,
                "updateTime": "2024-01-09 22:54:18",
                "subscriberCount": 0,
                "isLeader": false,
                "isFollower": false,
                "isBlocked": false,
                "followerCount": 0,
                "leaderCount": 1,
                "mutualCount": 0,
                "username": "Aqua888",
                "givenName": "Will",
                "familyName": "Bou.",
                "email": "Guy61386@yahoo.com",
                "usertype": "registered",
                "gender": "male"
              },
              "creationTime": "2024-01-09 22:52:25",
              "editor": {
                "id": 179876,
                "objectType": "com.people.person",
                "name": "Will Bou.",
                "body": "New to PC gaming!",
                "alias": "Aqua888",
                "imageURL": [],
                "coverURL": {
                  "large": {
                    "size": {
                      "width": 838,
                      "height": 574
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n179876/com_people/covers/large569cfbcd8b067dfab31adaa365c3a468.jpg"
                  },
                  "medium": {
                    "size": {
                      "width": 640,
                      "height": 438
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n179876/com_people/covers/medium569cfbcd8b067dfab31adaa365c3a468.jpg"
                  },
                  "original": {
                    "size": {
                      "width": 838,
                      "height": 574
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n179876/com_people/covers/original569cfbcd8b067dfab31adaa365c3a468.jpg"
                  }
                },
                "author": null,
                "creationTime": "2023-11-26 18:45:03",
                "editor": null,
                "updateTime": "2024-01-09 22:54:18",
                "subscriberCount": 0,
                "isLeader": false,
                "isFollower": false,
                "isBlocked": false,
                "followerCount": 0,
                "leaderCount": 1,
                "mutualCount": 0,
                "username": "Aqua888",
                "givenName": "Will",
                "familyName": "Bou.",
                "email": "Guy61386@yahoo.com",
                "usertype": "registered",
                "gender": "male"
              },
              "updateTime": "2024-01-09 22:52:25",
              "voteUpCount": 0
            },
            "creationTime": "2024-01-09 22:52:25",
            "commands": [
              "vote",
              "delete"
            ]
          }
    }
}