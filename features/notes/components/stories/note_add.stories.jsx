import { Title, Body } from './note_add';
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
            "id": 179912,
            "component": "com_notes",
            "name": "note_add",
            "subject": {
              "id": 179908,
              "objectType": "com.people.person",
              "name": "Alex Johnson",
              "body": null,
              "alias": "alexjohnson90",
              "imageURL": [],
              "coverURL": [],
              "author": null,
              "creationTime": "2023-12-08 09:54:23",
              "editor": null,
              "updateTime": "2023-12-08 09:54:23",
              "subscriberCount": 0,
              "isLeader": false,
              "isFollower": false,
              "isBlocked": false,
              "followerCount": 0,
              "leaderCount": 2,
              "mutualCount": 0,
              "username": "alexjohnson90",
              "givenName": "Alex",
              "familyName": "Johnson",
              "email": "ostoyanova@yahoo.com",
              "usertype": "registered",
              "gender": null
            },
            "target": {
              "id": 179908,
              "objectType": "com.people.person",
              "name": "Alex Johnson",
              "body": null,
              "alias": "alexjohnson90",
              "imageURL": [],
              "coverURL": [],
              "author": null,
              "creationTime": "2023-12-08 09:54:23",
              "editor": null,
              "updateTime": "2023-12-08 09:54:23",
              "subscriberCount": 0,
              "isLeader": false,
              "isFollower": false,
              "isBlocked": false,
              "followerCount": 0,
              "leaderCount": 2,
              "mutualCount": 0,
              "username": "alexjohnson90",
              "givenName": "Alex",
              "familyName": "Johnson",
              "email": "ostoyanova@yahoo.com",
              "usertype": "registered",
              "gender": null
            },
            "object": {
              "id": 179911,
              "objectType": "com.notes.note",
              "name": null,
              "body": "From the energetic beats to the poetic flow, Lil Wayne's music has been the soundtrack to my life.",
              "alias": null,
              "author": {
                "id": 179908,
                "objectType": "com.people.person",
                "name": "Alex Johnson",
                "body": null,
                "alias": "alexjohnson90",
                "imageURL": [],
                "coverURL": [],
                "author": null,
                "creationTime": "2023-12-08 09:54:23",
                "editor": null,
                "updateTime": "2023-12-08 09:54:23",
                "subscriberCount": 0,
                "isLeader": false,
                "isFollower": false,
                "isBlocked": false,
                "followerCount": 0,
                "leaderCount": 2,
                "mutualCount": 0,
                "username": "alexjohnson90",
                "givenName": "Alex",
                "familyName": "Johnson",
                "email": "ostoyanova@yahoo.com",
                "usertype": "registered",
                "gender": null
              },
              "creationTime": "2023-12-08 09:56:10",
              "editor": {
                "id": 179908,
                "objectType": "com.people.person",
                "name": "Alex Johnson",
                "body": null,
                "alias": "alexjohnson90",
                "imageURL": [],
                "coverURL": [],
                "author": null,
                "creationTime": "2023-12-08 09:54:23",
                "editor": null,
                "updateTime": "2023-12-08 09:54:23",
                "subscriberCount": 0,
                "isLeader": false,
                "isFollower": false,
                "isBlocked": false,
                "followerCount": 0,
                "leaderCount": 2,
                "mutualCount": 0,
                "username": "alexjohnson90",
                "givenName": "Alex",
                "familyName": "Johnson",
                "email": "ostoyanova@yahoo.com",
                "usertype": "registered",
                "gender": null
              },
              "updateTime": "2023-12-08 09:56:10",
              "openToComment": true,
              "numOfComments": 0,
              "lastCommentTime": null,
              "lastComment": null,
              "lastCommenter": null,
              "subscriberCount": 1,
              "voteUpCount": 0,
              "owner": {
                "id": 179908,
                "objectType": "com.people.person",
                "name": "Alex Johnson",
                "body": null,
                "alias": "alexjohnson90",
                "imageURL": [],
                "coverURL": [],
                "author": null,
                "creationTime": "2023-12-08 09:54:23",
                "editor": null,
                "updateTime": "2023-12-08 09:54:23",
                "subscriberCount": 0,
                "isLeader": false,
                "isFollower": false,
                "isBlocked": false,
                "followerCount": 0,
                "leaderCount": 2,
                "mutualCount": 0,
                "username": "alexjohnson90",
                "givenName": "Alex",
                "familyName": "Johnson",
                "email": "ostoyanova@yahoo.com",
                "usertype": "registered",
                "gender": null
              }
            },
            "creationTime": "2023-12-08 09:56:10",
            "commands": [
              "vote",
              "comment",
              "delete"
            ]
          }
    }
}