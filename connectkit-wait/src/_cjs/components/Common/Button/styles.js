"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconContainer = exports.InnerContainer = exports.ButtonContainer = exports.ButtonContainerInner = exports.DownloadArrowInner = exports.DownloadArrow = exports.ArrowLine = exports.ArrowChevron = exports.Arrow = exports.SpinnerContainer = void 0;
const framer_motion_1 = require("framer-motion");
const styled_1 = require("./../../../styles/styled");
const styled_components_1 = require("styled-components");
const defaultTheme_1 = require("../../../constants/defaultTheme");
exports.SpinnerContainer = (0, styled_1.default)(framer_motion_1.motion.div) `
  position: absolute;
  right: 16px;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
exports.Arrow = styled_1.default.svg `
  --x: -3px;
  --stroke-width: 2;
  position: relative;
  top: 1px;
  left: -0.5px;
  display: inline-block;
  vertical-align: middle;
  margin-left: 9px;
  margin-right: 1px;
  transition: all 100ms ease;
  transform: translateX(var(--x, -3px));
  color: currentColor;
  opacity: 0.4;
`;
exports.ArrowChevron = styled_1.default.path ``;
exports.ArrowLine = styled_1.default.line `
  transition: inherit;
  transition-property: transform;
  transform-origin: 90% 50%;
  transform: scaleX(0.1);
`;
exports.DownloadArrow = styled_1.default.div `
  display: inline-block;
  vertical-align: middle;
  position: relative;
  margin-right: 6px;
  color: currentColor;
`;
exports.DownloadArrowInner = styled_1.default.div `
  transform: rotate(90deg);
  ${exports.Arrow} {
    margin: 0 auto;
  }
`;
exports.ButtonContainerInner = (0, styled_1.default)(framer_motion_1.motion.div) `
  display: flex;
  align-items: center;
  justify-content: center;
  inset: 0;
  height: 100%;
`;
exports.ButtonContainer = styled_1.default.button `

  ${({ disabled }) => disabled &&
    (0, styled_components_1.css) `
      cursor: not-allowed;
      pointer-events: none;
      ${exports.InnerContainer} {
        opacity: 0.4;
      }
    `}

  ${({ $variant }) => {
    if ($variant === 'primary') {
        return (0, styled_components_1.css) `
        --color: var(--ck-primary-button-color, var(--ck-body-color));
        --background: var(
          --ck-primary-button-background,
          var(--ck-body-background-primary)
        );
        --box-shadow: var(--ck-primary-button-box-shadow);
        --border-radius: var(--ck-primary-button-border-radius);
        --font-weight: var(--ck-primary-button-font-weight, 500);

        --hover-color: var(--ck-button-primary-hover-color, var(--color));
        --hover-background: var(
          --ck-primary-button-hover-background,
          var(--background)
        );
        --hover-box-shadow: var(
          --ck-primary-button-hover-box-shadow,
          var(--box-shadow)
        );
        --hover-border-radius: var(
          --ck-primary-button-hover-border-radius,
          var(--border-radius)
        );
        --hover-font-weight: var(
          --ck-primary-button-font-weight,
          var(--font-weight)
        );
      `;
    }
    else if ($variant === 'secondary') {
        return (0, styled_components_1.css) `
        --color: var(--ck-secondary-button-color, var(--ck-body-color));
        --background: var(
          --ck-secondary-button-background,
          var(--ck-body-background-secondary)
        );
        --box-shadow: var(--ck-secondary-button-box-shadow);
        --border-radius: var(--ck-secondary-button-border-radius);
        --font-weight: var(--ck-secondary-button-font-weight, 500);

        --hover-color: var(--ck-secondary-button-hover-color, var(--color));
        --hover-background: var(
          --ck-secondary-button-hover-background,
          var(--background)
        );
        --hover-box-shadow: var(
          --ck-secondary-button-hover-box-shadow,
          var(--box-shadow)
        );
        --hover-border-radius: var(
          --ck-secondary-button-hover-border-radius,
          var(--border-radius)
        );
        --hover-font-weight: var(
          --ck-secondary-button-font-weight,
          var(--font-weight)
        );
      `;
    }
    else if ($variant === 'tertiary') {
        return (0, styled_components_1.css) `
        --color: var(
          --ck-tertiary-button-color,
          var(--ck-secondary-button-color)
        );
        --background: var(
          --ck-tertiary-button-background,
          var(--ck-secondary-button-background)
        );
        --box-shadow: var(
          --ck-tertiary-button-box-shadow,
          var(--ck-secondary-button-box-shadow)
        );
        --border-radius: var(
          --ck-tertiary-button-border-radius,
          var(--ck-secondary-button-border-radius)
        );
        --font-weight: var(
          --ck-tertiary-button-font-weight,
          var(--ck-secondary-button-font-weight)
        );

        --hover-color: var(
          --button-tertiary-hover-color,
          var(--ck-tertiary-button-color)
        );
        --hover-background: var(
          --ck-tertiary-button-hover-background,
          var(--ck-tertiary-button-background)
        );
        --hover-box-shadow: var(
          --ck-tertiary-button-hover-box-shadow,
          var(--ck-tertiary-button-box-shadow)
        );
        --hover-border-radius: var(
          --ck-tertiary-button-hover-border-radius,
          var(--ck-tertiary-button-border-radius, var(--border-radius))
        );
        --hover-font-weight: var(
          --ck-tertiary-button-font-weight,
          var(--ck-secondary-button-font-weight)
        );
      `;
    }
}}

  appearance: none;
  cursor: pointer;
  user-select: none;
  min-width: fit-content;
  width: 100%;
  display:block;
  text-align: center;
  height: 48px;
  margin: 12px 0 0;
  line-height: 48px;
  padding: 0 4px;
  font-size: 16px;
  font-weight: var(--font-weight,500);
  text-decoration: none;
  white-space: nowrap;
  transition: 100ms ease;
  transition-property: box-shadow, background-color;
  color: var(--color);
  background: var(--background);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  will-change: transform, box-shadow, background-color, color;

  ${exports.DownloadArrow} {
    ${exports.Arrow} {
      transform: translateX(0);
      ${exports.ArrowLine} {
        transform: none;
      }
      ${exports.ArrowChevron} {
      }
    }
  }
}

  @media only screen and (min-width: ${defaultTheme_1.default.mobileWidth + 1}px) {
    &:hover,
    &:focus-visible {
      color: var(--ck-accent-text-color, var(--hover-color));
      background: var(--ck-accent-color, var(--hover-background));
      border-radius: var(--hover-border-radius);
      box-shadow: var(--hover-box-shadow);

      ${exports.Arrow} {
        transform: translateX(0);
        ${exports.ArrowLine} {
          transform: none;
        }
        ${exports.ArrowChevron} {
        }
      }
      ${exports.DownloadArrow} {
        ${exports.Arrow} {
          transform: translateX(var(--x));
          ${exports.ArrowLine} {
            transform: scaleX(0.1);
          }
          ${exports.ArrowChevron} {
          }
        }
      }
    }
    &:active {
      box-shadow: var(--ck-secondary-button-active-box-shadow, var(--hover-box-shadow));
    }
  }
  @media only screen and (max-width: ${defaultTheme_1.default.mobileWidth}px) {
    transition: transform 100ms ease;
    transform: scale(1);
    font-size: 17px;
    &:active {
    }
  }
`;
exports.InnerContainer = styled_1.default.div `
  transform: translateZ(0); // Shifting fix
  position: relative;
  display: inline-block;
  vertical-align: middle;
  max-width: calc(100% - 42px);
  transition: opacity 300ms ease;
  /*
  overflow: hidden;
  text-overflow: ellipsis;
  */
`;
exports.IconContainer = (0, styled_1.default)(framer_motion_1.motion.div) `
  position: relative;
  display: inline-block;
  vertical-align: middle;
  max-width: 20px;
  max-height: 20px;
  margin: 0 10px;
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
  ${(props) => {
    return (props.$rounded &&
        (0, styled_components_1.css) `
        overflow: hidden;
        border-radius: 5px;
      `);
}}
  svg {
    display: block;
    position: relative;
    max-width: 100%;
    height: auto;
  }
`;
//# sourceMappingURL=styles.js.map