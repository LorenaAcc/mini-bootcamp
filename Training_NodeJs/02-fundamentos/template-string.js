const nombre = 'Deadpool';
const real = 'Wade Winston';

const normal = nombre + ' ' + real;
const template_ejemplo = `${ 1+1 } Lorena Martin`;
const template = `${ nombre } ${ real } ${template_ejemplo}`;
const template2 = `${ nombre } ${ real }`;


console.log(normal);
console.log(template_ejemplo);
console.log(template);
console.log(template2);

console.log(normal === template);
console.log(normal === template2);

const html = `
<h1>Hola</h1>
<p>Mundo</p>
`;

console.log(html);