import gulp from 'gulp';
import clean from './clean';

export const buildDev = gulp.series(clean, done => done());
