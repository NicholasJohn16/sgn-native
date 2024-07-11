import { Link } from "expo-router";
import { Heading } from "@/components/ui/heading";
import { Truncate } from "../../helpers/truncate";
import { Name } from "../../ui/actor/Name";

export function Title({story}) {
    let names = [];

    if(Object.hasOwn(story, 'subject')) {
        names.push(<Name actor={story.subject} />)
    }

    if(Object.hasOwn(story, 'subjects')) {
        story.subjects.map((subject) => {
            names.push(<Name actor={subject} />);
        });
    }

    return <>{names} commented on the <Link href={`/articles/${story.object.id}-${story.object.alias}`}>Article</Link></>
}

export function Body({story}) {
    return (
        <>
            <Heading size="2xl" bold={true}>
                <Link style={{fontSize: 'inherit'}} href={`/articles/${story.object.id}-${story.object.alias}`}>
                    {story.object.name}
                </Link>
            </Heading>
            <Truncate length={200} readMore={true}>{story.object.body}</Truncate>
        </>
    )
}