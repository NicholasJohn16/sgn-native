import { Title, Body } from './set_add';
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
            "id": 179793,
            "component": "com_photos",
            "name": "set_add",
            "subject": {
              "id": 176483,
              "objectType": "com.people.person",
              "name": "Adam Kotaška",
              "body": "Hey all, I'm STO player from Europe. Huge Trek fan, but not only, I think I might check TOR or Destiny 2 as well eventually. Feel free to reach me on my main in STO: Darin@eodeon#9634, there is also a chance to bump into me on Discord. LLaP!",
              "alias": "DarinNajem",
              "imageURL": {
                "small": {
                  "size": {
                    "width": 80,
                    "height": 80
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n176483/com_people/avatars/small5c26986675e89a8fbcf7ee99470f2939.jpg"
                },
                "medium": {
                  "size": {
                    "width": 160,
                    "height": 160
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n176483/com_people/avatars/medium5c26986675e89a8fbcf7ee99470f2939.jpg"
                },
                "large": {
                  "size": {
                    "width": 480,
                    "height": 480
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n176483/com_people/avatars/large5c26986675e89a8fbcf7ee99470f2939.jpg"
                },
                "square": {
                  "size": {
                    "width": 56,
                    "height": 56
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n176483/com_people/avatars/square5c26986675e89a8fbcf7ee99470f2939.jpg"
                },
                "original": {
                  "size": {
                    "width": 512,
                    "height": 512
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n176483/com_people/avatars/original5c26986675e89a8fbcf7ee99470f2939.jpg"
                }
              },
              "coverURL": {
                "small": {
                  "size": {
                    "width": 80,
                    "height": 80
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n176483/com_people/covers/small89bce8e017dc1326f54c6ae2aea6087f.jpg"
                },
                "medium": {
                  "size": {
                    "width": 160,
                    "height": 160
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n176483/com_people/covers/medium89bce8e017dc1326f54c6ae2aea6087f.jpg"
                },
                "large": {
                  "size": {
                    "width": 480,
                    "height": 480
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n176483/com_people/covers/large89bce8e017dc1326f54c6ae2aea6087f.jpg"
                },
                "square": {
                  "size": {
                    "width": 56,
                    "height": 56
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n176483/com_people/covers/square89bce8e017dc1326f54c6ae2aea6087f.jpg"
                },
                "original": {
                  "size": {
                    "width": 512,
                    "height": 512
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n176483/com_people/covers/original89bce8e017dc1326f54c6ae2aea6087f.jpg"
                }
              },
              "author": null,
              "creationTime": "2022-07-14 22:27:12",
              "editor": null,
              "updateTime": "2023-04-10 22:34:43",
              "subscriberCount": 0,
              "isLeader": false,
              "isFollower": true,
              "isBlocked": false,
              "followerCount": 6,
              "leaderCount": 45,
              "mutualCount": 6,
              "username": "DarinNajem",
              "givenName": "Adam",
              "familyName": "Kotaška",
              "email": "zayne.carrick@seznam.cz",
              "usertype": "registered",
              "gender": "male"
            },
            "target": {
              "id": 176483,
              "objectType": "com.people.person",
              "name": "Adam Kotaška",
              "body": "Hey all, I'm STO player from Europe. Huge Trek fan, but not only, I think I might check TOR or Destiny 2 as well eventually. Feel free to reach me on my main in STO: Darin@eodeon#9634, there is also a chance to bump into me on Discord. LLaP!",
              "alias": "DarinNajem",
              "imageURL": {
                "small": {
                  "size": {
                    "width": 80,
                    "height": 80
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n176483/com_people/avatars/small5c26986675e89a8fbcf7ee99470f2939.jpg"
                },
                "medium": {
                  "size": {
                    "width": 160,
                    "height": 160
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n176483/com_people/avatars/medium5c26986675e89a8fbcf7ee99470f2939.jpg"
                },
                "large": {
                  "size": {
                    "width": 480,
                    "height": 480
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n176483/com_people/avatars/large5c26986675e89a8fbcf7ee99470f2939.jpg"
                },
                "square": {
                  "size": {
                    "width": 56,
                    "height": 56
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n176483/com_people/avatars/square5c26986675e89a8fbcf7ee99470f2939.jpg"
                },
                "original": {
                  "size": {
                    "width": 512,
                    "height": 512
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n176483/com_people/avatars/original5c26986675e89a8fbcf7ee99470f2939.jpg"
                }
              },
              "coverURL": {
                "small": {
                  "size": {
                    "width": 80,
                    "height": 80
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n176483/com_people/covers/small89bce8e017dc1326f54c6ae2aea6087f.jpg"
                },
                "medium": {
                  "size": {
                    "width": 160,
                    "height": 160
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n176483/com_people/covers/medium89bce8e017dc1326f54c6ae2aea6087f.jpg"
                },
                "large": {
                  "size": {
                    "width": 480,
                    "height": 480
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n176483/com_people/covers/large89bce8e017dc1326f54c6ae2aea6087f.jpg"
                },
                "square": {
                  "size": {
                    "width": 56,
                    "height": 56
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n176483/com_people/covers/square89bce8e017dc1326f54c6ae2aea6087f.jpg"
                },
                "original": {
                  "size": {
                    "width": 512,
                    "height": 512
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n176483/com_people/covers/original89bce8e017dc1326f54c6ae2aea6087f.jpg"
                }
              },
              "author": null,
              "creationTime": "2022-07-14 22:27:12",
              "editor": null,
              "updateTime": "2023-04-10 22:34:43",
              "subscriberCount": 0,
              "isLeader": false,
              "isFollower": true,
              "isBlocked": false,
              "followerCount": 6,
              "leaderCount": 45,
              "mutualCount": 6,
              "username": "DarinNajem",
              "givenName": "Adam",
              "familyName": "Kotaška",
              "email": "zayne.carrick@seznam.cz",
              "usertype": "registered",
              "gender": "male"
            },
            "object": {
              "id": 179792,
              "objectType": "com.photos.set",
              "name": "Wicked Game",
              "body": null,
              "alias": "wicked-game",
              "author": {
                "id": 176483,
                "objectType": "com.people.person",
                "name": "Adam Kotaška",
                "body": "Hey all, I'm STO player from Europe. Huge Trek fan, but not only, I think I might check TOR or Destiny 2 as well eventually. Feel free to reach me on my main in STO: Darin@eodeon#9634, there is also a chance to bump into me on Discord. LLaP!",
                "alias": "DarinNajem",
                "imageURL": {
                  "small": {
                    "size": {
                      "width": 80,
                      "height": 80
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n176483/com_people/avatars/small5c26986675e89a8fbcf7ee99470f2939.jpg"
                  },
                  "medium": {
                    "size": {
                      "width": 160,
                      "height": 160
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n176483/com_people/avatars/medium5c26986675e89a8fbcf7ee99470f2939.jpg"
                  },
                  "large": {
                    "size": {
                      "width": 480,
                      "height": 480
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n176483/com_people/avatars/large5c26986675e89a8fbcf7ee99470f2939.jpg"
                  },
                  "square": {
                    "size": {
                      "width": 56,
                      "height": 56
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n176483/com_people/avatars/square5c26986675e89a8fbcf7ee99470f2939.jpg"
                  },
                  "original": {
                    "size": {
                      "width": 512,
                      "height": 512
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n176483/com_people/avatars/original5c26986675e89a8fbcf7ee99470f2939.jpg"
                  }
                },
                "coverURL": {
                  "small": {
                    "size": {
                      "width": 80,
                      "height": 80
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n176483/com_people/covers/small89bce8e017dc1326f54c6ae2aea6087f.jpg"
                  },
                  "medium": {
                    "size": {
                      "width": 160,
                      "height": 160
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n176483/com_people/covers/medium89bce8e017dc1326f54c6ae2aea6087f.jpg"
                  },
                  "large": {
                    "size": {
                      "width": 480,
                      "height": 480
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n176483/com_people/covers/large89bce8e017dc1326f54c6ae2aea6087f.jpg"
                  },
                  "square": {
                    "size": {
                      "width": 56,
                      "height": 56
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n176483/com_people/covers/square89bce8e017dc1326f54c6ae2aea6087f.jpg"
                  },
                  "original": {
                    "size": {
                      "width": 512,
                      "height": 512
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n176483/com_people/covers/original89bce8e017dc1326f54c6ae2aea6087f.jpg"
                  }
                },
                "author": null,
                "creationTime": "2022-07-14 22:27:12",
                "editor": null,
                "updateTime": "2023-04-10 22:34:43",
                "subscriberCount": 0,
                "isLeader": false,
                "isFollower": true,
                "isBlocked": false,
                "followerCount": 6,
                "leaderCount": 45,
                "mutualCount": 6,
                "username": "DarinNajem",
                "givenName": "Adam",
                "familyName": "Kotaška",
                "email": "zayne.carrick@seznam.cz",
                "usertype": "registered",
                "gender": "male"
              },
              "creationTime": "2023-09-17 15:36:16",
              "editor": {
                "id": 176483,
                "objectType": "com.people.person",
                "name": "Adam Kotaška",
                "body": "Hey all, I'm STO player from Europe. Huge Trek fan, but not only, I think I might check TOR or Destiny 2 as well eventually. Feel free to reach me on my main in STO: Darin@eodeon#9634, there is also a chance to bump into me on Discord. LLaP!",
                "alias": "DarinNajem",
                "imageURL": {
                  "small": {
                    "size": {
                      "width": 80,
                      "height": 80
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n176483/com_people/avatars/small5c26986675e89a8fbcf7ee99470f2939.jpg"
                  },
                  "medium": {
                    "size": {
                      "width": 160,
                      "height": 160
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n176483/com_people/avatars/medium5c26986675e89a8fbcf7ee99470f2939.jpg"
                  },
                  "large": {
                    "size": {
                      "width": 480,
                      "height": 480
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n176483/com_people/avatars/large5c26986675e89a8fbcf7ee99470f2939.jpg"
                  },
                  "square": {
                    "size": {
                      "width": 56,
                      "height": 56
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n176483/com_people/avatars/square5c26986675e89a8fbcf7ee99470f2939.jpg"
                  },
                  "original": {
                    "size": {
                      "width": 512,
                      "height": 512
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n176483/com_people/avatars/original5c26986675e89a8fbcf7ee99470f2939.jpg"
                  }
                },
                "coverURL": {
                  "small": {
                    "size": {
                      "width": 80,
                      "height": 80
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n176483/com_people/covers/small89bce8e017dc1326f54c6ae2aea6087f.jpg"
                  },
                  "medium": {
                    "size": {
                      "width": 160,
                      "height": 160
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n176483/com_people/covers/medium89bce8e017dc1326f54c6ae2aea6087f.jpg"
                  },
                  "large": {
                    "size": {
                      "width": 480,
                      "height": 480
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n176483/com_people/covers/large89bce8e017dc1326f54c6ae2aea6087f.jpg"
                  },
                  "square": {
                    "size": {
                      "width": 56,
                      "height": 56
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n176483/com_people/covers/square89bce8e017dc1326f54c6ae2aea6087f.jpg"
                  },
                  "original": {
                    "size": {
                      "width": 512,
                      "height": 512
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n176483/com_people/covers/original89bce8e017dc1326f54c6ae2aea6087f.jpg"
                  }
                },
                "author": null,
                "creationTime": "2022-07-14 22:27:12",
                "editor": null,
                "updateTime": "2023-04-10 22:34:43",
                "subscriberCount": 0,
                "isLeader": false,
                "isFollower": true,
                "isBlocked": false,
                "followerCount": 6,
                "leaderCount": 45,
                "mutualCount": 6,
                "username": "DarinNajem",
                "givenName": "Adam",
                "familyName": "Kotaška",
                "email": "zayne.carrick@seznam.cz",
                "usertype": "registered",
                "gender": "male"
              },
              "updateTime": "2023-09-17 15:36:16",
              "openToComment": true,
              "numOfComments": 0,
              "lastCommentTime": null,
              "lastComment": null,
              "lastCommenter": null,
              "subscriberCount": 1,
              "voteUpCount": 0,
              "owner": {
                "id": 176483,
                "objectType": "com.people.person",
                "name": "Adam Kotaška",
                "body": "Hey all, I'm STO player from Europe. Huge Trek fan, but not only, I think I might check TOR or Destiny 2 as well eventually. Feel free to reach me on my main in STO: Darin@eodeon#9634, there is also a chance to bump into me on Discord. LLaP!",
                "alias": "DarinNajem",
                "imageURL": {
                  "small": {
                    "size": {
                      "width": 80,
                      "height": 80
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n176483/com_people/avatars/small5c26986675e89a8fbcf7ee99470f2939.jpg"
                  },
                  "medium": {
                    "size": {
                      "width": 160,
                      "height": 160
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n176483/com_people/avatars/medium5c26986675e89a8fbcf7ee99470f2939.jpg"
                  },
                  "large": {
                    "size": {
                      "width": 480,
                      "height": 480
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n176483/com_people/avatars/large5c26986675e89a8fbcf7ee99470f2939.jpg"
                  },
                  "square": {
                    "size": {
                      "width": 56,
                      "height": 56
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n176483/com_people/avatars/square5c26986675e89a8fbcf7ee99470f2939.jpg"
                  },
                  "original": {
                    "size": {
                      "width": 512,
                      "height": 512
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n176483/com_people/avatars/original5c26986675e89a8fbcf7ee99470f2939.jpg"
                  }
                },
                "coverURL": {
                  "small": {
                    "size": {
                      "width": 80,
                      "height": 80
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n176483/com_people/covers/small89bce8e017dc1326f54c6ae2aea6087f.jpg"
                  },
                  "medium": {
                    "size": {
                      "width": 160,
                      "height": 160
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n176483/com_people/covers/medium89bce8e017dc1326f54c6ae2aea6087f.jpg"
                  },
                  "large": {
                    "size": {
                      "width": 480,
                      "height": 480
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n176483/com_people/covers/large89bce8e017dc1326f54c6ae2aea6087f.jpg"
                  },
                  "square": {
                    "size": {
                      "width": 56,
                      "height": 56
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n176483/com_people/covers/square89bce8e017dc1326f54c6ae2aea6087f.jpg"
                  },
                  "original": {
                    "size": {
                      "width": 512,
                      "height": 512
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n176483/com_people/covers/original89bce8e017dc1326f54c6ae2aea6087f.jpg"
                  }
                },
                "author": null,
                "creationTime": "2022-07-14 22:27:12",
                "editor": null,
                "updateTime": "2023-04-10 22:34:43",
                "subscriberCount": 0,
                "isLeader": false,
                "isFollower": true,
                "isBlocked": false,
                "followerCount": 6,
                "leaderCount": 45,
                "mutualCount": 6,
                "username": "DarinNajem",
                "givenName": "Adam",
                "familyName": "Kotaška",
                "email": "zayne.carrick@seznam.cz",
                "usertype": "registered",
                "gender": "male"
              }
            },
            "creationTime": "2023-09-17 15:36:16",
            "commands": [
              "vote",
              "comment",
              "delete"
            ]
          }
    }
}