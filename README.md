# react-overdrive
Super easy magic-move transitions for React apps

**This is NOT production ready (but will be, stay tuned), feel free to play**

# Demo
![Overdrive Demo](static/overdrive.gif "Demo")

The demo can be seen here: https://overdrive-demo.now.sh

# Usage

Wrap any element (not just images) in a `<Overdrive id=""></Overdrive>` component. Add the same `id` to create a transition between the elements.

On `page1.js`:
```
import Overdrive from './lib/overdrive'

const pageA = (props) => (
  <div>
    <h1>Page A</h1>
    <Overdrive id="bender-to-big-fry">
      <img src="bender.png" width="100" height="100"/>
    </Overdrive>
  </div>
);
```

On `page2.js`:
```
import Overdrive from './lib/overdrive'

const pageB = (props) => (
  <div>
    <h1>Page B</h1>
    <Overdrive id="bender-to-big-fry">
      <img src="fry.png" width="300" height="300"/>
    </Overdrive>
  </div>
);
```

Now route between the pages.

# Todo
- [ ] Publish npm module
- [ ] Add browser support (currently tested on Chrome + Firefox, Safari (Mac and iOS) doesn't work well yet
- [ ] Add proper documentation
