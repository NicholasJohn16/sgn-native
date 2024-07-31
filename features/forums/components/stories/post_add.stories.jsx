import {Title, Body} from './post_add';
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
            "id": 180020,
            "component": "com_forums",
            "name": "post_add",
            "subject": {
              "id": 288,
              "objectType": "com.people.person",
              "name": "Dave (Voleron)",
              "body": "I'm a gamer and trekker from Edmonton, Canada!  I'm currently Stonewall Gaming Network's public relations officer.  Follow us on Facebook at StonewallGamingNet and on Twitter, at StonewallGN",
              "alias": "Voleron",
              "imageURL": {
                "small": {
                  "size": {
                    "width": 80,
                    "height": 87
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n288/com_people/avatars/small748c54559ac6aeae7ea9e630317b2ba8.jpg"
                },
                "medium": {
                  "size": {
                    "width": 160,
                    "height": 174
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n288/com_people/avatars/medium748c54559ac6aeae7ea9e630317b2ba8.jpg"
                },
                "large": {
                  "size": {
                    "width": 480,
                    "height": 521
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n288/com_people/avatars/large748c54559ac6aeae7ea9e630317b2ba8.jpg"
                },
                "square": {
                  "size": {
                    "width": 56,
                    "height": 56
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n288/com_people/avatars/square748c54559ac6aeae7ea9e630317b2ba8.jpg"
                },
                "original": {
                  "size": {
                    "width": 1993,
                    "height": 2164
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n288/com_people/avatars/original748c54559ac6aeae7ea9e630317b2ba8.jpg"
                }
              },
              "coverURL": {
                "small": {
                  "size": {
                    "width": 80,
                    "height": 87
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n288/com_people/covers/small47c16871c625a29a2a557b5a24ccc2e9.jpg"
                },
                "medium": {
                  "size": {
                    "width": 160,
                    "height": 174
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n288/com_people/covers/medium47c16871c625a29a2a557b5a24ccc2e9.jpg"
                },
                "large": {
                  "size": {
                    "width": 480,
                    "height": 521
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n288/com_people/covers/large47c16871c625a29a2a557b5a24ccc2e9.jpg"
                },
                "square": {
                  "size": {
                    "width": 56,
                    "height": 56
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n288/com_people/covers/square47c16871c625a29a2a557b5a24ccc2e9.jpg"
                },
                "original": {
                  "size": {
                    "width": 1993,
                    "height": 2164
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n288/com_people/covers/original47c16871c625a29a2a557b5a24ccc2e9.jpg"
                }
              },
              "author": null,
              "creationTime": "2010-04-20 01:18:46",
              "editor": null,
              "updateTime": "2022-01-31 15:29:07",
              "subscriberCount": 0,
              "isLeader": true,
              "isFollower": true,
              "isBlocked": false,
              "followerCount": 197,
              "leaderCount": 340,
              "mutualCount": 160,
              "username": "Voleron",
              "givenName": "Dave",
              "familyName": "(Voleron)",
              "email": "thunaer@persona.ca",
              "usertype": "administrator",
              "gender": "male"
            },
            "target": {
              "id": 288,
              "objectType": "com.people.person",
              "name": "Dave (Voleron)",
              "body": "I'm a gamer and trekker from Edmonton, Canada!  I'm currently Stonewall Gaming Network's public relations officer.  Follow us on Facebook at StonewallGamingNet and on Twitter, at StonewallGN",
              "alias": "Voleron",
              "imageURL": {
                "small": {
                  "size": {
                    "width": 80,
                    "height": 87
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n288/com_people/avatars/small748c54559ac6aeae7ea9e630317b2ba8.jpg"
                },
                "medium": {
                  "size": {
                    "width": 160,
                    "height": 174
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n288/com_people/avatars/medium748c54559ac6aeae7ea9e630317b2ba8.jpg"
                },
                "large": {
                  "size": {
                    "width": 480,
                    "height": 521
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n288/com_people/avatars/large748c54559ac6aeae7ea9e630317b2ba8.jpg"
                },
                "square": {
                  "size": {
                    "width": 56,
                    "height": 56
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n288/com_people/avatars/square748c54559ac6aeae7ea9e630317b2ba8.jpg"
                },
                "original": {
                  "size": {
                    "width": 1993,
                    "height": 2164
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n288/com_people/avatars/original748c54559ac6aeae7ea9e630317b2ba8.jpg"
                }
              },
              "coverURL": {
                "small": {
                  "size": {
                    "width": 80,
                    "height": 87
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n288/com_people/covers/small47c16871c625a29a2a557b5a24ccc2e9.jpg"
                },
                "medium": {
                  "size": {
                    "width": 160,
                    "height": 174
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n288/com_people/covers/medium47c16871c625a29a2a557b5a24ccc2e9.jpg"
                },
                "large": {
                  "size": {
                    "width": 480,
                    "height": 521
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n288/com_people/covers/large47c16871c625a29a2a557b5a24ccc2e9.jpg"
                },
                "square": {
                  "size": {
                    "width": 56,
                    "height": 56
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n288/com_people/covers/square47c16871c625a29a2a557b5a24ccc2e9.jpg"
                },
                "original": {
                  "size": {
                    "width": 1993,
                    "height": 2164
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n288/com_people/covers/original47c16871c625a29a2a557b5a24ccc2e9.jpg"
                }
              },
              "author": null,
              "creationTime": "2010-04-20 01:18:46",
              "editor": null,
              "updateTime": "2022-01-31 15:29:07",
              "subscriberCount": 0,
              "isLeader": true,
              "isFollower": true,
              "isBlocked": false,
              "followerCount": 197,
              "leaderCount": 340,
              "mutualCount": 160,
              "username": "Voleron",
              "givenName": "Dave",
              "familyName": "(Voleron)",
              "email": "thunaer@persona.ca",
              "usertype": "administrator",
              "gender": "male"
            },
            "object": {
              "id": 180019,
              "objectType": "com.forums.post",
              "name": "Introduction ",
              "body": "Hi there!\r\n\r\nI've been chatting with ya on FB the last little while.  Belated welcome to Stonewall Fleet and to the Stonewall Gaming Network as a whole!  We're happy to have you join us and hope that you'll find Stonewall to be the amazing online home for your Captain!  To get an in-game invite, just ask any online Fleet Captain or officer in Discord or in our in-game StonewallFleet chat channel.\r\n\r\nWe'd love for you to follow the Stonewall Gaming Network on social media through your choice of [url=https://www.facebook.com/StonewallGamingNet]Facebook[/url], [url=https://twitter.com/StonewallGN]Twitter[/url] and/or [url=https://www.instagram.com/stonewallgamingnet]Instagram[/url].  Subscribe to our [url=https://www.twitch.tv/stonewallgamingnet]Twitch[/url] and [url=http://ow.ly/GSPY50xGfNI]YouTube[/url] channels where we have great community content!  We'd also like to invite you to join our community group on [url=https://www.stonewallgaming.net/pages/sgn/how-to-join-discord]Discord[/url], [url=https://steamcommunity.com/groups/stonewallgamingnetwork]Steam[/url] and [url=https://www.reddit.com/u/stonewallgamingnet]Reddit[/url], where you can both voice and text chat with your Stonewall friends while in any other game or on the road!  Click the icons below for quick links to each.\r\n\r\nFinally, be sure to interact with us here in our forums, as it's where we post about our community events, share resources and have an opportunity to interact with one another outside of the games.  \r\n\r\nWelcome once again and I'll see you around the galaxy!\r\n\r\n[url=https://www.stonewallgaming.net/people/voleron][img]https://s3.amazonaws.com/stonewallgamingnet/assets/public/n288/com_photos/47bbc51017ae740f3f0c3e2142f3cddd_large.png[/img][/url]\r\n\r\n\r\n\r\n[center][url=https://www.facebook.com/StonewallGamingNet][img]https://s3.amazonaws.com/stonewallgamingnet/assets/public/n288/com_photos/568d4388425bf3d4bb4323de6d6caf0b_large.png[/img][/url][url=https://twitter.com/StonewallGN][img]https://s3.amazonaws.com/stonewallgamingnet/assets/public/n288/com_photos/cfefafa0c38acb4e58bf05af5e624933_large.png[/img][/url][url=https://www.twitch.tv/stonewallgamingnet][img]https://s3.amazonaws.com/stonewallgamingnet/assets/public/n288/com_photos/1eabc627344ad0c32e2692ef1fa4f003_large.png[/img][/url][url=https://www.stonewallgaming.net/pages/sgn/how-to-join-discord][img]https://s3.amazonaws.com/stonewallgamingnet/assets/public/n288/com_photos/9c41d70fb9ff7945aa79f24fb5af7e2e_large.png[/img][/url][url=http://ow.ly/GSPY50xGfNI][img]https://s3.amazonaws.com/stonewallgamingnet/assets/public/n288/com_photos/10878e191b91fc93a1367692633d9ee0_large.png[/img][/url][url=https://www.instagram.com/stonewallgamingnet][img]https://s3.amazonaws.com/stonewallgamingnet/assets/public/n288/com_photos/c2cdbe39ff86800d8607c21665914059_large.png[/img][/url][url=https://www.reddit.com/user/stonewallgamingnet][img]https://s3.amazonaws.com/stonewallgamingnet/assets/public/n288/com_photos/41bf9fdaa639eb6f6ba1bd4752d8815e_large.png[/img][/url][url=https://steamcommunity.com/groups/stonewallgamingnetwork][img]https://s3.amazonaws.com/stonewallgamingnet/assets/public/n288/com_photos/f9e246c1a2969f3080ccb521fa566043_large.png[/img][/url][/center]\r\n",
              "alias": "introduction",
              "author": {
                "id": 288,
                "objectType": "com.people.person",
                "name": "Dave (Voleron)",
                "body": "I'm a gamer and trekker from Edmonton, Canada!  I'm currently Stonewall Gaming Network's public relations officer.  Follow us on Facebook at StonewallGamingNet and on Twitter, at StonewallGN",
                "alias": "Voleron",
                "imageURL": {
                  "small": {
                    "size": {
                      "width": 80,
                      "height": 87
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n288/com_people/avatars/small748c54559ac6aeae7ea9e630317b2ba8.jpg"
                  },
                  "medium": {
                    "size": {
                      "width": 160,
                      "height": 174
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n288/com_people/avatars/medium748c54559ac6aeae7ea9e630317b2ba8.jpg"
                  },
                  "large": {
                    "size": {
                      "width": 480,
                      "height": 521
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n288/com_people/avatars/large748c54559ac6aeae7ea9e630317b2ba8.jpg"
                  },
                  "square": {
                    "size": {
                      "width": 56,
                      "height": 56
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n288/com_people/avatars/square748c54559ac6aeae7ea9e630317b2ba8.jpg"
                  },
                  "original": {
                    "size": {
                      "width": 1993,
                      "height": 2164
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n288/com_people/avatars/original748c54559ac6aeae7ea9e630317b2ba8.jpg"
                  }
                },
                "coverURL": {
                  "small": {
                    "size": {
                      "width": 80,
                      "height": 87
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n288/com_people/covers/small47c16871c625a29a2a557b5a24ccc2e9.jpg"
                  },
                  "medium": {
                    "size": {
                      "width": 160,
                      "height": 174
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n288/com_people/covers/medium47c16871c625a29a2a557b5a24ccc2e9.jpg"
                  },
                  "large": {
                    "size": {
                      "width": 480,
                      "height": 521
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n288/com_people/covers/large47c16871c625a29a2a557b5a24ccc2e9.jpg"
                  },
                  "square": {
                    "size": {
                      "width": 56,
                      "height": 56
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n288/com_people/covers/square47c16871c625a29a2a557b5a24ccc2e9.jpg"
                  },
                  "original": {
                    "size": {
                      "width": 1993,
                      "height": 2164
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n288/com_people/covers/original47c16871c625a29a2a557b5a24ccc2e9.jpg"
                  }
                },
                "author": null,
                "creationTime": "2010-04-20 01:18:46",
                "editor": null,
                "updateTime": "2022-01-31 15:29:07",
                "subscriberCount": 0,
                "isLeader": true,
                "isFollower": true,
                "isBlocked": false,
                "followerCount": 197,
                "leaderCount": 340,
                "mutualCount": 160,
                "username": "Voleron",
                "givenName": "Dave",
                "familyName": "(Voleron)",
                "email": "thunaer@persona.ca",
                "usertype": "administrator",
                "gender": "male"
              },
              "creationTime": "2024-01-10 03:00:30",
              "editor": {
                "id": 288,
                "objectType": "com.people.person",
                "name": "Dave (Voleron)",
                "body": "I'm a gamer and trekker from Edmonton, Canada!  I'm currently Stonewall Gaming Network's public relations officer.  Follow us on Facebook at StonewallGamingNet and on Twitter, at StonewallGN",
                "alias": "Voleron",
                "imageURL": {
                  "small": {
                    "size": {
                      "width": 80,
                      "height": 87
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n288/com_people/avatars/small748c54559ac6aeae7ea9e630317b2ba8.jpg"
                  },
                  "medium": {
                    "size": {
                      "width": 160,
                      "height": 174
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n288/com_people/avatars/medium748c54559ac6aeae7ea9e630317b2ba8.jpg"
                  },
                  "large": {
                    "size": {
                      "width": 480,
                      "height": 521
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n288/com_people/avatars/large748c54559ac6aeae7ea9e630317b2ba8.jpg"
                  },
                  "square": {
                    "size": {
                      "width": 56,
                      "height": 56
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n288/com_people/avatars/square748c54559ac6aeae7ea9e630317b2ba8.jpg"
                  },
                  "original": {
                    "size": {
                      "width": 1993,
                      "height": 2164
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n288/com_people/avatars/original748c54559ac6aeae7ea9e630317b2ba8.jpg"
                  }
                },
                "coverURL": {
                  "small": {
                    "size": {
                      "width": 80,
                      "height": 87
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n288/com_people/covers/small47c16871c625a29a2a557b5a24ccc2e9.jpg"
                  },
                  "medium": {
                    "size": {
                      "width": 160,
                      "height": 174
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n288/com_people/covers/medium47c16871c625a29a2a557b5a24ccc2e9.jpg"
                  },
                  "large": {
                    "size": {
                      "width": 480,
                      "height": 521
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n288/com_people/covers/large47c16871c625a29a2a557b5a24ccc2e9.jpg"
                  },
                  "square": {
                    "size": {
                      "width": 56,
                      "height": 56
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n288/com_people/covers/square47c16871c625a29a2a557b5a24ccc2e9.jpg"
                  },
                  "original": {
                    "size": {
                      "width": 1993,
                      "height": 2164
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n288/com_people/covers/original47c16871c625a29a2a557b5a24ccc2e9.jpg"
                  }
                },
                "author": null,
                "creationTime": "2010-04-20 01:18:46",
                "editor": null,
                "updateTime": "2022-01-31 15:29:07",
                "subscriberCount": 0,
                "isLeader": true,
                "isFollower": true,
                "isBlocked": false,
                "followerCount": 197,
                "leaderCount": 340,
                "mutualCount": 160,
                "username": "Voleron",
                "givenName": "Dave",
                "familyName": "(Voleron)",
                "email": "thunaer@persona.ca",
                "usertype": "administrator",
                "gender": "male"
              },
              "updateTime": "2024-01-10 03:00:30",
              "voteUpCount": 0
            },
            "creationTime": "2024-01-10 03:00:30",
            "commands": [
              "vote",
              "delete"
            ]
          }
    }
}