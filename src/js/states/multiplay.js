import { T } from "../translations";
import { TextualGameState } from "../core/textual_game_state";

export class MultiplayState extends TextualGameState {
    constructor() {
        super("MultiplayState");
    }

    getStateHeaderTitle() {
        return T.multiplay.title;
    }

    internalGetFullHtml() {
        return `
        <div class="container">
            ${this.getInnerHTML()}
        </div>
        `;
    }

    getInnerHTML() {
        return `
        <div>멀티<div>
        `;
    }

    getMainContentHTML() {
        return `
        <div>멀티<div>
        `;
    }
}
