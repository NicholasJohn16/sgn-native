import {Title, Body} from './blog_comment';
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
            "id": 149691,
            "component": "com_blogs",
            "name": "blog_comment",
            "subjects": [
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
                "id": 3319,
                "objectType": "com.people.person",
                "name": "Patrick aka Trick",
                "body": "Current STO build at: http://bit.ly/mystoship\r\n\r\nI've been a geek for a very long time now, and in STO since around 2011, if I remember right. Though I'm married now to a wonderful woman who's as big a geek as I am, I have a slightly more rainbow-colored past than most guys married to women. Fortunately, the wife's cool with that.",
                "alias": "trick",
                "imageURL": {
                  "small": {
                    "size": {
                      "width": 80,
                      "height": 81
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n3319/com_people/avatars/smallf083c066c17d928b08204b7c4ce2bd29.jpg"
                  },
                  "medium": {
                    "size": {
                      "width": 160,
                      "height": 161
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n3319/com_people/avatars/mediumf083c066c17d928b08204b7c4ce2bd29.jpg"
                  },
                  "large": {
                    "size": {
                      "width": 480,
                      "height": 484
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n3319/com_people/avatars/largef083c066c17d928b08204b7c4ce2bd29.jpg"
                  },
                  "square": {
                    "size": {
                      "width": 56,
                      "height": 56
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n3319/com_people/avatars/squaref083c066c17d928b08204b7c4ce2bd29.jpg"
                  },
                  "original": {
                    "size": {
                      "width": 528,
                      "height": 532
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n3319/com_people/avatars/originalf083c066c17d928b08204b7c4ce2bd29.jpg"
                  }
                },
                "coverURL": {
                  "small": {
                    "size": {
                      "width": 80,
                      "height": 81
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n3319/com_people/covers/small76ea7b21c150a53ea47b3883f91f525f.jpg"
                  },
                  "medium": {
                    "size": {
                      "width": 160,
                      "height": 161
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n3319/com_people/covers/medium76ea7b21c150a53ea47b3883f91f525f.jpg"
                  },
                  "large": {
                    "size": {
                      "width": 480,
                      "height": 484
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n3319/com_people/covers/large76ea7b21c150a53ea47b3883f91f525f.jpg"
                  },
                  "square": {
                    "size": {
                      "width": 56,
                      "height": 56
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n3319/com_people/covers/square76ea7b21c150a53ea47b3883f91f525f.jpg"
                  },
                  "original": {
                    "size": {
                      "width": 528,
                      "height": 532
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n3319/com_people/covers/original76ea7b21c150a53ea47b3883f91f525f.jpg"
                  }
                },
                "author": null,
                "creationTime": "2015-04-09 02:40:42",
                "editor": null,
                "updateTime": "2022-11-22 06:35:11",
                "subscriberCount": 0,
                "isLeader": true,
                "isFollower": false,
                "isBlocked": false,
                "followerCount": 16,
                "leaderCount": 35,
                "mutualCount": 3,
                "username": "trick",
                "givenName": "Patrick",
                "familyName": "aka Trick",
                "email": "imtrick@gmail.com",
                "usertype": "registered",
                "gender": "male"
              }
            ],
            "target": {
              "id": 147557,
              "objectType": "com.events.event",
              "name": "Reflection Day V",
              "body": "You have been recruited into Stonewalls Shadow Service, Join us in #StarTrekOnline, for the annual Reflection Day V! Gather with your friends and fleeties for a day of being someone different!  The full event schedule is below!\r\n\r\n[center][img]https://i.imgur.com/HgI0AEz.png[/img]\r\n[b][b][u] -Click 'READ MORE'-[/u][/b][/b][/center]\r\n\r\n[center]The History of \"Reflection Day, started 5 years ago, a FED or FED aligned event that we wanted to spice things up a bit, we normally log into STO, ito our ships that we know well, and have built to our perfect style.. but what if you choose a ship taht your not comfortable with? do you normally fly a Sci boat.. why not try an escort?\r\nEach year we have themes, The first year was \"mirror universe\" where we dressed and battled as our mirror counterparts, 2nd year was \"Pirates\" 3rd year was \"Conquest\".. and this years theme.. SPIES! Think section 31, Tal Shiar...[/center]\r\n\r\n[center]you have now until the 23rd to think up what ship you would like to take into battle with you, and what sort of build you want, one that you would normally shy away from, even change up your weapon type! Remember this is a FED / FED aligned event \r\n\r\nNB: THIS IS A FED / FED ALIGNED EVENT \r\n(as it makes things easier for maps and PvEs) [/center]\r\n\r\nThese 2 weeks leading up to the main event (Sat 23rd Nov) We are placing 2 run up events: \r\n\r\n[img]https://i.imgur.com/BVSM9Sa.png[/img]\r\n[b]Agent Dossier upload[/b]\r\n[u]Starts now until the 22nd[/u]\r\nUpload your characters dossier/biography, imagining that they have been a shadow agent within stonewall.. or any other organization. NB. this years theme is Secret agents/Spys/Undercover operations.\r\n\r\nLet you imagination run wild, you could work for section 31, the Tal shiar, the obsidian order.. you could even work for the Ferengi government undercover in starfleet to try and steal important new technology to send the blueprints back to Ferenginar... or you could have been the lover of a Spy, and didn't know about it until the last minute... so many story options for your mind to think up!!\r\n\r\nDETAILS OF HOW TO SUBMIT:\r\nTo submit your Agents Dossier, Simply press \"Blogs\" on the left of the RDV event page\r\n- Press \"View All\"\r\n- Press the \"+New\" button\r\nWrite\r\nor paste your Dossier/Story into the Main content box.\r\n\r\n\r\n[img]https://i.imgur.com/XXr4NGU.png[/img]\r\n[b]Case 438[/b]\r\n[u]Starts 15th - 22nd Nov[/u]\r\nThere has been a murder, one of our members was found dead in his office, I need an agent to solve this riddle, as none of the stonewall security officers can break it.\r\nYou .. if you should accept this challenge, will become a \"Stonewall Shadow Service Agent\"... you will be given highest priority access to investigate this case as you see fit.\r\nAll I need from you is your sign up.. and you will be given your own Shadow service ID badge:\r\n\r\n[img]https://i.imgur.com/Vrp3BBV.png[/img]\r\n\r\nI wont lie to you agent.. this will be a paper chase of an investigation, you will need to solve a great many riddles and mysteries.. and have a keen eye for detail.\r\nYou may have to investigate other officers within this fleet... but with your Shadow service ID.. you can make that happen!\r\n\r\n[b]More details to come this week, to Pre-sign up for Case 438, please reply \"I want to be an Agent\" below[/b]\r\nThe agents names who solve case 438 will be put into a hat and will win a great prize..\r\n[b]Win a Intel Science bundle:[/b]\r\n[b]- Somerville Intel Science Vessel [T6][/b]\r\n[b]- Balth Intel Science Vessel [T6][/b]\r\n[b]- 5 master keys & fleet modules[/b]\r\ndonated by @drtheopolis\r\n\r\n\r\n[b]MAIN RDV EVENT SAT 23RD NOV[/b]\r\n[img]https://i.imgur.com/71W3YU3.png[/img]\r\n\r\n[table][tr][td][img]https://i.imgur.com/JJSjTdB.png[/img]\r\n[color=#ffffff]·············································[/color][/td]\r\n[td][img]http://voleron.net/stonewall/images/HalloweenEvent00.png[/img][/td]\r\n[td][b][b]PvE Battles (1 hour)[/b][/b] \r\n[b][u][[url=https://www.timeanddate.com/worldclock/fixedtime.html?msg=RDV+PvE+Battles&iso=20191123T17&p1=%3A&ah=1]Click HERE to view event start time[/url]][/u][/b]\r\n\r\nWe'll start our RDV day with getting together to run a few PvEs, hopefully you will have built a ship of your choice to a standard you are not used to.. maybe an all mine ship, an all turret ship.. even your ship choice could be different, if you've not flown an escort, try it out! [/td]\r\n[/tr]\r\n[/table]\r\n[table][tr][td][img]https://i.imgur.com/tY3phHy.png[/img]\r\n[color=#ffffff]·············································[/color][/td]\r\n[td][img]http://voleron.net/stonewall/images/HalloweenEvent00.png[/img][/td]\r\n[td][b][b]Spy Style (1 hour)[/b][/b] \r\n[b][u][[url=https://www.timeanddate.com/worldclock/fixedtime.html?msg=RDV+Spy+Style&iso=20191123T18&p1=%3A&ah=1]Click HERE to view event start time[/url]][/u][/b]\r\n\r\nDress your Stonewall agent in a style you think they would wear, be it under cover work, or on board the shadow ship, does he have a scare from a former mission? does she show her face? the choices here are endless, come show us your Spy Style!\r\nSWCs will be handed to the 1st - 3rd best dressed.[/td]\r\n[/tr]\r\n[/table]\r\n[table][tr][td][img]https://i.imgur.com/BUvZky3.png[/img]\r\n[color=#ffffff]·············································[/color][/td]\r\n[td][img]http://voleron.net/stonewall/images/HalloweenEvent00.png[/img][/td]\r\n[td][b][b]Tosk Hunt (1.5 hours)[/b][/b] \r\n[b][u][[url=https://www.timeanddate.com/worldclock/fixedtime.html?msg=RDV+Tosk+Hunt&iso=20191123T19&p1=%3A&ah=1&am=30]Click HERE to view event start time[/url]][/u][/b]\r\n\r\nThe game Tlara and Hippie punk created is back! its a simple formula, and great fun, before the game someone will get chosen as \"the Tosk\" they then hide somewhere on DS9, and we all go hunting for him/her. the first person who catches the Tosk.. is NOW the tosk.. and we hunt again! SWCs will be won.[/td]\r\n[/tr]\r\n[/table]\r\n[table][tr][td][img]https://i.imgur.com/elEodBH.png[/img]\r\n[color=#ffffff]·············································[/color][/td]\r\n[td][img]http://voleron.net/stonewall/images/HalloweenEvent00.png[/img][/td]\r\n[td][b][b]Video Quiz (discord) (1.5 hours)[/b][/b] \r\n[b][u][[url=https://www.timeanddate.com/worldclock/fixedtime.html?msg=RDV+Video+Quiz&iso=20191123T2030&p1=%3A&ah=1&am=30]Click HERE to view event start time[/url]][/u][/b]\r\n\r\nJoin us on Discord as we stream a video quiz, in which you will watch live from Discord stream, you will be given a Answer sheet to fill in as the questions come up. the theme is general knowledge mixed with a little something special. Discord is needed for this. SWCs will be given to the top 5 winners of this quiz.[/td]\r\n[/tr]\r\n[/table]\r\n[table][tr][td][img]https://i.imgur.com/JJSjTdB.png[/img]\r\n[color=#ffffff]·············································[/color][/td]\r\n[td][img]http://voleron.net/stonewall/images/HalloweenEvent00.png[/img][/td]\r\n[td][b][b]PvE Battles round 2 (1 hour)[/b][/b] \r\n[b][u][[url=https://www.timeanddate.com/worldclock/fixedtime.html?msg=RDV+pve+round+2&iso=20191123T22&p1=%3A&ah=1]Click HERE to view event start time[/url]][/u][/b]\r\n\r\nJump back into your RDV ships for more rounds of PvE, maybe some battle zones sprinkled in, as a fleet we rarely touch on some PvE queues, so this is a chance to jump into one we never normally would![/td]\r\n[/tr]\r\n[/table]\r\n[table][tr][td][img]https://i.imgur.com/Z4pJGOD.png[/img]\r\n[color=#ffffff]·············································[/color][/td]\r\n[td][img]http://voleron.net/stonewall/images/HalloweenEvent00.png[/img][/td]\r\n[td][b][b]Spy Prom (1 hours)[/b][/b]\r\n[b][u][[url=https://www.timeanddate.com/worldclock/fixedtime.html?msg=RDV+spy+Prom&iso=20191123T23&p1=%3A&am=30]Click HERE to view event start time[/url]][/u][/b]\r\n\r\nTo wind up the RDV day, its tradition to pop up some disco balls and relax with a good old party, as we celebrate the end of the 5th annual Reflection day. Get yourself a fancy costume and come join the party where MVPs of the day will be addressed and more prizes given out.[/td]\r\n[/tr]\r\n[/table]\r\n",
              "alias": "reflection-day-v",
              "imageURL": {
                "small": {
                  "size": {
                    "width": 80,
                    "height": 119
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n147557/com_events/avatars/small45b3ce259337dcc7b48682ad39e1ccc5.png"
                },
                "medium": {
                  "size": {
                    "width": 160,
                    "height": 239
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n147557/com_events/avatars/medium45b3ce259337dcc7b48682ad39e1ccc5.png"
                },
                "large": {
                  "size": {
                    "width": 480,
                    "height": 716
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n147557/com_events/avatars/large45b3ce259337dcc7b48682ad39e1ccc5.png"
                },
                "square": {
                  "size": {
                    "width": 56,
                    "height": 56
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n147557/com_events/avatars/square45b3ce259337dcc7b48682ad39e1ccc5.png"
                },
                "original": {
                  "size": {
                    "width": 1300,
                    "height": 1938
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n147557/com_events/avatars/original45b3ce259337dcc7b48682ad39e1ccc5.png"
                }
              },
              "coverURL": {
                "small": {
                  "size": {
                    "width": 80,
                    "height": 119
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n147557/com_events/covers/small13127920867efaf223fcf15d8d25e527.png"
                },
                "medium": {
                  "size": {
                    "width": 160,
                    "height": 239
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n147557/com_events/covers/medium13127920867efaf223fcf15d8d25e527.png"
                },
                "large": {
                  "size": {
                    "width": 480,
                    "height": 716
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n147557/com_events/covers/large13127920867efaf223fcf15d8d25e527.png"
                },
                "square": {
                  "size": {
                    "width": 56,
                    "height": 56
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n147557/com_events/covers/square13127920867efaf223fcf15d8d25e527.png"
                },
                "original": {
                  "size": {
                    "width": 1300,
                    "height": 1938
                  },
                  "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n147557/com_events/covers/original13127920867efaf223fcf15d8d25e527.png"
                }
              },
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
              "creationTime": "2019-09-14 00:27:05",
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
              "updateTime": "2019-09-14 00:27:05",
              "subscriberCount": 2
            },
            "object": {
              "id": 149587,
              "objectType": "com.blogs.blog",
              "name": "Agent Dossiers: A guide to upload",
              "body": "<p>[img]https://i.imgur.com/h30d4K2.png[/img]</p><p></p><p>To submit your Secret Agents Dossier, Simply press \"Blogs\" on the left of the RDV event page</p><p><b>- Press \"View All\"</b></p><p><b>- Press the \"+New\" button</b></p><p>Write or paste your Dossier/Story into the Main content box.</p><p><u><b>To add an image to your post:</b></u></p><p>Simply insert your image link in between an Img tab</p><p><i>Example:</i></p><p>[img]https://i.imgur.com/CE3sjbf.png[/img]</p><p>Make sure that the image ends only with a .jpeg or .png in order for the image to be seen.</p><p>If you are having a hard time uploading, message me on discord or on here, and I will help you out.</p><p>We all look forward to reading!!</p><p>#RDV</p><p><b>ALL entries will be awarded 1 SWC, but a chosen few will get a bonus x2 SWCs added to there #SWCwallet</b></p><p><b>NB. this years theme is Secret agents/Spys/Undercover operations.</b></p><p><b>Let you imagination run wild, you could work for section 31, the Tal shiar, the obsidian order.. you could even work for the Ferengi government undercover in starfleet to try and steal important new technology to send the blueprints back to Ferenginar... or you could have been the lover of a Spy, and didn't know about it until the last minute... so many story options for your mind to think up!!</b></p><p>#RDVdossier<b></b></p>",
              "alias": "agent-dossiers-a-guide-to-upload",
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
              "creationTime": "2019-11-07 23:16:45",
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
              "updateTime": "2019-11-08 16:06:51",
              "openToComment": true,
              "numOfComments": 2,
              "lastCommentTime": "2019-11-12 16:07:07",
              "lastComment": {
                "id": 149690,
                "objectType": "com.blogs.comment",
                "body": "Thank you for signing up to the #stonewallshadowservice\r\nyou are now an Agent.\r\nHere is your ID badge, be sure to show it should you need to investigate other members.\r\n\r\n[img]https://i.imgur.com/EuUTXUj.png[/img]",
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
                "creationTime": "2019-11-12 16:07:07",
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
                "updateTime": "2019-11-12 16:07:07",
                "voteUpCount": 1
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
              "subscriberCount": 4,
              "voteUpCount": 2,
              "owner": {
                "id": 147557,
                "objectType": "com.events.event",
                "name": "Reflection Day V",
                "body": "You have been recruited into Stonewalls Shadow Service, Join us in #StarTrekOnline, for the annual Reflection Day V! Gather with your friends and fleeties for a day of being someone different!  The full event schedule is below!\r\n\r\n[center][img]https://i.imgur.com/HgI0AEz.png[/img]\r\n[b][b][u] -Click 'READ MORE'-[/u][/b][/b][/center]\r\n\r\n[center]The History of \"Reflection Day, started 5 years ago, a FED or FED aligned event that we wanted to spice things up a bit, we normally log into STO, ito our ships that we know well, and have built to our perfect style.. but what if you choose a ship taht your not comfortable with? do you normally fly a Sci boat.. why not try an escort?\r\nEach year we have themes, The first year was \"mirror universe\" where we dressed and battled as our mirror counterparts, 2nd year was \"Pirates\" 3rd year was \"Conquest\".. and this years theme.. SPIES! Think section 31, Tal Shiar...[/center]\r\n\r\n[center]you have now until the 23rd to think up what ship you would like to take into battle with you, and what sort of build you want, one that you would normally shy away from, even change up your weapon type! Remember this is a FED / FED aligned event \r\n\r\nNB: THIS IS A FED / FED ALIGNED EVENT \r\n(as it makes things easier for maps and PvEs) [/center]\r\n\r\nThese 2 weeks leading up to the main event (Sat 23rd Nov) We are placing 2 run up events: \r\n\r\n[img]https://i.imgur.com/BVSM9Sa.png[/img]\r\n[b]Agent Dossier upload[/b]\r\n[u]Starts now until the 22nd[/u]\r\nUpload your characters dossier/biography, imagining that they have been a shadow agent within stonewall.. or any other organization. NB. this years theme is Secret agents/Spys/Undercover operations.\r\n\r\nLet you imagination run wild, you could work for section 31, the Tal shiar, the obsidian order.. you could even work for the Ferengi government undercover in starfleet to try and steal important new technology to send the blueprints back to Ferenginar... or you could have been the lover of a Spy, and didn't know about it until the last minute... so many story options for your mind to think up!!\r\n\r\nDETAILS OF HOW TO SUBMIT:\r\nTo submit your Agents Dossier, Simply press \"Blogs\" on the left of the RDV event page\r\n- Press \"View All\"\r\n- Press the \"+New\" button\r\nWrite\r\nor paste your Dossier/Story into the Main content box.\r\n\r\n\r\n[img]https://i.imgur.com/XXr4NGU.png[/img]\r\n[b]Case 438[/b]\r\n[u]Starts 15th - 22nd Nov[/u]\r\nThere has been a murder, one of our members was found dead in his office, I need an agent to solve this riddle, as none of the stonewall security officers can break it.\r\nYou .. if you should accept this challenge, will become a \"Stonewall Shadow Service Agent\"... you will be given highest priority access to investigate this case as you see fit.\r\nAll I need from you is your sign up.. and you will be given your own Shadow service ID badge:\r\n\r\n[img]https://i.imgur.com/Vrp3BBV.png[/img]\r\n\r\nI wont lie to you agent.. this will be a paper chase of an investigation, you will need to solve a great many riddles and mysteries.. and have a keen eye for detail.\r\nYou may have to investigate other officers within this fleet... but with your Shadow service ID.. you can make that happen!\r\n\r\n[b]More details to come this week, to Pre-sign up for Case 438, please reply \"I want to be an Agent\" below[/b]\r\nThe agents names who solve case 438 will be put into a hat and will win a great prize..\r\n[b]Win a Intel Science bundle:[/b]\r\n[b]- Somerville Intel Science Vessel [T6][/b]\r\n[b]- Balth Intel Science Vessel [T6][/b]\r\n[b]- 5 master keys & fleet modules[/b]\r\ndonated by @drtheopolis\r\n\r\n\r\n[b]MAIN RDV EVENT SAT 23RD NOV[/b]\r\n[img]https://i.imgur.com/71W3YU3.png[/img]\r\n\r\n[table][tr][td][img]https://i.imgur.com/JJSjTdB.png[/img]\r\n[color=#ffffff]·············································[/color][/td]\r\n[td][img]http://voleron.net/stonewall/images/HalloweenEvent00.png[/img][/td]\r\n[td][b][b]PvE Battles (1 hour)[/b][/b] \r\n[b][u][[url=https://www.timeanddate.com/worldclock/fixedtime.html?msg=RDV+PvE+Battles&iso=20191123T17&p1=%3A&ah=1]Click HERE to view event start time[/url]][/u][/b]\r\n\r\nWe'll start our RDV day with getting together to run a few PvEs, hopefully you will have built a ship of your choice to a standard you are not used to.. maybe an all mine ship, an all turret ship.. even your ship choice could be different, if you've not flown an escort, try it out! [/td]\r\n[/tr]\r\n[/table]\r\n[table][tr][td][img]https://i.imgur.com/tY3phHy.png[/img]\r\n[color=#ffffff]·············································[/color][/td]\r\n[td][img]http://voleron.net/stonewall/images/HalloweenEvent00.png[/img][/td]\r\n[td][b][b]Spy Style (1 hour)[/b][/b] \r\n[b][u][[url=https://www.timeanddate.com/worldclock/fixedtime.html?msg=RDV+Spy+Style&iso=20191123T18&p1=%3A&ah=1]Click HERE to view event start time[/url]][/u][/b]\r\n\r\nDress your Stonewall agent in a style you think they would wear, be it under cover work, or on board the shadow ship, does he have a scare from a former mission? does she show her face? the choices here are endless, come show us your Spy Style!\r\nSWCs will be handed to the 1st - 3rd best dressed.[/td]\r\n[/tr]\r\n[/table]\r\n[table][tr][td][img]https://i.imgur.com/BUvZky3.png[/img]\r\n[color=#ffffff]·············································[/color][/td]\r\n[td][img]http://voleron.net/stonewall/images/HalloweenEvent00.png[/img][/td]\r\n[td][b][b]Tosk Hunt (1.5 hours)[/b][/b] \r\n[b][u][[url=https://www.timeanddate.com/worldclock/fixedtime.html?msg=RDV+Tosk+Hunt&iso=20191123T19&p1=%3A&ah=1&am=30]Click HERE to view event start time[/url]][/u][/b]\r\n\r\nThe game Tlara and Hippie punk created is back! its a simple formula, and great fun, before the game someone will get chosen as \"the Tosk\" they then hide somewhere on DS9, and we all go hunting for him/her. the first person who catches the Tosk.. is NOW the tosk.. and we hunt again! SWCs will be won.[/td]\r\n[/tr]\r\n[/table]\r\n[table][tr][td][img]https://i.imgur.com/elEodBH.png[/img]\r\n[color=#ffffff]·············································[/color][/td]\r\n[td][img]http://voleron.net/stonewall/images/HalloweenEvent00.png[/img][/td]\r\n[td][b][b]Video Quiz (discord) (1.5 hours)[/b][/b] \r\n[b][u][[url=https://www.timeanddate.com/worldclock/fixedtime.html?msg=RDV+Video+Quiz&iso=20191123T2030&p1=%3A&ah=1&am=30]Click HERE to view event start time[/url]][/u][/b]\r\n\r\nJoin us on Discord as we stream a video quiz, in which you will watch live from Discord stream, you will be given a Answer sheet to fill in as the questions come up. the theme is general knowledge mixed with a little something special. Discord is needed for this. SWCs will be given to the top 5 winners of this quiz.[/td]\r\n[/tr]\r\n[/table]\r\n[table][tr][td][img]https://i.imgur.com/JJSjTdB.png[/img]\r\n[color=#ffffff]·············································[/color][/td]\r\n[td][img]http://voleron.net/stonewall/images/HalloweenEvent00.png[/img][/td]\r\n[td][b][b]PvE Battles round 2 (1 hour)[/b][/b] \r\n[b][u][[url=https://www.timeanddate.com/worldclock/fixedtime.html?msg=RDV+pve+round+2&iso=20191123T22&p1=%3A&ah=1]Click HERE to view event start time[/url]][/u][/b]\r\n\r\nJump back into your RDV ships for more rounds of PvE, maybe some battle zones sprinkled in, as a fleet we rarely touch on some PvE queues, so this is a chance to jump into one we never normally would![/td]\r\n[/tr]\r\n[/table]\r\n[table][tr][td][img]https://i.imgur.com/Z4pJGOD.png[/img]\r\n[color=#ffffff]·············································[/color][/td]\r\n[td][img]http://voleron.net/stonewall/images/HalloweenEvent00.png[/img][/td]\r\n[td][b][b]Spy Prom (1 hours)[/b][/b]\r\n[b][u][[url=https://www.timeanddate.com/worldclock/fixedtime.html?msg=RDV+spy+Prom&iso=20191123T23&p1=%3A&am=30]Click HERE to view event start time[/url]][/u][/b]\r\n\r\nTo wind up the RDV day, its tradition to pop up some disco balls and relax with a good old party, as we celebrate the end of the 5th annual Reflection day. Get yourself a fancy costume and come join the party where MVPs of the day will be addressed and more prizes given out.[/td]\r\n[/tr]\r\n[/table]\r\n",
                "alias": "reflection-day-v",
                "imageURL": {
                  "small": {
                    "size": {
                      "width": 80,
                      "height": 119
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n147557/com_events/avatars/small45b3ce259337dcc7b48682ad39e1ccc5.png"
                  },
                  "medium": {
                    "size": {
                      "width": 160,
                      "height": 239
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n147557/com_events/avatars/medium45b3ce259337dcc7b48682ad39e1ccc5.png"
                  },
                  "large": {
                    "size": {
                      "width": 480,
                      "height": 716
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n147557/com_events/avatars/large45b3ce259337dcc7b48682ad39e1ccc5.png"
                  },
                  "square": {
                    "size": {
                      "width": 56,
                      "height": 56
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n147557/com_events/avatars/square45b3ce259337dcc7b48682ad39e1ccc5.png"
                  },
                  "original": {
                    "size": {
                      "width": 1300,
                      "height": 1938
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n147557/com_events/avatars/original45b3ce259337dcc7b48682ad39e1ccc5.png"
                  }
                },
                "coverURL": {
                  "small": {
                    "size": {
                      "width": 80,
                      "height": 119
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n147557/com_events/covers/small13127920867efaf223fcf15d8d25e527.png"
                  },
                  "medium": {
                    "size": {
                      "width": 160,
                      "height": 239
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n147557/com_events/covers/medium13127920867efaf223fcf15d8d25e527.png"
                  },
                  "large": {
                    "size": {
                      "width": 480,
                      "height": 716
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n147557/com_events/covers/large13127920867efaf223fcf15d8d25e527.png"
                  },
                  "square": {
                    "size": {
                      "width": 56,
                      "height": 56
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n147557/com_events/covers/square13127920867efaf223fcf15d8d25e527.png"
                  },
                  "original": {
                    "size": {
                      "width": 1300,
                      "height": 1938
                    },
                    "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n147557/com_events/covers/original13127920867efaf223fcf15d8d25e527.png"
                  }
                },
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
                "creationTime": "2019-09-14 00:27:05",
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
                "updateTime": "2019-09-14 00:27:05",
                "subscriberCount": 2
              }
            },
            "creationTime": "2019-11-12 16:07:07",
            "comments": [
              {
                "id": 149687,
                "objectType": "com.blogs.comment",
                "body": "I want to be an Asian! Oh, wait. OK, I guess an agent would be cool too.",
                "author": {
                  "id": 3319,
                  "objectType": "com.people.person",
                  "name": "Patrick aka Trick",
                  "body": "Current STO build at: http://bit.ly/mystoship\r\n\r\nI've been a geek for a very long time now, and in STO since around 2011, if I remember right. Though I'm married now to a wonderful woman who's as big a geek as I am, I have a slightly more rainbow-colored past than most guys married to women. Fortunately, the wife's cool with that.",
                  "alias": "trick",
                  "imageURL": {
                    "small": {
                      "size": {
                        "width": 80,
                        "height": 81
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n3319/com_people/avatars/smallf083c066c17d928b08204b7c4ce2bd29.jpg"
                    },
                    "medium": {
                      "size": {
                        "width": 160,
                        "height": 161
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n3319/com_people/avatars/mediumf083c066c17d928b08204b7c4ce2bd29.jpg"
                    },
                    "large": {
                      "size": {
                        "width": 480,
                        "height": 484
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n3319/com_people/avatars/largef083c066c17d928b08204b7c4ce2bd29.jpg"
                    },
                    "square": {
                      "size": {
                        "width": 56,
                        "height": 56
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n3319/com_people/avatars/squaref083c066c17d928b08204b7c4ce2bd29.jpg"
                    },
                    "original": {
                      "size": {
                        "width": 528,
                        "height": 532
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n3319/com_people/avatars/originalf083c066c17d928b08204b7c4ce2bd29.jpg"
                    }
                  },
                  "coverURL": {
                    "small": {
                      "size": {
                        "width": 80,
                        "height": 81
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n3319/com_people/covers/small76ea7b21c150a53ea47b3883f91f525f.jpg"
                    },
                    "medium": {
                      "size": {
                        "width": 160,
                        "height": 161
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n3319/com_people/covers/medium76ea7b21c150a53ea47b3883f91f525f.jpg"
                    },
                    "large": {
                      "size": {
                        "width": 480,
                        "height": 484
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n3319/com_people/covers/large76ea7b21c150a53ea47b3883f91f525f.jpg"
                    },
                    "square": {
                      "size": {
                        "width": 56,
                        "height": 56
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n3319/com_people/covers/square76ea7b21c150a53ea47b3883f91f525f.jpg"
                    },
                    "original": {
                      "size": {
                        "width": 528,
                        "height": 532
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n3319/com_people/covers/original76ea7b21c150a53ea47b3883f91f525f.jpg"
                    }
                  },
                  "author": null,
                  "creationTime": "2015-04-09 02:40:42",
                  "editor": null,
                  "updateTime": "2022-11-22 06:35:11",
                  "subscriberCount": 0,
                  "isLeader": true,
                  "isFollower": false,
                  "isBlocked": false,
                  "followerCount": 16,
                  "leaderCount": 35,
                  "mutualCount": 3,
                  "username": "trick",
                  "givenName": "Patrick",
                  "familyName": "aka Trick",
                  "email": "imtrick@gmail.com",
                  "usertype": "registered",
                  "gender": "male"
                },
                "creationTime": "2019-11-12 15:54:29",
                "editor": {
                  "id": 3319,
                  "objectType": "com.people.person",
                  "name": "Patrick aka Trick",
                  "body": "Current STO build at: http://bit.ly/mystoship\r\n\r\nI've been a geek for a very long time now, and in STO since around 2011, if I remember right. Though I'm married now to a wonderful woman who's as big a geek as I am, I have a slightly more rainbow-colored past than most guys married to women. Fortunately, the wife's cool with that.",
                  "alias": "trick",
                  "imageURL": {
                    "small": {
                      "size": {
                        "width": 80,
                        "height": 81
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n3319/com_people/avatars/smallf083c066c17d928b08204b7c4ce2bd29.jpg"
                    },
                    "medium": {
                      "size": {
                        "width": 160,
                        "height": 161
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n3319/com_people/avatars/mediumf083c066c17d928b08204b7c4ce2bd29.jpg"
                    },
                    "large": {
                      "size": {
                        "width": 480,
                        "height": 484
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n3319/com_people/avatars/largef083c066c17d928b08204b7c4ce2bd29.jpg"
                    },
                    "square": {
                      "size": {
                        "width": 56,
                        "height": 56
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n3319/com_people/avatars/squaref083c066c17d928b08204b7c4ce2bd29.jpg"
                    },
                    "original": {
                      "size": {
                        "width": 528,
                        "height": 532
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n3319/com_people/avatars/originalf083c066c17d928b08204b7c4ce2bd29.jpg"
                    }
                  },
                  "coverURL": {
                    "small": {
                      "size": {
                        "width": 80,
                        "height": 81
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n3319/com_people/covers/small76ea7b21c150a53ea47b3883f91f525f.jpg"
                    },
                    "medium": {
                      "size": {
                        "width": 160,
                        "height": 161
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n3319/com_people/covers/medium76ea7b21c150a53ea47b3883f91f525f.jpg"
                    },
                    "large": {
                      "size": {
                        "width": 480,
                        "height": 484
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n3319/com_people/covers/large76ea7b21c150a53ea47b3883f91f525f.jpg"
                    },
                    "square": {
                      "size": {
                        "width": 56,
                        "height": 56
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n3319/com_people/covers/square76ea7b21c150a53ea47b3883f91f525f.jpg"
                    },
                    "original": {
                      "size": {
                        "width": 528,
                        "height": 532
                      },
                      "url": "http://stonewallgamingnet.s3.amazonaws.com/assets/public/n3319/com_people/covers/original76ea7b21c150a53ea47b3883f91f525f.jpg"
                    }
                  },
                  "author": null,
                  "creationTime": "2015-04-09 02:40:42",
                  "editor": null,
                  "updateTime": "2022-11-22 06:35:11",
                  "subscriberCount": 0,
                  "isLeader": true,
                  "isFollower": false,
                  "isBlocked": false,
                  "followerCount": 16,
                  "leaderCount": 35,
                  "mutualCount": 3,
                  "username": "trick",
                  "givenName": "Patrick",
                  "familyName": "aka Trick",
                  "email": "imtrick@gmail.com",
                  "usertype": "registered",
                  "gender": "male"
                },
                "updateTime": "2019-11-12 15:54:29",
                "voteUpCount": 0
              },
              {
                "id": 149690,
                "objectType": "com.blogs.comment",
                "body": "Thank you for signing up to the #stonewallshadowservice\r\nyou are now an Agent.\r\nHere is your ID badge, be sure to show it should you need to investigate other members.\r\n\r\n[img]https://i.imgur.com/EuUTXUj.png[/img]",
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
                "creationTime": "2019-11-12 16:07:07",
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
                "updateTime": "2019-11-12 16:07:07",
                "voteUpCount": 1
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