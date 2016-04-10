/**
 * Created by stalbert on 3/29/16.
 */


    export class ServerRequest {
        
    }

    export class ServerResponse {
        
        addHeader(options:Object)

        getHeader(options:Object)

        sendRedirect(options:Object)

        setHeader(options:Object)

        renderPdf(options:Object)

        setCdnCaheable(options:Object)

        write(options:{ output:string })

        writeFile(options:Object)
    }


