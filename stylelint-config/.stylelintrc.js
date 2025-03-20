module.exports = {
  "extends": [
    "stylelint-config-standard",
    "stylelint-config-standard-scss",
    "stylelint-config-prettier"
  ],
  "plugins": [
    "stylelint-scss",
    "stylelint-order"
  ],
  "rules": {
    // 속성 순서 강제
    "order/properties-alphabetical-order": true,
    
    // 색상 표현 규칙
    "color-hex-case": "lower",
    "color-hex-length": "short",
    "color-named": "never",
    "color-no-invalid-hex": true,
    
    // 전반적인 형식 규칙
    "indentation": 2,
    "max-empty-lines": 1,
    "max-nesting-depth": 4,
    "no-duplicate-selectors": true,
    "no-eol-whitespace": true,
    "no-invalid-double-slash-comments": true,
    
    // CSS 기능 사용 관련 규칙
    "selector-max-id": 1,
    "selector-class-pattern": "^[a-z][a-zA-Z0-9]*$",
    "declaration-no-important": true,
    "shorthand-property-no-redundant-values": true,
    
    // 단위 사용 규칙
    "unit-allowed-list": ["em", "rem", "px", "%", "vh", "vw", "vmin", "vmax", "fr", "deg", "s", "ms"],
    
    // 벤더 프리픽스 관련 규칙
    "value-no-vendor-prefix": true,
    "property-no-vendor-prefix": true,
    
    // SCSS 관련 규칙
    "scss/at-rule-no-unknown": true,
    "scss/selector-no-redundant-nesting-selector": true,
    "scss/no-duplicate-dollar-variables": true,
    "scss/dollar-variable-pattern": "^[a-z][a-zA-Z0-9]+$",
    
    // 미디어 쿼리 규칙
    "media-feature-name-no-vendor-prefix": true,
    
    // 자동 수정하지 않을 규칙들
    "no-descending-specificity": null,
    "selector-pseudo-class-no-unknown": [
      true,
      {
        "ignorePseudoClasses": ["global", "local"]
      }
    ],
    
    // CSS 모듈 관련
    "selector-type-no-unknown": [
      true,
      {
        "ignore": ["custom-elements"]
      }
    ],
    
    // 성능 관련 규칙
    "selector-max-universal": 1,
    "selector-max-compound-selectors": 5
  },
  "ignoreFiles": [
    "node_modules/**/*",
    "dist/**/*",
    "build/**/*"
  ]
}; 