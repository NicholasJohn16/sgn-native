import {Title, Body} from './article_add';
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
        "id": 162342,
        "component": "com_articles",
        "name": "article_add",
        "subject": {
            "id": 1,
            "objectType": "com.people.person",
            "name": "Nick Swinford",
            "body": "Heya, I'm Nick, just a laid back guy from Chicago, stuck living in Kentucky. I like to spend my free time playing video games, building websites and heading to the gym when I can. If you wanna chat, hit me up!\r\n\r\nI'm also the Fleet Admiral and Founder of Stonewall Fleet so if you have any questions or need any help, feel free to send me a message.\r\n\r\nhttps://www.stonewallgaming.net/articles/161470-nicholasjohn16-readme",
            "alias": "nicholasjohn16",
            "yes": "yes",
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
            "id": 1,
            "objectType": "com.people.person",
            "name": "Nick Swinford",
            "body": "Heya, I'm Nick, just a laid back guy from Chicago, stuck living in Kentucky. I like to spend my free time playing video games, building websites and heading to the gym when I can. If you wanna chat, hit me up!\r\n\r\nI'm also the Fleet Admiral and Founder of Stonewall Fleet so if you have any questions or need any help, feel free to send me a message.\r\n\r\nhttps://www.stonewallgaming.net/articles/161470-nicholasjohn16-readme",
            "alias": "nicholasjohn16",
            "yes": "yes",
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
        "object": {
            "id": 162341,
            "objectType": "com.articles.article",
            "name": "Voice Chat and Users",
            "body": "<p>Over the years, SGN has built up groups of voice chat users several times. Generally, it follows a pretty predictable pattern. We start with just a couple of regulars and slowly build up a more sizeable group. People have a good time and really enjoy getting to know each other. They start exploring other games together and for a while everything’s great. Eventually, someone’s feelings get hurt over an unintentionally hurtful comment, someone rubs others the wrong way or some other interpersonal issue develops. Then things start devolving into drama.  Exclusive cliques form, someone inevitably gets excluded; sometimes this results in competing servers being created. This has happened many times over, starting back on Ventrillo, then TeamSpeak, but we’d hopefully like to stop it here.</p><p>We’ve tried many different strategies to stop the cycle. In the past, we added extra Lounge channels so that incompatible groups didn’t have to interact. We created rules for team channels like asking for permission before joining to give teams more privacy.  This is why [url=https://www.stonewallgaming.net/pages/sgn/code-of-conduct]we created  rules[/url] about excluding people and inviting people to other servers. The separation always makes things worse. That’s why we wrote the [url=https://www.stonewallgaming.net/pages/sgn/etiquette-guide-for-discord]Etiquette Guide to Discord[/url] (formerly TeamSpeak) so that members would know all of the social expectations of Discord.</p><p>The drama always comes back here and SGN always suffers from it. I can’t count the number of times that both parties end up leaving SGN to avoid one another. The loss can be felt across the community. At our core, we’re a family and sometimes families fight, but they also forgive. If someone has done something to upset you, try talking to them and working out your problems. If things get worse, please contact an Officer.</p><p>We’re out of new ideas on how to deal with the cycle. We’d like to ask your help in combating it. If you see problems arising, talk to an Officer about it. It doesn’t mean someone will get in trouble, but it allows us to get out ahead of issues before they become bigger.</p><p>I’d like to mention a few basic suggestions:</p><ul><li>Be kind to one another.</li><li>Make sure that your jokes don’t hurt.</li><li>Give compliments in equal weight.</li><li>Ask for and give forgiveness easily.</li><li>Don’t exclude anyone.</li></ul>#leaderdoc",
            "alias": "voice-chat-and-users",
            "yes": "yes",
            "coverURL": [],
            "author": {
            "id": 1,
            "objectType": "com.people.person",
            "name": "Nick Swinford",
            "body": "Heya, I'm Nick, just a laid back guy from Chicago, stuck living in Kentucky. I like to spend my free time playing video games, building websites and heading to the gym when I can. If you wanna chat, hit me up!\r\n\r\nI'm also the Fleet Admiral and Founder of Stonewall Fleet so if you have any questions or need any help, feel free to send me a message.\r\n\r\nhttps://www.stonewallgaming.net/articles/161470-nicholasjohn16-readme",
            "alias": "nicholasjohn16",
            "yes": "yes",
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
            "creationTime": "2020-09-01 01:00:39",
            "editor": {
            "id": 1,
            "objectType": "com.people.person",
            "name": "Nick Swinford",
            "body": "Heya, I'm Nick, just a laid back guy from Chicago, stuck living in Kentucky. I like to spend my free time playing video games, building websites and heading to the gym when I can. If you wanna chat, hit me up!\r\n\r\nI'm also the Fleet Admiral and Founder of Stonewall Fleet so if you have any questions or need any help, feel free to send me a message.\r\n\r\nhttps://www.stonewallgaming.net/articles/161470-nicholasjohn16-readme",
            "alias": "nicholasjohn16",
            "yes": "yes",
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
            "updateTime": "2020-09-01 18:22:52",
            "openToComment": true,
            "numOfComments": 0,
            "lastCommentTime": null,
            "lastComment": null,
            "lastCommenter": null,
            "subscriberCount": 3,
            "voteUpCount": 2,
            "owner": {
            "id": 1,
            "objectType": "com.people.person",
            "name": "Nick Swinford",
            "body": "Heya, I'm Nick, just a laid back guy from Chicago, stuck living in Kentucky. I like to spend my free time playing video games, building websites and heading to the gym when I can. If you wanna chat, hit me up!\r\n\r\nI'm also the Fleet Admiral and Founder of Stonewall Fleet so if you have any questions or need any help, feel free to send me a message.\r\n\r\nhttps://www.stonewallgaming.net/articles/161470-nicholasjohn16-readme",
            "alias": "nicholasjohn16",
            "yes": "yes",
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
            }
        },
        "creationTime": "2020-09-01 01:00:39",
        "commands": [
            "vote",
            "comment",
            "delete"
        ]
        }
    },
};