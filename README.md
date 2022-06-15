# Getting Started with React Patterns

## Provider Pattern

As you may know, React uses a unilateral data(props) flow from parent components to children's ones. This is called _prop drilling_. This can quickly become an issue when we pass down props to components located deep in the tree and unrelated components share this data along the way.
Let's imagine we have an `App` component that fetches data items. Lower on the tree, we have a `Card`, `List` and finally `ListItem` components.

![App example](./public/app-example.png)

Then we would need to pass down data items, useful only to `ListItem`, to multiple layers that don't need them.

The **Provider Pattern** solves this problem by enabling us to store data in a globalized state, _React Context_, and directly share it to a selected component.

Here is a real code example:

First let's define a React Context, this will serve us to save our global data.
![](./public/create-context.png)

Then, lets define a button that will use a `themeColor` to define which color to use. By using the `useContext` hook, we can directly access any data saved in our React Context.
![](./public/themed-button.png).

Now, we can use our `ThemedButton`. We don't need anymore to manually pass down props through each layer.
![](./public/provider-usage.png).
