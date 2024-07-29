import { Title, Body } from './topic_comment';
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
            "id": 178921,
            "component": "com_topics",
            "name": "topic_comment",
            "subject": {
              "id": 3428,
              "objectType": "com.people.person",
              "name": "Ted Hembach",
              "body": "We are two loving hippies from Berlin in Germany (UTC+1 - in summer UTC+2). We love and try to live Star Trek a lot. In STO we like a lot doing all the stuff not related to firing phasers. Our phasers are the most time set on fun, not stun. Our dedicated love is the STO fashion part, we are fighting enemies to get resources to get new costumes.\r\n\r\nBesides Star Trek, music and each other, we love spicy food, coffee, long hours of tenderness, the ocean, solidarity and world peace. We are both artists, one musician and one designer, trying to live from it. We are both from the autistic spectrum and sometimes we have to cope with our sociophobic tendencies. Yeah, thats it in short.\r\n\r\nMeanwhile, we splitted our account into two accounts.\r\n\r\nThis profile is playing TedHembach in Star Trek Online and I am the Head of the House of Nagh reD,  Admiral of the Klingon Department. \r\n\r\nThe second account, which is the @hippiepunk, is a Fleet Captain within the Klingon Department.\r\n\r\nWe are both happy to help wherever we can.",
              "alias": "TLara",
              "imageURL": {
                "large": {
                  "size": {
                    "width": 1600,
                    "height": 900
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n3428/com_people/avatars/large76733ace7078a0278a7c7bae0a738322.jpg"
                },
                "medium": {
                  "size": {
                    "width": 640,
                    "height": 360
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n3428/com_people/avatars/medium76733ace7078a0278a7c7bae0a738322.jpg"
                },
                "original": {
                  "size": {
                    "width": 1920,
                    "height": 1080
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n3428/com_people/avatars/original76733ace7078a0278a7c7bae0a738322.jpg"
                }
              },
              "coverURL": {
                "large": {
                  "size": {
                    "width": 1600,
                    "height": 900
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n3428/com_people/covers/large3d5d3ed3789453f6b8d3e09a51f90be2.jpg"
                },
                "medium": {
                  "size": {
                    "width": 640,
                    "height": 360
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n3428/com_people/covers/medium3d5d3ed3789453f6b8d3e09a51f90be2.jpg"
                },
                "original": {
                  "size": {
                    "width": 1920,
                    "height": 1080
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n3428/com_people/covers/original3d5d3ed3789453f6b8d3e09a51f90be2.jpg"
                }
              },
              "author": null,
              "creationTime": "2015-07-20 18:40:29",
              "editor": null,
              "updateTime": "2021-06-06 19:17:58",
              "subscriberCount": 0,
              "isLeader": true,
              "isFollower": true,
              "isBlocked": false,
              "followerCount": 39,
              "leaderCount": 134,
              "mutualCount": 32,
              "username": "TLara",
              "givenName": "Ted",
              "familyName": "Hembach",
              "email": "tomtekjellinger@gmail.com",
              "usertype": "administrator",
              "gender": "neutral"
            },
            "target": {
              "id": 77493,
              "objectType": "com.groups.group",
              "name": "Ready Room",
              "body": "Leadership group for the Admirality of Stonewall Fleet #leadership #swf ",
              "alias": "ready-room",
              "imageURL": {
                "small": {
                  "size": {
                    "width": 80,
                    "height": 56
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n77493/com_groups/avatars/smallfa8de4bb1d7f861fa775aaa4ae2b3fce.png"
                },
                "medium": {
                  "size": {
                    "width": 160,
                    "height": 112
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n77493/com_groups/avatars/mediumfa8de4bb1d7f861fa775aaa4ae2b3fce.png"
                },
                "large": {
                  "size": {
                    "width": 480,
                    "height": 337
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n77493/com_groups/avatars/largefa8de4bb1d7f861fa775aaa4ae2b3fce.png"
                },
                "square": {
                  "size": {
                    "width": 56,
                    "height": 56
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n77493/com_groups/avatars/squarefa8de4bb1d7f861fa775aaa4ae2b3fce.png"
                },
                "original": {
                  "size": {
                    "width": 642,
                    "height": 451
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n77493/com_groups/avatars/originalfa8de4bb1d7f861fa775aaa4ae2b3fce.png"
                }
              },
              "coverURL": [],
              "author": null,
              "creationTime": "2016-08-31 12:02:22",
              "editor": null,
              "updateTime": "2016-08-31 12:02:22",
              "subscriberCount": 4,
              "isLeader": true,
              "followerCount": 5,
              "administratorIds": [
                "1"
              ],
              "isAdministrated": true
            },
            "object": {
              "id": 178876,
              "objectType": "com.topics.topic",
              "name": "Closing Legion of Nagh reD",
              "body": "<p>We initially created Legion of Nagh reD (LNR) because of the mass amount of characters we were getting from the Klingon Recruitment event. House of Nagh reD (HNR) was almost full and we had more characters in coming. That event has passed an our KDF numbers have dropped a lot. I just checked and we have 284 characters in HNR and only 80 in LNR. We could easily house them all in one fleet again.</p><p>How would you all feel about shutting down LNR?</p><p>If we did shut down HNR, would you rather we:</p><ol><li>Move all characters to HNR and completely shut down LNR</li><li>Stop inviting new characters to LNR and only invite them to HNR</li></ol>Is this something we should take the membership and get their input on? The only issue I see with this is it's easy for a member to vote to keep a fleet without having to deal with the consequences of maintaining and managing it. To them, it's just an additional option with no extra work load.",
              "alias": "closing-legion-of-nagh-red",
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
              "creationTime": "2023-05-23 21:39:27",
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
              "updateTime": "2023-05-23 21:39:27",
              "openToComment": true,
              "numOfComments": 11,
              "lastCommentTime": "2023-05-25 17:19:41",
              "lastComment": {
                "id": 178920,
                "objectType": "com.topics.comment",
                "body": "About provisions: in the Legion of Nagh reD, one can still donate to projects that grow a base to a higher tier or add a feature. In the House, the only possible projects are for more and more povisions.\r\nIf we could get both fleets into one Armada, that would be awesome.",
                "author": {
                  "id": 3428,
                  "objectType": "com.people.person",
                  "name": "Ted Hembach",
                  "body": "We are two loving hippies from Berlin in Germany (UTC+1 - in summer UTC+2). We love and try to live Star Trek a lot. In STO we like a lot doing all the stuff not related to firing phasers. Our phasers are the most time set on fun, not stun. Our dedicated love is the STO fashion part, we are fighting enemies to get resources to get new costumes.\r\n\r\nBesides Star Trek, music and each other, we love spicy food, coffee, long hours of tenderness, the ocean, solidarity and world peace. We are both artists, one musician and one designer, trying to live from it. We are both from the autistic spectrum and sometimes we have to cope with our sociophobic tendencies. Yeah, thats it in short.\r\n\r\nMeanwhile, we splitted our account into two accounts.\r\n\r\nThis profile is playing TedHembach in Star Trek Online and I am the Head of the House of Nagh reD,  Admiral of the Klingon Department. \r\n\r\nThe second account, which is the @hippiepunk, is a Fleet Captain within the Klingon Department.\r\n\r\nWe are both happy to help wherever we can.",
                  "alias": "TLara",
                  "imageURL": {
                    "large": {
                      "size": {
                        "width": 1600,
                        "height": 900
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n3428/com_people/avatars/large76733ace7078a0278a7c7bae0a738322.jpg"
                    },
                    "medium": {
                      "size": {
                        "width": 640,
                        "height": 360
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n3428/com_people/avatars/medium76733ace7078a0278a7c7bae0a738322.jpg"
                    },
                    "original": {
                      "size": {
                        "width": 1920,
                        "height": 1080
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n3428/com_people/avatars/original76733ace7078a0278a7c7bae0a738322.jpg"
                    }
                  },
                  "coverURL": {
                    "large": {
                      "size": {
                        "width": 1600,
                        "height": 900
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n3428/com_people/covers/large3d5d3ed3789453f6b8d3e09a51f90be2.jpg"
                    },
                    "medium": {
                      "size": {
                        "width": 640,
                        "height": 360
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n3428/com_people/covers/medium3d5d3ed3789453f6b8d3e09a51f90be2.jpg"
                    },
                    "original": {
                      "size": {
                        "width": 1920,
                        "height": 1080
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n3428/com_people/covers/original3d5d3ed3789453f6b8d3e09a51f90be2.jpg"
                    }
                  },
                  "author": null,
                  "creationTime": "2015-07-20 18:40:29",
                  "editor": null,
                  "updateTime": "2021-06-06 19:17:58",
                  "subscriberCount": 0,
                  "isLeader": true,
                  "isFollower": true,
                  "isBlocked": false,
                  "followerCount": 39,
                  "leaderCount": 134,
                  "mutualCount": 32,
                  "username": "TLara",
                  "givenName": "Ted",
                  "familyName": "Hembach",
                  "email": "tomtekjellinger@gmail.com",
                  "usertype": "administrator",
                  "gender": "neutral"
                },
                "creationTime": "2023-05-25 17:19:41",
                "editor": {
                  "id": 3428,
                  "objectType": "com.people.person",
                  "name": "Ted Hembach",
                  "body": "We are two loving hippies from Berlin in Germany (UTC+1 - in summer UTC+2). We love and try to live Star Trek a lot. In STO we like a lot doing all the stuff not related to firing phasers. Our phasers are the most time set on fun, not stun. Our dedicated love is the STO fashion part, we are fighting enemies to get resources to get new costumes.\r\n\r\nBesides Star Trek, music and each other, we love spicy food, coffee, long hours of tenderness, the ocean, solidarity and world peace. We are both artists, one musician and one designer, trying to live from it. We are both from the autistic spectrum and sometimes we have to cope with our sociophobic tendencies. Yeah, thats it in short.\r\n\r\nMeanwhile, we splitted our account into two accounts.\r\n\r\nThis profile is playing TedHembach in Star Trek Online and I am the Head of the House of Nagh reD,  Admiral of the Klingon Department. \r\n\r\nThe second account, which is the @hippiepunk, is a Fleet Captain within the Klingon Department.\r\n\r\nWe are both happy to help wherever we can.",
                  "alias": "TLara",
                  "imageURL": {
                    "large": {
                      "size": {
                        "width": 1600,
                        "height": 900
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n3428/com_people/avatars/large76733ace7078a0278a7c7bae0a738322.jpg"
                    },
                    "medium": {
                      "size": {
                        "width": 640,
                        "height": 360
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n3428/com_people/avatars/medium76733ace7078a0278a7c7bae0a738322.jpg"
                    },
                    "original": {
                      "size": {
                        "width": 1920,
                        "height": 1080
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n3428/com_people/avatars/original76733ace7078a0278a7c7bae0a738322.jpg"
                    }
                  },
                  "coverURL": {
                    "large": {
                      "size": {
                        "width": 1600,
                        "height": 900
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n3428/com_people/covers/large3d5d3ed3789453f6b8d3e09a51f90be2.jpg"
                    },
                    "medium": {
                      "size": {
                        "width": 640,
                        "height": 360
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n3428/com_people/covers/medium3d5d3ed3789453f6b8d3e09a51f90be2.jpg"
                    },
                    "original": {
                      "size": {
                        "width": 1920,
                        "height": 1080
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n3428/com_people/covers/original3d5d3ed3789453f6b8d3e09a51f90be2.jpg"
                    }
                  },
                  "author": null,
                  "creationTime": "2015-07-20 18:40:29",
                  "editor": null,
                  "updateTime": "2021-06-06 19:17:58",
                  "subscriberCount": 0,
                  "isLeader": true,
                  "isFollower": true,
                  "isBlocked": false,
                  "followerCount": 39,
                  "leaderCount": 134,
                  "mutualCount": 32,
                  "username": "TLara",
                  "givenName": "Ted",
                  "familyName": "Hembach",
                  "email": "tomtekjellinger@gmail.com",
                  "usertype": "administrator",
                  "gender": "neutral"
                },
                "updateTime": "2023-05-25 17:19:41",
                "voteUpCount": 0
              },
              "lastCommenter": {
                "id": 3428,
                "objectType": "com.people.person",
                "name": "Ted Hembach",
                "body": "We are two loving hippies from Berlin in Germany (UTC+1 - in summer UTC+2). We love and try to live Star Trek a lot. In STO we like a lot doing all the stuff not related to firing phasers. Our phasers are the most time set on fun, not stun. Our dedicated love is the STO fashion part, we are fighting enemies to get resources to get new costumes.\r\n\r\nBesides Star Trek, music and each other, we love spicy food, coffee, long hours of tenderness, the ocean, solidarity and world peace. We are both artists, one musician and one designer, trying to live from it. We are both from the autistic spectrum and sometimes we have to cope with our sociophobic tendencies. Yeah, thats it in short.\r\n\r\nMeanwhile, we splitted our account into two accounts.\r\n\r\nThis profile is playing TedHembach in Star Trek Online and I am the Head of the House of Nagh reD,  Admiral of the Klingon Department. \r\n\r\nThe second account, which is the @hippiepunk, is a Fleet Captain within the Klingon Department.\r\n\r\nWe are both happy to help wherever we can.",
                "alias": "TLara",
                "imageURL": {
                  "large": {
                    "size": {
                      "width": 1600,
                      "height": 900
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n3428/com_people/avatars/large76733ace7078a0278a7c7bae0a738322.jpg"
                  },
                  "medium": {
                    "size": {
                      "width": 640,
                      "height": 360
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n3428/com_people/avatars/medium76733ace7078a0278a7c7bae0a738322.jpg"
                  },
                  "original": {
                    "size": {
                      "width": 1920,
                      "height": 1080
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n3428/com_people/avatars/original76733ace7078a0278a7c7bae0a738322.jpg"
                  }
                },
                "coverURL": {
                  "large": {
                    "size": {
                      "width": 1600,
                      "height": 900
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n3428/com_people/covers/large3d5d3ed3789453f6b8d3e09a51f90be2.jpg"
                  },
                  "medium": {
                    "size": {
                      "width": 640,
                      "height": 360
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n3428/com_people/covers/medium3d5d3ed3789453f6b8d3e09a51f90be2.jpg"
                  },
                  "original": {
                    "size": {
                      "width": 1920,
                      "height": 1080
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n3428/com_people/covers/original3d5d3ed3789453f6b8d3e09a51f90be2.jpg"
                  }
                },
                "author": null,
                "creationTime": "2015-07-20 18:40:29",
                "editor": null,
                "updateTime": "2021-06-06 19:17:58",
                "subscriberCount": 0,
                "isLeader": true,
                "isFollower": true,
                "isBlocked": false,
                "followerCount": 39,
                "leaderCount": 134,
                "mutualCount": 32,
                "username": "TLara",
                "givenName": "Ted",
                "familyName": "Hembach",
                "email": "tomtekjellinger@gmail.com",
                "usertype": "administrator",
                "gender": "neutral"
              },
              "subscriberCount": 5,
              "voteUpCount": 0,
              "owner": {
                "id": 77493,
                "objectType": "com.groups.group",
                "name": "Ready Room",
                "body": "Leadership group for the Admirality of Stonewall Fleet #leadership #swf ",
                "alias": "ready-room",
                "imageURL": {
                  "small": {
                    "size": {
                      "width": 80,
                      "height": 56
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n77493/com_groups/avatars/smallfa8de4bb1d7f861fa775aaa4ae2b3fce.png"
                  },
                  "medium": {
                    "size": {
                      "width": 160,
                      "height": 112
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n77493/com_groups/avatars/mediumfa8de4bb1d7f861fa775aaa4ae2b3fce.png"
                  },
                  "large": {
                    "size": {
                      "width": 480,
                      "height": 337
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n77493/com_groups/avatars/largefa8de4bb1d7f861fa775aaa4ae2b3fce.png"
                  },
                  "square": {
                    "size": {
                      "width": 56,
                      "height": 56
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n77493/com_groups/avatars/squarefa8de4bb1d7f861fa775aaa4ae2b3fce.png"
                  },
                  "original": {
                    "size": {
                      "width": 642,
                      "height": 451
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n77493/com_groups/avatars/originalfa8de4bb1d7f861fa775aaa4ae2b3fce.png"
                  }
                },
                "coverURL": [],
                "author": null,
                "creationTime": "2016-08-31 12:02:22",
                "editor": null,
                "updateTime": "2016-08-31 12:02:22",
                "subscriberCount": 4,
                "isLeader": true,
                "followerCount": 5,
                "administratorIds": [
                  "1"
                ],
                "isAdministrated": true
              }
            },
            "creationTime": "2023-05-25 17:19:41",
            "comments": [
              {
                "id": 178920,
                "objectType": "com.topics.comment",
                "body": "About provisions: in the Legion of Nagh reD, one can still donate to projects that grow a base to a higher tier or add a feature. In the House, the only possible projects are for more and more povisions.\r\nIf we could get both fleets into one Armada, that would be awesome.",
                "author": {
                  "id": 3428,
                  "objectType": "com.people.person",
                  "name": "Ted Hembach",
                  "body": "We are two loving hippies from Berlin in Germany (UTC+1 - in summer UTC+2). We love and try to live Star Trek a lot. In STO we like a lot doing all the stuff not related to firing phasers. Our phasers are the most time set on fun, not stun. Our dedicated love is the STO fashion part, we are fighting enemies to get resources to get new costumes.\r\n\r\nBesides Star Trek, music and each other, we love spicy food, coffee, long hours of tenderness, the ocean, solidarity and world peace. We are both artists, one musician and one designer, trying to live from it. We are both from the autistic spectrum and sometimes we have to cope with our sociophobic tendencies. Yeah, thats it in short.\r\n\r\nMeanwhile, we splitted our account into two accounts.\r\n\r\nThis profile is playing TedHembach in Star Trek Online and I am the Head of the House of Nagh reD,  Admiral of the Klingon Department. \r\n\r\nThe second account, which is the @hippiepunk, is a Fleet Captain within the Klingon Department.\r\n\r\nWe are both happy to help wherever we can.",
                  "alias": "TLara",
                  "imageURL": {
                    "large": {
                      "size": {
                        "width": 1600,
                        "height": 900
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n3428/com_people/avatars/large76733ace7078a0278a7c7bae0a738322.jpg"
                    },
                    "medium": {
                      "size": {
                        "width": 640,
                        "height": 360
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n3428/com_people/avatars/medium76733ace7078a0278a7c7bae0a738322.jpg"
                    },
                    "original": {
                      "size": {
                        "width": 1920,
                        "height": 1080
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n3428/com_people/avatars/original76733ace7078a0278a7c7bae0a738322.jpg"
                    }
                  },
                  "coverURL": {
                    "large": {
                      "size": {
                        "width": 1600,
                        "height": 900
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n3428/com_people/covers/large3d5d3ed3789453f6b8d3e09a51f90be2.jpg"
                    },
                    "medium": {
                      "size": {
                        "width": 640,
                        "height": 360
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n3428/com_people/covers/medium3d5d3ed3789453f6b8d3e09a51f90be2.jpg"
                    },
                    "original": {
                      "size": {
                        "width": 1920,
                        "height": 1080
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n3428/com_people/covers/original3d5d3ed3789453f6b8d3e09a51f90be2.jpg"
                    }
                  },
                  "author": null,
                  "creationTime": "2015-07-20 18:40:29",
                  "editor": null,
                  "updateTime": "2021-06-06 19:17:58",
                  "subscriberCount": 0,
                  "isLeader": true,
                  "isFollower": true,
                  "isBlocked": false,
                  "followerCount": 39,
                  "leaderCount": 134,
                  "mutualCount": 32,
                  "username": "TLara",
                  "givenName": "Ted",
                  "familyName": "Hembach",
                  "email": "tomtekjellinger@gmail.com",
                  "usertype": "administrator",
                  "gender": "neutral"
                },
                "creationTime": "2023-05-25 17:19:41",
                "editor": {
                  "id": 3428,
                  "objectType": "com.people.person",
                  "name": "Ted Hembach",
                  "body": "We are two loving hippies from Berlin in Germany (UTC+1 - in summer UTC+2). We love and try to live Star Trek a lot. In STO we like a lot doing all the stuff not related to firing phasers. Our phasers are the most time set on fun, not stun. Our dedicated love is the STO fashion part, we are fighting enemies to get resources to get new costumes.\r\n\r\nBesides Star Trek, music and each other, we love spicy food, coffee, long hours of tenderness, the ocean, solidarity and world peace. We are both artists, one musician and one designer, trying to live from it. We are both from the autistic spectrum and sometimes we have to cope with our sociophobic tendencies. Yeah, thats it in short.\r\n\r\nMeanwhile, we splitted our account into two accounts.\r\n\r\nThis profile is playing TedHembach in Star Trek Online and I am the Head of the House of Nagh reD,  Admiral of the Klingon Department. \r\n\r\nThe second account, which is the @hippiepunk, is a Fleet Captain within the Klingon Department.\r\n\r\nWe are both happy to help wherever we can.",
                  "alias": "TLara",
                  "imageURL": {
                    "large": {
                      "size": {
                        "width": 1600,
                        "height": 900
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n3428/com_people/avatars/large76733ace7078a0278a7c7bae0a738322.jpg"
                    },
                    "medium": {
                      "size": {
                        "width": 640,
                        "height": 360
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n3428/com_people/avatars/medium76733ace7078a0278a7c7bae0a738322.jpg"
                    },
                    "original": {
                      "size": {
                        "width": 1920,
                        "height": 1080
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n3428/com_people/avatars/original76733ace7078a0278a7c7bae0a738322.jpg"
                    }
                  },
                  "coverURL": {
                    "large": {
                      "size": {
                        "width": 1600,
                        "height": 900
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n3428/com_people/covers/large3d5d3ed3789453f6b8d3e09a51f90be2.jpg"
                    },
                    "medium": {
                      "size": {
                        "width": 640,
                        "height": 360
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n3428/com_people/covers/medium3d5d3ed3789453f6b8d3e09a51f90be2.jpg"
                    },
                    "original": {
                      "size": {
                        "width": 1920,
                        "height": 1080
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n3428/com_people/covers/original3d5d3ed3789453f6b8d3e09a51f90be2.jpg"
                    }
                  },
                  "author": null,
                  "creationTime": "2015-07-20 18:40:29",
                  "editor": null,
                  "updateTime": "2021-06-06 19:17:58",
                  "subscriberCount": 0,
                  "isLeader": true,
                  "isFollower": true,
                  "isBlocked": false,
                  "followerCount": 39,
                  "leaderCount": 134,
                  "mutualCount": 32,
                  "username": "TLara",
                  "givenName": "Ted",
                  "familyName": "Hembach",
                  "email": "tomtekjellinger@gmail.com",
                  "usertype": "administrator",
                  "gender": "neutral"
                },
                "updateTime": "2023-05-25 17:19:41",
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