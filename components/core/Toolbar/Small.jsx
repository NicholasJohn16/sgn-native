import { HStack } from '@/components/ui/hstack';
import { Text } from '@/components/ui/text';
import { Humanize } from '@/components/helpers/date/humanize';
import { Button, ButtonText } from '@/components/ui/button';

export function Small({item, showTime = false, className}) {

    console.log(item, 'item');

    const hasCommand = (name) => {
        return item?.commands && item.commands.includes(name);
    }

    return (
        <HStack space="sm" className={`${className}`}>
            {showTime && 
                <Text size="xs" className="leading-8 font-semibold">
                    <Humanize style="mini">{item.creationTime}</Humanize>
                </Text>
            }

            {(hasCommand('vote') || hasCommand('votecomment')) &&
                <Button size="xs" variant="link" action="secondary">
                    <ButtonText>Like</ButtonText>
                </Button>
            }

            {hasCommand('edit') && 
                <Button size="xs" variant="link" action="secondary">
                    <ButtonText>Edit</ButtonText>
                </Button>
            }

            {(hasCommand('delete') || hasCommand('deletecomment')) && 
                <Button size="xs" variant="link" action="secondary">
                    <ButtonText>Delete</ButtonText>
                </Button>
            }
            
        </HStack>
    )
}