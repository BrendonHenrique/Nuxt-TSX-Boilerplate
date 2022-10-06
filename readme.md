# Nuxt TSX Boilerplate

This boilerplate is created to use Nuxt with TSX component files. 
includes also examples of : Vuex Store, Layout, Middleware, Plugin, Mixins, Services ( with axios on window prototype ).


## Getting started

install all dependencies with yarn and run yarn serve

Must read this content and docs to work with this boilerplate:  
https://class-component.vuejs.org/ <br/>
https://www.npmjs.com/package/vuex-class <br/>
https://github.com/nuxt-community/nuxt-property-decorator <br/>
https://vuejs.org/guide/extras/render-function.html <br/>
https://www.cypress.io/ <br/>
https://github.com/axios/axios <br/>
https://jestjs.io/ <br/>
https://testing-library.com/docs/vue-testing-library/intro/ <br/>
https://github.com/styled-components/vue-styled-components <br/>

## Creating Components

There're some ways to access create Vuejs TSX Component using a lightweight theme support relaied by ChakraUI API, let's cover some of them.

### Using with Typescript With this library

There're two main interfaces declared in global scope ( so it can - and must - be used in any ts file ), helping you out 
in creating and developing using pre-created interfaces ( it will allow you to expanding theme variables and values and getting access to them easily ).


- INuxtTSXTheme - include all keys with their types such as breakpoints, colors, space, sizes and z-indices.
- StyledNuxtTSXTheme - include a handy declaration to create styled components. ( Will be covered next ) 

** all those can be found in /types/theme.d.ts


### Creating a VueJS component as .TSX file 

It's quite simple to create, we're gonna follow some steps bellow, just keep in mind to import the correct libraries though, and extend the correct interface.

```javascript 
    //@/components/MyComponent/index.tsx
    
    import { VueComponent } from "@/config/vue-component"
    import { Component } from "nuxt-property-decorator"
    
    @Component({})
    export class MyComponent extends VueComponent {

      render() {
        return <h1> Hello World ! <hi/>
      }
    }
```



### Using Decorators

You might need to use some useful decorators imported from (nuxt-property-decorator library)[https://github.com/nuxt-community/nuxt-property-decorator] 
such as Watch, Props, Inject, Provide, InjectReactive, ProvideReactive, to increase your productivity.   

## Passing Props

```javascript 
    //@/components/MyComponent/index.tsx
    
    import { VueComponent } from "@/config/vue-component"
    import { Component, Prop } from "nuxt-property-decorator"
    
    
    @Component({})
    export class MyComponent extends VueComponent {
    @Prop({
         type: String, 
         required: true, 
         default: 'Brendon',
         validator(value) { 
            return !!value
        } 
    }) readonly name: string

      render() {
        return <h1> Hello {{ name }}, nice to have you aboard ! <hi/>
      }
    }
```



## Watching values

```javascript 
    //@/components/MyComponent/index.tsx
    
    import { VueComponent } from "@/config/vue-component"
    import { Component, Watch } from "nuxt-property-decorator"
    
    
    @Component({})
    export class MyComponent extends VueComponent {
    @Prop({
         type: String, 
         required: true, 
         default: 'Brendon',
         validator(value) { 
            return !!value
        } 
    }) readonly name: string
    
   @Watch('name')
   onNameChange(newValue, oldValue) {
    console.log(`before it was ${oldValue}, then ${newValue} `) 
   } 

      render() {
        return <h1> Hello {{ name }}, nice to have you aboard ! <hi/>
      }
    }
```

... check out the library to get over more examples ...


### Using theme values in the components

You can directly access any variables defined in NuxtTSX theme passing those keys on chakra components as props.

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

### Using the theme in a custom component

You can access :root document variables in order to access any variables defined in theme, and pass them as props of string type, without need to extend VueComponent.

Or you can access this.$theme variable to get any value needed, by extending VueComponent (@/config/vue-component), then access $theme property on 'this' context.

```javascript

// Declaring the TSX Component in a parent component ( or a page if this file can be founded in /pages folder )
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


let's creating the componente just used above, keep in mind to focus in architecure, create a nice standart for your components, 
I do like to create <Component>/index.tsx ( including rendering and logic ) and <Component>/style.ts ( using to hold all styled components which will be using to build the interface). 

// NuxtTSXCustomComponent/index.tsx
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
        Hey there! !
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


### Accessing the theme in a styled component

You can access theme context ( extending StyledNuxtTSXTheme ) and get any needed value, by destructuring the variable which extends StyledNuxtTSXTheme.

just like this : 

const { theme } = StyledNuxtTSXTheme

console.log(theme.sizes.full)

// output 
// '100%'

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

**Note**
important to keep on mind: this time these theme variables is defined by vue-styled-component extending configuration see 
@/nuxt.config.js and @/config/theme/provider files. 


// Components can also access theme variables and receive others props at same time
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

### Acessing theme values in a scss file

You can access directly using cssProperty: var(--chakra-property-propertyValue) since all elements will inherit it from :root.

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
