import { Skeleton as GSkeleton, SkeletonText  } from '@/components/ui/skeleton';
import { HStack } from '@/components/ui/hstack';
import { VStack } from '@/components/ui/vstack';
import { Card } from '@/components/ui/card';
import { View } from 'react-native';

export function SkeletonBase({includeHeading = true, includeBody = true, includeImage = false}) {
    return (
        <Card className="p-0 mb-4">
            <HStack className="p-4 border-b">
                <GSkeleton className="h-[48px] w-[48px] rounded grow shrink-0 mr-4" />
                <VStack className="justify-center w-full">
                    <SkeletonText className="h-6 mb-2" />
                    <HStack space="md">
                        <SkeletonText className="h-4 w-1/5" />
                        <SkeletonText className="h-4 w-1/5" />
                    </HStack>
                </VStack>
            </HStack>

            {includeImage && <GSkeleton variant="sharp" className="w-full h-[300px]" />}

            {includeBody && <View className="p-4">
                {includeHeading && <SkeletonText _lines={1} gap={1} className="h-6 mb-2" />}
                
                <SkeletonText _lines={2} gap={1} className="h-4" />
            </View> }

        </Card>
    )
}

export function Skeletons() {
    return (
        <>
            <SkeletonBase includeBody={false} />
            <SkeletonBase/>
            <SkeletonBase includeImage={true} includeHeading={false} />
            <SkeletonBase includeHeading={false} />
        </>
    )
}