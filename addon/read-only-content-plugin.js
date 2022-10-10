import ReadOnlyContentSectionSpec from './inline-components/read-only-content-section';

export default class ReadOnlyContentPlugin {
  controller;

  get name() {
    return 'read-only-content';
  }

  initialize(transaction, controller) {
    transaction.registerInlineComponent(
      new ReadOnlyContentSectionSpec(controller)
    );
  }
}
