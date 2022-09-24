# Table Of Contents
- [Table Of Contents](#table-of-contents)
- [CSS Events](#css-events)
- [HTML5 Input Types](#html5-input-types)
- [HTML Select](#html-select)
- [CSS Flexbox](#css-flexbox)
- [CSS Grid](#css-grid)
- [CSS Pseudo Selectors](#css-pseudo-selectors)
  - [Pseudo Elements](#pseudo-elements)

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

- `::first-line`
- `::first-letter`
- 