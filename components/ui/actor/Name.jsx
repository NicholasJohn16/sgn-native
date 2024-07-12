import { Link } from "expo-router";

export function Name({actor}) {
    return (
        <Link style={{fontSize: 'inherit'}} href={`/people/${actor.alias}`}>{actor.name}</Link>
    )
}