import { FontType } from './fonttype';

export class Font {
    constructor(
        public family: string,
        public name: string,
        public files: FontType,
        ) { }
}