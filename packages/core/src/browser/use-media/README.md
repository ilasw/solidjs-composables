# useMedia

Tracks state of a CSS media query

## Definition

@param {string} query - string - The media query to listen to.

@returns An accessor that will update when the media query changes.

## Usage

```tsx

const isMobile = useMedia('(max-width: 768px)');

return (
    <div>
      {isMobile() ? 'is mobile' : 'is not mobile'}
    </div>
)

```
