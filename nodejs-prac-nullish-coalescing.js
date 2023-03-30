const a=0;
const b=a||3;
console.log(b)//3

const c=0;
const d=c??3;
console.log(d)//0 - null이나 undifined가 아님

const e=null;
const f=e??3;
console.log(f)//3

const g=undefined;
const h=g??3;
console.log(h)//3
