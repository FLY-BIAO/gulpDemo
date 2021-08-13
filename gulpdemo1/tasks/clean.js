import path from 'path'
import del from 'del'

const paths = path.resolve(__dirname,'../bulid')

function clean() {
    return del(paths)
}
export default clean;
