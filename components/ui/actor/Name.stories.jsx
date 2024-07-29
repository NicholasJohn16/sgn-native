import { Name } from "./Name";

const meta = {
  component: Name,
  parameters: {
    layout: 'centered'
  }
};

export default meta;

export const noActor = {
  args: {}
};

export const EmptyActor = {
  args: {
    actor: {}
  },
};

export const Default = {
  args: {
    actor: {
      name: 'Nick Swinford',
      objectType: 'com.people.person',
      alias: 'nicholasjohn16'
    }
  }
}