import { MediumLink } from "@/components/core/medium/link";
import { Image } from "react-native";
import { HStack } from '@/components/ui/hstack';

export function Photo({photo, size = 'medium'}) {
    console.log(photo, 'photo');
    return (
        <MediumLink media={photo}>
            <Image
                source={{uri: photo.imageURL[size].url}} 
                style={{...photo.imageURL[size].size}}
                className="rounded"
            />
        </MediumLink>
    )
}

export function Photos({photos}) {
    return (
        <HStack space="sm">
            {photos.map((photo) => (
                <Photo key={photo.id} photo={photo} size='square' />
            ))}
        </HStack>
    )
}