CREATE TABLE tabelaCompleta AS
SELECT  b.Data, b.id_marca, a.nome_marca, b.Nome_Veiculo, b.Vendas, b.Valor_Veiculo 
FROM fixed_DataBase1 b
JOIN fixed_DataBase2 a ON a.id_marca = b.id_marca;

/*Depois disso apenas exportei a tabela resultante*/