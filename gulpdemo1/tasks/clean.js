import path from 'path'
import del from 'del'

const paths = path.resolve(__dirname,'../dev')

function clean() {
    return del(paths)
}
export default clean;
