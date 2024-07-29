import { Link } from "expo-router";
import { Text } from "react-native";


export function Name({actor, linked = true, ...props}) {

    if(!actor || !Object.hasOwn(actor, 'name')) {
        return (
            <Text className="web:font-inherit web:text-inherit" {...props}>Unknown Person</Text>
        )
    }

    const parts = actor.objectType.split('.');   
    const isPerson = actor.objectType === 'com.people.person';
    const alias = isPerson ? actor.alias : `${actor.id}-${actor.alias}`;

    return (
        <>
            {linked ? (
                <Link className="web:font-inherit web:text-inherit" href={`/${parts[1]}/${alias}`} {...props} >
                    {actor.name}
                </Link>
            ) : (
                <Text className="web:font-inherit web:text-inherit" {...props}>{actor.name}</Text>
            )}
        </>
    )
}