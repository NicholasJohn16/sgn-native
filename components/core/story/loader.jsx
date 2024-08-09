
import { Story } from './index';
const stories = require.context('../../../features', true, /^(?!.*\.stories\.).*$/);

export function StoryLoader({story}) {
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