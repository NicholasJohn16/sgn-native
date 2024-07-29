import {Title, Body} from './article_comment';
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

export const MultipleComments = {
    args: {
        story: {
            "objectType": "com.stories.story",
            "id": 120228,
            "component": "com_articles",
            "name": "article_comment",
            "subjects": [
              {
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
              {
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
              {
                "id": 2926,
                "objectType": "com.people.person",
                "name": "Michael",
                "body": "Relocated to Dallas in July 2015 from Chicago, still looking for good pizza here, there seems to be a lack of it  :(. I love all things geek, when I was 13 I went to the worlds largest Star Trek convention EVER in the National Air and Space Museum in Washington D.C. When I was 12 I went to Space Camp at Cape Canaveral, it was life changing! I learned all about jet propulsion, EVA, and all other space things, I truly wanted to be in space as an occupation. The only reason I chose my current profession was because Starfleet does not yet exist. ¯\\_(ツ)_/¯.\r\nI run around on a few toons in STO, though my mains are:\r\nJ.L. Rand\r\nR.J. Daystrom\r\nJaj'Heg",
                "alias": "Mstfrancis",
                "imageURL": {
                  "large": {
                    "size": {
                      "width": 1600,
                      "height": 400
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2926/com_people/avatars/largedf088f5bc44ae76b13a6f753d5b08726.png"
                  },
                  "medium": {
                    "size": {
                      "width": 640,
                      "height": 160
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2926/com_people/avatars/mediumdf088f5bc44ae76b13a6f753d5b08726.png"
                  },
                  "original": {
                    "size": {
                      "width": 1984,
                      "height": 496
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2926/com_people/avatars/originaldf088f5bc44ae76b13a6f753d5b08726.png"
                  }
                },
                "coverURL": {
                  "large": {
                    "size": {
                      "width": 1600,
                      "height": 400
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2926/com_people/covers/large2ada96d2d2e2abcd6c4946576548bdb0.jpg"
                  },
                  "medium": {
                    "size": {
                      "width": 640,
                      "height": 160
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2926/com_people/covers/medium2ada96d2d2e2abcd6c4946576548bdb0.jpg"
                  },
                  "original": {
                    "size": {
                      "width": 1984,
                      "height": 496
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2926/com_people/covers/original2ada96d2d2e2abcd6c4946576548bdb0.jpg"
                  }
                },
                "author": null,
                "creationTime": "2014-04-06 01:13:08",
                "editor": null,
                "updateTime": "2017-08-20 22:36:41",
                "subscriberCount": 0,
                "isLeader": true,
                "isFollower": true,
                "isBlocked": false,
                "followerCount": 50,
                "leaderCount": 62,
                "mutualCount": 45,
                "username": "Mstfrancis",
                "givenName": "Michael",
                "familyName": "",
                "email": "admiralrand@gmail.com",
                "usertype": "registered",
                "gender": "male"
              }
            ],
            "target": {
              "id": 72919,
              "objectType": "com.groups.group",
              "name": "Personnel Files",
              "body": "A place to discuss members that we're concerned about. #leadership #sgn",
              "alias": "personnel-files",
              "imageURL": {
                "small": {
                  "size": {
                    "width": 80,
                    "height": 80
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n72919/com_groups/avatars/small168e4c96835ddc24ae1c8378c30bc11b.png"
                },
                "medium": {
                  "size": {
                    "width": 160,
                    "height": 160
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n72919/com_groups/avatars/medium168e4c96835ddc24ae1c8378c30bc11b.png"
                },
                "large": {
                  "size": {
                    "width": 256,
                    "height": 256
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n72919/com_groups/avatars/large168e4c96835ddc24ae1c8378c30bc11b.png"
                },
                "square": {
                  "size": {
                    "width": 56,
                    "height": 56
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n72919/com_groups/avatars/square168e4c96835ddc24ae1c8378c30bc11b.png"
                },
                "original": {
                  "size": {
                    "width": 256,
                    "height": 256
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n72919/com_groups/avatars/original168e4c96835ddc24ae1c8378c30bc11b.png"
                }
              },
              "coverURL": [],
              "author": null,
              "creationTime": "2016-08-31 11:56:31",
              "editor": null,
              "updateTime": "2016-08-31 11:56:31",
              "subscriberCount": 4,
              "isLeader": true,
              "followerCount": 5,
              "administratorIds": [
                "1"
              ],
              "isAdministrated": true
            },
            "object": {
              "id": 118658,
              "objectType": "com.articles.article",
              "name": "How to post Images in Topics",
              "body": "<p>In a few easy steps, even you can post images in topics with ease!</p><p>http://www.stonewallgaming.net/photos/118629</p><p>Click here!</p><p>http://www.stonewallgaming.net/photos/118631</p><p>And then click here! </p><p>http://www.stonewallgaming.net/photos/118633</p><p>You'll get this! If you have a bunch of photos to upload, there's an uploader you can use if you click on Photos > View All Photos > Upload, but for just a single screenshot, this is quicker.</p><p>http://www.stonewallgaming.net/photos/118635</p><p>If the form closes, just click here to open it again. </p><p>http://www.stonewallgaming.net/photos/118637</p><p>Click here to select a file! </p><p>http://www.stonewallgaming.net/photos/118639</p><p>Add some sweet notes and hashtags here! Don't use the user's name as a hashtag as this will be publicly viewable in the Trending Hashtags, but try to give it some relavent info so it's easier to find in the future. If you have a lot of photos, consider adding them all to a Set.</p><p>http://www.stonewallgaming.net/photos/118621</p><p>Click here!</p><p>http://www.stonewallgaming.net/photos/118622</p><p>Right click here and copy the link or click the link and... </p><p>http://www.stonewallgaming.net/photos/118625</p><p>Select and copy this link! </p><p>http://www.stonewallgaming.net/photos/118627</p><p>Make a new topic or edit an old one and paste the link into the body! </p><p>http://www.stonewallgaming.net/photos/118649</p><p>Give it a cool title. Click here! </p><p>http://www.stonewallgaming.net/photos/118643</p><p>This image is now in the topic!!You can do this in: notes, topics, todos, comments, blogs, prolly photos.  This works in the forums, as well. Unlike using the img tag, this has the nifty image viewer when you click on it.</p><p>http://www.stonewallgaming.net/photos/118645</p><p>If you want, go back and delete the story for the photo! You don't have to, but it seems to be less confusing for others that don't realize what's going on and keeps the conversation where you post the image instead of on the image itself.Clicking this will delete the story on the dashboard, but not the actual photo. </p><p>http://www.stonewallgaming.net/photos/118647</p><p>Please don't host externally cause this ends with dead links like this! </p><p>http://www.stonewallgaming.net/photos/118653</p><p>Snipping Tool is your secret Swiss army knife! Search for Snipping Tool on your computer and pin it to your start menu. It can take screenshots pretty much anywhere. It has a bunch of nifty features, like the ability to select a specific region of the screen or set a delay so you can switch back in-game before it takes the screenshot. </p><p>#snippingtool #screenshot #photoupload</p>",
              "alias": "how-to-post-images-in-topics",
              "coverURL": [],
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
              "creationTime": "2017-11-30 15:53:49",
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
              "updateTime": "2017-12-01 02:24:17",
              "openToComment": true,
              "numOfComments": 42,
              "lastCommentTime": "2017-12-29 15:59:15",
              "lastComment": {
                "id": 120227,
                "objectType": "com.articles.comment",
                "body": "I must admit I had trouble when the last time I used this to paste multiple images from a Set to a post.\r\nIf you click on your heep of pictures you just uploaded (your set)\r\n\r\n- click on the sets in this group http://www.stonewallgaming.net/photos/@72919/sets\r\n\r\n- on the blue bar, under \"personel file sets\" click the \"Photos\" button\r\n(this should bring them up individualy)\r\n\r\n- at the bottom of each picture you should see \"View\"\r\n\r\n- Right click on \"View\" and choose \"copy link address\"\r\n\r\n- paste that link in as responce in your choosen topic\r\n\r\nand go back to do that for each picture you uploaded, always wise to have two tabs open.",
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
                "creationTime": "2017-12-29 15:59:15",
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
                "updateTime": "2017-12-29 15:59:15",
                "voteUpCount": 0
              },
              "lastCommenter": {
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
              "subscriberCount": 5,
              "voteUpCount": 0,
              "owner": {
                "id": 72919,
                "objectType": "com.groups.group",
                "name": "Personnel Files",
                "body": "A place to discuss members that we're concerned about. #leadership #sgn",
                "alias": "personnel-files",
                "imageURL": {
                  "small": {
                    "size": {
                      "width": 80,
                      "height": 80
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n72919/com_groups/avatars/small168e4c96835ddc24ae1c8378c30bc11b.png"
                  },
                  "medium": {
                    "size": {
                      "width": 160,
                      "height": 160
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n72919/com_groups/avatars/medium168e4c96835ddc24ae1c8378c30bc11b.png"
                  },
                  "large": {
                    "size": {
                      "width": 256,
                      "height": 256
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n72919/com_groups/avatars/large168e4c96835ddc24ae1c8378c30bc11b.png"
                  },
                  "square": {
                    "size": {
                      "width": 56,
                      "height": 56
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n72919/com_groups/avatars/square168e4c96835ddc24ae1c8378c30bc11b.png"
                  },
                  "original": {
                    "size": {
                      "width": 256,
                      "height": 256
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n72919/com_groups/avatars/original168e4c96835ddc24ae1c8378c30bc11b.png"
                  }
                },
                "coverURL": [],
                "author": null,
                "creationTime": "2016-08-31 11:56:31",
                "editor": null,
                "updateTime": "2016-08-31 11:56:31",
                "subscriberCount": 4,
                "isLeader": true,
                "followerCount": 5,
                "administratorIds": [
                  "1"
                ],
                "isAdministrated": true
              }
            },
            "creationTime": "2017-12-29 15:59:16",
            "comments": [
              {
                "id": 120165,
                "objectType": "com.articles.comment",
                "body": "-pation",
                "author": {
                  "id": 2926,
                  "objectType": "com.people.person",
                  "name": "Michael",
                  "body": "Relocated to Dallas in July 2015 from Chicago, still looking for good pizza here, there seems to be a lack of it  :(. I love all things geek, when I was 13 I went to the worlds largest Star Trek convention EVER in the National Air and Space Museum in Washington D.C. When I was 12 I went to Space Camp at Cape Canaveral, it was life changing! I learned all about jet propulsion, EVA, and all other space things, I truly wanted to be in space as an occupation. The only reason I chose my current profession was because Starfleet does not yet exist. ¯\\_(ツ)_/¯.\r\nI run around on a few toons in STO, though my mains are:\r\nJ.L. Rand\r\nR.J. Daystrom\r\nJaj'Heg",
                  "alias": "Mstfrancis",
                  "imageURL": {
                    "large": {
                      "size": {
                        "width": 1600,
                        "height": 400
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2926/com_people/avatars/largedf088f5bc44ae76b13a6f753d5b08726.png"
                    },
                    "medium": {
                      "size": {
                        "width": 640,
                        "height": 160
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2926/com_people/avatars/mediumdf088f5bc44ae76b13a6f753d5b08726.png"
                    },
                    "original": {
                      "size": {
                        "width": 1984,
                        "height": 496
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2926/com_people/avatars/originaldf088f5bc44ae76b13a6f753d5b08726.png"
                    }
                  },
                  "coverURL": {
                    "large": {
                      "size": {
                        "width": 1600,
                        "height": 400
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2926/com_people/covers/large2ada96d2d2e2abcd6c4946576548bdb0.jpg"
                    },
                    "medium": {
                      "size": {
                        "width": 640,
                        "height": 160
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2926/com_people/covers/medium2ada96d2d2e2abcd6c4946576548bdb0.jpg"
                    },
                    "original": {
                      "size": {
                        "width": 1984,
                        "height": 496
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2926/com_people/covers/original2ada96d2d2e2abcd6c4946576548bdb0.jpg"
                    }
                  },
                  "author": null,
                  "creationTime": "2014-04-06 01:13:08",
                  "editor": null,
                  "updateTime": "2017-08-20 22:36:41",
                  "subscriberCount": 0,
                  "isLeader": true,
                  "isFollower": true,
                  "isBlocked": false,
                  "followerCount": 50,
                  "leaderCount": 62,
                  "mutualCount": 45,
                  "username": "Mstfrancis",
                  "givenName": "Michael",
                  "familyName": "",
                  "email": "admiralrand@gmail.com",
                  "usertype": "registered",
                  "gender": "male"
                },
                "creationTime": "2017-12-29 03:02:52",
                "editor": {
                  "id": 2926,
                  "objectType": "com.people.person",
                  "name": "Michael",
                  "body": "Relocated to Dallas in July 2015 from Chicago, still looking for good pizza here, there seems to be a lack of it  :(. I love all things geek, when I was 13 I went to the worlds largest Star Trek convention EVER in the National Air and Space Museum in Washington D.C. When I was 12 I went to Space Camp at Cape Canaveral, it was life changing! I learned all about jet propulsion, EVA, and all other space things, I truly wanted to be in space as an occupation. The only reason I chose my current profession was because Starfleet does not yet exist. ¯\\_(ツ)_/¯.\r\nI run around on a few toons in STO, though my mains are:\r\nJ.L. Rand\r\nR.J. Daystrom\r\nJaj'Heg",
                  "alias": "Mstfrancis",
                  "imageURL": {
                    "large": {
                      "size": {
                        "width": 1600,
                        "height": 400
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2926/com_people/avatars/largedf088f5bc44ae76b13a6f753d5b08726.png"
                    },
                    "medium": {
                      "size": {
                        "width": 640,
                        "height": 160
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2926/com_people/avatars/mediumdf088f5bc44ae76b13a6f753d5b08726.png"
                    },
                    "original": {
                      "size": {
                        "width": 1984,
                        "height": 496
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2926/com_people/avatars/originaldf088f5bc44ae76b13a6f753d5b08726.png"
                    }
                  },
                  "coverURL": {
                    "large": {
                      "size": {
                        "width": 1600,
                        "height": 400
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2926/com_people/covers/large2ada96d2d2e2abcd6c4946576548bdb0.jpg"
                    },
                    "medium": {
                      "size": {
                        "width": 640,
                        "height": 160
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2926/com_people/covers/medium2ada96d2d2e2abcd6c4946576548bdb0.jpg"
                    },
                    "original": {
                      "size": {
                        "width": 1984,
                        "height": 496
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2926/com_people/covers/original2ada96d2d2e2abcd6c4946576548bdb0.jpg"
                    }
                  },
                  "author": null,
                  "creationTime": "2014-04-06 01:13:08",
                  "editor": null,
                  "updateTime": "2017-08-20 22:36:41",
                  "subscriberCount": 0,
                  "isLeader": true,
                  "isFollower": true,
                  "isBlocked": false,
                  "followerCount": 50,
                  "leaderCount": 62,
                  "mutualCount": 45,
                  "username": "Mstfrancis",
                  "givenName": "Michael",
                  "familyName": "",
                  "email": "admiralrand@gmail.com",
                  "usertype": "registered",
                  "gender": "male"
                },
                "updateTime": "2017-12-29 03:02:52",
                "voteUpCount": 0
              },
              {
                "id": 120199,
                "objectType": "com.articles.comment",
                "body": "Not trying to be difficult, but....\r\n\r\nHere is my thing that I’m not understanding. How do you embed the images in a reply thread? I think that is where I am missing an unlock. \r\n\r\nAll I see is a text bubble and and a post button. Let’s say I want to imbed images, I paste the link, here and it just shows, well... a link. \r\n\r\nI think that is where I am confused?",
                "author": {
                  "id": 2926,
                  "objectType": "com.people.person",
                  "name": "Michael",
                  "body": "Relocated to Dallas in July 2015 from Chicago, still looking for good pizza here, there seems to be a lack of it  :(. I love all things geek, when I was 13 I went to the worlds largest Star Trek convention EVER in the National Air and Space Museum in Washington D.C. When I was 12 I went to Space Camp at Cape Canaveral, it was life changing! I learned all about jet propulsion, EVA, and all other space things, I truly wanted to be in space as an occupation. The only reason I chose my current profession was because Starfleet does not yet exist. ¯\\_(ツ)_/¯.\r\nI run around on a few toons in STO, though my mains are:\r\nJ.L. Rand\r\nR.J. Daystrom\r\nJaj'Heg",
                  "alias": "Mstfrancis",
                  "imageURL": {
                    "large": {
                      "size": {
                        "width": 1600,
                        "height": 400
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2926/com_people/avatars/largedf088f5bc44ae76b13a6f753d5b08726.png"
                    },
                    "medium": {
                      "size": {
                        "width": 640,
                        "height": 160
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2926/com_people/avatars/mediumdf088f5bc44ae76b13a6f753d5b08726.png"
                    },
                    "original": {
                      "size": {
                        "width": 1984,
                        "height": 496
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2926/com_people/avatars/originaldf088f5bc44ae76b13a6f753d5b08726.png"
                    }
                  },
                  "coverURL": {
                    "large": {
                      "size": {
                        "width": 1600,
                        "height": 400
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2926/com_people/covers/large2ada96d2d2e2abcd6c4946576548bdb0.jpg"
                    },
                    "medium": {
                      "size": {
                        "width": 640,
                        "height": 160
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2926/com_people/covers/medium2ada96d2d2e2abcd6c4946576548bdb0.jpg"
                    },
                    "original": {
                      "size": {
                        "width": 1984,
                        "height": 496
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2926/com_people/covers/original2ada96d2d2e2abcd6c4946576548bdb0.jpg"
                    }
                  },
                  "author": null,
                  "creationTime": "2014-04-06 01:13:08",
                  "editor": null,
                  "updateTime": "2017-08-20 22:36:41",
                  "subscriberCount": 0,
                  "isLeader": true,
                  "isFollower": true,
                  "isBlocked": false,
                  "followerCount": 50,
                  "leaderCount": 62,
                  "mutualCount": 45,
                  "username": "Mstfrancis",
                  "givenName": "Michael",
                  "familyName": "",
                  "email": "admiralrand@gmail.com",
                  "usertype": "registered",
                  "gender": "male"
                },
                "creationTime": "2017-12-29 10:59:45",
                "editor": {
                  "id": 2926,
                  "objectType": "com.people.person",
                  "name": "Michael",
                  "body": "Relocated to Dallas in July 2015 from Chicago, still looking for good pizza here, there seems to be a lack of it  :(. I love all things geek, when I was 13 I went to the worlds largest Star Trek convention EVER in the National Air and Space Museum in Washington D.C. When I was 12 I went to Space Camp at Cape Canaveral, it was life changing! I learned all about jet propulsion, EVA, and all other space things, I truly wanted to be in space as an occupation. The only reason I chose my current profession was because Starfleet does not yet exist. ¯\\_(ツ)_/¯.\r\nI run around on a few toons in STO, though my mains are:\r\nJ.L. Rand\r\nR.J. Daystrom\r\nJaj'Heg",
                  "alias": "Mstfrancis",
                  "imageURL": {
                    "large": {
                      "size": {
                        "width": 1600,
                        "height": 400
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2926/com_people/avatars/largedf088f5bc44ae76b13a6f753d5b08726.png"
                    },
                    "medium": {
                      "size": {
                        "width": 640,
                        "height": 160
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2926/com_people/avatars/mediumdf088f5bc44ae76b13a6f753d5b08726.png"
                    },
                    "original": {
                      "size": {
                        "width": 1984,
                        "height": 496
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2926/com_people/avatars/originaldf088f5bc44ae76b13a6f753d5b08726.png"
                    }
                  },
                  "coverURL": {
                    "large": {
                      "size": {
                        "width": 1600,
                        "height": 400
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2926/com_people/covers/large2ada96d2d2e2abcd6c4946576548bdb0.jpg"
                    },
                    "medium": {
                      "size": {
                        "width": 640,
                        "height": 160
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2926/com_people/covers/medium2ada96d2d2e2abcd6c4946576548bdb0.jpg"
                    },
                    "original": {
                      "size": {
                        "width": 1984,
                        "height": 496
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2926/com_people/covers/original2ada96d2d2e2abcd6c4946576548bdb0.jpg"
                    }
                  },
                  "author": null,
                  "creationTime": "2014-04-06 01:13:08",
                  "editor": null,
                  "updateTime": "2017-08-20 22:36:41",
                  "subscriberCount": 0,
                  "isLeader": true,
                  "isFollower": true,
                  "isBlocked": false,
                  "followerCount": 50,
                  "leaderCount": 62,
                  "mutualCount": 45,
                  "username": "Mstfrancis",
                  "givenName": "Michael",
                  "familyName": "",
                  "email": "admiralrand@gmail.com",
                  "usertype": "registered",
                  "gender": "male"
                },
                "updateTime": "2017-12-29 10:59:45",
                "voteUpCount": 0
              },
              {
                "id": 120202,
                "objectType": "com.articles.comment",
                "body": "@mstfrancis, see in the image how the url to the image is just pasted directly into the body? That's all you have to do. Just paste the url ending in /photos/[0-9] into the comment or body and it'll work.",
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
                "creationTime": "2017-12-29 11:02:33",
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
                "updateTime": "2017-12-29 11:02:33",
                "voteUpCount": 0
              },
              {
                "id": 120209,
                "objectType": "com.articles.comment",
                "body": "http://halish.co.uk/stuff/ssc-season3.png\r\nWorked so well",
                "author": {
                  "id": 2926,
                  "objectType": "com.people.person",
                  "name": "Michael",
                  "body": "Relocated to Dallas in July 2015 from Chicago, still looking for good pizza here, there seems to be a lack of it  :(. I love all things geek, when I was 13 I went to the worlds largest Star Trek convention EVER in the National Air and Space Museum in Washington D.C. When I was 12 I went to Space Camp at Cape Canaveral, it was life changing! I learned all about jet propulsion, EVA, and all other space things, I truly wanted to be in space as an occupation. The only reason I chose my current profession was because Starfleet does not yet exist. ¯\\_(ツ)_/¯.\r\nI run around on a few toons in STO, though my mains are:\r\nJ.L. Rand\r\nR.J. Daystrom\r\nJaj'Heg",
                  "alias": "Mstfrancis",
                  "imageURL": {
                    "large": {
                      "size": {
                        "width": 1600,
                        "height": 400
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2926/com_people/avatars/largedf088f5bc44ae76b13a6f753d5b08726.png"
                    },
                    "medium": {
                      "size": {
                        "width": 640,
                        "height": 160
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2926/com_people/avatars/mediumdf088f5bc44ae76b13a6f753d5b08726.png"
                    },
                    "original": {
                      "size": {
                        "width": 1984,
                        "height": 496
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2926/com_people/avatars/originaldf088f5bc44ae76b13a6f753d5b08726.png"
                    }
                  },
                  "coverURL": {
                    "large": {
                      "size": {
                        "width": 1600,
                        "height": 400
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2926/com_people/covers/large2ada96d2d2e2abcd6c4946576548bdb0.jpg"
                    },
                    "medium": {
                      "size": {
                        "width": 640,
                        "height": 160
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2926/com_people/covers/medium2ada96d2d2e2abcd6c4946576548bdb0.jpg"
                    },
                    "original": {
                      "size": {
                        "width": 1984,
                        "height": 496
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2926/com_people/covers/original2ada96d2d2e2abcd6c4946576548bdb0.jpg"
                    }
                  },
                  "author": null,
                  "creationTime": "2014-04-06 01:13:08",
                  "editor": null,
                  "updateTime": "2017-08-20 22:36:41",
                  "subscriberCount": 0,
                  "isLeader": true,
                  "isFollower": true,
                  "isBlocked": false,
                  "followerCount": 50,
                  "leaderCount": 62,
                  "mutualCount": 45,
                  "username": "Mstfrancis",
                  "givenName": "Michael",
                  "familyName": "",
                  "email": "admiralrand@gmail.com",
                  "usertype": "registered",
                  "gender": "male"
                },
                "creationTime": "2017-12-29 12:09:11",
                "editor": {
                  "id": 2926,
                  "objectType": "com.people.person",
                  "name": "Michael",
                  "body": "Relocated to Dallas in July 2015 from Chicago, still looking for good pizza here, there seems to be a lack of it  :(. I love all things geek, when I was 13 I went to the worlds largest Star Trek convention EVER in the National Air and Space Museum in Washington D.C. When I was 12 I went to Space Camp at Cape Canaveral, it was life changing! I learned all about jet propulsion, EVA, and all other space things, I truly wanted to be in space as an occupation. The only reason I chose my current profession was because Starfleet does not yet exist. ¯\\_(ツ)_/¯.\r\nI run around on a few toons in STO, though my mains are:\r\nJ.L. Rand\r\nR.J. Daystrom\r\nJaj'Heg",
                  "alias": "Mstfrancis",
                  "imageURL": {
                    "large": {
                      "size": {
                        "width": 1600,
                        "height": 400
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2926/com_people/avatars/largedf088f5bc44ae76b13a6f753d5b08726.png"
                    },
                    "medium": {
                      "size": {
                        "width": 640,
                        "height": 160
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2926/com_people/avatars/mediumdf088f5bc44ae76b13a6f753d5b08726.png"
                    },
                    "original": {
                      "size": {
                        "width": 1984,
                        "height": 496
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2926/com_people/avatars/originaldf088f5bc44ae76b13a6f753d5b08726.png"
                    }
                  },
                  "coverURL": {
                    "large": {
                      "size": {
                        "width": 1600,
                        "height": 400
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2926/com_people/covers/large2ada96d2d2e2abcd6c4946576548bdb0.jpg"
                    },
                    "medium": {
                      "size": {
                        "width": 640,
                        "height": 160
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2926/com_people/covers/medium2ada96d2d2e2abcd6c4946576548bdb0.jpg"
                    },
                    "original": {
                      "size": {
                        "width": 1984,
                        "height": 496
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2926/com_people/covers/original2ada96d2d2e2abcd6c4946576548bdb0.jpg"
                    }
                  },
                  "author": null,
                  "creationTime": "2014-04-06 01:13:08",
                  "editor": null,
                  "updateTime": "2017-08-20 22:36:41",
                  "subscriberCount": 0,
                  "isLeader": true,
                  "isFollower": true,
                  "isBlocked": false,
                  "followerCount": 50,
                  "leaderCount": 62,
                  "mutualCount": 45,
                  "username": "Mstfrancis",
                  "givenName": "Michael",
                  "familyName": "",
                  "email": "admiralrand@gmail.com",
                  "usertype": "registered",
                  "gender": "male"
                },
                "updateTime": "2017-12-29 12:09:11",
                "voteUpCount": 0
              },
              {
                "id": 120212,
                "objectType": "com.articles.comment",
                "body": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n72919/com_photos/124de3994b3321730bb812311cf3ce89_original.jpg\r\n\r\nNope",
                "author": {
                  "id": 2926,
                  "objectType": "com.people.person",
                  "name": "Michael",
                  "body": "Relocated to Dallas in July 2015 from Chicago, still looking for good pizza here, there seems to be a lack of it  :(. I love all things geek, when I was 13 I went to the worlds largest Star Trek convention EVER in the National Air and Space Museum in Washington D.C. When I was 12 I went to Space Camp at Cape Canaveral, it was life changing! I learned all about jet propulsion, EVA, and all other space things, I truly wanted to be in space as an occupation. The only reason I chose my current profession was because Starfleet does not yet exist. ¯\\_(ツ)_/¯.\r\nI run around on a few toons in STO, though my mains are:\r\nJ.L. Rand\r\nR.J. Daystrom\r\nJaj'Heg",
                  "alias": "Mstfrancis",
                  "imageURL": {
                    "large": {
                      "size": {
                        "width": 1600,
                        "height": 400
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2926/com_people/avatars/largedf088f5bc44ae76b13a6f753d5b08726.png"
                    },
                    "medium": {
                      "size": {
                        "width": 640,
                        "height": 160
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2926/com_people/avatars/mediumdf088f5bc44ae76b13a6f753d5b08726.png"
                    },
                    "original": {
                      "size": {
                        "width": 1984,
                        "height": 496
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2926/com_people/avatars/originaldf088f5bc44ae76b13a6f753d5b08726.png"
                    }
                  },
                  "coverURL": {
                    "large": {
                      "size": {
                        "width": 1600,
                        "height": 400
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2926/com_people/covers/large2ada96d2d2e2abcd6c4946576548bdb0.jpg"
                    },
                    "medium": {
                      "size": {
                        "width": 640,
                        "height": 160
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2926/com_people/covers/medium2ada96d2d2e2abcd6c4946576548bdb0.jpg"
                    },
                    "original": {
                      "size": {
                        "width": 1984,
                        "height": 496
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2926/com_people/covers/original2ada96d2d2e2abcd6c4946576548bdb0.jpg"
                    }
                  },
                  "author": null,
                  "creationTime": "2014-04-06 01:13:08",
                  "editor": null,
                  "updateTime": "2017-08-20 22:36:41",
                  "subscriberCount": 0,
                  "isLeader": true,
                  "isFollower": true,
                  "isBlocked": false,
                  "followerCount": 50,
                  "leaderCount": 62,
                  "mutualCount": 45,
                  "username": "Mstfrancis",
                  "givenName": "Michael",
                  "familyName": "",
                  "email": "admiralrand@gmail.com",
                  "usertype": "registered",
                  "gender": "male"
                },
                "creationTime": "2017-12-29 12:12:14",
                "editor": {
                  "id": 2926,
                  "objectType": "com.people.person",
                  "name": "Michael",
                  "body": "Relocated to Dallas in July 2015 from Chicago, still looking for good pizza here, there seems to be a lack of it  :(. I love all things geek, when I was 13 I went to the worlds largest Star Trek convention EVER in the National Air and Space Museum in Washington D.C. When I was 12 I went to Space Camp at Cape Canaveral, it was life changing! I learned all about jet propulsion, EVA, and all other space things, I truly wanted to be in space as an occupation. The only reason I chose my current profession was because Starfleet does not yet exist. ¯\\_(ツ)_/¯.\r\nI run around on a few toons in STO, though my mains are:\r\nJ.L. Rand\r\nR.J. Daystrom\r\nJaj'Heg",
                  "alias": "Mstfrancis",
                  "imageURL": {
                    "large": {
                      "size": {
                        "width": 1600,
                        "height": 400
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2926/com_people/avatars/largedf088f5bc44ae76b13a6f753d5b08726.png"
                    },
                    "medium": {
                      "size": {
                        "width": 640,
                        "height": 160
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2926/com_people/avatars/mediumdf088f5bc44ae76b13a6f753d5b08726.png"
                    },
                    "original": {
                      "size": {
                        "width": 1984,
                        "height": 496
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2926/com_people/avatars/originaldf088f5bc44ae76b13a6f753d5b08726.png"
                    }
                  },
                  "coverURL": {
                    "large": {
                      "size": {
                        "width": 1600,
                        "height": 400
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2926/com_people/covers/large2ada96d2d2e2abcd6c4946576548bdb0.jpg"
                    },
                    "medium": {
                      "size": {
                        "width": 640,
                        "height": 160
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2926/com_people/covers/medium2ada96d2d2e2abcd6c4946576548bdb0.jpg"
                    },
                    "original": {
                      "size": {
                        "width": 1984,
                        "height": 496
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2926/com_people/covers/original2ada96d2d2e2abcd6c4946576548bdb0.jpg"
                    }
                  },
                  "author": null,
                  "creationTime": "2014-04-06 01:13:08",
                  "editor": null,
                  "updateTime": "2017-08-20 22:36:41",
                  "subscriberCount": 0,
                  "isLeader": true,
                  "isFollower": true,
                  "isBlocked": false,
                  "followerCount": 50,
                  "leaderCount": 62,
                  "mutualCount": 45,
                  "username": "Mstfrancis",
                  "givenName": "Michael",
                  "familyName": "",
                  "email": "admiralrand@gmail.com",
                  "usertype": "registered",
                  "gender": "male"
                },
                "updateTime": "2017-12-29 12:12:14",
                "voteUpCount": 0
              },
              {
                "id": 120215,
                "objectType": "com.articles.comment",
                "body": "I’m missing something.\r\n\r\nLike I said, there is just a text box and a submit button when replying. \r\n\r\nI understand the concept of adding photos to a note, it’s these replies I’m not understanding.",
                "author": {
                  "id": 2926,
                  "objectType": "com.people.person",
                  "name": "Michael",
                  "body": "Relocated to Dallas in July 2015 from Chicago, still looking for good pizza here, there seems to be a lack of it  :(. I love all things geek, when I was 13 I went to the worlds largest Star Trek convention EVER in the National Air and Space Museum in Washington D.C. When I was 12 I went to Space Camp at Cape Canaveral, it was life changing! I learned all about jet propulsion, EVA, and all other space things, I truly wanted to be in space as an occupation. The only reason I chose my current profession was because Starfleet does not yet exist. ¯\\_(ツ)_/¯.\r\nI run around on a few toons in STO, though my mains are:\r\nJ.L. Rand\r\nR.J. Daystrom\r\nJaj'Heg",
                  "alias": "Mstfrancis",
                  "imageURL": {
                    "large": {
                      "size": {
                        "width": 1600,
                        "height": 400
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2926/com_people/avatars/largedf088f5bc44ae76b13a6f753d5b08726.png"
                    },
                    "medium": {
                      "size": {
                        "width": 640,
                        "height": 160
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2926/com_people/avatars/mediumdf088f5bc44ae76b13a6f753d5b08726.png"
                    },
                    "original": {
                      "size": {
                        "width": 1984,
                        "height": 496
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2926/com_people/avatars/originaldf088f5bc44ae76b13a6f753d5b08726.png"
                    }
                  },
                  "coverURL": {
                    "large": {
                      "size": {
                        "width": 1600,
                        "height": 400
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2926/com_people/covers/large2ada96d2d2e2abcd6c4946576548bdb0.jpg"
                    },
                    "medium": {
                      "size": {
                        "width": 640,
                        "height": 160
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2926/com_people/covers/medium2ada96d2d2e2abcd6c4946576548bdb0.jpg"
                    },
                    "original": {
                      "size": {
                        "width": 1984,
                        "height": 496
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2926/com_people/covers/original2ada96d2d2e2abcd6c4946576548bdb0.jpg"
                    }
                  },
                  "author": null,
                  "creationTime": "2014-04-06 01:13:08",
                  "editor": null,
                  "updateTime": "2017-08-20 22:36:41",
                  "subscriberCount": 0,
                  "isLeader": true,
                  "isFollower": true,
                  "isBlocked": false,
                  "followerCount": 50,
                  "leaderCount": 62,
                  "mutualCount": 45,
                  "username": "Mstfrancis",
                  "givenName": "Michael",
                  "familyName": "",
                  "email": "admiralrand@gmail.com",
                  "usertype": "registered",
                  "gender": "male"
                },
                "creationTime": "2017-12-29 12:13:02",
                "editor": {
                  "id": 2926,
                  "objectType": "com.people.person",
                  "name": "Michael",
                  "body": "Relocated to Dallas in July 2015 from Chicago, still looking for good pizza here, there seems to be a lack of it  :(. I love all things geek, when I was 13 I went to the worlds largest Star Trek convention EVER in the National Air and Space Museum in Washington D.C. When I was 12 I went to Space Camp at Cape Canaveral, it was life changing! I learned all about jet propulsion, EVA, and all other space things, I truly wanted to be in space as an occupation. The only reason I chose my current profession was because Starfleet does not yet exist. ¯\\_(ツ)_/¯.\r\nI run around on a few toons in STO, though my mains are:\r\nJ.L. Rand\r\nR.J. Daystrom\r\nJaj'Heg",
                  "alias": "Mstfrancis",
                  "imageURL": {
                    "large": {
                      "size": {
                        "width": 1600,
                        "height": 400
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2926/com_people/avatars/largedf088f5bc44ae76b13a6f753d5b08726.png"
                    },
                    "medium": {
                      "size": {
                        "width": 640,
                        "height": 160
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2926/com_people/avatars/mediumdf088f5bc44ae76b13a6f753d5b08726.png"
                    },
                    "original": {
                      "size": {
                        "width": 1984,
                        "height": 496
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2926/com_people/avatars/originaldf088f5bc44ae76b13a6f753d5b08726.png"
                    }
                  },
                  "coverURL": {
                    "large": {
                      "size": {
                        "width": 1600,
                        "height": 400
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2926/com_people/covers/large2ada96d2d2e2abcd6c4946576548bdb0.jpg"
                    },
                    "medium": {
                      "size": {
                        "width": 640,
                        "height": 160
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2926/com_people/covers/medium2ada96d2d2e2abcd6c4946576548bdb0.jpg"
                    },
                    "original": {
                      "size": {
                        "width": 1984,
                        "height": 496
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n2926/com_people/covers/original2ada96d2d2e2abcd6c4946576548bdb0.jpg"
                    }
                  },
                  "author": null,
                  "creationTime": "2014-04-06 01:13:08",
                  "editor": null,
                  "updateTime": "2017-08-20 22:36:41",
                  "subscriberCount": 0,
                  "isLeader": true,
                  "isFollower": true,
                  "isBlocked": false,
                  "followerCount": 50,
                  "leaderCount": 62,
                  "mutualCount": 45,
                  "username": "Mstfrancis",
                  "givenName": "Michael",
                  "familyName": "",
                  "email": "admiralrand@gmail.com",
                  "usertype": "registered",
                  "gender": "male"
                },
                "updateTime": "2017-12-29 12:13:02",
                "voteUpCount": 0
              },
              {
                "id": 120227,
                "objectType": "com.articles.comment",
                "body": "I must admit I had trouble when the last time I used this to paste multiple images from a Set to a post.\r\nIf you click on your heep of pictures you just uploaded (your set)\r\n\r\n- click on the sets in this group http://www.stonewallgaming.net/photos/@72919/sets\r\n\r\n- on the blue bar, under \"personel file sets\" click the \"Photos\" button\r\n(this should bring them up individualy)\r\n\r\n- at the bottom of each picture you should see \"View\"\r\n\r\n- Right click on \"View\" and choose \"copy link address\"\r\n\r\n- paste that link in as responce in your choosen topic\r\n\r\nand go back to do that for each picture you uploaded, always wise to have two tabs open.",
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
                "creationTime": "2017-12-29 15:59:15",
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
                "updateTime": "2017-12-29 15:59:15",
                "voteUpCount": 0
              }
            ],
            "commands": [
              "vote",
              "comment",
              "delete"
            ]
          }
    },
};

export const SingleComment = {
    args: {
        story: {
            "objectType": "com.stories.story",
            "id": 119932,
            "component": "com_articles",
            "name": "article_comment",
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
              "id": 72919,
              "objectType": "com.groups.group",
              "name": "Personnel Files",
              "body": "A place to discuss members that we're concerned about. #leadership #sgn",
              "alias": "personnel-files",
              "imageURL": {
                "small": {
                  "size": {
                    "width": 80,
                    "height": 80
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n72919/com_groups/avatars/small168e4c96835ddc24ae1c8378c30bc11b.png"
                },
                "medium": {
                  "size": {
                    "width": 160,
                    "height": 160
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n72919/com_groups/avatars/medium168e4c96835ddc24ae1c8378c30bc11b.png"
                },
                "large": {
                  "size": {
                    "width": 256,
                    "height": 256
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n72919/com_groups/avatars/large168e4c96835ddc24ae1c8378c30bc11b.png"
                },
                "square": {
                  "size": {
                    "width": 56,
                    "height": 56
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n72919/com_groups/avatars/square168e4c96835ddc24ae1c8378c30bc11b.png"
                },
                "original": {
                  "size": {
                    "width": 256,
                    "height": 256
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n72919/com_groups/avatars/original168e4c96835ddc24ae1c8378c30bc11b.png"
                }
              },
              "coverURL": [],
              "author": null,
              "creationTime": "2016-08-31 11:56:31",
              "editor": null,
              "updateTime": "2016-08-31 11:56:31",
              "subscriberCount": 4,
              "isLeader": true,
              "followerCount": 5,
              "administratorIds": [
                "1"
              ],
              "isAdministrated": true
            },
            "object": {
              "id": 118658,
              "objectType": "com.articles.article",
              "name": "How to post Images in Topics",
              "body": "<p>In a few easy steps, even you can post images in topics with ease!</p><p>http://www.stonewallgaming.net/photos/118629</p><p>Click here!</p><p>http://www.stonewallgaming.net/photos/118631</p><p>And then click here! </p><p>http://www.stonewallgaming.net/photos/118633</p><p>You'll get this! If you have a bunch of photos to upload, there's an uploader you can use if you click on Photos > View All Photos > Upload, but for just a single screenshot, this is quicker.</p><p>http://www.stonewallgaming.net/photos/118635</p><p>If the form closes, just click here to open it again. </p><p>http://www.stonewallgaming.net/photos/118637</p><p>Click here to select a file! </p><p>http://www.stonewallgaming.net/photos/118639</p><p>Add some sweet notes and hashtags here! Don't use the user's name as a hashtag as this will be publicly viewable in the Trending Hashtags, but try to give it some relavent info so it's easier to find in the future. If you have a lot of photos, consider adding them all to a Set.</p><p>http://www.stonewallgaming.net/photos/118621</p><p>Click here!</p><p>http://www.stonewallgaming.net/photos/118622</p><p>Right click here and copy the link or click the link and... </p><p>http://www.stonewallgaming.net/photos/118625</p><p>Select and copy this link! </p><p>http://www.stonewallgaming.net/photos/118627</p><p>Make a new topic or edit an old one and paste the link into the body! </p><p>http://www.stonewallgaming.net/photos/118649</p><p>Give it a cool title. Click here! </p><p>http://www.stonewallgaming.net/photos/118643</p><p>This image is now in the topic!!You can do this in: notes, topics, todos, comments, blogs, prolly photos.  This works in the forums, as well. Unlike using the img tag, this has the nifty image viewer when you click on it.</p><p>http://www.stonewallgaming.net/photos/118645</p><p>If you want, go back and delete the story for the photo! You don't have to, but it seems to be less confusing for others that don't realize what's going on and keeps the conversation where you post the image instead of on the image itself.Clicking this will delete the story on the dashboard, but not the actual photo. </p><p>http://www.stonewallgaming.net/photos/118647</p><p>Please don't host externally cause this ends with dead links like this! </p><p>http://www.stonewallgaming.net/photos/118653</p><p>Snipping Tool is your secret Swiss army knife! Search for Snipping Tool on your computer and pin it to your start menu. It can take screenshots pretty much anywhere. It has a bunch of nifty features, like the ability to select a specific region of the screen or set a delay so you can switch back in-game before it takes the screenshot. </p><p>#snippingtool #screenshot #photoupload</p>",
              "alias": "how-to-post-images-in-topics",
              "coverURL": [],
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
              "creationTime": "2017-11-30 15:53:49",
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
              "updateTime": "2017-12-01 02:24:17",
              "openToComment": true,
              "numOfComments": 42,
              "lastCommentTime": "2017-12-29 15:59:15",
              "lastComment": {
                "id": 120227,
                "objectType": "com.articles.comment",
                "body": "I must admit I had trouble when the last time I used this to paste multiple images from a Set to a post.\r\nIf you click on your heep of pictures you just uploaded (your set)\r\n\r\n- click on the sets in this group http://www.stonewallgaming.net/photos/@72919/sets\r\n\r\n- on the blue bar, under \"personel file sets\" click the \"Photos\" button\r\n(this should bring them up individualy)\r\n\r\n- at the bottom of each picture you should see \"View\"\r\n\r\n- Right click on \"View\" and choose \"copy link address\"\r\n\r\n- paste that link in as responce in your choosen topic\r\n\r\nand go back to do that for each picture you uploaded, always wise to have two tabs open.",
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
                "creationTime": "2017-12-29 15:59:15",
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
                "updateTime": "2017-12-29 15:59:15",
                "voteUpCount": 0
              },
              "lastCommenter": {
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
              "subscriberCount": 5,
              "voteUpCount": 0,
              "owner": {
                "id": 72919,
                "objectType": "com.groups.group",
                "name": "Personnel Files",
                "body": "A place to discuss members that we're concerned about. #leadership #sgn",
                "alias": "personnel-files",
                "imageURL": {
                  "small": {
                    "size": {
                      "width": 80,
                      "height": 80
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n72919/com_groups/avatars/small168e4c96835ddc24ae1c8378c30bc11b.png"
                  },
                  "medium": {
                    "size": {
                      "width": 160,
                      "height": 160
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n72919/com_groups/avatars/medium168e4c96835ddc24ae1c8378c30bc11b.png"
                  },
                  "large": {
                    "size": {
                      "width": 256,
                      "height": 256
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n72919/com_groups/avatars/large168e4c96835ddc24ae1c8378c30bc11b.png"
                  },
                  "square": {
                    "size": {
                      "width": 56,
                      "height": 56
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n72919/com_groups/avatars/square168e4c96835ddc24ae1c8378c30bc11b.png"
                  },
                  "original": {
                    "size": {
                      "width": 256,
                      "height": 256
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n72919/com_groups/avatars/original168e4c96835ddc24ae1c8378c30bc11b.png"
                  }
                },
                "coverURL": [],
                "author": null,
                "creationTime": "2016-08-31 11:56:31",
                "editor": null,
                "updateTime": "2016-08-31 11:56:31",
                "subscriberCount": 4,
                "isLeader": true,
                "followerCount": 5,
                "administratorIds": [
                  "1"
                ],
                "isAdministrated": true
              }
            },
            "creationTime": "2017-12-26 15:07:55",
            "comments": [
              {
                "id": 119931,
                "objectType": "com.articles.comment",
                "body": "Can you make one of these picture posting guides for the general user and place it in the documents section?  Some secret santa recipients were having trouble getting their pictures to post on the site - would be nice to have a 'how to' guide to link them to. The only issue with using these existing screen grabs is that they have the personnel files in the background.",
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
                "creationTime": "2017-12-26 15:07:55",
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
                "updateTime": "2017-12-26 15:07:55",
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