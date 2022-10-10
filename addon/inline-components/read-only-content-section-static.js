import Handlebars from 'handlebars';

export const readOnlyContentSectionStatic = Handlebars.compile(`
  <a href={{link}}>{{link}}</a>
`);
