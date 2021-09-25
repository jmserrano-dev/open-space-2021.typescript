---
theme: "night"
transition: "slide"
highlightTheme: "monokai"
logoImg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg"
slideNumber: true
title: "De <any> a tipad@r profesional"
author: "José Manuel Serrano Mármol"
---

### De \<any\> a tipad@r profesional

![Icon react-jest-enzyme](https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg =400x400)

---

### Agenda

- Tipos vs interfaces
- Type > unknow > any
- Tipos en el dominio [live coding]
- Tipos en la lógica de negocio [live coding]
- Retos avanzados [live coding]
- Recursos

---

### Tipos vs interfaces

--

### ¿Qué son?

```typescript
type MyModel = {
  property: string;
};

interface IMyModel {
  property: string;
}
```

--

### Cuando usar uno u otro

Depende del paradigma adoptado:

- Funcional: _tipos_
- Orientado a objetos: _interfaces_

---

### Type > unknow > any

```typescript
let vAny: any = 10; // 👌
let vUnknown: unknown = 10; // 👌

let s1: string = vAny; // 👌
let s2: string = vUnknown; // ⛔

vAny.method(); // 👌
vUnknown.method(); // ⛔ We should use Type Assertions
```

---

### Tipos en el dominio

:::block
_Live coding_
:::

---

### Tipos en la lógica de negocio

:::block
_Live coding_
:::

---

### Retos avanzados

:::block
_Live coding_
:::

---

### Recursos

- [Typescript doc](https://www.typescriptlang.org/docs/handbook/2/types-from-types.html)
- [Cheat Sheet](https://www.freecodecamp.org/news/advanced-typescript-types-cheat-sheet-with-examples/)
- [The unknow type](https://devblogs.microsoft.com/typescript/announcing-typescript-3-0-rc-2/#the-unknown-type)
- [Type assetions](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions)
- [Challenges](https://github.com/type-challenges/type-challenges)
