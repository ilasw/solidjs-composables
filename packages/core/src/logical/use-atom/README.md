# useAtom

----

An utility function that that can be used to get and set the value

## Definition

----

Accept one generic argument for typing the value.

@param initalValue - The initial value of the atom.

@returns A function that takes an optional parameter and returns a value.

## Usage

----

```tsx

const name = useAtom<string>("hello");

return (
    <div>
      <span>Name: "{name()}"</span><br/>
      <button onClick={() => name('Mike')}>Set into "Mike"</button>
      <button onClick={() => name('Luca')}>Set into "Luca"</button>
    </div>
)

```
