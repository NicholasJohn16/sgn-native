import { Image } from "react-native";
import { Link } from "expo-router";

export function Avatar({actor, linked = true}) {
    const hasSquare = Object.hasOwn(actor.imageURL, 'square');

    return (
        <>
            <Link href={`/people/${actor.alias}`}>
            {hasSquare && 
                <Image 
                source={{uri: actor.imageURL.square.url}}
                style={{...actor.imageURL.square.size}}
                className="rounded mr-2"
                />
            }
            </Link>
        </>
    )
}