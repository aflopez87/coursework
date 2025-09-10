# Paint Samples

A local home improvement store has contracted you to build a website where customers can
browse their available paint samples. Users can see small swatches of all available
colors, or they can choose a color to preview what it would look like on a wall.

A [live demo of the finished project](https://fsa-paint-samples.netlify.app/) is available for you to reference.

## Read the existing code

A working version of the app has already been written for you. It currently uses
`PageContext` to manage which page the app is currently on.

1. Run a dev server locally or explore the live demo before reading the code.
2. When the application first loads, what page does it display?
3. In `<Navbar>`, what determines if a link is active?
4. What page is the user navigated to when a `<Swatch>` is clicked on?
5. How does `<Wallpaper>` determine which color to show?
6. Under what circumstances will the 404 page be displayed?

Designate a Driver and continue to the next section.

## Set up React Router architecture

Now that you have an understanding of how the application is currently built, let's
**refactor** the code to use [React Router](https://reactrouter.com/start/declarative/installation) instead! Instead of using `PageContext`, we'll use components and hooks from React Router.

> [!WARNING]
>
> There are **two variations** of React Router: framework mode and declarative mode.
> We will be using React Router in **declarative mode**, so make sure you are
> referencing the correct documentation!

1. Run `npm add react-router` in your project to install React Router as a dependency.
2. In `main.jsx`, remove `<PageProvider>` and `<Layout>`. Wrap `<App>` in `<BrowserRouter>` instead.
3. Refactor `<App>` to use [layout routes](https://reactrouter.com/start/declarative/routing#layout-routes):
   1. Remove all references to `PageContext`.
   2. Return a single `<Routes>` element.
   3. The `<Routes>` should have a single child `<Route>` whose `element` is `<Layout
/>`.
4. Within the layout route, define the application routes:
   1. The element of the **index** route should be `<Home />`.
   2. The element of the `/colors` route should be `<Colors />`.
   3. The element of the `/colors/:color` route should be `<Wallpaper />`.
      - Note the `:color` syntax! That is because the `color` is a **dynamic segment**,
        which means that it is a variable that will be passed as params to the
        component.
   4. The element of the `*` route should be `<Error404 />`.
      - This is known as the **splat**, **catchall**, or **star** route. If a user tries to
        access any other route, they will end up at this 404 page.

At this point, your app is ready to use React Router! However, the code currently still
references `PageContext` for page navigation, so the app will break if you try to run it.

Designate a new person to be the Driver and continue to the next section.
More and more of the app will start working as you progress through the next section.

## Replace PageContext with React Router

5. Refactor `<Layout>` to use [`<Outlet>`](https://reactrouter.com/api/components/Outlet#outlet) instead of `{children}`.
6. Refactor `<Swatch>` to use [`<Link>`](https://reactrouter.com/api/components/Link)
   instead of `setPage`. Just the correct `to` prop is enough!
7. Refactor `<Navbar>` to use [`<NavLink>`](https://reactrouter.com/api/components/NavLink#navlink). Just the correct `to` prop is enough!
   - The "home" link should navigate to `/`.
   - The "colors" link should navigate to `/colors`.
8. Refactor `<Wallpaper>` to use a `<Link>` to return to all colors.
9. Refactor `<Wallpaper>` to grab the color via [`useParams`](https://reactrouter.com/api/hooks/useParams) instead of `usePage`.
   - Since you defined `:color` as a dynamic segment earlier, you can grab the value of
     that variable like so: `const { color } = useParams();`

Congrats! The app should now be fully functional again, except this time, it's been
refactored to use React Router!

> [!WARNING]
>
> If you try to host your finished project on Netlify, you might run into a strange 404
> error if you refresh the page. That's because React Router changes the URL when you
> navigate to different pages, which conflicts with the paths that Netlify uses to serve a
> static website. To fix this error, a `_redirects` file needs to be configured.
>
> See the solution branch to learn more about this file.
