import * as LabelPrimitive from '@rn-primitives/label';
import * as React from 'react';
import { cn } from '../../utils/utils';

const classNames = [
  'text-sm',
  'text-foreground',
  'native:text-base',
  'font-medium',
  'leading-none',
  'web:peer-disabled:cursor-not-allowed',
  'web:peer-disabled:opacity-70',
  'web:mb-2',
  'web:font-bold'
];

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Text>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Text>
>(({ className, onPress, onLongPress, onPressIn, onPressOut, ...props }, ref) => (
  <LabelPrimitive.Root
    className='web:cursor-default'
    onPress={onPress}
    onLongPress={onLongPress}
    onPressIn={onPressIn}
    onPressOut={onPressOut}
  >
    <LabelPrimitive.Text
      ref={ref}
      className={cn(
        classNames.join(' '),
        className
      )}
      {...props}
    />
  </LabelPrimitive.Root>
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
