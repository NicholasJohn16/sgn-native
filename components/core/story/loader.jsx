
import { Story } from './index';
const stories = require.context('../../../features', true, /^(?!.*\.stories\.).*$/);

// console.log(stories, 'stories');
// console.log(stories.keys(), 'stories.keys');

export function StoryLoader({story}) {
    // console.log(story, 'StoryLoader.story');
    const feature = story.component.split('_')[1];

    const storyParts = stories(`./${feature}/components/stories/${story.name}.jsx`);

    const { Title, Body } = storyParts;
    const body = Object.hasOwn(storyParts, 'Body') ? <Body story={story} /> : null;

    return (
        <Story story={story}>
            {{
                title: <Title story={story} />,
                body
            }}
        </Story>
    )
}