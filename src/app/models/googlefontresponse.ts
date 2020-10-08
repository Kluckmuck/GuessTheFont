import { Font } from './font';

export class GoogleFontResponse {
    constructor(
        public kind: string,
        public items: Font[]) { }
}