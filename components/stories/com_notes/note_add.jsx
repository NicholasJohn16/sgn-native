import { Link } from "expo-router";
import { Truncate } from "../../helpers/truncate";

export function Title({subject, object, target}) {
    return <>{subject.name} shared a <Link href="/notes">note</Link></>
}

export function Body({subject, object, target}) {
    return <Truncate length={200} readMore={true}>{object.body}</Truncate>
}