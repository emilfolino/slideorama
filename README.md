# slideorama

Slides in 84 lines of JavaScript.

Write your slides in plain HTML.

```html
<div id="presentation"></div>

<div id="slide-container">
    <div>
        <h1>Slide 1</h1>
    </div>
    <div>
        <h1>Slide 1</h1>
    </div>
</div>
```

Import and init slides.

```javascript
import slideorama from "slideorama";

slideorama.init("presentation", "slide-container");
```

See `demo/` for CSS and timer-functionality.
