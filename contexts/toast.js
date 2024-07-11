import { createContext, useContext} from 'react';
import { Text, Pressable } from 'react-native';
import { useToast as useToastHook, Toast, ToastTitle, ToastDescription} from '@/components/ui/toast';
import Constants from 'expo-constants';
import { VStack } from '@/components/ui/vstack';

const  ToastContext = createContext(() => {});

export function useToast() {
    return useContext(ToastContext);
}

function RenderToast(options) {
    return ({id}) => {
        const toastId = "toast-"+id;

        return (
            <Toast nativeID={toastId} action={options.action} variant={options.variant}>
                <VStack>
                    {options.title && <ToastTitle className="font-bold">{options.title}</ToastTitle>}
                    <ToastDescription>{options.description}</ToastDescription>
                </VStack>
                {options.dismissible && <Pressable onPress={() => { options.closeToast(id) }}>
                    <Text>✕</Text>
                </Pressable>}
            </Toast>
        )
    }
}

export function ToastProvider({children}) {
    const toast = useToastHook();

    const sendToast = (options) => {
        const defaultOptions = {
            placement: 'top',
            action: 'error',
            variant: 'accent',
            containerStyle: {
                marginTop: Constants.statusBarHeight
            },
            dismissible: true,
            closeToast: (id) => {
                toast.close(id);
            },
        };

        options = {...defaultOptions, ...options};

        toast.show({...options, render: RenderToast(options)});
    }

    return (
        <ToastContext.Provider value={sendToast}>
            {children}
        </ToastContext.Provider>
    )
}