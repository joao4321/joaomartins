let dados = prompt('Digite algo', "");
if(confirm('Verificar tipo de dado?'))
{
    if (dados >= 1 && dados <= 2147483647)
    {
        dados_num = parseInt(dados);
        document.write('Number!');
    }
    else if (dados === "true" || dados === "false")
    {
        document.write('Boolean');
    }
    else
    {
        document.write('String');
    }
}
else
{
    document.write('Obrigado por visitar essa pagina!');
}