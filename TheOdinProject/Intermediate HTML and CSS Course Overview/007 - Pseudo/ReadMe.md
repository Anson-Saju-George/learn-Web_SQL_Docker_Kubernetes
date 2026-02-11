
# CSS Pseudo-classes, Pseudo-elements & Attribute Selectors

## Pseudo-classes

Pseudo-classes offer different ways to target elements in HTML. They fall into a few categories:

- Based on structure/position in the DOM
- Based on element state
- Based on user interaction

They share the same specificity as regular classes: **(0, 0, 1, 0)**.  
Most pseudo-classes can also be chained.

---

## Calculating CSS Specificity

Specificity notation example: **(0, 0, 1, 0)**

Breakdown:
- Inline styles
- IDs
- Classes / pseudo-classes / attributes
- Elements / pseudo-elements

Refer to: **CSS Specificity Value** documentation for deeper understanding.

---

## Dynamic & User Action Pseudo-classes

These make UI more interactive:

### `:focus`
Applies to elements selected via cursor or keyboard.

### `:hover`
Targets elements under the mouse pointer.

Common uses:
- Buttons
- Links
- Dropdown triggers

### `:active`
Targets elements being clicked.  
Useful for tactile feedback on interaction.

### Link State Pseudo-classes

Browsers style links by default.

```css
/* Applies to all links */
a {
  text-decoration: underline;
}

/* Unvisited links */
a:link {
  color: blue;
}

/* Visited links */
a:visited {
  color: purple;
}
````

---

## Structural Pseudo-classes

Target elements based on DOM position.

### `:root`

Represents the top-level element (`html` in most cases).

Common uses:

* CSS variables
* Global rules

### Position-based selectors

* `:first-child`
* `:last-child`
* `:empty`
* `:only-child`

### `:nth-child()`

Flexible structural selector.

```css
.myList:nth-child(5) {
  /* 5th element */
}

.myList:nth-child(3n) {
  /* Every 3rd element */
}

.myList:nth-child(3n + 3) {
  /* Every 3rd starting from the 3rd */
}

.myList:nth-child(even) {
  /* Every even element */
}
```

---

# Pseudo-elements

Pseudo-elements target parts of elements, not full elements.

Specificity: **(0, 0, 0, 1)**

### Common pseudo-elements

* `::marker` → style list bullets/numbers
* `::first-letter`
* `::first-line`
* `::selection`
* `::before`
* `::after`

Example:

```css
.emojify::before {
  content: '😎 😄 🤓';
}

.emojify::after {
  content: '🤓 😄 😎';
}
```

```html
<div> Let's <span class="emojify">emojify</span> this span!</div>
```

Result:

> Let’s 😎 😄 🤓 emojify 🤓 😄 😎 this span!

---

# Attribute Selectors

Attributes = values inside opening HTML tags.

Examples:

* `src="image.jpg"`
* `href="example.com"`

Specificity: **(0, 0, 1, 0)**

---

## Basic Attribute Selectors

```css
[src] {
  /* Any element with src attribute */
}

img[src] {
  /* img elements with src */
}

img[src="puppy.jpg"] {
  /* img with exact src value */
}
```

---

## Partial Matching Attribute Selectors

Works similar to pattern matching.

### Starts with (`^=`)

```css
[class^='aus'] {
  /* austria, australia */
}
```

### Ends with (`$=`)

```css
[src$='.jpg'] {
  /* puppy.jpg, kitten.jpg */
}
```

### Contains (`*=`)

```css
[for*='ill'] {
  /* bill, jill, silly, ill */
}
```

---

## Notes

* Classes are attributes too.
* Attribute selectors allow flexible targeting.
* Advanced options include:

  * Case-insensitive matching
  * Hyphen-separated substring matching

Refer to MDN docs for the complete selector list.
