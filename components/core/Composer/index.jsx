import { Card } from '@/components/ui/card';
import { View, Pressable, Text } from 'react-native';
import { HStack } from '@/components/ui/hstack';
import { useEffect, useRef, useState } from 'react';
import OutsidePressHandler from 'react-native-outside-press';
import { Button } from '@/components/ui/button';
import { Box } from '@/components/ui/box';

const composers = {};
const r = require.context('../../../features', true, /Composer\.jsx$/);

r.keys().forEach(key => {
    const name = key.split('/')[1];
    composers[name] = r(key);
});

export function Composer({}) {
    const [currentTab, setCurrentTab] = useState('notes');
    const [showPlaceholder, setShowPlaceholder] = useState(true);
    const inputRef = useRef(null);
    
    const showForm = (key) => {
        setCurrentTab(key);
    }
    
    useEffect(() => {
        inputRef.current?.focus();
    }, [showPlaceholder, currentTab])

    return (
        <Card className="border rounded mb-4">
            <HStack className="mb-4" space="md">
                {Object.entries(composers).map(([key, Composer]) => (
                    <Composer.Button showForm={() => showForm(key)} key={key} />
                ))}
            </HStack>

            <Box>
                <OutsidePressHandler onOutsidePress={() => setShowPlaceholder(true)}>
                    {Object.entries(composers).map(([key, Composer]) => (
                        currentTab === key && <Composer.Form 
                            showPlaceholder={showPlaceholder}
                            setShowPlaceholder={setShowPlaceholder} 
                            inputRef={inputRef}
                            key={key}
                        />
                    ))}
                </OutsidePressHandler>
            </Box>
        </Card>
    )
}