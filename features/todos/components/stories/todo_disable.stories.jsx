import { Title, Body } from './todo_disable';
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

export const SingleTask = {
    args: {
        story: {
            "objectType": "com.stories.story",
            "id": 173947,
            "component": "com_todos",
            "name": "todo_disable",
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
              "leaderCount": 348,
              "mutualCount": 258,
              "username": "nicholasjohn16",
              "givenName": "Nick",
              "familyName": "Swinford",
              "email": "nicholasjohn16@gmail.com",
              "usertype": "super-administrator",
              "gender": "male"
            },
            "target": {
              "id": 4565,
              "objectType": "com.groups.group",
              "name": "Stonewall Subroutines",
              "body": "Need help or found a bug? Feel free to create a topic to report the problem.\r\n\r\nThis group is for people that are interested in programming, looking to help develop and find new ideas for any language. #leadership #sgn",
              "alias": "stonewall-subroutines",
              "imageURL": {
                "small": {
                  "size": {
                    "width": 80,
                    "height": 80
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n4565/com_groups/avatars/smalld651d97c81d41d2843d65afd46d8cdcc.png"
                },
                "medium": {
                  "size": {
                    "width": 160,
                    "height": 160
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n4565/com_groups/avatars/mediumd651d97c81d41d2843d65afd46d8cdcc.png"
                },
                "large": {
                  "size": {
                    "width": 480,
                    "height": 480
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n4565/com_groups/avatars/larged651d97c81d41d2843d65afd46d8cdcc.png"
                },
                "square": {
                  "size": {
                    "width": 56,
                    "height": 56
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n4565/com_groups/avatars/squared651d97c81d41d2843d65afd46d8cdcc.png"
                },
                "original": {
                  "size": {
                    "width": 512,
                    "height": 512
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n4565/com_groups/avatars/originald651d97c81d41d2843d65afd46d8cdcc.png"
                }
              },
              "coverURL": [],
              "author": {
                "id": 418,
                "objectType": "com.people.person",
                "name": "James",
                "body": "Hello, I'm James. I love star trek and stargate. I also love foreign languages. I am a database technician by day and a student at night- learning programming. I am a complete noob when it comes to this game. STO is my first MMO. I think i made it to admiral by pure luck. But I've been playing all this time by myself and want to start playing now that mission require more than one person ;-;",
                "alias": "counterjmb",
                "imageURL": {
                  "small": {
                    "size": {
                      "width": 80,
                      "height": 65
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n418/com_people/avatars/smallae00d1c64329c0b966828e2dd091acd8.jpg"
                  },
                  "medium": {
                    "size": {
                      "width": 160,
                      "height": 130
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n418/com_people/avatars/mediumae00d1c64329c0b966828e2dd091acd8.jpg"
                  },
                  "large": {
                    "size": {
                      "width": 160,
                      "height": 130
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n418/com_people/avatars/largeae00d1c64329c0b966828e2dd091acd8.jpg"
                  },
                  "square": {
                    "size": {
                      "width": 56,
                      "height": 56
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n418/com_people/avatars/squareae00d1c64329c0b966828e2dd091acd8.jpg"
                  },
                  "original": {
                    "size": {
                      "width": 160,
                      "height": 130
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n418/com_people/avatars/originalae00d1c64329c0b966828e2dd091acd8.jpg"
                  }
                },
                "coverURL": [],
                "author": null,
                "creationTime": "2010-08-02 17:23:11",
                "editor": null,
                "updateTime": "2016-08-30 17:58:30",
                "subscriberCount": 0,
                "isLeader": true,
                "isFollower": true,
                "isBlocked": false,
                "followerCount": 32,
                "leaderCount": 35,
                "mutualCount": 32,
                "username": "counterjmb",
                "givenName": "James",
                "familyName": "",
                "email": "counterjmb@gmail.com",
                "usertype": "registered",
                "gender": "male"
              },
              "creationTime": "2010-09-03 05:13:39",
              "editor": {
                "id": 418,
                "objectType": "com.people.person",
                "name": "James",
                "body": "Hello, I'm James. I love star trek and stargate. I also love foreign languages. I am a database technician by day and a student at night- learning programming. I am a complete noob when it comes to this game. STO is my first MMO. I think i made it to admiral by pure luck. But I've been playing all this time by myself and want to start playing now that mission require more than one person ;-;",
                "alias": "counterjmb",
                "imageURL": {
                  "small": {
                    "size": {
                      "width": 80,
                      "height": 65
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n418/com_people/avatars/smallae00d1c64329c0b966828e2dd091acd8.jpg"
                  },
                  "medium": {
                    "size": {
                      "width": 160,
                      "height": 130
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n418/com_people/avatars/mediumae00d1c64329c0b966828e2dd091acd8.jpg"
                  },
                  "large": {
                    "size": {
                      "width": 160,
                      "height": 130
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n418/com_people/avatars/largeae00d1c64329c0b966828e2dd091acd8.jpg"
                  },
                  "square": {
                    "size": {
                      "width": 56,
                      "height": 56
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n418/com_people/avatars/squareae00d1c64329c0b966828e2dd091acd8.jpg"
                  },
                  "original": {
                    "size": {
                      "width": 160,
                      "height": 130
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n418/com_people/avatars/originalae00d1c64329c0b966828e2dd091acd8.jpg"
                  }
                },
                "coverURL": [],
                "author": null,
                "creationTime": "2010-08-02 17:23:11",
                "editor": null,
                "updateTime": "2016-08-30 17:58:30",
                "subscriberCount": 0,
                "isLeader": true,
                "isFollower": true,
                "isBlocked": false,
                "followerCount": 32,
                "leaderCount": 35,
                "mutualCount": 32,
                "username": "counterjmb",
                "givenName": "James",
                "familyName": "",
                "email": "counterjmb@gmail.com",
                "usertype": "registered",
                "gender": "male"
              },
              "updateTime": "2010-09-03 05:13:39",
              "subscriberCount": 13,
              "isLeader": true,
              "followerCount": 24,
              "administratorIds": [
                "1"
              ],
              "isAdministrated": true
            },
            "object": {
              "id": 173072,
              "objectType": "com.todos.todo",
              "name": "Colour Contrast",
              "body": "Highlighted posts within the forum area use a mix of light blue, grey, & white on a lighter blue background.  This makes it difficult to read from an accessibility viewpoint.",
              "alias": "colour-contrast",
              "author": {
                "id": 110637,
                "objectType": "com.people.person",
                "name": "Jonathan McC",
                "body": "I'll have to think about this for a while :)",
                "alias": "jmccomb1979",
                "imageURL": {
                  "small": {
                    "size": {
                      "width": 80,
                      "height": 80
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n110637/com_people/avatars/small2c14d3654925dcfd8d312405209d3246.jpg"
                  },
                  "medium": {
                    "size": {
                      "width": 160,
                      "height": 160
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n110637/com_people/avatars/medium2c14d3654925dcfd8d312405209d3246.jpg"
                  },
                  "large": {
                    "size": {
                      "width": 480,
                      "height": 480
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n110637/com_people/avatars/large2c14d3654925dcfd8d312405209d3246.jpg"
                  },
                  "square": {
                    "size": {
                      "width": 56,
                      "height": 56
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n110637/com_people/avatars/square2c14d3654925dcfd8d312405209d3246.jpg"
                  },
                  "original": {
                    "size": {
                      "width": 1944,
                      "height": 1944
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n110637/com_people/avatars/original2c14d3654925dcfd8d312405209d3246.jpg"
                  }
                },
                "coverURL": [],
                "author": null,
                "creationTime": "2017-08-12 17:36:58",
                "editor": null,
                "updateTime": "2020-07-11 08:52:52",
                "subscriberCount": 0,
                "isLeader": false,
                "isFollower": false,
                "isBlocked": false,
                "followerCount": 2,
                "leaderCount": 25,
                "mutualCount": 1,
                "username": "jmccomb1979",
                "givenName": "Jonathan",
                "familyName": "McC",
                "email": "jmccomb1979@gmail.com",
                "usertype": "registered",
                "gender": "male"
              },
              "creationTime": "2021-10-19 13:49:24",
              "editor": {
                "id": 110637,
                "objectType": "com.people.person",
                "name": "Jonathan McC",
                "body": "I'll have to think about this for a while :)",
                "alias": "jmccomb1979",
                "imageURL": {
                  "small": {
                    "size": {
                      "width": 80,
                      "height": 80
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n110637/com_people/avatars/small2c14d3654925dcfd8d312405209d3246.jpg"
                  },
                  "medium": {
                    "size": {
                      "width": 160,
                      "height": 160
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n110637/com_people/avatars/medium2c14d3654925dcfd8d312405209d3246.jpg"
                  },
                  "large": {
                    "size": {
                      "width": 480,
                      "height": 480
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n110637/com_people/avatars/large2c14d3654925dcfd8d312405209d3246.jpg"
                  },
                  "square": {
                    "size": {
                      "width": 56,
                      "height": 56
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n110637/com_people/avatars/square2c14d3654925dcfd8d312405209d3246.jpg"
                  },
                  "original": {
                    "size": {
                      "width": 1944,
                      "height": 1944
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n110637/com_people/avatars/original2c14d3654925dcfd8d312405209d3246.jpg"
                  }
                },
                "coverURL": [],
                "author": null,
                "creationTime": "2017-08-12 17:36:58",
                "editor": null,
                "updateTime": "2020-07-11 08:52:52",
                "subscriberCount": 0,
                "isLeader": false,
                "isFollower": false,
                "isBlocked": false,
                "followerCount": 2,
                "leaderCount": 25,
                "mutualCount": 1,
                "username": "jmccomb1979",
                "givenName": "Jonathan",
                "familyName": "McC",
                "email": "jmccomb1979@gmail.com",
                "usertype": "registered",
                "gender": "male"
              },
              "updateTime": "2021-10-19 13:49:24",
              "openToComment": true,
              "numOfComments": 3,
              "lastCommentTime": "2021-11-13 18:39:38",
              "lastComment": {
                "id": 173898,
                "objectType": "com.todos.comment",
                "body": "That's quite a bit more legible :)",
                "author": {
                  "id": 110637,
                  "objectType": "com.people.person",
                  "name": "Jonathan McC",
                  "body": "I'll have to think about this for a while :)",
                  "alias": "jmccomb1979",
                  "imageURL": {
                    "small": {
                      "size": {
                        "width": 80,
                        "height": 80
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n110637/com_people/avatars/small2c14d3654925dcfd8d312405209d3246.jpg"
                    },
                    "medium": {
                      "size": {
                        "width": 160,
                        "height": 160
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n110637/com_people/avatars/medium2c14d3654925dcfd8d312405209d3246.jpg"
                    },
                    "large": {
                      "size": {
                        "width": 480,
                        "height": 480
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n110637/com_people/avatars/large2c14d3654925dcfd8d312405209d3246.jpg"
                    },
                    "square": {
                      "size": {
                        "width": 56,
                        "height": 56
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n110637/com_people/avatars/square2c14d3654925dcfd8d312405209d3246.jpg"
                    },
                    "original": {
                      "size": {
                        "width": 1944,
                        "height": 1944
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n110637/com_people/avatars/original2c14d3654925dcfd8d312405209d3246.jpg"
                    }
                  },
                  "coverURL": [],
                  "author": null,
                  "creationTime": "2017-08-12 17:36:58",
                  "editor": null,
                  "updateTime": "2020-07-11 08:52:52",
                  "subscriberCount": 0,
                  "isLeader": false,
                  "isFollower": false,
                  "isBlocked": false,
                  "followerCount": 2,
                  "leaderCount": 25,
                  "mutualCount": 1,
                  "username": "jmccomb1979",
                  "givenName": "Jonathan",
                  "familyName": "McC",
                  "email": "jmccomb1979@gmail.com",
                  "usertype": "registered",
                  "gender": "male"
                },
                "creationTime": "2021-11-13 18:39:38",
                "editor": {
                  "id": 110637,
                  "objectType": "com.people.person",
                  "name": "Jonathan McC",
                  "body": "I'll have to think about this for a while :)",
                  "alias": "jmccomb1979",
                  "imageURL": {
                    "small": {
                      "size": {
                        "width": 80,
                        "height": 80
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n110637/com_people/avatars/small2c14d3654925dcfd8d312405209d3246.jpg"
                    },
                    "medium": {
                      "size": {
                        "width": 160,
                        "height": 160
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n110637/com_people/avatars/medium2c14d3654925dcfd8d312405209d3246.jpg"
                    },
                    "large": {
                      "size": {
                        "width": 480,
                        "height": 480
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n110637/com_people/avatars/large2c14d3654925dcfd8d312405209d3246.jpg"
                    },
                    "square": {
                      "size": {
                        "width": 56,
                        "height": 56
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n110637/com_people/avatars/square2c14d3654925dcfd8d312405209d3246.jpg"
                    },
                    "original": {
                      "size": {
                        "width": 1944,
                        "height": 1944
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n110637/com_people/avatars/original2c14d3654925dcfd8d312405209d3246.jpg"
                    }
                  },
                  "coverURL": [],
                  "author": null,
                  "creationTime": "2017-08-12 17:36:58",
                  "editor": null,
                  "updateTime": "2020-07-11 08:52:52",
                  "subscriberCount": 0,
                  "isLeader": false,
                  "isFollower": false,
                  "isBlocked": false,
                  "followerCount": 2,
                  "leaderCount": 25,
                  "mutualCount": 1,
                  "username": "jmccomb1979",
                  "givenName": "Jonathan",
                  "familyName": "McC",
                  "email": "jmccomb1979@gmail.com",
                  "usertype": "registered",
                  "gender": "male"
                },
                "updateTime": "2021-11-13 18:39:38",
                "voteUpCount": 0
              },
              "lastCommenter": {
                "id": 110637,
                "objectType": "com.people.person",
                "name": "Jonathan McC",
                "body": "I'll have to think about this for a while :)",
                "alias": "jmccomb1979",
                "imageURL": {
                  "small": {
                    "size": {
                      "width": 80,
                      "height": 80
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n110637/com_people/avatars/small2c14d3654925dcfd8d312405209d3246.jpg"
                  },
                  "medium": {
                    "size": {
                      "width": 160,
                      "height": 160
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n110637/com_people/avatars/medium2c14d3654925dcfd8d312405209d3246.jpg"
                  },
                  "large": {
                    "size": {
                      "width": 480,
                      "height": 480
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n110637/com_people/avatars/large2c14d3654925dcfd8d312405209d3246.jpg"
                  },
                  "square": {
                    "size": {
                      "width": 56,
                      "height": 56
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n110637/com_people/avatars/square2c14d3654925dcfd8d312405209d3246.jpg"
                  },
                  "original": {
                    "size": {
                      "width": 1944,
                      "height": 1944
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n110637/com_people/avatars/original2c14d3654925dcfd8d312405209d3246.jpg"
                  }
                },
                "coverURL": [],
                "author": null,
                "creationTime": "2017-08-12 17:36:58",
                "editor": null,
                "updateTime": "2020-07-11 08:52:52",
                "subscriberCount": 0,
                "isLeader": false,
                "isFollower": false,
                "isBlocked": false,
                "followerCount": 2,
                "leaderCount": 25,
                "mutualCount": 1,
                "username": "jmccomb1979",
                "givenName": "Jonathan",
                "familyName": "McC",
                "email": "jmccomb1979@gmail.com",
                "usertype": "registered",
                "gender": "male"
              },
              "subscriberCount": 3,
              "voteUpCount": 1,
              "owner": {
                "id": 4565,
                "objectType": "com.groups.group",
                "name": "Stonewall Subroutines",
                "body": "Need help or found a bug? Feel free to create a topic to report the problem.\r\n\r\nThis group is for people that are interested in programming, looking to help develop and find new ideas for any language. #leadership #sgn",
                "alias": "stonewall-subroutines",
                "imageURL": {
                  "small": {
                    "size": {
                      "width": 80,
                      "height": 80
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n4565/com_groups/avatars/smalld651d97c81d41d2843d65afd46d8cdcc.png"
                  },
                  "medium": {
                    "size": {
                      "width": 160,
                      "height": 160
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n4565/com_groups/avatars/mediumd651d97c81d41d2843d65afd46d8cdcc.png"
                  },
                  "large": {
                    "size": {
                      "width": 480,
                      "height": 480
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n4565/com_groups/avatars/larged651d97c81d41d2843d65afd46d8cdcc.png"
                  },
                  "square": {
                    "size": {
                      "width": 56,
                      "height": 56
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n4565/com_groups/avatars/squared651d97c81d41d2843d65afd46d8cdcc.png"
                  },
                  "original": {
                    "size": {
                      "width": 512,
                      "height": 512
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n4565/com_groups/avatars/originald651d97c81d41d2843d65afd46d8cdcc.png"
                  }
                },
                "coverURL": [],
                "author": {
                  "id": 418,
                  "objectType": "com.people.person",
                  "name": "James",
                  "body": "Hello, I'm James. I love star trek and stargate. I also love foreign languages. I am a database technician by day and a student at night- learning programming. I am a complete noob when it comes to this game. STO is my first MMO. I think i made it to admiral by pure luck. But I've been playing all this time by myself and want to start playing now that mission require more than one person ;-;",
                  "alias": "counterjmb",
                  "imageURL": {
                    "small": {
                      "size": {
                        "width": 80,
                        "height": 65
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n418/com_people/avatars/smallae00d1c64329c0b966828e2dd091acd8.jpg"
                    },
                    "medium": {
                      "size": {
                        "width": 160,
                        "height": 130
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n418/com_people/avatars/mediumae00d1c64329c0b966828e2dd091acd8.jpg"
                    },
                    "large": {
                      "size": {
                        "width": 160,
                        "height": 130
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n418/com_people/avatars/largeae00d1c64329c0b966828e2dd091acd8.jpg"
                    },
                    "square": {
                      "size": {
                        "width": 56,
                        "height": 56
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n418/com_people/avatars/squareae00d1c64329c0b966828e2dd091acd8.jpg"
                    },
                    "original": {
                      "size": {
                        "width": 160,
                        "height": 130
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n418/com_people/avatars/originalae00d1c64329c0b966828e2dd091acd8.jpg"
                    }
                  },
                  "coverURL": [],
                  "author": null,
                  "creationTime": "2010-08-02 17:23:11",
                  "editor": null,
                  "updateTime": "2016-08-30 17:58:30",
                  "subscriberCount": 0,
                  "isLeader": true,
                  "isFollower": true,
                  "isBlocked": false,
                  "followerCount": 32,
                  "leaderCount": 35,
                  "mutualCount": 32,
                  "username": "counterjmb",
                  "givenName": "James",
                  "familyName": "",
                  "email": "counterjmb@gmail.com",
                  "usertype": "registered",
                  "gender": "male"
                },
                "creationTime": "2010-09-03 05:13:39",
                "editor": {
                  "id": 418,
                  "objectType": "com.people.person",
                  "name": "James",
                  "body": "Hello, I'm James. I love star trek and stargate. I also love foreign languages. I am a database technician by day and a student at night- learning programming. I am a complete noob when it comes to this game. STO is my first MMO. I think i made it to admiral by pure luck. But I've been playing all this time by myself and want to start playing now that mission require more than one person ;-;",
                  "alias": "counterjmb",
                  "imageURL": {
                    "small": {
                      "size": {
                        "width": 80,
                        "height": 65
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n418/com_people/avatars/smallae00d1c64329c0b966828e2dd091acd8.jpg"
                    },
                    "medium": {
                      "size": {
                        "width": 160,
                        "height": 130
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n418/com_people/avatars/mediumae00d1c64329c0b966828e2dd091acd8.jpg"
                    },
                    "large": {
                      "size": {
                        "width": 160,
                        "height": 130
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n418/com_people/avatars/largeae00d1c64329c0b966828e2dd091acd8.jpg"
                    },
                    "square": {
                      "size": {
                        "width": 56,
                        "height": 56
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n418/com_people/avatars/squareae00d1c64329c0b966828e2dd091acd8.jpg"
                    },
                    "original": {
                      "size": {
                        "width": 160,
                        "height": 130
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n418/com_people/avatars/originalae00d1c64329c0b966828e2dd091acd8.jpg"
                    }
                  },
                  "coverURL": [],
                  "author": null,
                  "creationTime": "2010-08-02 17:23:11",
                  "editor": null,
                  "updateTime": "2016-08-30 17:58:30",
                  "subscriberCount": 0,
                  "isLeader": true,
                  "isFollower": true,
                  "isBlocked": false,
                  "followerCount": 32,
                  "leaderCount": 35,
                  "mutualCount": 32,
                  "username": "counterjmb",
                  "givenName": "James",
                  "familyName": "",
                  "email": "counterjmb@gmail.com",
                  "usertype": "registered",
                  "gender": "male"
                },
                "updateTime": "2010-09-03 05:13:39",
                "subscriberCount": 13,
                "isLeader": true,
                "followerCount": 24,
                "administratorIds": [
                  "1"
                ],
                "isAdministrated": true
              }
            },
            "creationTime": "2021-11-14 21:59:34",
            "commands": [
              "vote",
              "comment",
              "delete"
            ]
          }
    }
}

export const MultipleTasks = {
    args: {
        story: {
            "objectType": "com.stories.story",
            "id": 173893,
            "component": "com_todos",
            "name": "todo_disable",
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
              "leaderCount": 348,
              "mutualCount": 258,
              "username": "nicholasjohn16",
              "givenName": "Nick",
              "familyName": "Swinford",
              "email": "nicholasjohn16@gmail.com",
              "usertype": "super-administrator",
              "gender": "male"
            },
            "target": {
              "id": 4565,
              "objectType": "com.groups.group",
              "name": "Stonewall Subroutines",
              "body": "Need help or found a bug? Feel free to create a topic to report the problem.\r\n\r\nThis group is for people that are interested in programming, looking to help develop and find new ideas for any language. #leadership #sgn",
              "alias": "stonewall-subroutines",
              "imageURL": {
                "small": {
                  "size": {
                    "width": 80,
                    "height": 80
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n4565/com_groups/avatars/smalld651d97c81d41d2843d65afd46d8cdcc.png"
                },
                "medium": {
                  "size": {
                    "width": 160,
                    "height": 160
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n4565/com_groups/avatars/mediumd651d97c81d41d2843d65afd46d8cdcc.png"
                },
                "large": {
                  "size": {
                    "width": 480,
                    "height": 480
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n4565/com_groups/avatars/larged651d97c81d41d2843d65afd46d8cdcc.png"
                },
                "square": {
                  "size": {
                    "width": 56,
                    "height": 56
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n4565/com_groups/avatars/squared651d97c81d41d2843d65afd46d8cdcc.png"
                },
                "original": {
                  "size": {
                    "width": 512,
                    "height": 512
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n4565/com_groups/avatars/originald651d97c81d41d2843d65afd46d8cdcc.png"
                }
              },
              "coverURL": [],
              "author": {
                "id": 418,
                "objectType": "com.people.person",
                "name": "James",
                "body": "Hello, I'm James. I love star trek and stargate. I also love foreign languages. I am a database technician by day and a student at night- learning programming. I am a complete noob when it comes to this game. STO is my first MMO. I think i made it to admiral by pure luck. But I've been playing all this time by myself and want to start playing now that mission require more than one person ;-;",
                "alias": "counterjmb",
                "imageURL": {
                  "small": {
                    "size": {
                      "width": 80,
                      "height": 65
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n418/com_people/avatars/smallae00d1c64329c0b966828e2dd091acd8.jpg"
                  },
                  "medium": {
                    "size": {
                      "width": 160,
                      "height": 130
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n418/com_people/avatars/mediumae00d1c64329c0b966828e2dd091acd8.jpg"
                  },
                  "large": {
                    "size": {
                      "width": 160,
                      "height": 130
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n418/com_people/avatars/largeae00d1c64329c0b966828e2dd091acd8.jpg"
                  },
                  "square": {
                    "size": {
                      "width": 56,
                      "height": 56
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n418/com_people/avatars/squareae00d1c64329c0b966828e2dd091acd8.jpg"
                  },
                  "original": {
                    "size": {
                      "width": 160,
                      "height": 130
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n418/com_people/avatars/originalae00d1c64329c0b966828e2dd091acd8.jpg"
                  }
                },
                "coverURL": [],
                "author": null,
                "creationTime": "2010-08-02 17:23:11",
                "editor": null,
                "updateTime": "2016-08-30 17:58:30",
                "subscriberCount": 0,
                "isLeader": true,
                "isFollower": true,
                "isBlocked": false,
                "followerCount": 32,
                "leaderCount": 35,
                "mutualCount": 32,
                "username": "counterjmb",
                "givenName": "James",
                "familyName": "",
                "email": "counterjmb@gmail.com",
                "usertype": "registered",
                "gender": "male"
              },
              "creationTime": "2010-09-03 05:13:39",
              "editor": {
                "id": 418,
                "objectType": "com.people.person",
                "name": "James",
                "body": "Hello, I'm James. I love star trek and stargate. I also love foreign languages. I am a database technician by day and a student at night- learning programming. I am a complete noob when it comes to this game. STO is my first MMO. I think i made it to admiral by pure luck. But I've been playing all this time by myself and want to start playing now that mission require more than one person ;-;",
                "alias": "counterjmb",
                "imageURL": {
                  "small": {
                    "size": {
                      "width": 80,
                      "height": 65
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n418/com_people/avatars/smallae00d1c64329c0b966828e2dd091acd8.jpg"
                  },
                  "medium": {
                    "size": {
                      "width": 160,
                      "height": 130
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n418/com_people/avatars/mediumae00d1c64329c0b966828e2dd091acd8.jpg"
                  },
                  "large": {
                    "size": {
                      "width": 160,
                      "height": 130
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n418/com_people/avatars/largeae00d1c64329c0b966828e2dd091acd8.jpg"
                  },
                  "square": {
                    "size": {
                      "width": 56,
                      "height": 56
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n418/com_people/avatars/squareae00d1c64329c0b966828e2dd091acd8.jpg"
                  },
                  "original": {
                    "size": {
                      "width": 160,
                      "height": 130
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n418/com_people/avatars/originalae00d1c64329c0b966828e2dd091acd8.jpg"
                  }
                },
                "coverURL": [],
                "author": null,
                "creationTime": "2010-08-02 17:23:11",
                "editor": null,
                "updateTime": "2016-08-30 17:58:30",
                "subscriberCount": 0,
                "isLeader": true,
                "isFollower": true,
                "isBlocked": false,
                "followerCount": 32,
                "leaderCount": 35,
                "mutualCount": 32,
                "username": "counterjmb",
                "givenName": "James",
                "familyName": "",
                "email": "counterjmb@gmail.com",
                "usertype": "registered",
                "gender": "male"
              },
              "updateTime": "2010-09-03 05:13:39",
              "subscriberCount": 13,
              "isLeader": true,
              "followerCount": 24,
              "administratorIds": [
                "1"
              ],
              "isAdministrated": true
            },
            "objects": [
              {
                "id": 167635,
                "objectType": "com.todos.todo",
                "name": "Add Fleet bank rules to the site",
                "body": "Add Fleet bank rules to the site, Resource dept would be very grateful as a source to link back to. ",
                "alias": "add-fleet-bank-rules-to-the-site",
                "author": {
                  "id": 2237,
                  "objectType": "com.people.person",
                  "name": "Gareth GXV3",
                  "body": "Hiya, I'm GXV. I'm a Welshy with a great sense of humor and I'm pretty cool. I handle all the STO banks and project holdings for Stonewall Fleet, plus run the community owned Stonewall Credit Store http://credits.stonewallfleet.com\r\nplease message me if you have items you wish to donate or have any questions. Thanks!",
                  "alias": "GXV3",
                  "imageURL": {
                    "small": {
                      "size": {
                        "width": 80,
                        "height": 77
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2237/com_people/avatars/smallb47895a5966cfb1b756bdd79e88d060f.png"
                    },
                    "medium": {
                      "size": {
                        "width": 160,
                        "height": 155
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2237/com_people/avatars/mediumb47895a5966cfb1b756bdd79e88d060f.png"
                    },
                    "large": {
                      "size": {
                        "width": 480,
                        "height": 465
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2237/com_people/avatars/largeb47895a5966cfb1b756bdd79e88d060f.png"
                    },
                    "square": {
                      "size": {
                        "width": 56,
                        "height": 56
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2237/com_people/avatars/squareb47895a5966cfb1b756bdd79e88d060f.png"
                    },
                    "original": {
                      "size": {
                        "width": 1130,
                        "height": 1094
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2237/com_people/avatars/originalb47895a5966cfb1b756bdd79e88d060f.png"
                    }
                  },
                  "coverURL": {
                    "small": {
                      "size": {
                        "width": 80,
                        "height": 77
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2237/com_people/covers/small9035097a80267887ed4e591ab0d5d78d.jpg"
                    },
                    "medium": {
                      "size": {
                        "width": 160,
                        "height": 155
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2237/com_people/covers/medium9035097a80267887ed4e591ab0d5d78d.jpg"
                    },
                    "large": {
                      "size": {
                        "width": 480,
                        "height": 465
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2237/com_people/covers/large9035097a80267887ed4e591ab0d5d78d.jpg"
                    },
                    "square": {
                      "size": {
                        "width": 56,
                        "height": 56
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2237/com_people/covers/square9035097a80267887ed4e591ab0d5d78d.jpg"
                    },
                    "original": {
                      "size": {
                        "width": 1130,
                        "height": 1094
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2237/com_people/covers/original9035097a80267887ed4e591ab0d5d78d.jpg"
                    }
                  },
                  "author": null,
                  "creationTime": "2013-04-02 00:30:37",
                  "editor": null,
                  "updateTime": "2022-03-31 13:12:49",
                  "subscriberCount": 1,
                  "isLeader": true,
                  "isFollower": true,
                  "isBlocked": false,
                  "followerCount": 190,
                  "leaderCount": 358,
                  "mutualCount": 182,
                  "username": "GXV3",
                  "givenName": "Gareth",
                  "familyName": "GXV3",
                  "email": "llandrell@gmail.com",
                  "usertype": "administrator",
                  "gender": "male"
                },
                "creationTime": "2021-02-08 17:59:05",
                "editor": {
                  "id": 2237,
                  "objectType": "com.people.person",
                  "name": "Gareth GXV3",
                  "body": "Hiya, I'm GXV. I'm a Welshy with a great sense of humor and I'm pretty cool. I handle all the STO banks and project holdings for Stonewall Fleet, plus run the community owned Stonewall Credit Store http://credits.stonewallfleet.com\r\nplease message me if you have items you wish to donate or have any questions. Thanks!",
                  "alias": "GXV3",
                  "imageURL": {
                    "small": {
                      "size": {
                        "width": 80,
                        "height": 77
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2237/com_people/avatars/smallb47895a5966cfb1b756bdd79e88d060f.png"
                    },
                    "medium": {
                      "size": {
                        "width": 160,
                        "height": 155
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2237/com_people/avatars/mediumb47895a5966cfb1b756bdd79e88d060f.png"
                    },
                    "large": {
                      "size": {
                        "width": 480,
                        "height": 465
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2237/com_people/avatars/largeb47895a5966cfb1b756bdd79e88d060f.png"
                    },
                    "square": {
                      "size": {
                        "width": 56,
                        "height": 56
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2237/com_people/avatars/squareb47895a5966cfb1b756bdd79e88d060f.png"
                    },
                    "original": {
                      "size": {
                        "width": 1130,
                        "height": 1094
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2237/com_people/avatars/originalb47895a5966cfb1b756bdd79e88d060f.png"
                    }
                  },
                  "coverURL": {
                    "small": {
                      "size": {
                        "width": 80,
                        "height": 77
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2237/com_people/covers/small9035097a80267887ed4e591ab0d5d78d.jpg"
                    },
                    "medium": {
                      "size": {
                        "width": 160,
                        "height": 155
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2237/com_people/covers/medium9035097a80267887ed4e591ab0d5d78d.jpg"
                    },
                    "large": {
                      "size": {
                        "width": 480,
                        "height": 465
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2237/com_people/covers/large9035097a80267887ed4e591ab0d5d78d.jpg"
                    },
                    "square": {
                      "size": {
                        "width": 56,
                        "height": 56
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2237/com_people/covers/square9035097a80267887ed4e591ab0d5d78d.jpg"
                    },
                    "original": {
                      "size": {
                        "width": 1130,
                        "height": 1094
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2237/com_people/covers/original9035097a80267887ed4e591ab0d5d78d.jpg"
                    }
                  },
                  "author": null,
                  "creationTime": "2013-04-02 00:30:37",
                  "editor": null,
                  "updateTime": "2022-03-31 13:12:49",
                  "subscriberCount": 1,
                  "isLeader": true,
                  "isFollower": true,
                  "isBlocked": false,
                  "followerCount": 190,
                  "leaderCount": 358,
                  "mutualCount": 182,
                  "username": "GXV3",
                  "givenName": "Gareth",
                  "familyName": "GXV3",
                  "email": "llandrell@gmail.com",
                  "usertype": "administrator",
                  "gender": "male"
                },
                "updateTime": "2021-02-08 17:59:05",
                "openToComment": true,
                "numOfComments": 3,
                "lastCommentTime": "2021-11-12 02:10:13",
                "lastComment": {
                  "id": 173873,
                  "objectType": "com.todos.comment",
                  "body": "Done.",
                  "author": {
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
                    "leaderCount": 348,
                    "mutualCount": 258,
                    "username": "nicholasjohn16",
                    "givenName": "Nick",
                    "familyName": "Swinford",
                    "email": "nicholasjohn16@gmail.com",
                    "usertype": "super-administrator",
                    "gender": "male"
                  },
                  "creationTime": "2021-11-12 02:10:13",
                  "editor": {
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
                    "leaderCount": 348,
                    "mutualCount": 258,
                    "username": "nicholasjohn16",
                    "givenName": "Nick",
                    "familyName": "Swinford",
                    "email": "nicholasjohn16@gmail.com",
                    "usertype": "super-administrator",
                    "gender": "male"
                  },
                  "updateTime": "2021-11-12 02:10:13",
                  "voteUpCount": 1
                },
                "lastCommenter": {
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
                  "leaderCount": 348,
                  "mutualCount": 258,
                  "username": "nicholasjohn16",
                  "givenName": "Nick",
                  "familyName": "Swinford",
                  "email": "nicholasjohn16@gmail.com",
                  "usertype": "super-administrator",
                  "gender": "male"
                },
                "subscriberCount": 2,
                "voteUpCount": 0,
                "owner": {
                  "id": 4565,
                  "objectType": "com.groups.group",
                  "name": "Stonewall Subroutines",
                  "body": "Need help or found a bug? Feel free to create a topic to report the problem.\r\n\r\nThis group is for people that are interested in programming, looking to help develop and find new ideas for any language. #leadership #sgn",
                  "alias": "stonewall-subroutines",
                  "imageURL": {
                    "small": {
                      "size": {
                        "width": 80,
                        "height": 80
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n4565/com_groups/avatars/smalld651d97c81d41d2843d65afd46d8cdcc.png"
                    },
                    "medium": {
                      "size": {
                        "width": 160,
                        "height": 160
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n4565/com_groups/avatars/mediumd651d97c81d41d2843d65afd46d8cdcc.png"
                    },
                    "large": {
                      "size": {
                        "width": 480,
                        "height": 480
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n4565/com_groups/avatars/larged651d97c81d41d2843d65afd46d8cdcc.png"
                    },
                    "square": {
                      "size": {
                        "width": 56,
                        "height": 56
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n4565/com_groups/avatars/squared651d97c81d41d2843d65afd46d8cdcc.png"
                    },
                    "original": {
                      "size": {
                        "width": 512,
                        "height": 512
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n4565/com_groups/avatars/originald651d97c81d41d2843d65afd46d8cdcc.png"
                    }
                  },
                  "coverURL": [],
                  "author": {
                    "id": 418,
                    "objectType": "com.people.person",
                    "name": "James",
                    "body": "Hello, I'm James. I love star trek and stargate. I also love foreign languages. I am a database technician by day and a student at night- learning programming. I am a complete noob when it comes to this game. STO is my first MMO. I think i made it to admiral by pure luck. But I've been playing all this time by myself and want to start playing now that mission require more than one person ;-;",
                    "alias": "counterjmb",
                    "imageURL": {
                      "small": {
                        "size": {
                          "width": 80,
                          "height": 65
                        },
                        "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n418/com_people/avatars/smallae00d1c64329c0b966828e2dd091acd8.jpg"
                      },
                      "medium": {
                        "size": {
                          "width": 160,
                          "height": 130
                        },
                        "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n418/com_people/avatars/mediumae00d1c64329c0b966828e2dd091acd8.jpg"
                      },
                      "large": {
                        "size": {
                          "width": 160,
                          "height": 130
                        },
                        "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n418/com_people/avatars/largeae00d1c64329c0b966828e2dd091acd8.jpg"
                      },
                      "square": {
                        "size": {
                          "width": 56,
                          "height": 56
                        },
                        "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n418/com_people/avatars/squareae00d1c64329c0b966828e2dd091acd8.jpg"
                      },
                      "original": {
                        "size": {
                          "width": 160,
                          "height": 130
                        },
                        "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n418/com_people/avatars/originalae00d1c64329c0b966828e2dd091acd8.jpg"
                      }
                    },
                    "coverURL": [],
                    "author": null,
                    "creationTime": "2010-08-02 17:23:11",
                    "editor": null,
                    "updateTime": "2016-08-30 17:58:30",
                    "subscriberCount": 0,
                    "isLeader": true,
                    "isFollower": true,
                    "isBlocked": false,
                    "followerCount": 32,
                    "leaderCount": 35,
                    "mutualCount": 32,
                    "username": "counterjmb",
                    "givenName": "James",
                    "familyName": "",
                    "email": "counterjmb@gmail.com",
                    "usertype": "registered",
                    "gender": "male"
                  },
                  "creationTime": "2010-09-03 05:13:39",
                  "editor": {
                    "id": 418,
                    "objectType": "com.people.person",
                    "name": "James",
                    "body": "Hello, I'm James. I love star trek and stargate. I also love foreign languages. I am a database technician by day and a student at night- learning programming. I am a complete noob when it comes to this game. STO is my first MMO. I think i made it to admiral by pure luck. But I've been playing all this time by myself and want to start playing now that mission require more than one person ;-;",
                    "alias": "counterjmb",
                    "imageURL": {
                      "small": {
                        "size": {
                          "width": 80,
                          "height": 65
                        },
                        "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n418/com_people/avatars/smallae00d1c64329c0b966828e2dd091acd8.jpg"
                      },
                      "medium": {
                        "size": {
                          "width": 160,
                          "height": 130
                        },
                        "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n418/com_people/avatars/mediumae00d1c64329c0b966828e2dd091acd8.jpg"
                      },
                      "large": {
                        "size": {
                          "width": 160,
                          "height": 130
                        },
                        "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n418/com_people/avatars/largeae00d1c64329c0b966828e2dd091acd8.jpg"
                      },
                      "square": {
                        "size": {
                          "width": 56,
                          "height": 56
                        },
                        "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n418/com_people/avatars/squareae00d1c64329c0b966828e2dd091acd8.jpg"
                      },
                      "original": {
                        "size": {
                          "width": 160,
                          "height": 130
                        },
                        "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n418/com_people/avatars/originalae00d1c64329c0b966828e2dd091acd8.jpg"
                      }
                    },
                    "coverURL": [],
                    "author": null,
                    "creationTime": "2010-08-02 17:23:11",
                    "editor": null,
                    "updateTime": "2016-08-30 17:58:30",
                    "subscriberCount": 0,
                    "isLeader": true,
                    "isFollower": true,
                    "isBlocked": false,
                    "followerCount": 32,
                    "leaderCount": 35,
                    "mutualCount": 32,
                    "username": "counterjmb",
                    "givenName": "James",
                    "familyName": "",
                    "email": "counterjmb@gmail.com",
                    "usertype": "registered",
                    "gender": "male"
                  },
                  "updateTime": "2010-09-03 05:13:39",
                  "subscriberCount": 13,
                  "isLeader": true,
                  "followerCount": 24,
                  "administratorIds": [
                    "1"
                  ],
                  "isAdministrated": true
                }
              },
              {
                "id": 173074,
                "objectType": "com.todos.todo",
                "name": "Embedded pictures missing",
                "body": "Embedded pictures in the Stonewall Fleet section of the Info Center, specifically the guide on how to join the StonewallFleet channel within STO, are missing.",
                "alias": "embedded-pictures-missing",
                "author": {
                  "id": 110637,
                  "objectType": "com.people.person",
                  "name": "Jonathan McC",
                  "body": "I'll have to think about this for a while :)",
                  "alias": "jmccomb1979",
                  "imageURL": {
                    "small": {
                      "size": {
                        "width": 80,
                        "height": 80
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n110637/com_people/avatars/small2c14d3654925dcfd8d312405209d3246.jpg"
                    },
                    "medium": {
                      "size": {
                        "width": 160,
                        "height": 160
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n110637/com_people/avatars/medium2c14d3654925dcfd8d312405209d3246.jpg"
                    },
                    "large": {
                      "size": {
                        "width": 480,
                        "height": 480
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n110637/com_people/avatars/large2c14d3654925dcfd8d312405209d3246.jpg"
                    },
                    "square": {
                      "size": {
                        "width": 56,
                        "height": 56
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n110637/com_people/avatars/square2c14d3654925dcfd8d312405209d3246.jpg"
                    },
                    "original": {
                      "size": {
                        "width": 1944,
                        "height": 1944
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n110637/com_people/avatars/original2c14d3654925dcfd8d312405209d3246.jpg"
                    }
                  },
                  "coverURL": [],
                  "author": null,
                  "creationTime": "2017-08-12 17:36:58",
                  "editor": null,
                  "updateTime": "2020-07-11 08:52:52",
                  "subscriberCount": 0,
                  "isLeader": false,
                  "isFollower": false,
                  "isBlocked": false,
                  "followerCount": 2,
                  "leaderCount": 25,
                  "mutualCount": 1,
                  "username": "jmccomb1979",
                  "givenName": "Jonathan",
                  "familyName": "McC",
                  "email": "jmccomb1979@gmail.com",
                  "usertype": "registered",
                  "gender": "male"
                },
                "creationTime": "2021-10-19 13:52:20",
                "editor": {
                  "id": 110637,
                  "objectType": "com.people.person",
                  "name": "Jonathan McC",
                  "body": "I'll have to think about this for a while :)",
                  "alias": "jmccomb1979",
                  "imageURL": {
                    "small": {
                      "size": {
                        "width": 80,
                        "height": 80
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n110637/com_people/avatars/small2c14d3654925dcfd8d312405209d3246.jpg"
                    },
                    "medium": {
                      "size": {
                        "width": 160,
                        "height": 160
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n110637/com_people/avatars/medium2c14d3654925dcfd8d312405209d3246.jpg"
                    },
                    "large": {
                      "size": {
                        "width": 480,
                        "height": 480
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n110637/com_people/avatars/large2c14d3654925dcfd8d312405209d3246.jpg"
                    },
                    "square": {
                      "size": {
                        "width": 56,
                        "height": 56
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n110637/com_people/avatars/square2c14d3654925dcfd8d312405209d3246.jpg"
                    },
                    "original": {
                      "size": {
                        "width": 1944,
                        "height": 1944
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n110637/com_people/avatars/original2c14d3654925dcfd8d312405209d3246.jpg"
                    }
                  },
                  "coverURL": [],
                  "author": null,
                  "creationTime": "2017-08-12 17:36:58",
                  "editor": null,
                  "updateTime": "2020-07-11 08:52:52",
                  "subscriberCount": 0,
                  "isLeader": false,
                  "isFollower": false,
                  "isBlocked": false,
                  "followerCount": 2,
                  "leaderCount": 25,
                  "mutualCount": 1,
                  "username": "jmccomb1979",
                  "givenName": "Jonathan",
                  "familyName": "McC",
                  "email": "jmccomb1979@gmail.com",
                  "usertype": "registered",
                  "gender": "male"
                },
                "updateTime": "2021-10-19 13:52:20",
                "openToComment": true,
                "numOfComments": 1,
                "lastCommentTime": "2021-11-12 02:09:52",
                "lastComment": {
                  "id": 173869,
                  "objectType": "com.todos.comment",
                  "body": "These should all be fixed now. Could you check and let me know? Thanks.",
                  "author": {
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
                    "leaderCount": 348,
                    "mutualCount": 258,
                    "username": "nicholasjohn16",
                    "givenName": "Nick",
                    "familyName": "Swinford",
                    "email": "nicholasjohn16@gmail.com",
                    "usertype": "super-administrator",
                    "gender": "male"
                  },
                  "creationTime": "2021-11-12 02:09:52",
                  "editor": {
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
                    "leaderCount": 348,
                    "mutualCount": 258,
                    "username": "nicholasjohn16",
                    "givenName": "Nick",
                    "familyName": "Swinford",
                    "email": "nicholasjohn16@gmail.com",
                    "usertype": "super-administrator",
                    "gender": "male"
                  },
                  "updateTime": "2021-11-12 02:09:52",
                  "voteUpCount": 0
                },
                "lastCommenter": {
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
                  "leaderCount": 348,
                  "mutualCount": 258,
                  "username": "nicholasjohn16",
                  "givenName": "Nick",
                  "familyName": "Swinford",
                  "email": "nicholasjohn16@gmail.com",
                  "usertype": "super-administrator",
                  "gender": "male"
                },
                "subscriberCount": 2,
                "voteUpCount": 0,
                "owner": {
                  "id": 4565,
                  "objectType": "com.groups.group",
                  "name": "Stonewall Subroutines",
                  "body": "Need help or found a bug? Feel free to create a topic to report the problem.\r\n\r\nThis group is for people that are interested in programming, looking to help develop and find new ideas for any language. #leadership #sgn",
                  "alias": "stonewall-subroutines",
                  "imageURL": {
                    "small": {
                      "size": {
                        "width": 80,
                        "height": 80
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n4565/com_groups/avatars/smalld651d97c81d41d2843d65afd46d8cdcc.png"
                    },
                    "medium": {
                      "size": {
                        "width": 160,
                        "height": 160
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n4565/com_groups/avatars/mediumd651d97c81d41d2843d65afd46d8cdcc.png"
                    },
                    "large": {
                      "size": {
                        "width": 480,
                        "height": 480
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n4565/com_groups/avatars/larged651d97c81d41d2843d65afd46d8cdcc.png"
                    },
                    "square": {
                      "size": {
                        "width": 56,
                        "height": 56
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n4565/com_groups/avatars/squared651d97c81d41d2843d65afd46d8cdcc.png"
                    },
                    "original": {
                      "size": {
                        "width": 512,
                        "height": 512
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n4565/com_groups/avatars/originald651d97c81d41d2843d65afd46d8cdcc.png"
                    }
                  },
                  "coverURL": [],
                  "author": {
                    "id": 418,
                    "objectType": "com.people.person",
                    "name": "James",
                    "body": "Hello, I'm James. I love star trek and stargate. I also love foreign languages. I am a database technician by day and a student at night- learning programming. I am a complete noob when it comes to this game. STO is my first MMO. I think i made it to admiral by pure luck. But I've been playing all this time by myself and want to start playing now that mission require more than one person ;-;",
                    "alias": "counterjmb",
                    "imageURL": {
                      "small": {
                        "size": {
                          "width": 80,
                          "height": 65
                        },
                        "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n418/com_people/avatars/smallae00d1c64329c0b966828e2dd091acd8.jpg"
                      },
                      "medium": {
                        "size": {
                          "width": 160,
                          "height": 130
                        },
                        "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n418/com_people/avatars/mediumae00d1c64329c0b966828e2dd091acd8.jpg"
                      },
                      "large": {
                        "size": {
                          "width": 160,
                          "height": 130
                        },
                        "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n418/com_people/avatars/largeae00d1c64329c0b966828e2dd091acd8.jpg"
                      },
                      "square": {
                        "size": {
                          "width": 56,
                          "height": 56
                        },
                        "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n418/com_people/avatars/squareae00d1c64329c0b966828e2dd091acd8.jpg"
                      },
                      "original": {
                        "size": {
                          "width": 160,
                          "height": 130
                        },
                        "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n418/com_people/avatars/originalae00d1c64329c0b966828e2dd091acd8.jpg"
                      }
                    },
                    "coverURL": [],
                    "author": null,
                    "creationTime": "2010-08-02 17:23:11",
                    "editor": null,
                    "updateTime": "2016-08-30 17:58:30",
                    "subscriberCount": 0,
                    "isLeader": true,
                    "isFollower": true,
                    "isBlocked": false,
                    "followerCount": 32,
                    "leaderCount": 35,
                    "mutualCount": 32,
                    "username": "counterjmb",
                    "givenName": "James",
                    "familyName": "",
                    "email": "counterjmb@gmail.com",
                    "usertype": "registered",
                    "gender": "male"
                  },
                  "creationTime": "2010-09-03 05:13:39",
                  "editor": {
                    "id": 418,
                    "objectType": "com.people.person",
                    "name": "James",
                    "body": "Hello, I'm James. I love star trek and stargate. I also love foreign languages. I am a database technician by day and a student at night- learning programming. I am a complete noob when it comes to this game. STO is my first MMO. I think i made it to admiral by pure luck. But I've been playing all this time by myself and want to start playing now that mission require more than one person ;-;",
                    "alias": "counterjmb",
                    "imageURL": {
                      "small": {
                        "size": {
                          "width": 80,
                          "height": 65
                        },
                        "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n418/com_people/avatars/smallae00d1c64329c0b966828e2dd091acd8.jpg"
                      },
                      "medium": {
                        "size": {
                          "width": 160,
                          "height": 130
                        },
                        "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n418/com_people/avatars/mediumae00d1c64329c0b966828e2dd091acd8.jpg"
                      },
                      "large": {
                        "size": {
                          "width": 160,
                          "height": 130
                        },
                        "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n418/com_people/avatars/largeae00d1c64329c0b966828e2dd091acd8.jpg"
                      },
                      "square": {
                        "size": {
                          "width": 56,
                          "height": 56
                        },
                        "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n418/com_people/avatars/squareae00d1c64329c0b966828e2dd091acd8.jpg"
                      },
                      "original": {
                        "size": {
                          "width": 160,
                          "height": 130
                        },
                        "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n418/com_people/avatars/originalae00d1c64329c0b966828e2dd091acd8.jpg"
                      }
                    },
                    "coverURL": [],
                    "author": null,
                    "creationTime": "2010-08-02 17:23:11",
                    "editor": null,
                    "updateTime": "2016-08-30 17:58:30",
                    "subscriberCount": 0,
                    "isLeader": true,
                    "isFollower": true,
                    "isBlocked": false,
                    "followerCount": 32,
                    "leaderCount": 35,
                    "mutualCount": 32,
                    "username": "counterjmb",
                    "givenName": "James",
                    "familyName": "",
                    "email": "counterjmb@gmail.com",
                    "usertype": "registered",
                    "gender": "male"
                  },
                  "updateTime": "2010-09-03 05:13:39",
                  "subscriberCount": 13,
                  "isLeader": true,
                  "followerCount": 24,
                  "administratorIds": [
                    "1"
                  ],
                  "isAdministrated": true
                }
              },
              {
                "id": 173247,
                "objectType": "com.todos.todo",
                "name": "Info Center, et al. links do not appear on the main page on Mobile Devices",
                "body": "Info Center, Events, Groups, Forums, and Help links do not appear on the main page on Mobile devices. These links are often part of a requirement (intro post and our rules) or they serve as a guide to members therefore it is important that they remain instantly visible to everyone.  Thank you!",
                "alias": "info-center-et-al-links-do-not-appear-on-the-main-page-on-mobile-devices",
                "author": {
                  "id": 43,
                  "objectType": "com.people.person",
                  "name": "Zander Hawk",
                  "body": "Greetings,\r\n\r\nI am the Membership Manager for the Stonewall Gaming Network (SGN) and I am responsible for managing the SGN Membership Management Department.  I have a team of volunteers that are assigned to the department to carry out daily duties; we welcome new members, moderate members that violate the rules, deescalate conflict, ensure that member records are updated, and I send out membership termination notices to members that violate the rules.  I also advise the Community Manager on overall compliance related matters.\r\n\r\nI have been a member of the SGN since November 17, 2009 and the SGN’s Membership Manager since June 2016.  I am proud of providing my time and efforts to the SGN because it is a unique not-for-profit volunteer social club that provides an all-inclusive online social environment for LGBTQ+ gamers across the world.  The SGN features an assortment of computer and console games such as Star Trek Online, Star Wars, Guild Wars II, and other enjoyable games.  What I love the most about the SGN is its ongoing mission to serve as an online social space where members can share their ideas, chat, and discuss game or non-game experiences in a safe and welcoming environment.\r\n\r\nI tend to spend most of my time on Star Trek Online however I do enjoy Diablo III on PlayStation and Final Fantasy.  I love video games because they are the ultimate form of expression that deliver an interactive story, music, visual effects, and other creative elements.  I am a major enthusiast of music, especially Baroque, Classical, and video game/movie scores.   \r\n\r\nI terms of media, I have been a long time fan and student of Star Trek.  Star Trek is an exceptional science fiction television show that embraces diversity and collaboration between people with diverse backgrounds.  The show provides exceptional writing that really compels an audience to confront moral and ethical dilemmas while asking societal and existential questions that delve into the nature of conflict, the meaning of humanity, and the exploration of life.  I have found Star Trek to be a phenomenal show that is extremely rewarding to watch because it compels people to think and appreciate what they have and those around them.  Watching Star Trek: The Next Generation as an adult gave me a more thorough appreciation for it's wonderful storytelling and it's ability to compel an audience to tackle ethical dilemmas.  The writing in the show was and still is absolutely compelling -it hits the audience with a moral and ethical punch dealing with gray area issues that sometimes cannot be resolved easily with black and white solutions.\r\n\r\nShould you have any questions or concerns, please feel free to reach out to me at any time.\r\n\r\nRegards,\r\n\r\nZander Hawk\r\nSGN Membership Manager\r\nSTO PC Stonewall Fleet - Admiral & Chief of Membership Management\r\nSTO Stonewall PS & XBOX Fleet Administrator\r\nStar Citizen Stonewall Fleet - Fleet Administrator\r\nDiablo IV Order of Stonewall - Clan Leader  \r\n\r\nSTONEWALL GAMING NETWORK\r\nDepartment of Membership Management\r\nSGN Username:  Zander_Hawk@Zander_Hawk\r\nEmail:  zander.hawk@outlook.com\r\nKik:  Zander.Hawk\r\nDiscord:  zander_hawk\r\nSGN website:  http://www.stonewallgaming.net/people/Zander_Hawk\r\nSTO PC:  Zander Hawk@Zander_Hawk\r\nBlizzard ID/BattleTag:  ZanderHawk#1332\r\nSTO PlayStation PSN Online ID:  Zander Hawk@Zander_Hawk\r\nSTO XBOX Gamertag:  Zander Hawk@Zander Hawk\r\nStar Citizen/RSI Handle:  Zander_Hawk\r\nStar Citizen/RSI website:  https://robertsspaceindustries.com/citizens/Zander_Hawk",
                  "alias": "Zander_Hawk",
                  "imageURL": {
                    "small": {
                      "size": {
                        "width": 80,
                        "height": 98
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n43/com_people/avatars/smallc76b8abaa96f6663c405d08293c3f79e.png"
                    },
                    "medium": {
                      "size": {
                        "width": 160,
                        "height": 196
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n43/com_people/avatars/mediumc76b8abaa96f6663c405d08293c3f79e.png"
                    },
                    "large": {
                      "size": {
                        "width": 480,
                        "height": 588
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n43/com_people/avatars/largec76b8abaa96f6663c405d08293c3f79e.png"
                    },
                    "square": {
                      "size": {
                        "width": 56,
                        "height": 56
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n43/com_people/avatars/squarec76b8abaa96f6663c405d08293c3f79e.png"
                    },
                    "original": {
                      "size": {
                        "width": 1021,
                        "height": 1251
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n43/com_people/avatars/originalc76b8abaa96f6663c405d08293c3f79e.png"
                    }
                  },
                  "coverURL": {
                    "small": {
                      "size": {
                        "width": 80,
                        "height": 98
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n43/com_people/covers/smalle606d0a6eee07dd8c63400d0784070ee.jpg"
                    },
                    "medium": {
                      "size": {
                        "width": 160,
                        "height": 196
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n43/com_people/covers/mediume606d0a6eee07dd8c63400d0784070ee.jpg"
                    },
                    "large": {
                      "size": {
                        "width": 480,
                        "height": 588
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n43/com_people/covers/largee606d0a6eee07dd8c63400d0784070ee.jpg"
                    },
                    "square": {
                      "size": {
                        "width": 56,
                        "height": 56
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n43/com_people/covers/squaree606d0a6eee07dd8c63400d0784070ee.jpg"
                    },
                    "original": {
                      "size": {
                        "width": 1021,
                        "height": 1251
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n43/com_people/covers/originale606d0a6eee07dd8c63400d0784070ee.jpg"
                    }
                  },
                  "author": null,
                  "creationTime": "2009-11-17 23:45:56",
                  "editor": null,
                  "updateTime": "2023-12-27 02:46:19",
                  "subscriberCount": 0,
                  "isLeader": true,
                  "isFollower": true,
                  "isBlocked": false,
                  "followerCount": 147,
                  "leaderCount": 129,
                  "mutualCount": 103,
                  "username": "Zander_Hawk",
                  "givenName": "Zander",
                  "familyName": "Hawk",
                  "email": "Zander.Hawk@outlook.com",
                  "usertype": "administrator",
                  "gender": "male"
                },
                "creationTime": "2021-10-20 14:08:07",
                "editor": {
                  "id": 43,
                  "objectType": "com.people.person",
                  "name": "Zander Hawk",
                  "body": "Greetings,\r\n\r\nI am the Membership Manager for the Stonewall Gaming Network (SGN) and I am responsible for managing the SGN Membership Management Department.  I have a team of volunteers that are assigned to the department to carry out daily duties; we welcome new members, moderate members that violate the rules, deescalate conflict, ensure that member records are updated, and I send out membership termination notices to members that violate the rules.  I also advise the Community Manager on overall compliance related matters.\r\n\r\nI have been a member of the SGN since November 17, 2009 and the SGN’s Membership Manager since June 2016.  I am proud of providing my time and efforts to the SGN because it is a unique not-for-profit volunteer social club that provides an all-inclusive online social environment for LGBTQ+ gamers across the world.  The SGN features an assortment of computer and console games such as Star Trek Online, Star Wars, Guild Wars II, and other enjoyable games.  What I love the most about the SGN is its ongoing mission to serve as an online social space where members can share their ideas, chat, and discuss game or non-game experiences in a safe and welcoming environment.\r\n\r\nI tend to spend most of my time on Star Trek Online however I do enjoy Diablo III on PlayStation and Final Fantasy.  I love video games because they are the ultimate form of expression that deliver an interactive story, music, visual effects, and other creative elements.  I am a major enthusiast of music, especially Baroque, Classical, and video game/movie scores.   \r\n\r\nI terms of media, I have been a long time fan and student of Star Trek.  Star Trek is an exceptional science fiction television show that embraces diversity and collaboration between people with diverse backgrounds.  The show provides exceptional writing that really compels an audience to confront moral and ethical dilemmas while asking societal and existential questions that delve into the nature of conflict, the meaning of humanity, and the exploration of life.  I have found Star Trek to be a phenomenal show that is extremely rewarding to watch because it compels people to think and appreciate what they have and those around them.  Watching Star Trek: The Next Generation as an adult gave me a more thorough appreciation for it's wonderful storytelling and it's ability to compel an audience to tackle ethical dilemmas.  The writing in the show was and still is absolutely compelling -it hits the audience with a moral and ethical punch dealing with gray area issues that sometimes cannot be resolved easily with black and white solutions.\r\n\r\nShould you have any questions or concerns, please feel free to reach out to me at any time.\r\n\r\nRegards,\r\n\r\nZander Hawk\r\nSGN Membership Manager\r\nSTO PC Stonewall Fleet - Admiral & Chief of Membership Management\r\nSTO Stonewall PS & XBOX Fleet Administrator\r\nStar Citizen Stonewall Fleet - Fleet Administrator\r\nDiablo IV Order of Stonewall - Clan Leader  \r\n\r\nSTONEWALL GAMING NETWORK\r\nDepartment of Membership Management\r\nSGN Username:  Zander_Hawk@Zander_Hawk\r\nEmail:  zander.hawk@outlook.com\r\nKik:  Zander.Hawk\r\nDiscord:  zander_hawk\r\nSGN website:  http://www.stonewallgaming.net/people/Zander_Hawk\r\nSTO PC:  Zander Hawk@Zander_Hawk\r\nBlizzard ID/BattleTag:  ZanderHawk#1332\r\nSTO PlayStation PSN Online ID:  Zander Hawk@Zander_Hawk\r\nSTO XBOX Gamertag:  Zander Hawk@Zander Hawk\r\nStar Citizen/RSI Handle:  Zander_Hawk\r\nStar Citizen/RSI website:  https://robertsspaceindustries.com/citizens/Zander_Hawk",
                  "alias": "Zander_Hawk",
                  "imageURL": {
                    "small": {
                      "size": {
                        "width": 80,
                        "height": 98
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n43/com_people/avatars/smallc76b8abaa96f6663c405d08293c3f79e.png"
                    },
                    "medium": {
                      "size": {
                        "width": 160,
                        "height": 196
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n43/com_people/avatars/mediumc76b8abaa96f6663c405d08293c3f79e.png"
                    },
                    "large": {
                      "size": {
                        "width": 480,
                        "height": 588
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n43/com_people/avatars/largec76b8abaa96f6663c405d08293c3f79e.png"
                    },
                    "square": {
                      "size": {
                        "width": 56,
                        "height": 56
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n43/com_people/avatars/squarec76b8abaa96f6663c405d08293c3f79e.png"
                    },
                    "original": {
                      "size": {
                        "width": 1021,
                        "height": 1251
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n43/com_people/avatars/originalc76b8abaa96f6663c405d08293c3f79e.png"
                    }
                  },
                  "coverURL": {
                    "small": {
                      "size": {
                        "width": 80,
                        "height": 98
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n43/com_people/covers/smalle606d0a6eee07dd8c63400d0784070ee.jpg"
                    },
                    "medium": {
                      "size": {
                        "width": 160,
                        "height": 196
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n43/com_people/covers/mediume606d0a6eee07dd8c63400d0784070ee.jpg"
                    },
                    "large": {
                      "size": {
                        "width": 480,
                        "height": 588
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n43/com_people/covers/largee606d0a6eee07dd8c63400d0784070ee.jpg"
                    },
                    "square": {
                      "size": {
                        "width": 56,
                        "height": 56
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n43/com_people/covers/squaree606d0a6eee07dd8c63400d0784070ee.jpg"
                    },
                    "original": {
                      "size": {
                        "width": 1021,
                        "height": 1251
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n43/com_people/covers/originale606d0a6eee07dd8c63400d0784070ee.jpg"
                    }
                  },
                  "author": null,
                  "creationTime": "2009-11-17 23:45:56",
                  "editor": null,
                  "updateTime": "2023-12-27 02:46:19",
                  "subscriberCount": 0,
                  "isLeader": true,
                  "isFollower": true,
                  "isBlocked": false,
                  "followerCount": 147,
                  "leaderCount": 129,
                  "mutualCount": 103,
                  "username": "Zander_Hawk",
                  "givenName": "Zander",
                  "familyName": "Hawk",
                  "email": "Zander.Hawk@outlook.com",
                  "usertype": "administrator",
                  "gender": "male"
                },
                "updateTime": "2021-10-20 15:49:16",
                "openToComment": true,
                "numOfComments": 1,
                "lastCommentTime": "2021-11-12 22:41:53",
                "lastComment": {
                  "id": 173890,
                  "objectType": "com.todos.comment",
                  "body": "I've added all these links to the mobile menu.",
                  "author": {
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
                    "leaderCount": 348,
                    "mutualCount": 258,
                    "username": "nicholasjohn16",
                    "givenName": "Nick",
                    "familyName": "Swinford",
                    "email": "nicholasjohn16@gmail.com",
                    "usertype": "super-administrator",
                    "gender": "male"
                  },
                  "creationTime": "2021-11-12 22:41:53",
                  "editor": {
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
                    "leaderCount": 348,
                    "mutualCount": 258,
                    "username": "nicholasjohn16",
                    "givenName": "Nick",
                    "familyName": "Swinford",
                    "email": "nicholasjohn16@gmail.com",
                    "usertype": "super-administrator",
                    "gender": "male"
                  },
                  "updateTime": "2021-11-12 22:41:53",
                  "voteUpCount": 0
                },
                "lastCommenter": {
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
                  "leaderCount": 348,
                  "mutualCount": 258,
                  "username": "nicholasjohn16",
                  "givenName": "Nick",
                  "familyName": "Swinford",
                  "email": "nicholasjohn16@gmail.com",
                  "usertype": "super-administrator",
                  "gender": "male"
                },
                "subscriberCount": 2,
                "voteUpCount": 0,
                "owner": {
                  "id": 4565,
                  "objectType": "com.groups.group",
                  "name": "Stonewall Subroutines",
                  "body": "Need help or found a bug? Feel free to create a topic to report the problem.\r\n\r\nThis group is for people that are interested in programming, looking to help develop and find new ideas for any language. #leadership #sgn",
                  "alias": "stonewall-subroutines",
                  "imageURL": {
                    "small": {
                      "size": {
                        "width": 80,
                        "height": 80
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n4565/com_groups/avatars/smalld651d97c81d41d2843d65afd46d8cdcc.png"
                    },
                    "medium": {
                      "size": {
                        "width": 160,
                        "height": 160
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n4565/com_groups/avatars/mediumd651d97c81d41d2843d65afd46d8cdcc.png"
                    },
                    "large": {
                      "size": {
                        "width": 480,
                        "height": 480
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n4565/com_groups/avatars/larged651d97c81d41d2843d65afd46d8cdcc.png"
                    },
                    "square": {
                      "size": {
                        "width": 56,
                        "height": 56
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n4565/com_groups/avatars/squared651d97c81d41d2843d65afd46d8cdcc.png"
                    },
                    "original": {
                      "size": {
                        "width": 512,
                        "height": 512
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n4565/com_groups/avatars/originald651d97c81d41d2843d65afd46d8cdcc.png"
                    }
                  },
                  "coverURL": [],
                  "author": {
                    "id": 418,
                    "objectType": "com.people.person",
                    "name": "James",
                    "body": "Hello, I'm James. I love star trek and stargate. I also love foreign languages. I am a database technician by day and a student at night- learning programming. I am a complete noob when it comes to this game. STO is my first MMO. I think i made it to admiral by pure luck. But I've been playing all this time by myself and want to start playing now that mission require more than one person ;-;",
                    "alias": "counterjmb",
                    "imageURL": {
                      "small": {
                        "size": {
                          "width": 80,
                          "height": 65
                        },
                        "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n418/com_people/avatars/smallae00d1c64329c0b966828e2dd091acd8.jpg"
                      },
                      "medium": {
                        "size": {
                          "width": 160,
                          "height": 130
                        },
                        "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n418/com_people/avatars/mediumae00d1c64329c0b966828e2dd091acd8.jpg"
                      },
                      "large": {
                        "size": {
                          "width": 160,
                          "height": 130
                        },
                        "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n418/com_people/avatars/largeae00d1c64329c0b966828e2dd091acd8.jpg"
                      },
                      "square": {
                        "size": {
                          "width": 56,
                          "height": 56
                        },
                        "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n418/com_people/avatars/squareae00d1c64329c0b966828e2dd091acd8.jpg"
                      },
                      "original": {
                        "size": {
                          "width": 160,
                          "height": 130
                        },
                        "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n418/com_people/avatars/originalae00d1c64329c0b966828e2dd091acd8.jpg"
                      }
                    },
                    "coverURL": [],
                    "author": null,
                    "creationTime": "2010-08-02 17:23:11",
                    "editor": null,
                    "updateTime": "2016-08-30 17:58:30",
                    "subscriberCount": 0,
                    "isLeader": true,
                    "isFollower": true,
                    "isBlocked": false,
                    "followerCount": 32,
                    "leaderCount": 35,
                    "mutualCount": 32,
                    "username": "counterjmb",
                    "givenName": "James",
                    "familyName": "",
                    "email": "counterjmb@gmail.com",
                    "usertype": "registered",
                    "gender": "male"
                  },
                  "creationTime": "2010-09-03 05:13:39",
                  "editor": {
                    "id": 418,
                    "objectType": "com.people.person",
                    "name": "James",
                    "body": "Hello, I'm James. I love star trek and stargate. I also love foreign languages. I am a database technician by day and a student at night- learning programming. I am a complete noob when it comes to this game. STO is my first MMO. I think i made it to admiral by pure luck. But I've been playing all this time by myself and want to start playing now that mission require more than one person ;-;",
                    "alias": "counterjmb",
                    "imageURL": {
                      "small": {
                        "size": {
                          "width": 80,
                          "height": 65
                        },
                        "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n418/com_people/avatars/smallae00d1c64329c0b966828e2dd091acd8.jpg"
                      },
                      "medium": {
                        "size": {
                          "width": 160,
                          "height": 130
                        },
                        "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n418/com_people/avatars/mediumae00d1c64329c0b966828e2dd091acd8.jpg"
                      },
                      "large": {
                        "size": {
                          "width": 160,
                          "height": 130
                        },
                        "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n418/com_people/avatars/largeae00d1c64329c0b966828e2dd091acd8.jpg"
                      },
                      "square": {
                        "size": {
                          "width": 56,
                          "height": 56
                        },
                        "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n418/com_people/avatars/squareae00d1c64329c0b966828e2dd091acd8.jpg"
                      },
                      "original": {
                        "size": {
                          "width": 160,
                          "height": 130
                        },
                        "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n418/com_people/avatars/originalae00d1c64329c0b966828e2dd091acd8.jpg"
                      }
                    },
                    "coverURL": [],
                    "author": null,
                    "creationTime": "2010-08-02 17:23:11",
                    "editor": null,
                    "updateTime": "2016-08-30 17:58:30",
                    "subscriberCount": 0,
                    "isLeader": true,
                    "isFollower": true,
                    "isBlocked": false,
                    "followerCount": 32,
                    "leaderCount": 35,
                    "mutualCount": 32,
                    "username": "counterjmb",
                    "givenName": "James",
                    "familyName": "",
                    "email": "counterjmb@gmail.com",
                    "usertype": "registered",
                    "gender": "male"
                  },
                  "updateTime": "2010-09-03 05:13:39",
                  "subscriberCount": 13,
                  "isLeader": true,
                  "followerCount": 24,
                  "administratorIds": [
                    "1"
                  ],
                  "isAdministrated": true
                }
              },
              {
                "id": 173292,
                "objectType": "com.todos.todo",
                "name": "Cannot include [Processed] text to title of Welcome Threads/posts",
                "body": "Unable to rename Thread to include a [Processed] text on Thread created within the Start Here!! forum.  [Processed] text is an important indicator to show that a welcome Thread/post was reviewed and processed.  The moderate Thread option allows for the title of the Thread to be renamed so that I can add the text [Processed] however upon saving the updated post it will not commit the update and so it reverts to the original text.   I can edit the member's actual post but not the title of the Thread.",
                "alias": "cannot-include-processed-text-to-title-of-welcome-threads-posts",
                "author": {
                  "id": 43,
                  "objectType": "com.people.person",
                  "name": "Zander Hawk",
                  "body": "Greetings,\r\n\r\nI am the Membership Manager for the Stonewall Gaming Network (SGN) and I am responsible for managing the SGN Membership Management Department.  I have a team of volunteers that are assigned to the department to carry out daily duties; we welcome new members, moderate members that violate the rules, deescalate conflict, ensure that member records are updated, and I send out membership termination notices to members that violate the rules.  I also advise the Community Manager on overall compliance related matters.\r\n\r\nI have been a member of the SGN since November 17, 2009 and the SGN’s Membership Manager since June 2016.  I am proud of providing my time and efforts to the SGN because it is a unique not-for-profit volunteer social club that provides an all-inclusive online social environment for LGBTQ+ gamers across the world.  The SGN features an assortment of computer and console games such as Star Trek Online, Star Wars, Guild Wars II, and other enjoyable games.  What I love the most about the SGN is its ongoing mission to serve as an online social space where members can share their ideas, chat, and discuss game or non-game experiences in a safe and welcoming environment.\r\n\r\nI tend to spend most of my time on Star Trek Online however I do enjoy Diablo III on PlayStation and Final Fantasy.  I love video games because they are the ultimate form of expression that deliver an interactive story, music, visual effects, and other creative elements.  I am a major enthusiast of music, especially Baroque, Classical, and video game/movie scores.   \r\n\r\nI terms of media, I have been a long time fan and student of Star Trek.  Star Trek is an exceptional science fiction television show that embraces diversity and collaboration between people with diverse backgrounds.  The show provides exceptional writing that really compels an audience to confront moral and ethical dilemmas while asking societal and existential questions that delve into the nature of conflict, the meaning of humanity, and the exploration of life.  I have found Star Trek to be a phenomenal show that is extremely rewarding to watch because it compels people to think and appreciate what they have and those around them.  Watching Star Trek: The Next Generation as an adult gave me a more thorough appreciation for it's wonderful storytelling and it's ability to compel an audience to tackle ethical dilemmas.  The writing in the show was and still is absolutely compelling -it hits the audience with a moral and ethical punch dealing with gray area issues that sometimes cannot be resolved easily with black and white solutions.\r\n\r\nShould you have any questions or concerns, please feel free to reach out to me at any time.\r\n\r\nRegards,\r\n\r\nZander Hawk\r\nSGN Membership Manager\r\nSTO PC Stonewall Fleet - Admiral & Chief of Membership Management\r\nSTO Stonewall PS & XBOX Fleet Administrator\r\nStar Citizen Stonewall Fleet - Fleet Administrator\r\nDiablo IV Order of Stonewall - Clan Leader  \r\n\r\nSTONEWALL GAMING NETWORK\r\nDepartment of Membership Management\r\nSGN Username:  Zander_Hawk@Zander_Hawk\r\nEmail:  zander.hawk@outlook.com\r\nKik:  Zander.Hawk\r\nDiscord:  zander_hawk\r\nSGN website:  http://www.stonewallgaming.net/people/Zander_Hawk\r\nSTO PC:  Zander Hawk@Zander_Hawk\r\nBlizzard ID/BattleTag:  ZanderHawk#1332\r\nSTO PlayStation PSN Online ID:  Zander Hawk@Zander_Hawk\r\nSTO XBOX Gamertag:  Zander Hawk@Zander Hawk\r\nStar Citizen/RSI Handle:  Zander_Hawk\r\nStar Citizen/RSI website:  https://robertsspaceindustries.com/citizens/Zander_Hawk",
                  "alias": "Zander_Hawk",
                  "imageURL": {
                    "small": {
                      "size": {
                        "width": 80,
                        "height": 98
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n43/com_people/avatars/smallc76b8abaa96f6663c405d08293c3f79e.png"
                    },
                    "medium": {
                      "size": {
                        "width": 160,
                        "height": 196
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n43/com_people/avatars/mediumc76b8abaa96f6663c405d08293c3f79e.png"
                    },
                    "large": {
                      "size": {
                        "width": 480,
                        "height": 588
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n43/com_people/avatars/largec76b8abaa96f6663c405d08293c3f79e.png"
                    },
                    "square": {
                      "size": {
                        "width": 56,
                        "height": 56
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n43/com_people/avatars/squarec76b8abaa96f6663c405d08293c3f79e.png"
                    },
                    "original": {
                      "size": {
                        "width": 1021,
                        "height": 1251
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n43/com_people/avatars/originalc76b8abaa96f6663c405d08293c3f79e.png"
                    }
                  },
                  "coverURL": {
                    "small": {
                      "size": {
                        "width": 80,
                        "height": 98
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n43/com_people/covers/smalle606d0a6eee07dd8c63400d0784070ee.jpg"
                    },
                    "medium": {
                      "size": {
                        "width": 160,
                        "height": 196
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n43/com_people/covers/mediume606d0a6eee07dd8c63400d0784070ee.jpg"
                    },
                    "large": {
                      "size": {
                        "width": 480,
                        "height": 588
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n43/com_people/covers/largee606d0a6eee07dd8c63400d0784070ee.jpg"
                    },
                    "square": {
                      "size": {
                        "width": 56,
                        "height": 56
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n43/com_people/covers/squaree606d0a6eee07dd8c63400d0784070ee.jpg"
                    },
                    "original": {
                      "size": {
                        "width": 1021,
                        "height": 1251
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n43/com_people/covers/originale606d0a6eee07dd8c63400d0784070ee.jpg"
                    }
                  },
                  "author": null,
                  "creationTime": "2009-11-17 23:45:56",
                  "editor": null,
                  "updateTime": "2023-12-27 02:46:19",
                  "subscriberCount": 0,
                  "isLeader": true,
                  "isFollower": true,
                  "isBlocked": false,
                  "followerCount": 147,
                  "leaderCount": 129,
                  "mutualCount": 103,
                  "username": "Zander_Hawk",
                  "givenName": "Zander",
                  "familyName": "Hawk",
                  "email": "Zander.Hawk@outlook.com",
                  "usertype": "administrator",
                  "gender": "male"
                },
                "creationTime": "2021-10-21 05:35:21",
                "editor": {
                  "id": 43,
                  "objectType": "com.people.person",
                  "name": "Zander Hawk",
                  "body": "Greetings,\r\n\r\nI am the Membership Manager for the Stonewall Gaming Network (SGN) and I am responsible for managing the SGN Membership Management Department.  I have a team of volunteers that are assigned to the department to carry out daily duties; we welcome new members, moderate members that violate the rules, deescalate conflict, ensure that member records are updated, and I send out membership termination notices to members that violate the rules.  I also advise the Community Manager on overall compliance related matters.\r\n\r\nI have been a member of the SGN since November 17, 2009 and the SGN’s Membership Manager since June 2016.  I am proud of providing my time and efforts to the SGN because it is a unique not-for-profit volunteer social club that provides an all-inclusive online social environment for LGBTQ+ gamers across the world.  The SGN features an assortment of computer and console games such as Star Trek Online, Star Wars, Guild Wars II, and other enjoyable games.  What I love the most about the SGN is its ongoing mission to serve as an online social space where members can share their ideas, chat, and discuss game or non-game experiences in a safe and welcoming environment.\r\n\r\nI tend to spend most of my time on Star Trek Online however I do enjoy Diablo III on PlayStation and Final Fantasy.  I love video games because they are the ultimate form of expression that deliver an interactive story, music, visual effects, and other creative elements.  I am a major enthusiast of music, especially Baroque, Classical, and video game/movie scores.   \r\n\r\nI terms of media, I have been a long time fan and student of Star Trek.  Star Trek is an exceptional science fiction television show that embraces diversity and collaboration between people with diverse backgrounds.  The show provides exceptional writing that really compels an audience to confront moral and ethical dilemmas while asking societal and existential questions that delve into the nature of conflict, the meaning of humanity, and the exploration of life.  I have found Star Trek to be a phenomenal show that is extremely rewarding to watch because it compels people to think and appreciate what they have and those around them.  Watching Star Trek: The Next Generation as an adult gave me a more thorough appreciation for it's wonderful storytelling and it's ability to compel an audience to tackle ethical dilemmas.  The writing in the show was and still is absolutely compelling -it hits the audience with a moral and ethical punch dealing with gray area issues that sometimes cannot be resolved easily with black and white solutions.\r\n\r\nShould you have any questions or concerns, please feel free to reach out to me at any time.\r\n\r\nRegards,\r\n\r\nZander Hawk\r\nSGN Membership Manager\r\nSTO PC Stonewall Fleet - Admiral & Chief of Membership Management\r\nSTO Stonewall PS & XBOX Fleet Administrator\r\nStar Citizen Stonewall Fleet - Fleet Administrator\r\nDiablo IV Order of Stonewall - Clan Leader  \r\n\r\nSTONEWALL GAMING NETWORK\r\nDepartment of Membership Management\r\nSGN Username:  Zander_Hawk@Zander_Hawk\r\nEmail:  zander.hawk@outlook.com\r\nKik:  Zander.Hawk\r\nDiscord:  zander_hawk\r\nSGN website:  http://www.stonewallgaming.net/people/Zander_Hawk\r\nSTO PC:  Zander Hawk@Zander_Hawk\r\nBlizzard ID/BattleTag:  ZanderHawk#1332\r\nSTO PlayStation PSN Online ID:  Zander Hawk@Zander_Hawk\r\nSTO XBOX Gamertag:  Zander Hawk@Zander Hawk\r\nStar Citizen/RSI Handle:  Zander_Hawk\r\nStar Citizen/RSI website:  https://robertsspaceindustries.com/citizens/Zander_Hawk",
                  "alias": "Zander_Hawk",
                  "imageURL": {
                    "small": {
                      "size": {
                        "width": 80,
                        "height": 98
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n43/com_people/avatars/smallc76b8abaa96f6663c405d08293c3f79e.png"
                    },
                    "medium": {
                      "size": {
                        "width": 160,
                        "height": 196
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n43/com_people/avatars/mediumc76b8abaa96f6663c405d08293c3f79e.png"
                    },
                    "large": {
                      "size": {
                        "width": 480,
                        "height": 588
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n43/com_people/avatars/largec76b8abaa96f6663c405d08293c3f79e.png"
                    },
                    "square": {
                      "size": {
                        "width": 56,
                        "height": 56
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n43/com_people/avatars/squarec76b8abaa96f6663c405d08293c3f79e.png"
                    },
                    "original": {
                      "size": {
                        "width": 1021,
                        "height": 1251
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n43/com_people/avatars/originalc76b8abaa96f6663c405d08293c3f79e.png"
                    }
                  },
                  "coverURL": {
                    "small": {
                      "size": {
                        "width": 80,
                        "height": 98
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n43/com_people/covers/smalle606d0a6eee07dd8c63400d0784070ee.jpg"
                    },
                    "medium": {
                      "size": {
                        "width": 160,
                        "height": 196
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n43/com_people/covers/mediume606d0a6eee07dd8c63400d0784070ee.jpg"
                    },
                    "large": {
                      "size": {
                        "width": 480,
                        "height": 588
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n43/com_people/covers/largee606d0a6eee07dd8c63400d0784070ee.jpg"
                    },
                    "square": {
                      "size": {
                        "width": 56,
                        "height": 56
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n43/com_people/covers/squaree606d0a6eee07dd8c63400d0784070ee.jpg"
                    },
                    "original": {
                      "size": {
                        "width": 1021,
                        "height": 1251
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n43/com_people/covers/originale606d0a6eee07dd8c63400d0784070ee.jpg"
                    }
                  },
                  "author": null,
                  "creationTime": "2009-11-17 23:45:56",
                  "editor": null,
                  "updateTime": "2023-12-27 02:46:19",
                  "subscriberCount": 0,
                  "isLeader": true,
                  "isFollower": true,
                  "isBlocked": false,
                  "followerCount": 147,
                  "leaderCount": 129,
                  "mutualCount": 103,
                  "username": "Zander_Hawk",
                  "givenName": "Zander",
                  "familyName": "Hawk",
                  "email": "Zander.Hawk@outlook.com",
                  "usertype": "administrator",
                  "gender": "male"
                },
                "updateTime": "2021-10-21 05:41:44",
                "openToComment": true,
                "numOfComments": 2,
                "lastCommentTime": "2021-11-12 22:40:43",
                "lastComment": {
                  "id": 173886,
                  "objectType": "com.todos.comment",
                  "body": "This is all fixed now!",
                  "author": {
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
                    "leaderCount": 348,
                    "mutualCount": 258,
                    "username": "nicholasjohn16",
                    "givenName": "Nick",
                    "familyName": "Swinford",
                    "email": "nicholasjohn16@gmail.com",
                    "usertype": "super-administrator",
                    "gender": "male"
                  },
                  "creationTime": "2021-11-12 22:40:43",
                  "editor": {
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
                    "leaderCount": 348,
                    "mutualCount": 258,
                    "username": "nicholasjohn16",
                    "givenName": "Nick",
                    "familyName": "Swinford",
                    "email": "nicholasjohn16@gmail.com",
                    "usertype": "super-administrator",
                    "gender": "male"
                  },
                  "updateTime": "2021-11-12 22:40:43",
                  "voteUpCount": 0
                },
                "lastCommenter": {
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
                  "leaderCount": 348,
                  "mutualCount": 258,
                  "username": "nicholasjohn16",
                  "givenName": "Nick",
                  "familyName": "Swinford",
                  "email": "nicholasjohn16@gmail.com",
                  "usertype": "super-administrator",
                  "gender": "male"
                },
                "subscriberCount": 2,
                "voteUpCount": 0,
                "owner": {
                  "id": 4565,
                  "objectType": "com.groups.group",
                  "name": "Stonewall Subroutines",
                  "body": "Need help or found a bug? Feel free to create a topic to report the problem.\r\n\r\nThis group is for people that are interested in programming, looking to help develop and find new ideas for any language. #leadership #sgn",
                  "alias": "stonewall-subroutines",
                  "imageURL": {
                    "small": {
                      "size": {
                        "width": 80,
                        "height": 80
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n4565/com_groups/avatars/smalld651d97c81d41d2843d65afd46d8cdcc.png"
                    },
                    "medium": {
                      "size": {
                        "width": 160,
                        "height": 160
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n4565/com_groups/avatars/mediumd651d97c81d41d2843d65afd46d8cdcc.png"
                    },
                    "large": {
                      "size": {
                        "width": 480,
                        "height": 480
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n4565/com_groups/avatars/larged651d97c81d41d2843d65afd46d8cdcc.png"
                    },
                    "square": {
                      "size": {
                        "width": 56,
                        "height": 56
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n4565/com_groups/avatars/squared651d97c81d41d2843d65afd46d8cdcc.png"
                    },
                    "original": {
                      "size": {
                        "width": 512,
                        "height": 512
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n4565/com_groups/avatars/originald651d97c81d41d2843d65afd46d8cdcc.png"
                    }
                  },
                  "coverURL": [],
                  "author": {
                    "id": 418,
                    "objectType": "com.people.person",
                    "name": "James",
                    "body": "Hello, I'm James. I love star trek and stargate. I also love foreign languages. I am a database technician by day and a student at night- learning programming. I am a complete noob when it comes to this game. STO is my first MMO. I think i made it to admiral by pure luck. But I've been playing all this time by myself and want to start playing now that mission require more than one person ;-;",
                    "alias": "counterjmb",
                    "imageURL": {
                      "small": {
                        "size": {
                          "width": 80,
                          "height": 65
                        },
                        "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n418/com_people/avatars/smallae00d1c64329c0b966828e2dd091acd8.jpg"
                      },
                      "medium": {
                        "size": {
                          "width": 160,
                          "height": 130
                        },
                        "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n418/com_people/avatars/mediumae00d1c64329c0b966828e2dd091acd8.jpg"
                      },
                      "large": {
                        "size": {
                          "width": 160,
                          "height": 130
                        },
                        "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n418/com_people/avatars/largeae00d1c64329c0b966828e2dd091acd8.jpg"
                      },
                      "square": {
                        "size": {
                          "width": 56,
                          "height": 56
                        },
                        "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n418/com_people/avatars/squareae00d1c64329c0b966828e2dd091acd8.jpg"
                      },
                      "original": {
                        "size": {
                          "width": 160,
                          "height": 130
                        },
                        "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n418/com_people/avatars/originalae00d1c64329c0b966828e2dd091acd8.jpg"
                      }
                    },
                    "coverURL": [],
                    "author": null,
                    "creationTime": "2010-08-02 17:23:11",
                    "editor": null,
                    "updateTime": "2016-08-30 17:58:30",
                    "subscriberCount": 0,
                    "isLeader": true,
                    "isFollower": true,
                    "isBlocked": false,
                    "followerCount": 32,
                    "leaderCount": 35,
                    "mutualCount": 32,
                    "username": "counterjmb",
                    "givenName": "James",
                    "familyName": "",
                    "email": "counterjmb@gmail.com",
                    "usertype": "registered",
                    "gender": "male"
                  },
                  "creationTime": "2010-09-03 05:13:39",
                  "editor": {
                    "id": 418,
                    "objectType": "com.people.person",
                    "name": "James",
                    "body": "Hello, I'm James. I love star trek and stargate. I also love foreign languages. I am a database technician by day and a student at night- learning programming. I am a complete noob when it comes to this game. STO is my first MMO. I think i made it to admiral by pure luck. But I've been playing all this time by myself and want to start playing now that mission require more than one person ;-;",
                    "alias": "counterjmb",
                    "imageURL": {
                      "small": {
                        "size": {
                          "width": 80,
                          "height": 65
                        },
                        "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n418/com_people/avatars/smallae00d1c64329c0b966828e2dd091acd8.jpg"
                      },
                      "medium": {
                        "size": {
                          "width": 160,
                          "height": 130
                        },
                        "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n418/com_people/avatars/mediumae00d1c64329c0b966828e2dd091acd8.jpg"
                      },
                      "large": {
                        "size": {
                          "width": 160,
                          "height": 130
                        },
                        "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n418/com_people/avatars/largeae00d1c64329c0b966828e2dd091acd8.jpg"
                      },
                      "square": {
                        "size": {
                          "width": 56,
                          "height": 56
                        },
                        "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n418/com_people/avatars/squareae00d1c64329c0b966828e2dd091acd8.jpg"
                      },
                      "original": {
                        "size": {
                          "width": 160,
                          "height": 130
                        },
                        "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n418/com_people/avatars/originalae00d1c64329c0b966828e2dd091acd8.jpg"
                      }
                    },
                    "coverURL": [],
                    "author": null,
                    "creationTime": "2010-08-02 17:23:11",
                    "editor": null,
                    "updateTime": "2016-08-30 17:58:30",
                    "subscriberCount": 0,
                    "isLeader": true,
                    "isFollower": true,
                    "isBlocked": false,
                    "followerCount": 32,
                    "leaderCount": 35,
                    "mutualCount": 32,
                    "username": "counterjmb",
                    "givenName": "James",
                    "familyName": "",
                    "email": "counterjmb@gmail.com",
                    "usertype": "registered",
                    "gender": "male"
                  },
                  "updateTime": "2010-09-03 05:13:39",
                  "subscriberCount": 13,
                  "isLeader": true,
                  "followerCount": 24,
                  "administratorIds": [
                    "1"
                  ],
                  "isAdministrated": true
                }
              },
              {
                "id": 173607,
                "objectType": "com.todos.todo",
                "name": "Event iCal feed not working?",
                "body": "Events no longer appears in my Google Calendar",
                "alias": "event-ical-feed-not-working",
                "author": {
                  "id": 1555,
                  "objectType": "com.people.person",
                  "name": "Cal",
                  "body": "Cal was born on Trill, a shy guy who failed the joining and so his parents left for Earth and enrolled him in Starfleet. Cal struggled the Academy as he was too busy playing Angry Vulcans on his PADD.\r\n\r\nINFJ, searching for his soulmate, to be alone together pew pewing :)\r\n\r\nTweet me @CastleGayskull",
                  "alias": "calx",
                  "imageURL": {
                    "small": {
                      "size": {
                        "width": 80,
                        "height": 80
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n1555/com_people/avatars/small575c3061b1107b47ae35bf38708142d9.png"
                    },
                    "medium": {
                      "size": {
                        "width": 160,
                        "height": 160
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n1555/com_people/avatars/medium575c3061b1107b47ae35bf38708142d9.png"
                    },
                    "large": {
                      "size": {
                        "width": 400,
                        "height": 400
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n1555/com_people/avatars/large575c3061b1107b47ae35bf38708142d9.png"
                    },
                    "square": {
                      "size": {
                        "width": 56,
                        "height": 56
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n1555/com_people/avatars/square575c3061b1107b47ae35bf38708142d9.png"
                    },
                    "original": {
                      "size": {
                        "width": 400,
                        "height": 400
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n1555/com_people/avatars/original575c3061b1107b47ae35bf38708142d9.png"
                    }
                  },
                  "coverURL": {
                    "small": {
                      "size": {
                        "width": 80,
                        "height": 80
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n1555/com_people/covers/small2d2e94ba638270cf3baa2e31363460c5.png"
                    },
                    "medium": {
                      "size": {
                        "width": 160,
                        "height": 160
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n1555/com_people/covers/medium2d2e94ba638270cf3baa2e31363460c5.png"
                    },
                    "large": {
                      "size": {
                        "width": 400,
                        "height": 400
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n1555/com_people/covers/large2d2e94ba638270cf3baa2e31363460c5.png"
                    },
                    "square": {
                      "size": {
                        "width": 56,
                        "height": 56
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n1555/com_people/covers/square2d2e94ba638270cf3baa2e31363460c5.png"
                    },
                    "original": {
                      "size": {
                        "width": 400,
                        "height": 400
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n1555/com_people/covers/original2d2e94ba638270cf3baa2e31363460c5.png"
                    }
                  },
                  "author": null,
                  "creationTime": "2012-04-09 00:14:30",
                  "editor": null,
                  "updateTime": "2020-12-14 17:09:03",
                  "subscriberCount": 0,
                  "isLeader": true,
                  "isFollower": true,
                  "isBlocked": false,
                  "followerCount": 94,
                  "leaderCount": 208,
                  "mutualCount": 88,
                  "username": "calx",
                  "givenName": "Cal",
                  "familyName": "",
                  "email": "callunx@gmail.com",
                  "usertype": "registered",
                  "gender": "male"
                },
                "creationTime": "2021-11-05 15:21:43",
                "editor": {
                  "id": 1555,
                  "objectType": "com.people.person",
                  "name": "Cal",
                  "body": "Cal was born on Trill, a shy guy who failed the joining and so his parents left for Earth and enrolled him in Starfleet. Cal struggled the Academy as he was too busy playing Angry Vulcans on his PADD.\r\n\r\nINFJ, searching for his soulmate, to be alone together pew pewing :)\r\n\r\nTweet me @CastleGayskull",
                  "alias": "calx",
                  "imageURL": {
                    "small": {
                      "size": {
                        "width": 80,
                        "height": 80
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n1555/com_people/avatars/small575c3061b1107b47ae35bf38708142d9.png"
                    },
                    "medium": {
                      "size": {
                        "width": 160,
                        "height": 160
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n1555/com_people/avatars/medium575c3061b1107b47ae35bf38708142d9.png"
                    },
                    "large": {
                      "size": {
                        "width": 400,
                        "height": 400
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n1555/com_people/avatars/large575c3061b1107b47ae35bf38708142d9.png"
                    },
                    "square": {
                      "size": {
                        "width": 56,
                        "height": 56
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n1555/com_people/avatars/square575c3061b1107b47ae35bf38708142d9.png"
                    },
                    "original": {
                      "size": {
                        "width": 400,
                        "height": 400
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n1555/com_people/avatars/original575c3061b1107b47ae35bf38708142d9.png"
                    }
                  },
                  "coverURL": {
                    "small": {
                      "size": {
                        "width": 80,
                        "height": 80
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n1555/com_people/covers/small2d2e94ba638270cf3baa2e31363460c5.png"
                    },
                    "medium": {
                      "size": {
                        "width": 160,
                        "height": 160
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n1555/com_people/covers/medium2d2e94ba638270cf3baa2e31363460c5.png"
                    },
                    "large": {
                      "size": {
                        "width": 400,
                        "height": 400
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n1555/com_people/covers/large2d2e94ba638270cf3baa2e31363460c5.png"
                    },
                    "square": {
                      "size": {
                        "width": 56,
                        "height": 56
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n1555/com_people/covers/square2d2e94ba638270cf3baa2e31363460c5.png"
                    },
                    "original": {
                      "size": {
                        "width": 400,
                        "height": 400
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n1555/com_people/covers/original2d2e94ba638270cf3baa2e31363460c5.png"
                    }
                  },
                  "author": null,
                  "creationTime": "2012-04-09 00:14:30",
                  "editor": null,
                  "updateTime": "2020-12-14 17:09:03",
                  "subscriberCount": 0,
                  "isLeader": true,
                  "isFollower": true,
                  "isBlocked": false,
                  "followerCount": 94,
                  "leaderCount": 208,
                  "mutualCount": 88,
                  "username": "calx",
                  "givenName": "Cal",
                  "familyName": "",
                  "email": "callunx@gmail.com",
                  "usertype": "registered",
                  "gender": "male"
                },
                "updateTime": "2021-11-05 15:21:43",
                "openToComment": true,
                "numOfComments": 1,
                "lastCommentTime": "2021-11-05 15:24:50",
                "lastComment": {
                  "id": 173609,
                  "objectType": "com.todos.comment",
                  "body": "Disregard - resubscribed to new www link and now works again",
                  "author": {
                    "id": 1555,
                    "objectType": "com.people.person",
                    "name": "Cal",
                    "body": "Cal was born on Trill, a shy guy who failed the joining and so his parents left for Earth and enrolled him in Starfleet. Cal struggled the Academy as he was too busy playing Angry Vulcans on his PADD.\r\n\r\nINFJ, searching for his soulmate, to be alone together pew pewing :)\r\n\r\nTweet me @CastleGayskull",
                    "alias": "calx",
                    "imageURL": {
                      "small": {
                        "size": {
                          "width": 80,
                          "height": 80
                        },
                        "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n1555/com_people/avatars/small575c3061b1107b47ae35bf38708142d9.png"
                      },
                      "medium": {
                        "size": {
                          "width": 160,
                          "height": 160
                        },
                        "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n1555/com_people/avatars/medium575c3061b1107b47ae35bf38708142d9.png"
                      },
                      "large": {
                        "size": {
                          "width": 400,
                          "height": 400
                        },
                        "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n1555/com_people/avatars/large575c3061b1107b47ae35bf38708142d9.png"
                      },
                      "square": {
                        "size": {
                          "width": 56,
                          "height": 56
                        },
                        "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n1555/com_people/avatars/square575c3061b1107b47ae35bf38708142d9.png"
                      },
                      "original": {
                        "size": {
                          "width": 400,
                          "height": 400
                        },
                        "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n1555/com_people/avatars/original575c3061b1107b47ae35bf38708142d9.png"
                      }
                    },
                    "coverURL": {
                      "small": {
                        "size": {
                          "width": 80,
                          "height": 80
                        },
                        "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n1555/com_people/covers/small2d2e94ba638270cf3baa2e31363460c5.png"
                      },
                      "medium": {
                        "size": {
                          "width": 160,
                          "height": 160
                        },
                        "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n1555/com_people/covers/medium2d2e94ba638270cf3baa2e31363460c5.png"
                      },
                      "large": {
                        "size": {
                          "width": 400,
                          "height": 400
                        },
                        "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n1555/com_people/covers/large2d2e94ba638270cf3baa2e31363460c5.png"
                      },
                      "square": {
                        "size": {
                          "width": 56,
                          "height": 56
                        },
                        "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n1555/com_people/covers/square2d2e94ba638270cf3baa2e31363460c5.png"
                      },
                      "original": {
                        "size": {
                          "width": 400,
                          "height": 400
                        },
                        "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n1555/com_people/covers/original2d2e94ba638270cf3baa2e31363460c5.png"
                      }
                    },
                    "author": null,
                    "creationTime": "2012-04-09 00:14:30",
                    "editor": null,
                    "updateTime": "2020-12-14 17:09:03",
                    "subscriberCount": 0,
                    "isLeader": true,
                    "isFollower": true,
                    "isBlocked": false,
                    "followerCount": 94,
                    "leaderCount": 208,
                    "mutualCount": 88,
                    "username": "calx",
                    "givenName": "Cal",
                    "familyName": "",
                    "email": "callunx@gmail.com",
                    "usertype": "registered",
                    "gender": "male"
                  },
                  "creationTime": "2021-11-05 15:24:50",
                  "editor": {
                    "id": 1555,
                    "objectType": "com.people.person",
                    "name": "Cal",
                    "body": "Cal was born on Trill, a shy guy who failed the joining and so his parents left for Earth and enrolled him in Starfleet. Cal struggled the Academy as he was too busy playing Angry Vulcans on his PADD.\r\n\r\nINFJ, searching for his soulmate, to be alone together pew pewing :)\r\n\r\nTweet me @CastleGayskull",
                    "alias": "calx",
                    "imageURL": {
                      "small": {
                        "size": {
                          "width": 80,
                          "height": 80
                        },
                        "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n1555/com_people/avatars/small575c3061b1107b47ae35bf38708142d9.png"
                      },
                      "medium": {
                        "size": {
                          "width": 160,
                          "height": 160
                        },
                        "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n1555/com_people/avatars/medium575c3061b1107b47ae35bf38708142d9.png"
                      },
                      "large": {
                        "size": {
                          "width": 400,
                          "height": 400
                        },
                        "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n1555/com_people/avatars/large575c3061b1107b47ae35bf38708142d9.png"
                      },
                      "square": {
                        "size": {
                          "width": 56,
                          "height": 56
                        },
                        "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n1555/com_people/avatars/square575c3061b1107b47ae35bf38708142d9.png"
                      },
                      "original": {
                        "size": {
                          "width": 400,
                          "height": 400
                        },
                        "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n1555/com_people/avatars/original575c3061b1107b47ae35bf38708142d9.png"
                      }
                    },
                    "coverURL": {
                      "small": {
                        "size": {
                          "width": 80,
                          "height": 80
                        },
                        "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n1555/com_people/covers/small2d2e94ba638270cf3baa2e31363460c5.png"
                      },
                      "medium": {
                        "size": {
                          "width": 160,
                          "height": 160
                        },
                        "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n1555/com_people/covers/medium2d2e94ba638270cf3baa2e31363460c5.png"
                      },
                      "large": {
                        "size": {
                          "width": 400,
                          "height": 400
                        },
                        "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n1555/com_people/covers/large2d2e94ba638270cf3baa2e31363460c5.png"
                      },
                      "square": {
                        "size": {
                          "width": 56,
                          "height": 56
                        },
                        "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n1555/com_people/covers/square2d2e94ba638270cf3baa2e31363460c5.png"
                      },
                      "original": {
                        "size": {
                          "width": 400,
                          "height": 400
                        },
                        "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n1555/com_people/covers/original2d2e94ba638270cf3baa2e31363460c5.png"
                      }
                    },
                    "author": null,
                    "creationTime": "2012-04-09 00:14:30",
                    "editor": null,
                    "updateTime": "2020-12-14 17:09:03",
                    "subscriberCount": 0,
                    "isLeader": true,
                    "isFollower": true,
                    "isBlocked": false,
                    "followerCount": 94,
                    "leaderCount": 208,
                    "mutualCount": 88,
                    "username": "calx",
                    "givenName": "Cal",
                    "familyName": "",
                    "email": "callunx@gmail.com",
                    "usertype": "registered",
                    "gender": "male"
                  },
                  "updateTime": "2021-11-05 15:24:50",
                  "voteUpCount": 0
                },
                "lastCommenter": {
                  "id": 1555,
                  "objectType": "com.people.person",
                  "name": "Cal",
                  "body": "Cal was born on Trill, a shy guy who failed the joining and so his parents left for Earth and enrolled him in Starfleet. Cal struggled the Academy as he was too busy playing Angry Vulcans on his PADD.\r\n\r\nINFJ, searching for his soulmate, to be alone together pew pewing :)\r\n\r\nTweet me @CastleGayskull",
                  "alias": "calx",
                  "imageURL": {
                    "small": {
                      "size": {
                        "width": 80,
                        "height": 80
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n1555/com_people/avatars/small575c3061b1107b47ae35bf38708142d9.png"
                    },
                    "medium": {
                      "size": {
                        "width": 160,
                        "height": 160
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n1555/com_people/avatars/medium575c3061b1107b47ae35bf38708142d9.png"
                    },
                    "large": {
                      "size": {
                        "width": 400,
                        "height": 400
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n1555/com_people/avatars/large575c3061b1107b47ae35bf38708142d9.png"
                    },
                    "square": {
                      "size": {
                        "width": 56,
                        "height": 56
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n1555/com_people/avatars/square575c3061b1107b47ae35bf38708142d9.png"
                    },
                    "original": {
                      "size": {
                        "width": 400,
                        "height": 400
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n1555/com_people/avatars/original575c3061b1107b47ae35bf38708142d9.png"
                    }
                  },
                  "coverURL": {
                    "small": {
                      "size": {
                        "width": 80,
                        "height": 80
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n1555/com_people/covers/small2d2e94ba638270cf3baa2e31363460c5.png"
                    },
                    "medium": {
                      "size": {
                        "width": 160,
                        "height": 160
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n1555/com_people/covers/medium2d2e94ba638270cf3baa2e31363460c5.png"
                    },
                    "large": {
                      "size": {
                        "width": 400,
                        "height": 400
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n1555/com_people/covers/large2d2e94ba638270cf3baa2e31363460c5.png"
                    },
                    "square": {
                      "size": {
                        "width": 56,
                        "height": 56
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n1555/com_people/covers/square2d2e94ba638270cf3baa2e31363460c5.png"
                    },
                    "original": {
                      "size": {
                        "width": 400,
                        "height": 400
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n1555/com_people/covers/original2d2e94ba638270cf3baa2e31363460c5.png"
                    }
                  },
                  "author": null,
                  "creationTime": "2012-04-09 00:14:30",
                  "editor": null,
                  "updateTime": "2020-12-14 17:09:03",
                  "subscriberCount": 0,
                  "isLeader": true,
                  "isFollower": true,
                  "isBlocked": false,
                  "followerCount": 94,
                  "leaderCount": 208,
                  "mutualCount": 88,
                  "username": "calx",
                  "givenName": "Cal",
                  "familyName": "",
                  "email": "callunx@gmail.com",
                  "usertype": "registered",
                  "gender": "male"
                },
                "subscriberCount": 1,
                "voteUpCount": 0,
                "owner": {
                  "id": 4565,
                  "objectType": "com.groups.group",
                  "name": "Stonewall Subroutines",
                  "body": "Need help or found a bug? Feel free to create a topic to report the problem.\r\n\r\nThis group is for people that are interested in programming, looking to help develop and find new ideas for any language. #leadership #sgn",
                  "alias": "stonewall-subroutines",
                  "imageURL": {
                    "small": {
                      "size": {
                        "width": 80,
                        "height": 80
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n4565/com_groups/avatars/smalld651d97c81d41d2843d65afd46d8cdcc.png"
                    },
                    "medium": {
                      "size": {
                        "width": 160,
                        "height": 160
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n4565/com_groups/avatars/mediumd651d97c81d41d2843d65afd46d8cdcc.png"
                    },
                    "large": {
                      "size": {
                        "width": 480,
                        "height": 480
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n4565/com_groups/avatars/larged651d97c81d41d2843d65afd46d8cdcc.png"
                    },
                    "square": {
                      "size": {
                        "width": 56,
                        "height": 56
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n4565/com_groups/avatars/squared651d97c81d41d2843d65afd46d8cdcc.png"
                    },
                    "original": {
                      "size": {
                        "width": 512,
                        "height": 512
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n4565/com_groups/avatars/originald651d97c81d41d2843d65afd46d8cdcc.png"
                    }
                  },
                  "coverURL": [],
                  "author": {
                    "id": 418,
                    "objectType": "com.people.person",
                    "name": "James",
                    "body": "Hello, I'm James. I love star trek and stargate. I also love foreign languages. I am a database technician by day and a student at night- learning programming. I am a complete noob when it comes to this game. STO is my first MMO. I think i made it to admiral by pure luck. But I've been playing all this time by myself and want to start playing now that mission require more than one person ;-;",
                    "alias": "counterjmb",
                    "imageURL": {
                      "small": {
                        "size": {
                          "width": 80,
                          "height": 65
                        },
                        "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n418/com_people/avatars/smallae00d1c64329c0b966828e2dd091acd8.jpg"
                      },
                      "medium": {
                        "size": {
                          "width": 160,
                          "height": 130
                        },
                        "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n418/com_people/avatars/mediumae00d1c64329c0b966828e2dd091acd8.jpg"
                      },
                      "large": {
                        "size": {
                          "width": 160,
                          "height": 130
                        },
                        "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n418/com_people/avatars/largeae00d1c64329c0b966828e2dd091acd8.jpg"
                      },
                      "square": {
                        "size": {
                          "width": 56,
                          "height": 56
                        },
                        "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n418/com_people/avatars/squareae00d1c64329c0b966828e2dd091acd8.jpg"
                      },
                      "original": {
                        "size": {
                          "width": 160,
                          "height": 130
                        },
                        "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n418/com_people/avatars/originalae00d1c64329c0b966828e2dd091acd8.jpg"
                      }
                    },
                    "coverURL": [],
                    "author": null,
                    "creationTime": "2010-08-02 17:23:11",
                    "editor": null,
                    "updateTime": "2016-08-30 17:58:30",
                    "subscriberCount": 0,
                    "isLeader": true,
                    "isFollower": true,
                    "isBlocked": false,
                    "followerCount": 32,
                    "leaderCount": 35,
                    "mutualCount": 32,
                    "username": "counterjmb",
                    "givenName": "James",
                    "familyName": "",
                    "email": "counterjmb@gmail.com",
                    "usertype": "registered",
                    "gender": "male"
                  },
                  "creationTime": "2010-09-03 05:13:39",
                  "editor": {
                    "id": 418,
                    "objectType": "com.people.person",
                    "name": "James",
                    "body": "Hello, I'm James. I love star trek and stargate. I also love foreign languages. I am a database technician by day and a student at night- learning programming. I am a complete noob when it comes to this game. STO is my first MMO. I think i made it to admiral by pure luck. But I've been playing all this time by myself and want to start playing now that mission require more than one person ;-;",
                    "alias": "counterjmb",
                    "imageURL": {
                      "small": {
                        "size": {
                          "width": 80,
                          "height": 65
                        },
                        "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n418/com_people/avatars/smallae00d1c64329c0b966828e2dd091acd8.jpg"
                      },
                      "medium": {
                        "size": {
                          "width": 160,
                          "height": 130
                        },
                        "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n418/com_people/avatars/mediumae00d1c64329c0b966828e2dd091acd8.jpg"
                      },
                      "large": {
                        "size": {
                          "width": 160,
                          "height": 130
                        },
                        "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n418/com_people/avatars/largeae00d1c64329c0b966828e2dd091acd8.jpg"
                      },
                      "square": {
                        "size": {
                          "width": 56,
                          "height": 56
                        },
                        "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n418/com_people/avatars/squareae00d1c64329c0b966828e2dd091acd8.jpg"
                      },
                      "original": {
                        "size": {
                          "width": 160,
                          "height": 130
                        },
                        "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n418/com_people/avatars/originalae00d1c64329c0b966828e2dd091acd8.jpg"
                      }
                    },
                    "coverURL": [],
                    "author": null,
                    "creationTime": "2010-08-02 17:23:11",
                    "editor": null,
                    "updateTime": "2016-08-30 17:58:30",
                    "subscriberCount": 0,
                    "isLeader": true,
                    "isFollower": true,
                    "isBlocked": false,
                    "followerCount": 32,
                    "leaderCount": 35,
                    "mutualCount": 32,
                    "username": "counterjmb",
                    "givenName": "James",
                    "familyName": "",
                    "email": "counterjmb@gmail.com",
                    "usertype": "registered",
                    "gender": "male"
                  },
                  "updateTime": "2010-09-03 05:13:39",
                  "subscriberCount": 13,
                  "isLeader": true,
                  "followerCount": 24,
                  "administratorIds": [
                    "1"
                  ],
                  "isAdministrated": true
                }
              }
            ],
            "creationTime": "2021-11-12 22:41:55",
            "commands": [
              "delete"
            ]
          }
    }
}