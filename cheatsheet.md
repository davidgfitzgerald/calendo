# Table Of Contents
- [Table Of Contents](#table-of-contents)
- [CSS Events](#css-events)
- [HTML5 Input Types](#html5-input-types)
- [HTML Select](#html-select)
- [CSS Flexbox](#css-flexbox)
- [CSS Grid](#css-grid)
- [CSS Pseudo Selectors](#css-pseudo-selectors)
  - [Pseudo Elements](#pseudo-elements)
  - [Pseudo Classes](#pseudo-classes)
- [CSS Filter Property](#css-filter-property)
- [RegEx](#regex)

# CSS Events

- `onClick` - when clicking an element
- `onBlur` - when cursor leaves an element
- `onMouseMove` - when mouse moves over element
- `onSubmit` - when form is submitted
- `onChange` - when input element is changed ?
- `onCopy` - when user copies an element
- `onKeyPress` - when user presses key in element

# HTML5 Input Types

```html
<input type="text" />
<input type="number" />
<input type="range" />

<input type="email" />
<input type="password" />
<input type="tel" />

<input type="checkbox" />
<input type="radio" />

<input type="color" />

<input type="url" />
<input type="image" />
<input type="file" />

<input type="hidden" />

<input type="date" />
<input type="datetime-local" />
<input type="month" />
<input type="week" />
<input type="time" />

<input type="reset" />
<input type="search" />
<input type="submit" />
<input type="button" />
```

# HTML Select

```html
<select name="country">
  <option value="">Select your country</option>
  <option value="finland">Finland</option>
  <option value="sweden">Sweden</option>
  <option value="denmark">Denmark</option>
  <option value="norway">Norway</option>
  <option value="iceland">Iceland</option>
</select>
```

# CSS Flexbox

```css
.flexbox {
  display: flex;
  align-items: center;
  justify-content: center;
}
```

```css
.margins {
  display: flex
}

.margins p {
  margin: auto
}
```

# CSS Grid

```css
.flexbox {
  display: flex;
  place-items: center;
}
```

```css
.margins {
  display: grid
}

.margins p {
  margin: auto
}
```

# CSS Pseudo Selectors

Format:

```css
selector::pseudo-element {
  property: value
}
```

## Pseudo Elements

| name            | properties                                 | description                              |
| --------------- | ------------------------------------------ | ---------------------------------------- |
| ` ::first-line`   | font properties, color properties, background properties, word-spacing, letter-spacing, text-decoration, vertical-align, text-transform, line-height, clear | Only apply to first line of element |
| `::first-letter` | Same as above ^                            | Only apply to first character of element |
| `::before`       | `content`                                  |                                          |
| `::after`        | `content`                                  |                                          |
| `::marker`       | `color`, `fontsize`                        | selects the bulletpoint of a `li`        |
| `::selection`    | `color`, `background`, `cursor`, `outline` | matches the user's selection.            |


## Pseudo Classes

| Selector |	Example	| Description |
| -------- | -------- | ----------- |
| :active  |	a:active | Selects the active link
| :checked |	input:checked	| Selects every checked \<input> element
| :disabled |	input:disabled	| Selects every disabled \<input> element
| :empty |	p:empty	| Selects every \<p> element that has no children
| :enabled |	input:enabled	| Selects every enabled \<input> element
| :first-child  | p:first-child	| Selects every \<p> elements that is the first child of its parent
| :first-of-type	 | p:first-of-type	| Selects every \<p> element that is the first \<p> element of its parent
| :focus |	input:focus	| Selects the \<input> element that has focus
| :hover |	a:hover	| Selects links on mouse over
| :in-range	 | input:in-range	| Selects \<input> elements with a value within a specified range
| :invalid |	input:invalid	| Selects all \<input> elements with an invalid value
| :lang(language)	 | p:lang(it)	| Selects every \<p> element with a lang attribute value starting with "it"
| :last-child	 | p:last-child	| Selects every \<p> elements that is the last child of its parent
| :last-of-type	 | p:last-of-type	| Selects every \<p> element that is the last \<p> element of its parent
| :link	| a:link	| Selects all unvisited links
| :not(selector)	 | :not(p)	| Selects every element that is not a \<p> element
| :nth-child(n)	 | p:nth-child(2)	| Selects every \<p> element that is the second child of its parent
| :nth-last-child(n)	 | p:nth-last-child(2)	| Selects every \<p> element that is the second child of its parent, counting from the last child
| :nth-last-of-type(n)	 | p:nth-last-of-type(2)	| Selects every \<p> element that is the second \<p> element of its parent, counting from the last child
| :nth-of-type(n)	 | p:nth-of-type(2)	| Selects every \<p> element that is the second \<p> element of its parent
| :only-of-type	 | p:only-of-type	| Selects every \<p> element that is the only \<p> element of its parent
| :only-child	 | p:only-child	| Selects every \<p> element that is the only child of its parent
| :optional	 | input:optional	| Selects \<input> elements with no "required" attribute
| :out-of-range	 | input:out-of-range	| Selects \<input> elements with a value outside a specified range
| :read-only	 | input:read-only	| Selects \<input> elements with a "readonly" attribute specified
| :read-write	 | input:read-write	| Selects \<input> elements with no "readonly" attribute
| :required	 | input:required	| Selects \<input> elements with a "required" attribute specified
| :root	 | root	| Selects the document's root element
| :target	 | #news:target	| Selects the current active #news element (clicked on a URL containing that anchor name)
| :valid	 | input:valid	| Selects all \<input> elements with a valid value
| :visited	 | a:visited	| Selects all visited links

# CSS Filter Property

```css
transition: filter 300ms; /* when hovering */

filter: none;
filter: blur(5px);
filter: brightness(200%);
filter: contrast(200%);
filter: drop-shadow(8px 8px 10px gray);
filter: grayscale(100%);
filter: hue-rotate(90deg);
filter: invert(100%);
filter: opacity(30%);
filter: saturate(8);
filter: sepia(100%);
filter: contrast(200%) brightness(150%);
```

# RegEx

- Make words lowercase
```regexp
Find:
([A-Z][\w]+)

Replace:
\l$1
```