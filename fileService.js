import * as uuid from 'uuid'
import * as path from 'path'
class FileService {
      saveFile(file) {
       
        try {
            const filename = uuid.v4() + '.jpg'
            
            const filePath = path.resolve('static', filename)
            
            file.mv(filePath)
            return filename
        } catch {
            console.log(e.message)
        }

    }
}
export default new FileService()