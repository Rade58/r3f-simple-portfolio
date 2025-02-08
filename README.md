# R3F Workshops - Simple Portfolio

- Bootstraped with:

```
pnpm create vite
```

- dependancies

```
pnpm add three @react-three/fiber @react-three/drei leva@0.9.34
```

```
pnpm add -D r3f-perf @types/three
```

# Leva @0.9.34

---

---

# Laptop model

<https://market.pmnd.rs/model/macbook>

It is CCO licence, so you can use it as you please

you can use it from cdn or you can download it, (I did both but at the end I'm loading it from public folder)

There are alo other options you can choose, like coping code (component (Scene graph))

# PresentationControls stuff

## `@use-gesture`, `touch-action` problem (Mobile problem)

Just add `toucg-action: none` to CSS, on `canvas` selector

<https://use-gesture.netlify.app/docs/extras/#touch-action>

Without this dragging will have bug on mobile, and also you will have warning in console on desktop

## For Spring, Use Spring config as a reference

<https://react-spring.dev/docs/advanced/config#config>

# Some notes for Text

iframe is on top of the canvas, so text will be hidden as you drag, but we will move the text away from iframe

To download woof format (google fonts)

<https://gwfh.mranftl.com/fonts>

font needs to be in woff fomrant, not woff2, I think

### going further (not done here)

- Introduction animation where objects come up when ready and loaded
- Be able to open and close the laptop
- Sounds
- Make the camera zoom in on the screen when hovering over it
- Easter eggs
- A better environment with objects in the back, particles, etc.
  <https://codesandbox.io/s/interactive-spline-scene-live-html-f79ucc>
- Reflections on the screen
- Improve the content of the iframe
- Mobile friendly
