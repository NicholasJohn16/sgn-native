import {Title, Body} from './note_comment';
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
            "id": 180051,
            "component": "com_notes",
            "name": "note_comment",
            "subject": {
                "id": 2105,
                "objectType": "com.people.person",
                "name": "Gary Rockrohr",
                "body": "I am a happily married gay man in Dallas TX that enjoys MMOs.  I have been playing MMOs since the first Everquest and STO since Beta.",
                "alias": "Gadgettek",
                "imageURL": {
                    "small": {
                        "size": {
                            "width": 80,
                            "height": 80
                        },
                        "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2105/com_people/avatars/small5857d44d768204f40492149929b50531.jpg"
                    },
                    "medium": {
                        "size": {
                            "width": 160,
                            "height": 160
                        },
                        "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2105/com_people/avatars/medium5857d44d768204f40492149929b50531.jpg"
                    },
                    "large": {
                        "size": {
                            "width": 480,
                            "height": 480
                        },
                        "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2105/com_people/avatars/large5857d44d768204f40492149929b50531.jpg"
                    },
                    "square": {
                        "size": {
                            "width": 56,
                            "height": 56
                        },
                        "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2105/com_people/avatars/square5857d44d768204f40492149929b50531.jpg"
                    },
                    "original": {
                        "size": {
                            "width": 1665,
                            "height": 1665
                        },
                        "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2105/com_people/avatars/original5857d44d768204f40492149929b50531.jpg"
                    }
                },
                "coverURL": [],
                "author": null,
                "creationTime": "2013-01-22 04:29:03",
                "editor": null,
                "updateTime": "2024-01-17 16:04:52",
                "subscriberCount": 0,
                "isLeader": false,
                "isFollower": false,
                "isBlocked": false,
                "followerCount": 0,
                "leaderCount": 0,
                "mutualCount": 0,
                "username": "Gadgettek",
                "givenName": "Gary",
                "familyName": "Rockrohr",
                "email": "gadgettek@gmail.com",
                "usertype": "registered",
                "gender": "male"
            },
            "target": {
                "id": 2105,
                "objectType": "com.people.person",
                "name": "Gary Rockrohr",
                "body": "I am a happily married gay man in Dallas TX that enjoys MMOs.  I have been playing MMOs since the first Everquest and STO since Beta.",
                "alias": "Gadgettek",
                "imageURL": {
                    "small": {
                        "size": {
                            "width": 80,
                            "height": 80
                        },
                        "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2105/com_people/avatars/small5857d44d768204f40492149929b50531.jpg"
                    },
                    "medium": {
                        "size": {
                            "width": 160,
                            "height": 160
                        },
                        "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2105/com_people/avatars/medium5857d44d768204f40492149929b50531.jpg"
                    },
                    "large": {
                        "size": {
                            "width": 480,
                            "height": 480
                        },
                        "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2105/com_people/avatars/large5857d44d768204f40492149929b50531.jpg"
                    },
                    "square": {
                        "size": {
                            "width": 56,
                            "height": 56
                        },
                        "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2105/com_people/avatars/square5857d44d768204f40492149929b50531.jpg"
                    },
                    "original": {
                        "size": {
                            "width": 1665,
                            "height": 1665
                        },
                        "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2105/com_people/avatars/original5857d44d768204f40492149929b50531.jpg"
                    }
                },
                "coverURL": [],
                "author": null,
                "creationTime": "2013-01-22 04:29:03",
                "editor": null,
                "updateTime": "2024-01-17 16:04:52",
                "subscriberCount": 0,
                "isLeader": false,
                "isFollower": false,
                "isBlocked": false,
                "followerCount": 0,
                "leaderCount": 0,
                "mutualCount": 0,
                "username": "Gadgettek",
                "givenName": "Gary",
                "familyName": "Rockrohr",
                "email": "gadgettek@gmail.com",
                "usertype": "registered",
                "gender": "male"
            },
            "object": {
                "id": 23408,
                "objectType": "com.notes.note",
                "name": "Removal due to inactivity",
                "body": "I'm writing to let you know that a toon in Star Trek Online has been removed from one of the Stonewall fleets due to inactivity. This is in no way meant to be any sort of punishment, merely a standing policy of Stonewall that any toon inactive longer than 3 months is removed from their respective fleet.  \r\n \r\nWhen you return, you're more than welcome to rejoin the fleet by asking in the Stonewallfleet channel. If you're not subscribed to that channel, you can type &quot;/channel_join StonewallFleet&quot;.  \r\n \r\nIf you have any questions at all, please feel free to message me ingame or on the site at http://fleet.stonewallgaming.net/profile/2040-robin  \r\n \r\nSincerely,  \r\n \r\nCaptain R'bin Vulik  \r\nCaptain of Membership Management  \r\nStonewall Gaming Network",
                "alias": "removal-due-to-inactivity",
                "author": {
                    "id": 1467,
                    "objectType": "com.people.person",
                    "name": "Robert",
                    "body": "I read a lot of SF/fantasy. The worlds created by LeGuin, with all their social complexity, are my favorite. Shows - apart from Star Trek I also watched Stargate a lot.\r\nIRL, I teach game theory.",
                    "alias": "robin",
                    "imageURL": {
                        "small": {
                            "size": {
                                "width": 80,
                                "height": 107
                            },
                            "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n1467/com_people/avatars/small4cee57fb5bb7f20f46a32179b5a8c9e2.png"
                        },
                        "medium": {
                            "size": {
                                "width": 160,
                                "height": 214
                            },
                            "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n1467/com_people/avatars/medium4cee57fb5bb7f20f46a32179b5a8c9e2.png"
                        },
                        "large": {
                            "size": {
                                "width": 160,
                                "height": 214
                            },
                            "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n1467/com_people/avatars/large4cee57fb5bb7f20f46a32179b5a8c9e2.png"
                        },
                        "square": {
                            "size": {
                                "width": 56,
                                "height": 56
                            },
                            "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n1467/com_people/avatars/square4cee57fb5bb7f20f46a32179b5a8c9e2.png"
                        },
                        "original": {
                            "size": {
                                "width": 160,
                                "height": 214
                            },
                            "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n1467/com_people/avatars/original4cee57fb5bb7f20f46a32179b5a8c9e2.png"
                        }
                    },
                    "coverURL": [],
                    "author": null,
                    "creationTime": "2012-02-21 12:46:11",
                    "editor": null,
                    "updateTime": "2016-09-01 00:29:32",
                    "subscriberCount": 0,
                    "isLeader": true,
                    "isFollower": true,
                    "isBlocked": false,
                    "followerCount": 18,
                    "leaderCount": 22,
                    "mutualCount": 17,
                    "username": "robin",
                    "givenName": "Robert",
                    "familyName": "",
                    "email": "robert.golanski@gmail.com",
                    "usertype": "registered",
                    "gender": "male"
                },
                "creationTime": "2016-02-14 02:35:24",
                "editor": {
                    "id": 1467,
                    "objectType": "com.people.person",
                    "name": "Robert",
                    "body": "I read a lot of SF/fantasy. The worlds created by LeGuin, with all their social complexity, are my favorite. Shows - apart from Star Trek I also watched Stargate a lot.\r\nIRL, I teach game theory.",
                    "alias": "robin",
                    "imageURL": {
                        "small": {
                            "size": {
                                "width": 80,
                                "height": 107
                            },
                            "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n1467/com_people/avatars/small4cee57fb5bb7f20f46a32179b5a8c9e2.png"
                        },
                        "medium": {
                            "size": {
                                "width": 160,
                                "height": 214
                            },
                            "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n1467/com_people/avatars/medium4cee57fb5bb7f20f46a32179b5a8c9e2.png"
                        },
                        "large": {
                            "size": {
                                "width": 160,
                                "height": 214
                            },
                            "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n1467/com_people/avatars/large4cee57fb5bb7f20f46a32179b5a8c9e2.png"
                        },
                        "square": {
                            "size": {
                                "width": 56,
                                "height": 56
                            },
                            "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n1467/com_people/avatars/square4cee57fb5bb7f20f46a32179b5a8c9e2.png"
                        },
                        "original": {
                            "size": {
                                "width": 160,
                                "height": 214
                            },
                            "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n1467/com_people/avatars/original4cee57fb5bb7f20f46a32179b5a8c9e2.png"
                        }
                    },
                    "coverURL": [],
                    "author": null,
                    "creationTime": "2012-02-21 12:46:11",
                    "editor": null,
                    "updateTime": "2016-09-01 00:29:32",
                    "subscriberCount": 0,
                    "isLeader": true,
                    "isFollower": true,
                    "isBlocked": false,
                    "followerCount": 18,
                    "leaderCount": 22,
                    "mutualCount": 17,
                    "username": "robin",
                    "givenName": "Robert",
                    "familyName": "",
                    "email": "robert.golanski@gmail.com",
                    "usertype": "registered",
                    "gender": "male"
                },
                "updateTime": "2016-02-14 02:35:24",
                "openToComment": true,
                "numOfComments": 1,
                "lastCommentTime": "2024-01-17 14:50:16",
                "lastComment": {
                    "id": 180050,
                    "objectType": "com.notes.comment",
                    "body": "Well I am back now, sorry for leaving the group high and dry.",
                    "author": {
                        "id": 2105,
                        "objectType": "com.people.person",
                        "name": "Gary Rockrohr",
                        "body": "I am a happily married gay man in Dallas TX that enjoys MMOs.  I have been playing MMOs since the first Everquest and STO since Beta.",
                        "alias": "Gadgettek",
                        "imageURL": {
                            "small": {
                                "size": {
                                    "width": 80,
                                    "height": 80
                                },
                                "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2105/com_people/avatars/small5857d44d768204f40492149929b50531.jpg"
                            },
                            "medium": {
                                "size": {
                                    "width": 160,
                                    "height": 160
                                },
                                "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2105/com_people/avatars/medium5857d44d768204f40492149929b50531.jpg"
                            },
                            "large": {
                                "size": {
                                    "width": 480,
                                    "height": 480
                                },
                                "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2105/com_people/avatars/large5857d44d768204f40492149929b50531.jpg"
                            },
                            "square": {
                                "size": {
                                    "width": 56,
                                    "height": 56
                                },
                                "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2105/com_people/avatars/square5857d44d768204f40492149929b50531.jpg"
                            },
                            "original": {
                                "size": {
                                    "width": 1665,
                                    "height": 1665
                                },
                                "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2105/com_people/avatars/original5857d44d768204f40492149929b50531.jpg"
                            }
                        },
                        "coverURL": [],
                        "author": null,
                        "creationTime": "2013-01-22 04:29:03",
                        "editor": null,
                        "updateTime": "2024-01-17 16:04:52",
                        "subscriberCount": 0,
                        "isLeader": false,
                        "isFollower": false,
                        "isBlocked": false,
                        "followerCount": 0,
                        "leaderCount": 0,
                        "mutualCount": 0,
                        "username": "Gadgettek",
                        "givenName": "Gary",
                        "familyName": "Rockrohr",
                        "email": "gadgettek@gmail.com",
                        "usertype": "registered",
                        "gender": "male"
                    },
                    "creationTime": "2024-01-17 14:50:16",
                    "editor": {
                        "id": 2105,
                        "objectType": "com.people.person",
                        "name": "Gary Rockrohr",
                        "body": "I am a happily married gay man in Dallas TX that enjoys MMOs.  I have been playing MMOs since the first Everquest and STO since Beta.",
                        "alias": "Gadgettek",
                        "imageURL": {
                            "small": {
                                "size": {
                                    "width": 80,
                                    "height": 80
                                },
                                "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2105/com_people/avatars/small5857d44d768204f40492149929b50531.jpg"
                            },
                            "medium": {
                                "size": {
                                    "width": 160,
                                    "height": 160
                                },
                                "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2105/com_people/avatars/medium5857d44d768204f40492149929b50531.jpg"
                            },
                            "large": {
                                "size": {
                                    "width": 480,
                                    "height": 480
                                },
                                "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2105/com_people/avatars/large5857d44d768204f40492149929b50531.jpg"
                            },
                            "square": {
                                "size": {
                                    "width": 56,
                                    "height": 56
                                },
                                "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2105/com_people/avatars/square5857d44d768204f40492149929b50531.jpg"
                            },
                            "original": {
                                "size": {
                                    "width": 1665,
                                    "height": 1665
                                },
                                "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2105/com_people/avatars/original5857d44d768204f40492149929b50531.jpg"
                            }
                        },
                        "coverURL": [],
                        "author": null,
                        "creationTime": "2013-01-22 04:29:03",
                        "editor": null,
                        "updateTime": "2024-01-17 16:04:52",
                        "subscriberCount": 0,
                        "isLeader": false,
                        "isFollower": false,
                        "isBlocked": false,
                        "followerCount": 0,
                        "leaderCount": 0,
                        "mutualCount": 0,
                        "username": "Gadgettek",
                        "givenName": "Gary",
                        "familyName": "Rockrohr",
                        "email": "gadgettek@gmail.com",
                        "usertype": "registered",
                        "gender": "male"
                    },
                    "updateTime": "2024-01-17 14:50:16",
                    "voteUpCount": 0
                },
                "lastCommenter": {
                    "id": 2105,
                    "objectType": "com.people.person",
                    "name": "Gary Rockrohr",
                    "body": "I am a happily married gay man in Dallas TX that enjoys MMOs.  I have been playing MMOs since the first Everquest and STO since Beta.",
                    "alias": "Gadgettek",
                    "imageURL": {
                        "small": {
                            "size": {
                                "width": 80,
                                "height": 80
                            },
                            "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2105/com_people/avatars/small5857d44d768204f40492149929b50531.jpg"
                        },
                        "medium": {
                            "size": {
                                "width": 160,
                                "height": 160
                            },
                            "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2105/com_people/avatars/medium5857d44d768204f40492149929b50531.jpg"
                        },
                        "large": {
                            "size": {
                                "width": 480,
                                "height": 480
                            },
                            "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2105/com_people/avatars/large5857d44d768204f40492149929b50531.jpg"
                        },
                        "square": {
                            "size": {
                                "width": 56,
                                "height": 56
                            },
                            "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2105/com_people/avatars/square5857d44d768204f40492149929b50531.jpg"
                        },
                        "original": {
                            "size": {
                                "width": 1665,
                                "height": 1665
                            },
                            "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2105/com_people/avatars/original5857d44d768204f40492149929b50531.jpg"
                        }
                    },
                    "coverURL": [],
                    "author": null,
                    "creationTime": "2013-01-22 04:29:03",
                    "editor": null,
                    "updateTime": "2024-01-17 16:04:52",
                    "subscriberCount": 0,
                    "isLeader": false,
                    "isFollower": false,
                    "isBlocked": false,
                    "followerCount": 0,
                    "leaderCount": 0,
                    "mutualCount": 0,
                    "username": "Gadgettek",
                    "givenName": "Gary",
                    "familyName": "Rockrohr",
                    "email": "gadgettek@gmail.com",
                    "usertype": "registered",
                    "gender": "male"
                },
                "subscriberCount": 1,
                "voteUpCount": 0,
                "owner": {
                    "id": 2105,
                    "objectType": "com.people.person",
                    "name": "Gary Rockrohr",
                    "body": "I am a happily married gay man in Dallas TX that enjoys MMOs.  I have been playing MMOs since the first Everquest and STO since Beta.",
                    "alias": "Gadgettek",
                    "imageURL": {
                        "small": {
                            "size": {
                                "width": 80,
                                "height": 80
                            },
                            "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2105/com_people/avatars/small5857d44d768204f40492149929b50531.jpg"
                        },
                        "medium": {
                            "size": {
                                "width": 160,
                                "height": 160
                            },
                            "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2105/com_people/avatars/medium5857d44d768204f40492149929b50531.jpg"
                        },
                        "large": {
                            "size": {
                                "width": 480,
                                "height": 480
                            },
                            "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2105/com_people/avatars/large5857d44d768204f40492149929b50531.jpg"
                        },
                        "square": {
                            "size": {
                                "width": 56,
                                "height": 56
                            },
                            "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2105/com_people/avatars/square5857d44d768204f40492149929b50531.jpg"
                        },
                        "original": {
                            "size": {
                                "width": 1665,
                                "height": 1665
                            },
                            "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2105/com_people/avatars/original5857d44d768204f40492149929b50531.jpg"
                        }
                    },
                    "coverURL": [],
                    "author": null,
                    "creationTime": "2013-01-22 04:29:03",
                    "editor": null,
                    "updateTime": "2024-01-17 16:04:52",
                    "subscriberCount": 0,
                    "isLeader": false,
                    "isFollower": false,
                    "isBlocked": false,
                    "followerCount": 0,
                    "leaderCount": 0,
                    "mutualCount": 0,
                    "username": "Gadgettek",
                    "givenName": "Gary",
                    "familyName": "Rockrohr",
                    "email": "gadgettek@gmail.com",
                    "usertype": "registered",
                    "gender": "male"
                }
            },
            "creationTime": "2024-01-17 14:50:16",
            "comments": [
                {
                    "id": 180050,
                    "objectType": "com.notes.comment",
                    "body": "Well I am back now, sorry for leaving the group high and dry.",
                    "author": {
                        "id": 2105,
                        "objectType": "com.people.person",
                        "name": "Gary Rockrohr",
                        "body": "I am a happily married gay man in Dallas TX that enjoys MMOs.  I have been playing MMOs since the first Everquest and STO since Beta.",
                        "alias": "Gadgettek",
                        "imageURL": {
                            "small": {
                                "size": {
                                    "width": 80,
                                    "height": 80
                                },
                                "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2105/com_people/avatars/small5857d44d768204f40492149929b50531.jpg"
                            },
                            "medium": {
                                "size": {
                                    "width": 160,
                                    "height": 160
                                },
                                "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2105/com_people/avatars/medium5857d44d768204f40492149929b50531.jpg"
                            },
                            "large": {
                                "size": {
                                    "width": 480,
                                    "height": 480
                                },
                                "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2105/com_people/avatars/large5857d44d768204f40492149929b50531.jpg"
                            },
                            "square": {
                                "size": {
                                    "width": 56,
                                    "height": 56
                                },
                                "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2105/com_people/avatars/square5857d44d768204f40492149929b50531.jpg"
                            },
                            "original": {
                                "size": {
                                    "width": 1665,
                                    "height": 1665
                                },
                                "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2105/com_people/avatars/original5857d44d768204f40492149929b50531.jpg"
                            }
                        },
                        "coverURL": [],
                        "author": null,
                        "creationTime": "2013-01-22 04:29:03",
                        "editor": null,
                        "updateTime": "2024-01-17 16:04:52",
                        "subscriberCount": 0,
                        "isLeader": false,
                        "isFollower": false,
                        "isBlocked": false,
                        "followerCount": 0,
                        "leaderCount": 0,
                        "mutualCount": 0,
                        "username": "Gadgettek",
                        "givenName": "Gary",
                        "familyName": "Rockrohr",
                        "email": "gadgettek@gmail.com",
                        "usertype": "registered",
                        "gender": "male"
                    },
                    "creationTime": "2024-01-17 14:50:16",
                    "editor": {
                        "id": 2105,
                        "objectType": "com.people.person",
                        "name": "Gary Rockrohr",
                        "body": "I am a happily married gay man in Dallas TX that enjoys MMOs.  I have been playing MMOs since the first Everquest and STO since Beta.",
                        "alias": "Gadgettek",
                        "imageURL": {
                            "small": {
                                "size": {
                                    "width": 80,
                                    "height": 80
                                },
                                "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2105/com_people/avatars/small5857d44d768204f40492149929b50531.jpg"
                            },
                            "medium": {
                                "size": {
                                    "width": 160,
                                    "height": 160
                                },
                                "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2105/com_people/avatars/medium5857d44d768204f40492149929b50531.jpg"
                            },
                            "large": {
                                "size": {
                                    "width": 480,
                                    "height": 480
                                },
                                "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2105/com_people/avatars/large5857d44d768204f40492149929b50531.jpg"
                            },
                            "square": {
                                "size": {
                                    "width": 56,
                                    "height": 56
                                },
                                "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2105/com_people/avatars/square5857d44d768204f40492149929b50531.jpg"
                            },
                            "original": {
                                "size": {
                                    "width": 1665,
                                    "height": 1665
                                },
                                "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2105/com_people/avatars/original5857d44d768204f40492149929b50531.jpg"
                            }
                        },
                        "coverURL": [],
                        "author": null,
                        "creationTime": "2013-01-22 04:29:03",
                        "editor": null,
                        "updateTime": "2024-01-17 16:04:52",
                        "subscriberCount": 0,
                        "isLeader": false,
                        "isFollower": false,
                        "isBlocked": false,
                        "followerCount": 0,
                        "leaderCount": 0,
                        "mutualCount": 0,
                        "username": "Gadgettek",
                        "givenName": "Gary",
                        "familyName": "Rockrohr",
                        "email": "gadgettek@gmail.com",
                        "usertype": "registered",
                        "gender": "male"
                    },
                    "updateTime": "2024-01-17 14:50:16",
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