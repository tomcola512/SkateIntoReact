/** @jsx h */
import 'skatejs-web-components';
import { Component, h } from 'skatejs';

class Modaloid extends Component {
    static get props () {
        return {
            name: { attribute: true }
        };
    }
    renderCallback (props) {
        const style = `
        :host {
            background-color: red;
        }
        .title {
            font-size: 33px;
        }
        ::slotted(.header) {
            color: red;
        }
        ::slotted(.body) {
            color: green;
        }
        ::slotted(.footer) {
            color: blue;
        }
        `;
        return <div class="modal">
            <style>{style}</style>
                <div class="modal-content">
                    <div class="title">
                        {props.name}
                    </div>
                        <slot class="modal-pieces"/>
                </div>
            </div>;
    }
}

customElements.define('hs-modal', Modaloid);

export default Modaloid;