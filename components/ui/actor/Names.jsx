import { Name } from "./Name";
import { Text } from 'react-native';

export function Names({actors}) {
    actor = actors.pop();

    const andOthers = actors.length > 1 ? ` and ${actors.length} others`: '';

    return (
        <Text><Name actor={actor} />{andOthers}</Text>
    )
}