import { Title, Body } from './todo_add';
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
            "id": 179364,
            "component": "com_todos",
            "name": "todo_add",
            "subject": {
              "id": 153921,
              "objectType": "com.people.person",
              "name": "Duncan Broom",
              "body": "",
              "alias": "dunro42",
              "imageURL": {
                "small": {
                  "size": {
                    "width": 80,
                    "height": 80
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n153921/com_people/avatars/small808d91a4eeabff11f9197aa089bf3dc6.jpg"
                },
                "medium": {
                  "size": {
                    "width": 160,
                    "height": 160
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n153921/com_people/avatars/medium808d91a4eeabff11f9197aa089bf3dc6.jpg"
                },
                "large": {
                  "size": {
                    "width": 400,
                    "height": 400
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n153921/com_people/avatars/large808d91a4eeabff11f9197aa089bf3dc6.jpg"
                },
                "square": {
                  "size": {
                    "width": 56,
                    "height": 56
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n153921/com_people/avatars/square808d91a4eeabff11f9197aa089bf3dc6.jpg"
                },
                "original": {
                  "size": {
                    "width": 400,
                    "height": 400
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n153921/com_people/avatars/original808d91a4eeabff11f9197aa089bf3dc6.jpg"
                }
              },
              "coverURL": [],
              "author": null,
              "creationTime": "2020-02-20 06:03:28",
              "editor": null,
              "updateTime": "2023-07-25 03:26:35",
              "subscriberCount": 0,
              "isLeader": false,
              "isFollower": false,
              "isBlocked": false,
              "followerCount": 0,
              "leaderCount": 8,
              "mutualCount": 0,
              "username": "dunro42",
              "givenName": "Duncan",
              "familyName": "Broom",
              "email": "stonewallgaming@dunro.net",
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
              "id": 179363,
              "objectType": "com.todos.todo",
              "name": "Discord Username validation",
              "body": "Validation of SGN profile's Discord field will need to be updated, as Discord has started rolling out the new format for usernames",
              "alias": "discord-username-validation",
              "author": {
                "id": 153921,
                "objectType": "com.people.person",
                "name": "Duncan Broom",
                "body": "",
                "alias": "dunro42",
                "imageURL": {
                  "small": {
                    "size": {
                      "width": 80,
                      "height": 80
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n153921/com_people/avatars/small808d91a4eeabff11f9197aa089bf3dc6.jpg"
                  },
                  "medium": {
                    "size": {
                      "width": 160,
                      "height": 160
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n153921/com_people/avatars/medium808d91a4eeabff11f9197aa089bf3dc6.jpg"
                  },
                  "large": {
                    "size": {
                      "width": 400,
                      "height": 400
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n153921/com_people/avatars/large808d91a4eeabff11f9197aa089bf3dc6.jpg"
                  },
                  "square": {
                    "size": {
                      "width": 56,
                      "height": 56
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n153921/com_people/avatars/square808d91a4eeabff11f9197aa089bf3dc6.jpg"
                  },
                  "original": {
                    "size": {
                      "width": 400,
                      "height": 400
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n153921/com_people/avatars/original808d91a4eeabff11f9197aa089bf3dc6.jpg"
                  }
                },
                "coverURL": [],
                "author": null,
                "creationTime": "2020-02-20 06:03:28",
                "editor": null,
                "updateTime": "2023-07-25 03:26:35",
                "subscriberCount": 0,
                "isLeader": false,
                "isFollower": false,
                "isBlocked": false,
                "followerCount": 0,
                "leaderCount": 8,
                "mutualCount": 0,
                "username": "dunro42",
                "givenName": "Duncan",
                "familyName": "Broom",
                "email": "stonewallgaming@dunro.net",
                "usertype": "registered",
                "gender": "male"
              },
              "creationTime": "2023-07-25 03:28:46",
              "editor": {
                "id": 153921,
                "objectType": "com.people.person",
                "name": "Duncan Broom",
                "body": "",
                "alias": "dunro42",
                "imageURL": {
                  "small": {
                    "size": {
                      "width": 80,
                      "height": 80
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n153921/com_people/avatars/small808d91a4eeabff11f9197aa089bf3dc6.jpg"
                  },
                  "medium": {
                    "size": {
                      "width": 160,
                      "height": 160
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n153921/com_people/avatars/medium808d91a4eeabff11f9197aa089bf3dc6.jpg"
                  },
                  "large": {
                    "size": {
                      "width": 400,
                      "height": 400
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n153921/com_people/avatars/large808d91a4eeabff11f9197aa089bf3dc6.jpg"
                  },
                  "square": {
                    "size": {
                      "width": 56,
                      "height": 56
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n153921/com_people/avatars/square808d91a4eeabff11f9197aa089bf3dc6.jpg"
                  },
                  "original": {
                    "size": {
                      "width": 400,
                      "height": 400
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n153921/com_people/avatars/original808d91a4eeabff11f9197aa089bf3dc6.jpg"
                  }
                },
                "coverURL": [],
                "author": null,
                "creationTime": "2020-02-20 06:03:28",
                "editor": null,
                "updateTime": "2023-07-25 03:26:35",
                "subscriberCount": 0,
                "isLeader": false,
                "isFollower": false,
                "isBlocked": false,
                "followerCount": 0,
                "leaderCount": 8,
                "mutualCount": 0,
                "username": "dunro42",
                "givenName": "Duncan",
                "familyName": "Broom",
                "email": "stonewallgaming@dunro.net",
                "usertype": "registered",
                "gender": "male"
              },
              "updateTime": "2023-07-25 03:28:46",
              "openToComment": true,
              "numOfComments": 0,
              "lastCommentTime": null,
              "lastComment": null,
              "lastCommenter": null,
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
            "creationTime": "2023-07-25 03:28:46",
            "commands": [
              "vote",
              "comment",
              "delete"
            ]
          }
    }
}