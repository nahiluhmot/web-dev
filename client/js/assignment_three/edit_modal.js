/**
 * This class represents a modal.
 */
class EditModal {
  constructor(id, submitId, defaults, onSubmit) {
    this.id = id;
    this.submitId = submitId;
    this.defaults = defaults;
    this.onSubmit = onSubmit;
  }

  /**
   * Show the modal.
   */
  show() {
    $(this.id).modal();
    this.setDefaults();
    this.installClickListener();
  }

  /**
   * Hide the modal.
   */
  hide() {
    $(this.id).modal('hide');
  }

  /**
   * Set the default values in the modal.
   */
  setDefaults() {
    let mappings = this.defaults;
    Object.keys(mappings).forEach(key => {
      document.getElementById(key).value = mappings[key];
    });
  }

  /**
   * Install a click listener on the submit button in the modal.
   */
  installClickListener() {
    let modal = this;
    let ids = Object.keys(modal.defaults).map(key => '#' + key);
    $(this.submitId).unbind('click');
    $(this.submitId).click(() => {
      modal.onSubmit.apply(modal, ids.map(id => $(id).val()));
      modal.hide();
    });
  }
}
