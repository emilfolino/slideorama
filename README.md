# slideorama

Slides in 85 lines of JavaScript.

Write your slides in plain HTML.

```html
<div id="presentation"></div>

<div id="slide-container" class="slide-container">
    <div>
        <h1>Slide 1</h1>
    </div>
    <div>
        <h1>Slide 2</h1>
    </div>
</div>
```

Add style in CSS.

```css
.slide-container {
    display: none;
}
```

Import and init slides.

```javascript
import slideorama from "slideorama";

slideorama.init("presentation", "slide-container");
```

See `demo/` for additional CSS and timer-functionality.
