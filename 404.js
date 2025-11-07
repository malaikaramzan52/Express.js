//404 page means ---> required page is not found.
import express from 'express'
import path from'path'
const app = express();
const absPath = path.resolve('View/')//Make aboslute path till folder
app.use((req,resp)=>{
        resp.status(404).sendFile(absPath+'/404.html')
});

app.listen(3200);