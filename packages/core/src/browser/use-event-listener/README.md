# useEventListener

Event listener that self-unsubscribe on cleanup

## Definition

It adds an event listener to the window object when the component mounts, and removes it when the component unmounts

@param {E} event - The event to listen for.

@param callback - The function to be called when the event is fired.

@param {boolean | AddEventListenerOptions} options - boolean | AddEventListenerOptions = {}

## Usage

```tsx
useEventListener("click", (e: MouseEvent) => console.log(e));

return (
    <div>
      <span>Click in order to console.log</span><br/>
    </div>
)

```
