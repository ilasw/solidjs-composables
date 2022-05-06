# useToggle

----

A boolean type-proof switcher with utility functions.

## Definition

----

@param {boolean} initialStatus - The initial state of the toggle.

@returns A tuple containing an accessor and a function.

## Usage

----

```tsx

const [value, toggle] = useToggle(false);

return <div>
  <span>Status: "{`${isOpen}`}"</span><br/>
  <button onClick={toggleOpen}>Toggle status</button>
</div>

```
