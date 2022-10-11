import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class ReadOnlyContentSectionComponent extends Component {
  get componentController() {
    return this.args.componentController;
  }

  get editorController() {
    return this.args.editorController;
  }

  get title() {
    return this.componentController.props.title;
  }

  get content() {
    return this.componentController.props.content;
  }

  get documentLink() {
    return this.componentController.props.link;
  }

  @action
  detach() {
    this.editorController.perform((tr) => {
      tr.commands.removeComponent({
        component: this.componentController.model,
      });
    });
  }
}
