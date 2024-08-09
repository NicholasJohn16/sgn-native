import { Text } from 'react-native';
import { Avatar } from '@/components/core/actor/Avatar';
import { HStack } from '@/components/ui/hstack';
import { VStack } from '@/components/ui/vstack';
import { Humanize } from '@/components/helpers/date/humanize';
import { Name } from '@/components/core/actor/Name';

export function Header({author, title, creationTime, owner, className}) {

    const showOwner = !author || (owner && owner.id != author.id);

    return (
        <HStack space="md" className={`p-4 ${className}`}>
            <Avatar actor={author} />
            <VStack className="justify-center">
                {title}
                <HStack space="md">
                    <Text><Humanize>{creationTime}</Humanize></Text>
                    {showOwner && <Text><Name actor={owner} /></Text>}
                </HStack>
            </VStack>
        </HStack>
    )
}