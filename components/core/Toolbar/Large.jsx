import { VStack } from '@/components/ui/vstack';
import { Menu, MenuItem, MenuItemLabel } from '@/components/ui/menu';
import { Button, ButtonText } from '@/components/ui/button';
import { forwardRef } from 'react';

export function Large({}) {
    return (
        <VStack>
            <Menu
                trigger={({...triggerProps}) => <Trigger {...triggerProps} />}
                className="ml-auto"
                disabledKeys={["Edit", "stopNotifications", "closeComments"]}
            >
                <MenuItem key="Edit" textValue="Edit">
                    <MenuItemLabel>Edit</MenuItemLabel>
                </MenuItem>
                <MenuItem key="stopNotifications" textValue="Stop Notifications">
                    <MenuItemLabel>Stop Notifications</MenuItemLabel>
                </MenuItem>
                <MenuItem className="border-b" key="closeComments" textValue="Close Comments">
                    <MenuItemLabel>Close Comments</MenuItemLabel>
                </MenuItem>
                <MenuItem key="Delete" textValue="Delete">
                    <MenuItemLabel>Delete</MenuItemLabel>
                </MenuItem>
            </Menu>
        </VStack>
    )
}

const Trigger = forwardRef(function Trigger({...triggerProps}, ref) {
    return (
        <Button className="w-auto ml-auto" {...triggerProps} ref={ref}>
            <ButtonText>Settings</ButtonText>
        </Button>
    )
});