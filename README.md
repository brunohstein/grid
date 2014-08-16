### How to install

Just download and import `grid.scss` in your main stylesheet.

### How it works

This grid provides you with three mixins to help you
positioning the elements of your page:

- ##### `container($margin: null, $max-width: null)`:
Creates a wrapper for the elements inside of it. By default
it fills the full width of the page.

  ##### Parameters:

  - `$margin` (optional): adds a minimum margin around the
  container. Defaults to null.
  - `$max-width` (optional): a maximum width for the
  container, centering it on the page.

  ##### Example:

      .site-wrapper {
        @include container($margin: 20px, $max-width: 960px);
      }

- ##### `column($size, $space)`:
Creates a column.

  ##### Parameters:

  - `$size` (required): the amount of space occupied by the
  column.
  - `$space` (required): the total amount of space
  inside the container.

  ##### Example:

      .sidebar {
        @include column(1, 4);
      }

- ##### `columns($class, $size, $space)`:
Creates a group of equal-width columns inside a container.

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
