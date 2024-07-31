import { Title, Body } from './todo_enable';
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
            "id": 173573,
            "component": "com_todos",
            "name": "todo_enable",
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
            "creationTime": "2021-11-03 06:43:58",
            "commands": [
              "vote",
              "comment",
              "delete"
            ]
          }
    }
}