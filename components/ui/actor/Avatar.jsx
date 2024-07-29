import { Image } from "react-native";
import { Link } from "expo-router";
import {
    Avatar as GAvatar,
    AvatarBadge,
    AvatarFallbackText,
    AvatarImage,
} from '@/components/ui/avatar';
  

export function Avatar({actor, linked = true, size = 'square', className}) {
    console.log(actor);

    if(!actor) {
        return <></>
    }

    const hasSize = Object.hasOwn(actor.imageURL, size);
    
    return (
        <Link href={`/people/${actor.alias}`} className="rounded" asChild>
            <GAvatar className={`${className}`}>
                <AvatarFallbackText className="rounded">{actor.name}</AvatarFallbackText>
                {hasSize && 
                    <AvatarImage 
                        className={`rounded`}
                        source={{uri: actor.imageURL[size].url}}
                    // style={{...actor.imageURL[size].size}}
                    // className={`rounded ${className}`}
                    />
                }
            </GAvatar>
        </Link>
    )
}