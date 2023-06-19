CREATE TABLE prods (
    id SERIAL PRIMARY KEY,
    titulo TEXT NOT NULL,
    dataCadastro DATE NOT NULL,
    preco REAL NOT NULL,
    descricao TEXT NOT NULL,
    imagem TEXT NOT NULL
);

INSERT INTO prods (titulo, dataCadastro, preco, descricao, imagem)
VALUES
    ('Base', '20230303', 15, 'Base Ruby Rose.', 'https://images.app.goo.gl/r7MTtchCKLo75qmf6'),
    ('Pó Compacto', '20230405', 20, 'Pó Compacto Ruby Rose.', 'https://images.app.goo.gl/25haHoFha93eodqa6'),
    ('Rímel', '20230607', 15, 'Rímel Boca Rosa.', 'https://images.app.goo.gl/jhi92C84eE8hKyjTA'),
	('Batom', '20220604', 15, 'Batom Matte.', 'https://images.app.goo.gl/mZNwySc3gkV2kjap6'),
	('Delineador', '20220808', 20, 'Delineador MaryKay.', 'https://images.app.goo.gl/7wEpkwpow28UMShq8'),
    ('Paleta de Sombra', '20220504', 40, 'Paleta Ruby Rose.', 'https://images.app.goo.gl/vRJgf4oowYrozBZr8'),
  	('Iluminador', '20220808', 15, 'Iluminador MaryKay.', 'https://images.app.goo.gl/MNZhNLNh9dfRxexo8'),
   	('Lápis de Olho', '20210801', 10, 'Lápis de olho Boca Rosa.', 'https://images.app.goo.gl/KybTVzW49NinssrW6'),
   	('Blush', '20230505', 15, 'Blush Boca Rosa.', 'https://images.app.goo.gl/8mQQedxsykwSxH8c8'),
   	('Contorno', '20230201', 15, 'Contorno MaryKay.', 'https://images.app.goo.gl/skup5vRXPth8jZ67A'),
    ('Creme Hidratante Facial', '20220805', 149, 'Hidrata a pele e diminui os efeitos da flacidez.', 'https://www.boticario.com.br/creme-facial-firmador-acido-hialuronico-botik-40g?from=blog'),
	('Óleo de limpeza', '20220204', 68, 'Remove facilmente as impurezas da pele.', 'https://www.boticario.com.br/oleo-de-limpeza-facial-vitamina-e-botik-100ml?from=blog'),
	('Gel de limpeza', '20210707', 56, 'Higieniza a pele delicadamente deixando-a macia e limpa.', 'https://www.boticario.com.br/geleia-concentrada-de-limpeza-facial-acido-glicolico-botik-150g?from=blog'),
	('Máscara facial', '20210711', 104, 'Ajuda a purificar, refrescar e hidratar o rosto.', 'https://www.boticario.com.br/b77143-mascara-facial-purificante-argila-branca-botik-100g?from=blog'),
	('Sérum facial', '20230606', 89, 'Trata a pele com ativos de alta performance.', 'https://www.boticario.com.br/b77147-tonico-micelar-prebioticos-botik-200ml?from=blog'),
	('Tônico micelar','20250408', 89, 'Complementa à limpeza de pele', 'https://www.boticario.com.br/b77147-tonico-micelar-prebioticos-botik-200ml?from=blog'),
	('Gel secativo', '20240509', 56, 'Produto para combater espinhas com o resultado rápido', 'https://www.boticario.com.br/gel-secativo-para-acne-acido-mandelico-salicilico-botik-15g?from=blog'),
	('Creme para a área dos olhos', '20230401', 114, 'Promove a redução das bolsas e pigmentação das olheiras', 'https://www.boticario.com.br/b77138-creme-concentrado-para-area-dos-olhos-acido-hialuronico-e-cafeina-15g?from=blog'),
	('Uniformizador de olheiras', '20210302', 87, 'Redução de olheiras causadas pelo excesso de melanina', 'https://www.boticario.com.br/gel-creme-uniformizador-de-olheiras-acido-mandelico-tranexamico-botik-15g?from=blog'),
	('Balm Labial', '20230101', 30, 'Hidratante labial', 'https://images.app.goo.gl/8FZcvuJR8wbHu1Eq8 ');
