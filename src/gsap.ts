import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { TextPlugin } from 'gsap/dist/TextPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, TextPlugin);

export { gsap, ScrollTrigger };
