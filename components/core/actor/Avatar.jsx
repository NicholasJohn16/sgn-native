import { Image } from "react-native";
import { Link } from "expo-router";
import {
    Avatar as GAvatar,
    AvatarBadge,
    AvatarFallbackText,
    AvatarImage,
} from '@/components/ui/avatar';
  

export function Avatar({actor, linked = true, size = 'square', className = ""}) {
    if(!actor) {
        return <></>
    }

    if(linked) {
        return (
            <Link href={`/people/${actor.alias}`} className="rounded" asChild>
                <BaseAvatar actor={actor} size={size} className={className}/>
            </Link>
        )
    }
    
    if(!linked) {
        return (
            <BaseAvatar actor={actor} size={size} className={className} />
        )
    }
    
}

function BaseAvatar({actor, size, className}) {
    const hasSize = Object.hasOwn(actor.imageURL, size);

    return (
        <GAvatar className={`rounded ${className}`}>
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
    )
}