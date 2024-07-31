import { Box } from '@/components/ui/box';
import { VStack } from '@/components/ui/vstack';
import { HStack } from '@/components/ui/hstack';
import { Avatar } from '@/components/core/actor/Avatar';
import { Name } from '@/components/core/actor/Name';
import { Card } from '@/components/ui/card';
import { Text } from '@/components/ui/text';
import { Humanize } from '@/components/helpers/date/humanize';
import { Button, ButtonText } from '@/components/ui/button';

export function Small({comment}) {
    return (
        <HStack>

            <Avatar className="w-8 h-8 my-3 ml-2" actor={comment.author} />
            <VStack className="flex-grow min-h-10">
                <Box className="p-2 border rounded">
                    <Text>{comment.body}</Text>
                </Box>
                <HStack space="sm">
                    <Text size="xs" className="leading-8 font-semibold text-black">
                        <Humanize>{comment.creationTime}</Humanize>
                    </Text>
                    <Button size="xs" variant="link" action="secondary">
                        <ButtonText>Like</ButtonText>
                    </Button>
                    <Button size="xs" variant="link" action="secondary">
                        <ButtonText>Delete</ButtonText>
                    </Button>
                </HStack>
            </VStack>

        </HStack>
    )
}