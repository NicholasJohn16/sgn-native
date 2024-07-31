import { Title, Body } from './todo_comment';
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
            "id": 175477,
            "component": "com_todos",
            "name": "todo_comment",
            "subject": {
              "id": 159996,
              "objectType": "com.people.person",
              "name": "Joshua Lee",
              "body": "Hello! I'm Josh, 30, and I'm from Scotland! I live with my partner of 11 years, as well as our German Shepherd and cat. I love languages and music, and I'm currently studying for a degree in Cyber Security!\r\n\r\nYou'll usually find me on discord, hanging out in the voice channels and playing Dead by Daylight, Fortnite, Overwatch and STO, although I'm known for playing every game under the sun.",
              "alias": "JoystickJoshy",
              "imageURL": {
                "small": {
                  "size": {
                    "width": 80,
                    "height": 125
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n159996/com_people/avatars/small11a063003236ccea225649f5f09da1c7.jpg"
                },
                "medium": {
                  "size": {
                    "width": 160,
                    "height": 250
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n159996/com_people/avatars/medium11a063003236ccea225649f5f09da1c7.jpg"
                },
                "large": {
                  "size": {
                    "width": 480,
                    "height": 750
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n159996/com_people/avatars/large11a063003236ccea225649f5f09da1c7.jpg"
                },
                "square": {
                  "size": {
                    "width": 56,
                    "height": 56
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n159996/com_people/avatars/square11a063003236ccea225649f5f09da1c7.jpg"
                },
                "original": {
                  "size": {
                    "width": 2581,
                    "height": 4032
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n159996/com_people/avatars/original11a063003236ccea225649f5f09da1c7.jpg"
                }
              },
              "coverURL": {
                "small": {
                  "size": {
                    "width": 80,
                    "height": 125
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n159996/com_people/covers/smalld88200cfea7daa144b48a50836ec600b.jpg"
                },
                "medium": {
                  "size": {
                    "width": 160,
                    "height": 250
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n159996/com_people/covers/mediumd88200cfea7daa144b48a50836ec600b.jpg"
                },
                "large": {
                  "size": {
                    "width": 480,
                    "height": 750
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n159996/com_people/covers/larged88200cfea7daa144b48a50836ec600b.jpg"
                },
                "square": {
                  "size": {
                    "width": 56,
                    "height": 56
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n159996/com_people/covers/squared88200cfea7daa144b48a50836ec600b.jpg"
                },
                "original": {
                  "size": {
                    "width": 2581,
                    "height": 4032
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n159996/com_people/covers/originald88200cfea7daa144b48a50836ec600b.jpg"
                }
              },
              "author": null,
              "creationTime": "2020-07-14 13:18:45",
              "editor": null,
              "updateTime": "2021-07-09 01:25:15",
              "subscriberCount": 0,
              "isLeader": true,
              "isFollower": true,
              "isBlocked": false,
              "followerCount": 10,
              "leaderCount": 67,
              "mutualCount": 9,
              "username": "JoystickJoshy",
              "givenName": "Joshua",
              "familyName": "Lee",
              "email": "joshuajohnlee@me.com",
              "usertype": "registered",
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
              "id": 175474,
              "objectType": "com.todos.todo",
              "name": "Using \"",
              "body": "Was trying to type \"",
              "alias": "using",
              "author": {
                "id": 159996,
                "objectType": "com.people.person",
                "name": "Joshua Lee",
                "body": "Hello! I'm Josh, 30, and I'm from Scotland! I live with my partner of 11 years, as well as our German Shepherd and cat. I love languages and music, and I'm currently studying for a degree in Cyber Security!\r\n\r\nYou'll usually find me on discord, hanging out in the voice channels and playing Dead by Daylight, Fortnite, Overwatch and STO, although I'm known for playing every game under the sun.",
                "alias": "JoystickJoshy",
                "imageURL": {
                  "small": {
                    "size": {
                      "width": 80,
                      "height": 125
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n159996/com_people/avatars/small11a063003236ccea225649f5f09da1c7.jpg"
                  },
                  "medium": {
                    "size": {
                      "width": 160,
                      "height": 250
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n159996/com_people/avatars/medium11a063003236ccea225649f5f09da1c7.jpg"
                  },
                  "large": {
                    "size": {
                      "width": 480,
                      "height": 750
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n159996/com_people/avatars/large11a063003236ccea225649f5f09da1c7.jpg"
                  },
                  "square": {
                    "size": {
                      "width": 56,
                      "height": 56
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n159996/com_people/avatars/square11a063003236ccea225649f5f09da1c7.jpg"
                  },
                  "original": {
                    "size": {
                      "width": 2581,
                      "height": 4032
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n159996/com_people/avatars/original11a063003236ccea225649f5f09da1c7.jpg"
                  }
                },
                "coverURL": {
                  "small": {
                    "size": {
                      "width": 80,
                      "height": 125
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n159996/com_people/covers/smalld88200cfea7daa144b48a50836ec600b.jpg"
                  },
                  "medium": {
                    "size": {
                      "width": 160,
                      "height": 250
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n159996/com_people/covers/mediumd88200cfea7daa144b48a50836ec600b.jpg"
                  },
                  "large": {
                    "size": {
                      "width": 480,
                      "height": 750
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n159996/com_people/covers/larged88200cfea7daa144b48a50836ec600b.jpg"
                  },
                  "square": {
                    "size": {
                      "width": 56,
                      "height": 56
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n159996/com_people/covers/squared88200cfea7daa144b48a50836ec600b.jpg"
                  },
                  "original": {
                    "size": {
                      "width": 2581,
                      "height": 4032
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n159996/com_people/covers/originald88200cfea7daa144b48a50836ec600b.jpg"
                  }
                },
                "author": null,
                "creationTime": "2020-07-14 13:18:45",
                "editor": null,
                "updateTime": "2021-07-09 01:25:15",
                "subscriberCount": 0,
                "isLeader": true,
                "isFollower": true,
                "isBlocked": false,
                "followerCount": 10,
                "leaderCount": 67,
                "mutualCount": 9,
                "username": "JoystickJoshy",
                "givenName": "Joshua",
                "familyName": "Lee",
                "email": "joshuajohnlee@me.com",
                "usertype": "registered",
                "gender": "male"
              },
              "creationTime": "2022-04-03 11:40:13",
              "editor": {
                "id": 159996,
                "objectType": "com.people.person",
                "name": "Joshua Lee",
                "body": "Hello! I'm Josh, 30, and I'm from Scotland! I live with my partner of 11 years, as well as our German Shepherd and cat. I love languages and music, and I'm currently studying for a degree in Cyber Security!\r\n\r\nYou'll usually find me on discord, hanging out in the voice channels and playing Dead by Daylight, Fortnite, Overwatch and STO, although I'm known for playing every game under the sun.",
                "alias": "JoystickJoshy",
                "imageURL": {
                  "small": {
                    "size": {
                      "width": 80,
                      "height": 125
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n159996/com_people/avatars/small11a063003236ccea225649f5f09da1c7.jpg"
                  },
                  "medium": {
                    "size": {
                      "width": 160,
                      "height": 250
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n159996/com_people/avatars/medium11a063003236ccea225649f5f09da1c7.jpg"
                  },
                  "large": {
                    "size": {
                      "width": 480,
                      "height": 750
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n159996/com_people/avatars/large11a063003236ccea225649f5f09da1c7.jpg"
                  },
                  "square": {
                    "size": {
                      "width": 56,
                      "height": 56
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n159996/com_people/avatars/square11a063003236ccea225649f5f09da1c7.jpg"
                  },
                  "original": {
                    "size": {
                      "width": 2581,
                      "height": 4032
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n159996/com_people/avatars/original11a063003236ccea225649f5f09da1c7.jpg"
                  }
                },
                "coverURL": {
                  "small": {
                    "size": {
                      "width": 80,
                      "height": 125
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n159996/com_people/covers/smalld88200cfea7daa144b48a50836ec600b.jpg"
                  },
                  "medium": {
                    "size": {
                      "width": 160,
                      "height": 250
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n159996/com_people/covers/mediumd88200cfea7daa144b48a50836ec600b.jpg"
                  },
                  "large": {
                    "size": {
                      "width": 480,
                      "height": 750
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n159996/com_people/covers/larged88200cfea7daa144b48a50836ec600b.jpg"
                  },
                  "square": {
                    "size": {
                      "width": 56,
                      "height": 56
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n159996/com_people/covers/squared88200cfea7daa144b48a50836ec600b.jpg"
                  },
                  "original": {
                    "size": {
                      "width": 2581,
                      "height": 4032
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n159996/com_people/covers/originald88200cfea7daa144b48a50836ec600b.jpg"
                  }
                },
                "author": null,
                "creationTime": "2020-07-14 13:18:45",
                "editor": null,
                "updateTime": "2021-07-09 01:25:15",
                "subscriberCount": 0,
                "isLeader": true,
                "isFollower": true,
                "isBlocked": false,
                "followerCount": 10,
                "leaderCount": 67,
                "mutualCount": 9,
                "username": "JoystickJoshy",
                "givenName": "Joshua",
                "familyName": "Lee",
                "email": "joshuajohnlee@me.com",
                "usertype": "registered",
                "gender": "male"
              },
              "updateTime": "2022-04-03 11:40:13",
              "openToComment": true,
              "numOfComments": 1,
              "lastCommentTime": "2022-04-03 11:41:28",
              "lastComment": {
                "id": 175476,
                "objectType": "com.todos.comment",
                "body": "Okay it happens here too! haha. Using a \"less than\" sign causes messages to truncate. Was trying to type a heart with \"less than three\" but realised it truncates everything after it. Perhaps needs to be escaped/sanitised somehow?",
                "author": {
                  "id": 159996,
                  "objectType": "com.people.person",
                  "name": "Joshua Lee",
                  "body": "Hello! I'm Josh, 30, and I'm from Scotland! I live with my partner of 11 years, as well as our German Shepherd and cat. I love languages and music, and I'm currently studying for a degree in Cyber Security!\r\n\r\nYou'll usually find me on discord, hanging out in the voice channels and playing Dead by Daylight, Fortnite, Overwatch and STO, although I'm known for playing every game under the sun.",
                  "alias": "JoystickJoshy",
                  "imageURL": {
                    "small": {
                      "size": {
                        "width": 80,
                        "height": 125
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n159996/com_people/avatars/small11a063003236ccea225649f5f09da1c7.jpg"
                    },
                    "medium": {
                      "size": {
                        "width": 160,
                        "height": 250
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n159996/com_people/avatars/medium11a063003236ccea225649f5f09da1c7.jpg"
                    },
                    "large": {
                      "size": {
                        "width": 480,
                        "height": 750
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n159996/com_people/avatars/large11a063003236ccea225649f5f09da1c7.jpg"
                    },
                    "square": {
                      "size": {
                        "width": 56,
                        "height": 56
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n159996/com_people/avatars/square11a063003236ccea225649f5f09da1c7.jpg"
                    },
                    "original": {
                      "size": {
                        "width": 2581,
                        "height": 4032
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n159996/com_people/avatars/original11a063003236ccea225649f5f09da1c7.jpg"
                    }
                  },
                  "coverURL": {
                    "small": {
                      "size": {
                        "width": 80,
                        "height": 125
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n159996/com_people/covers/smalld88200cfea7daa144b48a50836ec600b.jpg"
                    },
                    "medium": {
                      "size": {
                        "width": 160,
                        "height": 250
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n159996/com_people/covers/mediumd88200cfea7daa144b48a50836ec600b.jpg"
                    },
                    "large": {
                      "size": {
                        "width": 480,
                        "height": 750
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n159996/com_people/covers/larged88200cfea7daa144b48a50836ec600b.jpg"
                    },
                    "square": {
                      "size": {
                        "width": 56,
                        "height": 56
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n159996/com_people/covers/squared88200cfea7daa144b48a50836ec600b.jpg"
                    },
                    "original": {
                      "size": {
                        "width": 2581,
                        "height": 4032
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n159996/com_people/covers/originald88200cfea7daa144b48a50836ec600b.jpg"
                    }
                  },
                  "author": null,
                  "creationTime": "2020-07-14 13:18:45",
                  "editor": null,
                  "updateTime": "2021-07-09 01:25:15",
                  "subscriberCount": 0,
                  "isLeader": true,
                  "isFollower": true,
                  "isBlocked": false,
                  "followerCount": 10,
                  "leaderCount": 67,
                  "mutualCount": 9,
                  "username": "JoystickJoshy",
                  "givenName": "Joshua",
                  "familyName": "Lee",
                  "email": "joshuajohnlee@me.com",
                  "usertype": "registered",
                  "gender": "male"
                },
                "creationTime": "2022-04-03 11:41:28",
                "editor": {
                  "id": 159996,
                  "objectType": "com.people.person",
                  "name": "Joshua Lee",
                  "body": "Hello! I'm Josh, 30, and I'm from Scotland! I live with my partner of 11 years, as well as our German Shepherd and cat. I love languages and music, and I'm currently studying for a degree in Cyber Security!\r\n\r\nYou'll usually find me on discord, hanging out in the voice channels and playing Dead by Daylight, Fortnite, Overwatch and STO, although I'm known for playing every game under the sun.",
                  "alias": "JoystickJoshy",
                  "imageURL": {
                    "small": {
                      "size": {
                        "width": 80,
                        "height": 125
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n159996/com_people/avatars/small11a063003236ccea225649f5f09da1c7.jpg"
                    },
                    "medium": {
                      "size": {
                        "width": 160,
                        "height": 250
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n159996/com_people/avatars/medium11a063003236ccea225649f5f09da1c7.jpg"
                    },
                    "large": {
                      "size": {
                        "width": 480,
                        "height": 750
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n159996/com_people/avatars/large11a063003236ccea225649f5f09da1c7.jpg"
                    },
                    "square": {
                      "size": {
                        "width": 56,
                        "height": 56
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n159996/com_people/avatars/square11a063003236ccea225649f5f09da1c7.jpg"
                    },
                    "original": {
                      "size": {
                        "width": 2581,
                        "height": 4032
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n159996/com_people/avatars/original11a063003236ccea225649f5f09da1c7.jpg"
                    }
                  },
                  "coverURL": {
                    "small": {
                      "size": {
                        "width": 80,
                        "height": 125
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n159996/com_people/covers/smalld88200cfea7daa144b48a50836ec600b.jpg"
                    },
                    "medium": {
                      "size": {
                        "width": 160,
                        "height": 250
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n159996/com_people/covers/mediumd88200cfea7daa144b48a50836ec600b.jpg"
                    },
                    "large": {
                      "size": {
                        "width": 480,
                        "height": 750
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n159996/com_people/covers/larged88200cfea7daa144b48a50836ec600b.jpg"
                    },
                    "square": {
                      "size": {
                        "width": 56,
                        "height": 56
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n159996/com_people/covers/squared88200cfea7daa144b48a50836ec600b.jpg"
                    },
                    "original": {
                      "size": {
                        "width": 2581,
                        "height": 4032
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n159996/com_people/covers/originald88200cfea7daa144b48a50836ec600b.jpg"
                    }
                  },
                  "author": null,
                  "creationTime": "2020-07-14 13:18:45",
                  "editor": null,
                  "updateTime": "2021-07-09 01:25:15",
                  "subscriberCount": 0,
                  "isLeader": true,
                  "isFollower": true,
                  "isBlocked": false,
                  "followerCount": 10,
                  "leaderCount": 67,
                  "mutualCount": 9,
                  "username": "JoystickJoshy",
                  "givenName": "Joshua",
                  "familyName": "Lee",
                  "email": "joshuajohnlee@me.com",
                  "usertype": "registered",
                  "gender": "male"
                },
                "updateTime": "2022-04-03 11:41:28",
                "voteUpCount": 0
              },
              "lastCommenter": {
                "id": 159996,
                "objectType": "com.people.person",
                "name": "Joshua Lee",
                "body": "Hello! I'm Josh, 30, and I'm from Scotland! I live with my partner of 11 years, as well as our German Shepherd and cat. I love languages and music, and I'm currently studying for a degree in Cyber Security!\r\n\r\nYou'll usually find me on discord, hanging out in the voice channels and playing Dead by Daylight, Fortnite, Overwatch and STO, although I'm known for playing every game under the sun.",
                "alias": "JoystickJoshy",
                "imageURL": {
                  "small": {
                    "size": {
                      "width": 80,
                      "height": 125
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n159996/com_people/avatars/small11a063003236ccea225649f5f09da1c7.jpg"
                  },
                  "medium": {
                    "size": {
                      "width": 160,
                      "height": 250
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n159996/com_people/avatars/medium11a063003236ccea225649f5f09da1c7.jpg"
                  },
                  "large": {
                    "size": {
                      "width": 480,
                      "height": 750
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n159996/com_people/avatars/large11a063003236ccea225649f5f09da1c7.jpg"
                  },
                  "square": {
                    "size": {
                      "width": 56,
                      "height": 56
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n159996/com_people/avatars/square11a063003236ccea225649f5f09da1c7.jpg"
                  },
                  "original": {
                    "size": {
                      "width": 2581,
                      "height": 4032
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n159996/com_people/avatars/original11a063003236ccea225649f5f09da1c7.jpg"
                  }
                },
                "coverURL": {
                  "small": {
                    "size": {
                      "width": 80,
                      "height": 125
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n159996/com_people/covers/smalld88200cfea7daa144b48a50836ec600b.jpg"
                  },
                  "medium": {
                    "size": {
                      "width": 160,
                      "height": 250
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n159996/com_people/covers/mediumd88200cfea7daa144b48a50836ec600b.jpg"
                  },
                  "large": {
                    "size": {
                      "width": 480,
                      "height": 750
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n159996/com_people/covers/larged88200cfea7daa144b48a50836ec600b.jpg"
                  },
                  "square": {
                    "size": {
                      "width": 56,
                      "height": 56
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n159996/com_people/covers/squared88200cfea7daa144b48a50836ec600b.jpg"
                  },
                  "original": {
                    "size": {
                      "width": 2581,
                      "height": 4032
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n159996/com_people/covers/originald88200cfea7daa144b48a50836ec600b.jpg"
                  }
                },
                "author": null,
                "creationTime": "2020-07-14 13:18:45",
                "editor": null,
                "updateTime": "2021-07-09 01:25:15",
                "subscriberCount": 0,
                "isLeader": true,
                "isFollower": true,
                "isBlocked": false,
                "followerCount": 10,
                "leaderCount": 67,
                "mutualCount": 9,
                "username": "JoystickJoshy",
                "givenName": "Joshua",
                "familyName": "Lee",
                "email": "joshuajohnlee@me.com",
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
            },
            "creationTime": "2022-04-03 11:41:28",
            "comments": [
              {
                "id": 175476,
                "objectType": "com.todos.comment",
                "body": "Okay it happens here too! haha. Using a \"less than\" sign causes messages to truncate. Was trying to type a heart with \"less than three\" but realised it truncates everything after it. Perhaps needs to be escaped/sanitised somehow?",
                "author": {
                  "id": 159996,
                  "objectType": "com.people.person",
                  "name": "Joshua Lee",
                  "body": "Hello! I'm Josh, 30, and I'm from Scotland! I live with my partner of 11 years, as well as our German Shepherd and cat. I love languages and music, and I'm currently studying for a degree in Cyber Security!\r\n\r\nYou'll usually find me on discord, hanging out in the voice channels and playing Dead by Daylight, Fortnite, Overwatch and STO, although I'm known for playing every game under the sun.",
                  "alias": "JoystickJoshy",
                  "imageURL": {
                    "small": {
                      "size": {
                        "width": 80,
                        "height": 125
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n159996/com_people/avatars/small11a063003236ccea225649f5f09da1c7.jpg"
                    },
                    "medium": {
                      "size": {
                        "width": 160,
                        "height": 250
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n159996/com_people/avatars/medium11a063003236ccea225649f5f09da1c7.jpg"
                    },
                    "large": {
                      "size": {
                        "width": 480,
                        "height": 750
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n159996/com_people/avatars/large11a063003236ccea225649f5f09da1c7.jpg"
                    },
                    "square": {
                      "size": {
                        "width": 56,
                        "height": 56
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n159996/com_people/avatars/square11a063003236ccea225649f5f09da1c7.jpg"
                    },
                    "original": {
                      "size": {
                        "width": 2581,
                        "height": 4032
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n159996/com_people/avatars/original11a063003236ccea225649f5f09da1c7.jpg"
                    }
                  },
                  "coverURL": {
                    "small": {
                      "size": {
                        "width": 80,
                        "height": 125
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n159996/com_people/covers/smalld88200cfea7daa144b48a50836ec600b.jpg"
                    },
                    "medium": {
                      "size": {
                        "width": 160,
                        "height": 250
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n159996/com_people/covers/mediumd88200cfea7daa144b48a50836ec600b.jpg"
                    },
                    "large": {
                      "size": {
                        "width": 480,
                        "height": 750
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n159996/com_people/covers/larged88200cfea7daa144b48a50836ec600b.jpg"
                    },
                    "square": {
                      "size": {
                        "width": 56,
                        "height": 56
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n159996/com_people/covers/squared88200cfea7daa144b48a50836ec600b.jpg"
                    },
                    "original": {
                      "size": {
                        "width": 2581,
                        "height": 4032
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n159996/com_people/covers/originald88200cfea7daa144b48a50836ec600b.jpg"
                    }
                  },
                  "author": null,
                  "creationTime": "2020-07-14 13:18:45",
                  "editor": null,
                  "updateTime": "2021-07-09 01:25:15",
                  "subscriberCount": 0,
                  "isLeader": true,
                  "isFollower": true,
                  "isBlocked": false,
                  "followerCount": 10,
                  "leaderCount": 67,
                  "mutualCount": 9,
                  "username": "JoystickJoshy",
                  "givenName": "Joshua",
                  "familyName": "Lee",
                  "email": "joshuajohnlee@me.com",
                  "usertype": "registered",
                  "gender": "male"
                },
                "creationTime": "2022-04-03 11:41:28",
                "editor": {
                  "id": 159996,
                  "objectType": "com.people.person",
                  "name": "Joshua Lee",
                  "body": "Hello! I'm Josh, 30, and I'm from Scotland! I live with my partner of 11 years, as well as our German Shepherd and cat. I love languages and music, and I'm currently studying for a degree in Cyber Security!\r\n\r\nYou'll usually find me on discord, hanging out in the voice channels and playing Dead by Daylight, Fortnite, Overwatch and STO, although I'm known for playing every game under the sun.",
                  "alias": "JoystickJoshy",
                  "imageURL": {
                    "small": {
                      "size": {
                        "width": 80,
                        "height": 125
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n159996/com_people/avatars/small11a063003236ccea225649f5f09da1c7.jpg"
                    },
                    "medium": {
                      "size": {
                        "width": 160,
                        "height": 250
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n159996/com_people/avatars/medium11a063003236ccea225649f5f09da1c7.jpg"
                    },
                    "large": {
                      "size": {
                        "width": 480,
                        "height": 750
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n159996/com_people/avatars/large11a063003236ccea225649f5f09da1c7.jpg"
                    },
                    "square": {
                      "size": {
                        "width": 56,
                        "height": 56
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n159996/com_people/avatars/square11a063003236ccea225649f5f09da1c7.jpg"
                    },
                    "original": {
                      "size": {
                        "width": 2581,
                        "height": 4032
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n159996/com_people/avatars/original11a063003236ccea225649f5f09da1c7.jpg"
                    }
                  },
                  "coverURL": {
                    "small": {
                      "size": {
                        "width": 80,
                        "height": 125
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n159996/com_people/covers/smalld88200cfea7daa144b48a50836ec600b.jpg"
                    },
                    "medium": {
                      "size": {
                        "width": 160,
                        "height": 250
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n159996/com_people/covers/mediumd88200cfea7daa144b48a50836ec600b.jpg"
                    },
                    "large": {
                      "size": {
                        "width": 480,
                        "height": 750
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n159996/com_people/covers/larged88200cfea7daa144b48a50836ec600b.jpg"
                    },
                    "square": {
                      "size": {
                        "width": 56,
                        "height": 56
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n159996/com_people/covers/squared88200cfea7daa144b48a50836ec600b.jpg"
                    },
                    "original": {
                      "size": {
                        "width": 2581,
                        "height": 4032
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n159996/com_people/covers/originald88200cfea7daa144b48a50836ec600b.jpg"
                    }
                  },
                  "author": null,
                  "creationTime": "2020-07-14 13:18:45",
                  "editor": null,
                  "updateTime": "2021-07-09 01:25:15",
                  "subscriberCount": 0,
                  "isLeader": true,
                  "isFollower": true,
                  "isBlocked": false,
                  "followerCount": 10,
                  "leaderCount": 67,
                  "mutualCount": 9,
                  "username": "JoystickJoshy",
                  "givenName": "Joshua",
                  "familyName": "Lee",
                  "email": "joshuajohnlee@me.com",
                  "usertype": "registered",
                  "gender": "male"
                },
                "updateTime": "2022-04-03 11:41:28",
                "voteUpCount": 0
              }
            ],
            "commands": [
              "vote",
              "comment",
              "delete"
            ]
          }
    }
}