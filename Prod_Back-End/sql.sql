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
('Base', '20230303', 15, 'Base Ruby Rose.', 'data:image/jpeg;base64,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' ),
('Pó Compacto', '20230405', 20, 'Pó Compacto Ruby Rose.', 'data:image/jpeg;base64,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');
