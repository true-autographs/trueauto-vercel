# Developer Readme

This Readme outlines customizations and configurations adpated from the original theme by the developer.

## Styles

All developer made styles are SCSS. Some vestigial CSS structure is present from the original theme.

### Global Variables

This package uses two global scss sheets: main.scss and globals.scss.

- Within "assets/" you can find "globals.scss". This is meant to allow for an easily-importable access point to global SCSS modules from within component-scoped style sheets. It's a work-around for how Next.js handles component-scoped vs global styling structure. It's best to make sure only variables, mixins, or other abstractions are used in the glbal file. Importing style sheets with class declarations can cause redundancies or errors.

- "Main.scss" follows standard scss structure rules, being used to import the global styles into "App".

When a new scss module is mader, it may need to be included in both "main" and "globals", depending on what needs access to the module's contents.

### Breakpoints:

Should be modified at both:

- @components/ui/Breakpoints (for access into js modules)
- assets/scss-modules/mediaqueries.scss (for styles)

## Data Management

### CMS:

This software uses two CMS platforms:

- Shopify - ecommerce management
- Prismic - editorial management

See README.theme.md for details on Shopify configuration. This site does not use BigCommerce, but its framework modules have been retained to avoid upsetting this theme's structure.

## Developer:

This software was customized from its original theme by flimflamfactory.com.
