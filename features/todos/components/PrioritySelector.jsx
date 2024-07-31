import { Select, SelectTrigger, SelectInput, SelectIcon, SelectPortal, SelectBackdrop, SelectContent, SelectDragIndicatorWrapper, SelectDragIndicator, SelectItem } from '@/components/ui/select';
import { PRIORITY } from '../data';

export function PrioritySelector({item, setItem}) {
    return (
        <Select initialLabel="Normal" selectedValue={true}>
            <SelectTrigger>
                <SelectInput placeholder="Select a priority" />
                <SelectIcon>
                    {/* <Icon /> */}
                </SelectIcon>
            </SelectTrigger>
            <SelectPortal>
            <SelectBackdrop />
            <SelectContent>
                <SelectDragIndicatorWrapper>
                    <SelectDragIndicator />
                </SelectDragIndicatorWrapper>
                {PRIORITY.map(({name, value}) => (
                    <SelectItem label={name} value={value} key={name} />
                ))}
            </SelectContent>
            </SelectPortal>
        </Select>
    )
}