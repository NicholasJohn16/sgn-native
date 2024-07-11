import { Link } from "expo-router";
import { Truncate } from "../../helpers/truncate";

export function Title() {
    return <>{story.subject.name} commented on the <Link>note</Link></>;
}

export function Body() {
    return <Truncate length={200} readMore={true}>{story.object.body}</Truncate>
}