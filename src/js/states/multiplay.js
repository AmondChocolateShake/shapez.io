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
        let headerHtml = `
        <div class="headerBar">
            <h1><button class="backButton"></button> ${this.getStateHeaderTitle()}</h1>
            ${this.getInnerHTML()}
        </div>`;
        return `
            ${headerHtml}
            <div class="container">
                    ${this.getInnerHTML()}
            </div>`;
    }

    getMainContentHTML() {
        return `
        <div>멀티<div>
        `;
    }
}
