module.exports = {
  // 테스트 환경 설정
  testEnvironment: 'jsdom',
  
  // 커버리지 설정
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/*.stories.{js,jsx,ts,tsx}',
    '!src/index.{js,tsx}',
    '!src/serviceWorker.js',
    '!src/reportWebVitals.{js,ts}',
    '!src/setupTests.{js,ts}',
    '!src/mocks/**/*.{js,ts}'
  ],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70
    }
  },
  
  // Jest가 파일을 찾는 경로 설정
  roots: ['<rootDir>/src'],
  
  // moduleNameMapper를 통해 모듈 별칭 설정
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
    
    // 스타일, 미디어 파일 모킹
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/src/__mocks__/fileMock.js'
  },
  
  // 변환 설정
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  
  // 트랜스폼 무시 파일
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$'
  ],
  
  // 테스트 매칭 패턴
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}'
  ],
  
  // 모듈 파일 확장자 설정
  moduleFileExtensions: [
    'js',
    'jsx',
    'ts',
    'tsx',
    'json',
    'node'
  ],
  
  // 테스트 환경 설정 파일
  setupFilesAfterEnv: [
    '<rootDir>/src/setupTests.ts'
  ],
  
  // 스냅샷 직렬화 설정
  snapshotSerializers: [
    'jest-serializer-html'
  ],
  
  // 테스트 타임아웃 설정
  testTimeout: 10000,
  
  // 글로벌 설정
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.jest.json',
      isolatedModules: true
    }
  },
  
  // 테스트 실행 전 실행할 스크립트
  globalSetup: '<rootDir>/src/test/globalSetup.js',
  
  // 테스트 실행 후 실행할 스크립트
  globalTeardown: '<rootDir>/src/test/globalTeardown.js',
  
  // 각 테스트 파일 실행 전 실행할 스크립트
  setupFiles: ['<rootDir>/src/test/setup.js'],
  
  // 리포터 설정
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: './coverage/junit',
        outputName: 'junit.xml',
      }
    ]
  ],
  
  // 캐시 설정
  cache: true,
  cacheDirectory: '<rootDir>/.jest-cache',
  
  // 테스트 실행 시 표시할 알림 설정
  notify: true,
  notifyMode: 'failure-change',
  
  // 병렬 실행 설정
  maxConcurrency: 5,
  
  // 실패한 테스트를 먼저 실행
  failFast: true,
}; 