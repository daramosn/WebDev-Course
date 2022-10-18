import { franc, francAll } from 'franc';
import pkg from 'langs';
const langs = pkg;

const phrase = process.argv[2] || 'Hola, muy buenos días mi gente bella';
console.log(phrase);
const code = franc(phrase);
if (code === 'und') {
    console.log('Sorry, try with more text');
} else {
    const language = langs.where('3', code)
    console.log('The language is', language.name);
}