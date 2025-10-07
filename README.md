# &lt;date-diff&gt; Web Component

A lightweight Web Component that displays the difference between two dates in days or years.

## Demo

Visit [https://date-diff.github.io](https://date-diff.github.io) to see the component in action.

## Features

- 🚀 Zero dependencies - pure vanilla JavaScript
- 📅 Supports days or years display format
- ⚡ Automatic defaults - uses today's date when attributes are missing
- 🎯 Simple API - just HTML attributes
- ✨ Proper singular/plural handling (1 day vs 2 days, 1 year vs 2 years)

## Installation

Include the script in your HTML:

```html
<script src="date-diff.js"></script>
```

## Usage

### Basic Examples

```html
<!-- Days from a past date to today -->
<date-diff from="2024-01-01"></date-diff>
<!-- Output: 646 days (or current difference) -->

<!-- Days from today to a future date -->
<date-diff to="2024-12-31"></date-diff>
<!-- Output: -281 days (or current difference) -->

<!-- Days between two specific dates -->
<date-diff from="2024-01-01" to="2024-12-31"></date-diff>
<!-- Output: 365 days -->
```

### Using Years

```html
<!-- Years from birth date to today -->
<date-diff from="1990-01-01" years></date-diff>
<!-- Output: 35 years (or current age) -->

<!-- Years between two dates -->
<date-diff from="2000-01-01" to="2024-01-01" years></date-diff>
<!-- Output: 24 years -->
```

## Attributes

| Attribute | Type | Description | Default |
|-----------|------|-------------|---------|
| `from` | String | Start date in ISO format (YYYY-MM-DD) | Today's date |
| `to` | String | End date in ISO format (YYYY-MM-DD) | Today's date |
| `years` | Boolean | Display difference in years | `false` |
| `days` | Boolean | Display difference in days | `true` (default) |

## Behavior

- If `from` is not defined, it defaults to today's date, and `to` is either a past or future date
- If `to` is not defined, it defaults to today's date, and `from` is either a past or future date
- If both `from` and `to` are not defined, the difference is 0 days
- The component displays the result in innerHTML
- Negative values indicate the first date is after the second date
- Proper singular/plural forms: "1 day" vs "2 days", "1 year" vs "2 years"

## Examples

### Age Calculator
```html
<p>You are <date-diff from="1990-05-15" years></date-diff> old.</p>
```

### Countdown
```html
<p>Only <date-diff to="2024-12-31"></date-diff> until New Year!</p>
```

### Event Duration
```html
<p>The event lasted <date-diff from="2024-03-01" to="2024-03-15"></date-diff>.</p>
```

## Browser Support

Works in all modern browsers that support:
- Custom Elements (Web Components)
- ES6 Classes

## License

MIT License

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
