import { InlineComponentSpec } from '@lblod/ember-rdfa-editor/core/model/inline-components/model-inline-component';
import { isElement } from '@lblod/ember-rdfa-editor/utils/dom-helpers';
import { readOnlyContentSectionStatic } from './read-only-content-section-static';
export default class ReadOnlyContentSectionSpec extends InlineComponentSpec {
  matcher = {
    tag: this.tag,
    attributeBuilder: (node) => {
      if (isElement(node)) {
        if (
          node.classList.contains('inline-component') &&
          node.classList.contains(this.name)
        ) {
          return {};
        }
      }
      return null;
    },
  };
  _renderStatic(props) {
    return readOnlyContentSectionStatic({
      link: props.link,
    });
  }
  constructor(controller) {
    super('inline-components/read-only-content-section', 'div', controller);
  }
}
