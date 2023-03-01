num = prompt('Número: ')
n_inicial = num;
var result = num;
if (num === 0 || num === 1) 
    alert('1'); 
while (num > 1)
{
    num--;
    result = result * num;
}
alert('Fatorial de '+n_inicial+' é= '+result)
factorialize(5);