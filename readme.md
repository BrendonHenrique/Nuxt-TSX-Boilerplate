# Nuxt TSX Boilerplate

This boilerplate is created to use Nuxt with TSX component files. 
includes also examples of : Vuex Store, Layout, Middleware, Plugin, Mixins, Services ( with axios on window prototype ).


## Getting started

install all dependencies with yarn and run yarn serve

Must read this content and docs to work with this boilerplate:  
https://class-component.vuejs.org/ <br/>
https://www.npmjs.com/package/vuex-class
https://github.com/nuxt-community/nuxt-property-decorator
https://vuejs.org/guide/extras/render-function.html
https://www.cypress.io/
https://github.com/axios/axios
https://jestjs.io/
https://testing-library.com/docs/vue-testing-library/intro/
https://github.com/styled-components/vue-styled-components

## Creating Components

There're some ways to access theme variables in NuxtTSX Components, let's cover some of them.

### Using with Typescript

There're two main interfaces declared in global scope ( can be used in any ts file )

- INuxtTSXTheme - include all properties types such as breakpoints, colors, space, sizes and z-indices.
- StyledNuxtTSXTheme - include a handy declaration to create styled components.

### Using directly in a chakra component

You can directly access any variables defined in NuxtTSX theme passing those values on chakra components as props.

```javascript
render() {
    return (
        <CStack>
            <CBox w="xl" h="xl" bg="primary">
                Hi NuxtTSX !
            </CBox>
            <CBox w="5" h="5" bg="secondary">
                Hi NuxtTSX !
            </CBox>
        </CStack>
    );
}
```

### Using in a custom component

You can access :root document variables in order to access any variables defined in theme, and pass them as props of string type.
Or access _$theme_ variable to get any value needed, but for this you must extend VueComponent (/config/vue-component).

```javascript
// Parent component or Page file
@Component({})
export default class NuxtTSXComponent extends VueComponent {
  render() {
    return (
       <NuxtTSXCustomComponent
          background='var(--chakra-colors-primary)'
          color={this.$theme.colors.primary}
       />
    );
  }
}

// NuxtTSXCustomComponent/form.tsx
type NuxtTSXCustomComponentProps = {
  background: string;
  color: string;
};
@Component({})
export default class NuxtTSXCustomComponent extends VueComponent<NuxtTSXCustomComponentProps> {
  @Prop(String) background!: string;
  @Prop(String) color!: string;

  render() {
    return (
      <NuxtTSXCustomComponentContainer
        background={this.background}
        color={this.color}
      >
        Hi NuxtTSXer !
      </NuxtTSXCustomComponentContainer>
    );
  }
}

// NuxtTSXCustomComponent/style.ts
export const NuxtTSXCustomComponentContainer = styled('div', {
    background: String,
    color: String
})`
  ${({ background }) => `background: ${background};`}
  ${({ color }) => `color: ${color};`}
`
```

### Using in a styled component

You can access theme context and get any needed value.

**Note**: important to keep on mind that: on this time these theme variables is defined by vue-styled-component differently than at others examples above, which were defined by chakra extended theme ( see nuxt.config.js and config/theme/provider files ).

```javascript
import styled from 'vue-styled-components';

// Component that access only theme variables
export const NuxtTSXStyledCustomComponent = styled.div`
  ${({ theme }: StyledNuxtTSXTheme) => `
    background: ${theme.colors.primary};
    height: ${theme.sizes['2xl']};
    width: ${theme.sizes.lg};
    padding: ${theme.space['4']};
    z-index: ${theme.zIndices.base};

    @media (max-width: ${theme.sizes.lg}) { 
      width: ${theme.sizes.full};
    }
  `}
`;

// Component that access theme variables and receive others props
export const NuxtTSXStyledCustomComponent = styled('div', {
  isActive: Boolean,
})`
  ${({
    theme,
    isActive,
  }: {
    isActive: Boolean,
  } & StyledNuxtTSXTheme) => `
      height: ${theme.sizes['4xl']};
      width: ${theme.sizes.full};
      padding-left: ${theme.space[1]};
      background-color: ${isActive ? theme.colors.success : theme.colors.error};
    `};
`;
```

### Using in scss file

You can access directly using cssProperty: var(--chakra-property-propertyValue) since all elements will inherit it from :root.

**Disclaimer**: I do really discourage you to use scss file since, we're using styled components as standard throughout the NuxtTSX project.

```css
.NuxtTSX-component {
  background: var(--chakra-colors-primary);
  height: var(--chakra-sizes-2xl);
  width: var(--chakra-sizes-full);
}
```

## Installing

In order to install this theme you should need to import it on a layout and wrap your layout content with NuxtTSXThemeProvider.

```javascript
<template>
  <NuxtTSXThemeProvider>
      <Nuxt />
  </NuxtTSXThemeProvider>
</template>

<script>
import NuxtTSXThemeProvider from '@/config/theme/provider';

export default {
  components: {
    NuxtTSXThemeProvider,
  },
};
</script>
```
