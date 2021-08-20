import gulp from 'gulp';
import clean from './clean';
import {build, server} from './build';

export const buildDev = gulp.series(clean, build, done => done());
export const devServer = gulp.series(server, done => done());
