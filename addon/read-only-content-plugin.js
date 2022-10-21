import ReadOnlyContentSectionSpec from './inline-components/read-only-content-section';

export default class ReadOnlyContentPlugin {
  get name() {
    return 'read-only-content';
  }

  initialize(controller) {
    controller.registerInlineComponent(
      new ReadOnlyContentSectionSpec(controller)
    );
  }
}
