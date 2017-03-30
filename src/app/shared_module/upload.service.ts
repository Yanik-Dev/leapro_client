import { Injectable } from '@angular/core';

@Injectable()
export class UploadService{

    /**
     * Uploads single file to a provided path
     * @param string url path to upload file/s
     * @param Object object additional data along with upload
     * @param File files  file to be upload
     */
     public uploadSingleFile(url: string, object: any, files:File) {
            return new Promise((resolve, reject) => {
                var formData: any = new FormData();
                var xhr = new XMLHttpRequest();

                //append file to formData object
                formData.append("upload", files, files.name);
            
                //append object to formData with the key data
                formData.append('data', JSON.stringify(object));

                
                //post formData to url if status = 200 and returns a promise
                xhr.onreadystatechange = function () {
                    if (xhr.readyState == 4) {
                        if (xhr.status == 200) {
                            resolve(JSON.parse(xhr.response));
                        } else {
                            reject(xhr.response);
                        }
                    }
                }
                xhr.open("POST", url, true);
                xhr.send(formData);
            });
        }

}