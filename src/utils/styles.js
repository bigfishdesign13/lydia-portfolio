/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-webpack-loader-syntax */
import colors from 'sass-extract-loader?{"plugins": ["sass-extract-js"]}!../styles/_colors.scss';
import dimensions from 'sass-extract-loader?{"plugins": ["sass-extract-js"]}!../styles/_dimensions.scss';
import shadows from 'sass-extract-loader?{"plugins": ["sass-extract-js"]}!../styles/_shadows.scss';
import typography from 'sass-extract-loader?{"plugins": ["sass-extract-js"]}!../styles/_typography.scss';

export { colors, dimensions, shadows, typography };
