import gulp from 'gulp';
import clean from './clean';
import build from './build';

export const buildDev = gulp.series(clean, build, done => done());
