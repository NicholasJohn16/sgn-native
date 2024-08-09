import { Box } from '@/components/ui/box';
import { VStack } from '@/components/ui/vstack';
import { HStack } from '@/components/ui/hstack';
import { Avatar } from '@/components/core/actor/Avatar';
import { Name } from '@/components/core/actor/Name';
import { Card } from '@/components/ui/card';
import { Text } from '@/components/ui/text';
import { Humanize } from '@/components/helpers/date/humanize';
import { Button, ButtonText } from '@/components/ui/button';
import { Toolbar } from '../Toolbar/Toolbar';

export function Small({comment}) {
    return (
        <HStack space="md" className="ml-12 mr-4">
            <Avatar className="w-8 h-8 mt-1 mx-2" actor={comment.author} />
            <VStack className="flex-grow min-h-10">
                <Box className="p-2 border rounded">
                    <Text>{comment.body}</Text>
                </Box>
                <Toolbar size="small" node={comment} showTime={true} />
            </VStack>
        </HStack>
    )
}