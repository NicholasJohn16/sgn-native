import { MediumLink } from "@/components/ui/medium/link";
import { Text, View } from 'react-native';

export function Task({task}) {
    return (
        <View><MediumLink media={task}>{task.name}</MediumLink></View>
    )
}

export function Tasks({tasks}) {
    return (
        <>
            {tasks.map(task => (
                <Task task={task} key={task.id} />
            ))}
        </>
    )
}