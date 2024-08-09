import { HStack } from '@/components/ui/hstack';
import { Text } from '@/components/ui/text';
import { Humanize } from '@/components/helpers/date/humanize';
import { Button, ButtonText } from '@/components/ui/button';
import { Link, router } from 'expo-router';
import { getNamespace } from '@/utils/node';
import { request } from '@/api/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export function Small({item, showTime = false, className}) {
    const queryClient = useQueryClient();
    const { app, entity } = getNamespace(item);

    const hasCommand = (name) => item?.commands && item.commands.includes(name);
    const handleDelete = async () => await request(`/${app}/${item.id}`, {}, 'DELETE');

    const mutation = useMutation({
        mutationFn: () => handleDelete(),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [entity, {id: item.id.toString()}] });
            queryClient.invalidateQueries({ queryKey: ['stories'] });
            queryClient.invalidateQueries({ queryKey: [app] });
        }
    });

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
                    <ButtonText>
                        <Link href={`/notes/${item.id}/edit`}>Edit</Link>
                    </ButtonText>
                </Button>
            }

            {(hasCommand('delete') || hasCommand('deletecomment')) && 
                <Button onPress={() => mutation.mutate()} size="xs" variant="link" action="secondary">
                    <ButtonText>Delete</ButtonText>
                </Button>
            }
            
        </HStack>
    )
}