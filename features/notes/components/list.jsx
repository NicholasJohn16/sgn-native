import { Card } from '@/components/ui/card';
import { Truncate } from '@/components/helpers/truncate';
// import { Text, View } from 'react-native';
import { Name } from '@/components/core/actor/Name';
import { Header } from '@/components/core/story/Header';
import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';
import { Toolbar } from '@/components/core/Toolbar/Toolbar';
import { Divider } from '@/components/ui/divider';

export function List({note, className}) {
    const classList = `border p-0 ${className}`;

    return (
        <Card className={classList}>
            <Header 
                author={note.author} 
                creationTime={note.creationTime}
                title={<Name actor={note.author} />}
                owner={note.author != note.owner ? note.owner : null}
            />

            <Box className="border-t p-4">
                <Text><Truncate readMore={true}>{note.body}</Truncate></Text>
                <Divider className="my-4" />
                <Toolbar size="small" node={note} />
            </Box>

        </Card>
    )
}