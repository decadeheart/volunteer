/**
 * @file captions-button.js
 */
import TextTrackButton from './text-track-button.js';
import Component from '../../component.js';
import CaptionSettingsMenuItem from './caption-settings-menu-item.js';

/**
 * The button component for toggling and selecting captions
 *
 * @extends TextTrackButton
 */
class CaptionsButton extends TextTrackButton {

  /**
   * Creates an instance of this class.
   *
   * @param {Player} player
   *        The `Player` that this class should be attached to.
   *
   * @param {Object} [options]
   *        The key/value store of player options.
   *
   * @param {Component~ReadyCallback} [ready]
   *        The function to call when this component is ready.
   */
  constructor(player, options, ready) {
    super(player, options, ready);
    this.el_.setAttribute('aria-label', 'Captions Menu');
  }

  /**
   * Builds the default DOM `className`.
   *
   * @return {string}
   *         The DOM `className` for this object.
   */
  buildCSSClass() {
    return `vjs-captions-button ${super.buildCSSClass()}`;
  }

  /**
   * Update caption menu items
   *
   * @param {EventTarget~Event} [event]
   *        The `addtrack` or `removetrack` event that caused this function to be
   *        called.
   *
   * @listens TextTrackList#addtrack
   * @listens TextTrackList#removetrack
   */
  update(event) {
    let threshold = 2;

    super.update();

    // if native, then threshold is 1 because no settings button
    if (this.player().tech_ && this.player().tech_.featuresNativeTextTracks) {
      threshold = 1;
    }

    if (this.items && this.items.length > threshold) {
      this.show();
    } else {
      this.hide();
    }
  }

  /**
   * Create caption menu items
   *
   * @return {CaptionSettingsMenuItem[]}
   *         The array of current menu items.
   */
  createItems() {
    const items = [];

    if (!(this.player().tech_ && this.player().tech_.featuresNativeTextTracks)) {
      items.push(new CaptionSettingsMenuItem(this.player_, {kind: this.kind_}));
    }

    return super.createItems(items);
  }

}

/**
 * `kind` of TextTrack to look for to associate it with this menu.
 *
 * @type {string}
 * @private
 */
CaptionsButton.prototype.kind_ = 'captions';

/**
 * The text that should display over the `CaptionsButton`s controls. Added for localization.
 *
 * @type {string}
 * @private
 */
CaptionsButton.prototype.controlText_ = 'Captions';

Component.registerComponent('CaptionsButton', CaptionsButton);
export default CaptionsButton;
