import { useEffect, useState } from "react"
import { View, Text, FlatList, TouchableHighlight } from "react-native"
import { getLeaderStories } from "../../api/stories";
import Story from '../../components/ui/story';
import { Button, ButtonText } from '@/components/ui/button';

export default function Dashboard() {
    const [stories, setStories] = useState([]);
    const [pagination, setPagination] = useState({offset: 0, total: 0});

    useEffect(() => {
        getLeaderStories().then((result) => {
            setStories(result.data);
            setPagination(result.pagination);
            console.log(stories);
        });
    }, []);

    const getMoreStories = () => {
        console.log(pagination);
        getLeaderStories(pagination.offset + pagination.limit, pagination.limit)
            .then((result) => {
                setStories(stories => [...stories, ...result.data]);
                console.log(stories, 'stories after update');
                setPagination(result.pagination);
        });
    }

    return (
        <View style={{flex: 1}}>
            <FlatList
                data={stories}
                renderItem={({item, index, separators}) => (<Story story={item} index={index} />)}
                className="px-2"
                // onEndReached={getMoreStories} 
            />
            <Button onPress={getMoreStories}><ButtonText>Load More</ButtonText></Button>
        </View>
    )
}