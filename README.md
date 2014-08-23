### How to install

Just download and import `grid.scss` in your main stylesheet.

### How it works

Demo: http://brunohstein.github.io/grid

This grid provides you three mixins to help you positioning
the elements of your page.

- `container($margin: null, $max-width: null)`: creates a
wrapper for the elements inside of it. By default it
fills the full width of the page.

  ##### Parameters:

  - `$margin` (optional): adds a minimum margin around the
  container. Defaults to null.
  - `$max-width` (optional): a maximum width for the
  container, centering it on the page.

  ##### Example:

      .site-wrapper {
        @include container($margin: 20px, $max-width: 960px);
      }

- `column($size, $space)`: creates a column.

  ##### Parameters:

  - `$size` (required): the amount of space occupied by the
  column.
  - `$space` (required): the total amount of space
  inside the container.

  ##### Example:

      .sidebar {
        @include column(1, 4);
      }

- `columns($class, $size, $space)`: creates a group of equal-width columns inside a container.

  ##### Parameters:

  - `$class` (required): the CSS class name of the columns.
  - `$size` (required): the amount of space occupied by each
  column.
  - `$space` (required): the total amount of space inside
  the container.

  ##### Example:

      .products-list {
        @include container();
        @include columns('product', 1, 3);
      }

### Customization

The only variable that you need to define is `$grid-gutter`.
Its default value is 20px. It is best practice to define
variables for container's maximum width and margin, so you
mantain consistency across your entire project.

### Two cents on responsiveness

This grid works well with `rem` units on gutter, margin and
max-width sizes. You can also easily break lines and
rearrange columns using media queries:

    .products-list {
      @include container();

      @media (min-width: 1024px) {
        @include columns('product', 1, 3);
      }

      @media (min-width: 586px) and (max-width: 1024px) {
        @include columns('product', 1, 2);
      }

      @media (max-width: 586px) {
        @include columns('product', 1, 1);
      }
    }

## Browser support

The width of columns is calculated using the `calc()`
function of CSS. It is supported in IE 9+, Firefox,
Chrome, Safari, Opera, iOS Safari 6.0+ and Android Browser
4.4+. It is not supported in Opera Mini.

## To do

Documentation: container($align)
Documentation: container($min-width)
Feature: column($gap)

Inspired by Profound Grid.
