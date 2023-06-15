CREATE TABLE produtos (
    codigo Integer, 
    titulo TEXT NOT NULL, 
    dataCadastro Date,
    preco Float, 
    descricao TEXT NOT NULL,
    imagem TEXT NOT NULL
);

INSERT INTO produtos (codigo, titulo, dataCadastro, preco, descricao, imagem)
VALUES
    ('Base', '2023/03/03', 15, 'Base Ruby Rose.' ),
	('Pó Compacto', '2023/04/05', 20, 'Pó Compacto Ruby Rose.'),
	('Rímel', '2023/06/07', 15, 'Rímel Boca Rosa.'),
	('Batom', '2022/06/04', 15, 'Batom Matte.'),
	('Delineador', '2022/08/08', 20, 'Delineador MaryKay.'),
    ('Paleta de Sombra', '2022/05/04', 40, 'Paleta Ruby Rose.'),
  	('Iluminador', '2022/08/08', 15, 'Iluminador MaryKay.'),
   	('Lápis de Olho', '2021/08/01', 10, 'Lápis de olho Boca Rosa'),
   	('Blush', '2023/05/05', 15, 'Blush Boca Rosa.'),
   	('Contorno', '2023/02/01', 15, 'Contorno MaryKay.'),
    ('Creme Hidratante Facial', '2022/08/05', 149, 'Hidrata a pele e diminui os efeitos da flacidez.'),
	('Óleo de limpeza', '2022/02/04', 68, 'Remove facilmente as impurezas da pele.'),
	('Gel de limpeza', '2021/07/07', 56, 'Higieniza a pele delicadamente deixando-a macia e limpa.'),
	('Máscara facial', '2021/07/11', 104, 'Ajuda a purificar, refrescar e hidratar o rosto.'),
	('Sérum facial', 89, '2023/06/06', 'Trata a pele com ativos de alta performance.'),
	('Tônico micelar', 89, '2025/04/08', 'Complementa à limpeza de pele'),
	('Gel secativo', 58, '2024/05/09', 'Produto para combater espinhas com o resultado rápido'),
	('Creme para a área dos olhos', '2023/04/01', 114, 'Promove a redução das bolsas e pigmentação das olheiras'),
	('Uniformizador de olheiras', '2021/03/02', 87, 'Redução de olheiras causadas pelo excesso de melanina'),
	('Balm Labial', '2023/01/01', 30, 'Hidratante labial');
