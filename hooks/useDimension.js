import { useState, useEffect } from "react";
import { Dimensions } from "react-native";

const windowDimensions = Dimensions.get('window');
const screenDimensions = Dimensions.get('screen');

export function useDimensions() {
    const [dimensions, setDimensions] = useState({
        window: windowDimensions,
        screen: screenDimensions,
      });

    useEffect(() => {
        const subscription = Dimensions.addEventListener(
            'change',
            ({window, screen}) => {
            setDimensions({window, screen});
            },
        );
        return () => subscription?.remove();
    });

    const getBreakpoint = () => {
        let breakpoint = 'xs';
        let width = dimensions.window.width;

        if(width >= 640 && width < 768) {
            breakpoint = 'sm';
        }

        if(width >= 768 && width < 1024) {
            breakpoint = 'md';
        }

        if(width >= 1024 && width < 1280) {
            breakpoint = 'lg';
        }

        if(width >= 1280 && width < 1536) {
            breakpoint = 'xl';
        }

        if(width >= 1536) {
            breakpoint = '2xl';
        }
        
        return breakpoint;
    }

    return [dimensions.window.width, getBreakpoint()];
}