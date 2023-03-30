import './bootstrap';

import { setup } from 'highlightable-input';
import 'highlightable-input/style.css';
import { innerHTML } from 'diffhtml';
import Alpine from 'alpinejs';
import focus from '@alpinejs/focus';
window.Alpine = Alpine;

document.addEventListener('alpine:init', () => {
	Alpine.data('textarea', () => ({
		content: null,
		regex: /{{[a-z_]+}}/gi,
		regexSpan: /(?<=^|\\s){{[a-z_]+}}/gi,
		highlightable: null,
		matches: [],
		checkContent(content) {
			const matchesMark = content.match(this.regexSpan);
			this.matches = content.match(this.regex);

			console.log(this.matches);
			//console.log(matchesMark);

			const supportLookbehind = (() => {
				try {
					new RegExp('(?<=a)b');
					return true;
				} catch {
					return false;
				}
			})();

			const rules = [
				{
					pattern: supportLookbehind
						? new RegExp('(?<=^|\\s){{[a-z_]+}}', 'gi')
						: /{{^[a-z]+(?:_+[a-z]+)*$}}/gi,

					class: 'valid'
				},
				{
					pattern: supportLookbehind
						? new RegExp('(?<=^|\\s){{[a-zA-Z_]+}}', 'gi')
						: /{{^[a-zA-Z]+(?:_+[a-zA-Z]+)*$}}/gi,
					class: 'invalid'
				}
			];

			const el = document.querySelector('highlightable-input');
			const input = setup(el, {
				highlight: rules,
				patch: (el, html) => {
					innerHTML(el, html);
				},
				onInput: ({ value }) => {
					//console.log(value);
				}
			});

			// Please make sure to call `destroy` when leaving current view (eg. before route change in an SPA)
			//input.dispose();
		},
		sendToBackend() {
			window.livewire.emit('getTags', this.matches);
		}
	}));
});

Alpine.plugin(focus);

Alpine.start();
