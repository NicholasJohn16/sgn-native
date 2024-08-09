import { Button as GButton, ButtonText } from '@/components/ui/button';
import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Pressable } from '@/components/ui/pressable';
import { Box } from '@/components/ui/box';
import { FormControl, FormControlLabel, FormControlLabelText  } from "@/components/ui/form-control"
import { Textarea, TextareaInput } from '@/components/ui/textarea';
import { Input, InputField } from "@/components/ui/input"
import { PrioritySelector } from '@/features/todos/components/PrioritySelector';
import { Text } from '@/components/ui/text';

export function Button({showForm}) {
    return (
        <GButton
            variant="outline"
            size="xs"
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
            <Pressable onPress={() => setShowPlaceholder(false)}>
                <Box className="border rounded p-4">
                    <Text className="text-muted">Share a task</Text>
                </Box>
            </Pressable>
        )
    }

    return (
        <Box>
            <FormControl className="mb-4">
                <FormControlLabel>
                    <FormControlLabelText>Title</FormControlLabelText>
                </FormControlLabel>
                <Input>
                    <InputField ref={inputRef} />
                </Input>
            </FormControl>

            <FormControl className="mb-4">
                <FormControlLabel>
                    <FormControlLabelText>Description</FormControlLabelText>
                </FormControlLabel>
                <Textarea>
                    <TextareaInput />
                </Textarea>
            </FormControl>

            <FormControl className="mb-4">
                <FormControlLabel>
                    <FormControlLabelText>Priority</FormControlLabelText>
                </FormControlLabel>
    
                <PrioritySelector />
                
            </FormControl>

        </Box>
    )
}