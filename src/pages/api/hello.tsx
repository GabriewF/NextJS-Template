// Import's
import { NextApiRequest, NextApiResponse } from 'next'

// Api Handler
async function HelloHandler(req: NextApiRequest, res: NextApiResponse) {
  ///
  try {
    switch (req.method) {
      case 'GET': {
        // Response function
        async function Response(): Promise<boolean> {
          // Response Body Interface
          interface ResponseBody {
            statusCode: number,
            statusText: string,
            success: boolean,
            method: string | undefined,
            message?: string,
            error?: unknown
          }

          // Response Body
          const responseBody: ResponseBody = {
            statusCode: 200,
            statusText: 'OK',
            success: true,
            method: req.method,
            message: `Hello World!`
          }

          // Response
          res.status(200).send(responseBody)

          // Break the request
          return true
        }

        // Calling functions
        await Response()

        // End
        break
      }
      default: {
        // Response function
        async function Response(): Promise<boolean> {
          // Response Body Interface
          interface ResponseBody {
            statusCode: number,
            statusText: string,
            success: boolean,
            method: string | undefined,
            message?: string,
            error?: unknown
          }

          // Response Body
          const responseBody: ResponseBody = {
            statusCode: 405,
            statusText: `Method Not Allowed`,
            success: false,
            method: req.method,
          }

          // Response
          res.status(405).send(responseBody)

          // Break the request
          return false
        }

        //Calling functions
        await Response()

        // End
        break
      }
    }
  } /* Catch error */ catch (err: unknown) {
    // Response function
    async function Response(): Promise<boolean> {
      // Response Body Interface
      interface ResponseBody {
        statusCode: number,
        statusText: string,
        success: boolean,
        method: string | undefined,
        message?: string,
        error?: unknown
      }

      // Response Body
      const responseBody: ResponseBody = {
        statusCode: 500,
        statusText: 'Internal Server Error',
        success: false,
        method: req.method,
        error: err,
      }

      // Response
      res.status(500).send(responseBody)

      // Break the request
      return false
    }

    //Calling functions
    await Response()
  }
}

// Export
export default HelloHandler
