import { Box } from '@/components/ui/box';
import { VStack } from '@/components/ui/vstack';
import { HStack } from '@/components/ui/hstack';
import { Avatar } from '@/components/ui/actor/Avatar';
import { Name } from '@/components/ui/actor/Name';
import { Card } from '@/components/ui/card';
import { Humanize } from '@/components/helpers/date/humanize';
import { Text } from '@/components/ui/text';

export function Large({comment}) {
    return (
        <Box className="border-b last:border-b-0">
            <HStack className="p-4" space="md">
                <Avatar actor={comment.author} />
                <VStack>
                    <Name actor={comment.author} />
                    <Text><Humanize>{comment.creationTime}</Humanize></Text>
                </VStack>
            </HStack>

            <Box className="p-4 border-t"><Text>{comment.body}</Text></Box>
        </Box>
    )
}