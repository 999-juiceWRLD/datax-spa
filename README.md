
# DataX: An Experimental Single Page App

This website's design is highly influenced by [React JS & Tailwind CSS video](https://www.youtube.com/watch?v=ZU-drSVodBw) by @fireclint. However, there are some changes in styling and lots of changes in the background.

First of all, instead of plain React, I used React with Typescript. Also, apart from the video I cared more about components, e.g. `<Card />`, therefore I used `.map()` function to arrays which contained the relevant information. At `/page.tsx`, I defined each `<Card />` components within `<CardContainer />`.

Secondly, code is written in Next.js, a highly known React framework. Inside the `/app` folder there is `not-found.tsx` file which is returned when you click any links.

Since I used Typescript, `interface`'s helped me to define the skeleton of components.

Another part is that the navigation bar. I created two separate components, the `<NavigationRow />` and `<NavigationColumn />`. And they are rendered conditionally based on the screen size (`window.innerWidth`).

Styling is made with TailwindCSS.

Images used are taken from the @fireclint's repository, you can refer [there](https://github.com/fireclint/data-finance-react-tailwind).

Although it's not recommended, I named interfaces with `I` on purpose.

Finally, there are two specific button components, `<Button />` and `<WrappedButton />`. You can see what they do in detail.

The `/src` folder structure is as follows:

```bash
src/
├── app
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   ├── not-found.tsx
│   └── page.tsx
├── assets
│   ├── double.png
│   ├── laptop.jpg
│   ├── single.png
│   └── triple.png
├── components
│   ├── Analytics.component.tsx
│   ├── Button.component.tsx
│   ├── Card.component.tsx
│   ├── CardContainer.component.tsx
│   ├── FooterContainer.component.tsx
│   ├── FooterContent.component.tsx
│   ├── Hero.component.tsx
│   ├── Navbar.component.tsx
│   ├── Newsletter.component.tsx
│   ├── WrappedButton.component.tsx
│   └── nav-helpers.tsx
└── interfaces
    ├── button.tsx
    ├── card-container.tsx
    ├── card.tsx
    ├── column.tsx
    ├── footer-content.tsx
    ├── node.tsx
    ├── page.tsx
    └── wrapped-button.tsx
```
