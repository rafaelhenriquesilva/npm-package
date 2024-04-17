module.exports = {
    // Especifique o ambiente de teste (Node.js, jsdom, etc.)
    testEnvironment: 'node',
  
    // Padrão de correspondência para arquivos de teste
    testMatch: ['**/*.test.js'],
  
    // Ignorar pastas específicas nos testes
    testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  
    // Diretório onde os relatórios de cobertura de código serão gerados
    coverageDirectory: 'coverage',
  
    // Relatório de cobertura desejado
    coverageReporters: ['text', 'lcov'],
  
    // Coletar cobertura de código de todos os arquivos, incluindo arquivos não testados
    collectCoverageFrom: ['src/**/*.js'],
  
    // Tempo limite para a execução de um teste
    testTimeout: 10000, // 10 segundos
  
    // Mostrar um resumo dos testes após a execução
    verbose: true,
  
    // Permitir que o jest use babel para transpilar arquivos JS
    transform: {
      '^.+\\.js$': 'babel-jest',
    },
  
    // Lista de diretórios que o Jest deve olhar para arquivos
    roots: ['<rootDir>/src', '<rootDir>/__tests__'],
  
    // Configuração adicional de mapeamento de módulos
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1',
    },
  };
  