# useMouse

Track the position of mouse/touch in the window

## Definition

It returns an object with the current x and y coordinates of the mouse, whether or not the user is touching the screen,
and the source of the event (mouse or touch)

@param options - Partial<UseMouseOptions> = {}

@returns An object with the following properties:

```ts
{
  x: number | null
  y: number | null
  isTouching: boolean | null
  sourceType: "touch" | "mouse" | null
}
```

## Usage

```tsx

const {x, y} = useMouse();

return (
    <div>
      <p>Mouse position: x:{x()} y:{y()}</p>
    </div>
)

```
