import { Card } from '@/components/ui/card';
import { Truncate } from '@/components/helpers/truncate';
import { Text, View } from 'react-native';
import { Name } from '@/components/ui/actor/Name';
import { Header } from '@/components/ui/story/Header';

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

            <View className="border-t p-4">
                <Text><Truncate readMore={true}>{note.body}</Truncate></Text>
            </View>

        </Card>
    )
}