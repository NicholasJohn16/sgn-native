import { useState } from "react";
import { Text, Pressable } from "react-native";

export function Truncate({children, readMore = false, length = 300, ending = '...'}) {
    if(!children)  { return }

    const [showMore, setShowMore] = useState(false);
    const tooLong = children.length > length;

    const toggle = () => {
        setShowMore(prev => !prev);
    }

    if(!tooLong) {
        return (
            <>{children}</>
        )
    }
    
    const readMoreText = showMore ? <Text>Show Less</Text> : <Text>Show More</Text>;
    const truncated = children.substr(0, length).trim();

    return (
        <>
            {showMore ? children : truncated + ending} {readMore && <Pressable className="text-info-300 hover:text-info-600 ml-1" onPress={toggle}>{readMoreText}</Pressable>}
        </>
    )
}

function ReadMoreLink({showMore, toggle}) {
    return (
        <>{showMore ? 
        <Pressable className="text-info-300 hover:text-info-600 ml-1" onPress={toggle}>Show Less</Pressable> : 
        <Pressable className="text-info-300 hover:text-info-600 ml-1" onPress={toggle}>Show More</Pressable>}</>
    )
}