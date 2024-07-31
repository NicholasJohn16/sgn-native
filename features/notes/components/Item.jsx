import { Header } from "@/components/core/story/Header";
import { Card } from '@/components/ui/card';
import { Name } from '@/components/core/actor/Name';
import { View, Text } from 'react-native';
import { Box } from '@/components/ui/box';
import { Toolbar } from "@/components/core/Toolbar/Toolbar";


export function Item({ note, className }) {
    return (
        <Card className={`p-0 border ${className}`}>
            <Header 
                author={note.author}
                creationTime={note.creationTime}
                owner={note.owner}
                title={<Name actor={note.author} />}
            />

            <Box className="border-t p-4">
                <Text>{note.body}</Text>
            </Box>

        </Card>
    )
}