import { Truncate } from './index';
import { Text } from 'react-native';

const template = ({text, ...props}) => (
    <Text>
        <Truncate {...props}>{text}</Truncate>
    </Text>
)

const meta = {
    component: template,
    parameters: {
        layout: 'centered'
    }
}

export default meta;

export const ShortText = {
    args: {
        text: 'This is very short text'
    }
};

export const LongText = {
    args: {
        text: 'This much longer text that should show a read more because it is too long. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porttitor libero et interdum ullamcorper. Suspendisse a dignissim mi. Nam non sapien vel tortor scelerisque suscipit ac ut ante. Mauris mauris massa, pulvinar nec erat a, eleifend lobortis nunc. Quisque tristique placerat ante sit amet feugiat. Quisque dapibus malesuada nisl. Vestibulum interdum eget lacus in cursus. Morbi ornare ac nisl at elementum. Curabitur nec nunc in augue ultricies egestas. Donec tristique accumsan consectetur. Sed vitae sapien commodo, volutpat velit vel, elementum diam. Donec vel egestas sapien. Suspendisse mattis leo erat, in ultrices libero molestie quis.'
    }
}

export const ReadMore = {
    args: {
        text: 'This much longer text that should show a read more because it is too long. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porttitor libero et interdum ullamcorper. Suspendisse a dignissim mi. Nam non sapien vel tortor scelerisque suscipit ac ut ante. Mauris mauris massa, pulvinar nec erat a, eleifend lobortis nunc. Quisque tristique placerat ante sit amet feugiat. Quisque dapibus malesuada nisl. Vestibulum interdum eget lacus in cursus. Morbi ornare ac nisl at elementum. Curabitur nec nunc in augue ultricies egestas. Donec tristique accumsan consectetur. Sed vitae sapien commodo, volutpat velit vel, elementum diam. Donec vel egestas sapien. Suspendisse mattis leo erat, in ultrices libero molestie quis.',
        readMore: true
    }
}

export const CustomLength = {
    args: {
        text: 'This text is much shorter, but still should be cut off because of the custom length',
        length: 50
    }
}