import { Button as GButton, ButtonText } from '@/components/ui/button';
import { TextInput, Pressable, Text } from 'react-native';

export function Button({showForm}) {
    return (
        <GButton
            variant="outline"
            size="xs"
            className="p-4"
            onPress={showForm}
            action="secondary"
        >
            <ButtonText>Task</ButtonText>
        </GButton>
    ) 
}

export function Form({showPlaceholder, setShowPlaceholder, inputRef}) {

    if(showPlaceholder) {
        return (
            <Pressable className="border rounded p-4" onPress={() => setShowPlaceholder(false)}>
                <Text className="text-muted">Share a task</Text>
            </Pressable>
        )
    }

    return (
        <TextInput
            ref={inputRef}
            className="rounded border p-2"
            multiline={true}
            numberOfLines={4}

        />
    )
}