// Import's
import { NextApiRequest, NextApiResponse } from 'next'

// Api Handler
const HelloHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  ///
  try {
    switch (req.method) {
      case 'GET': {
        // Response function
        const Response: any = (): boolean => {
          // Response
          res.status(200).send({
            statusCode: 200,
            statusText: 'OK',
            success: true,
            method: req.method,
            message: `Hello World!`
          })

          // Break the request
          return true
        }

        // Calling functions
        await Response()

        // End
        break
      }
      default: {
        // Response
        res.status(405).send({
          statusCode: 405,
          statusText: `Method Not Allowed`,
          success: false,
          method: req.method,
        })

        // Break the request
        return false
      }
    }
  } /* Catch error */ catch (err: unknown) {
    // Response
    res.status(500).send({
      statusCode: 500,
      statusText: 'Internal Server Error',
      success: false,
      method: req.method,
      error: err,
    })

    // Break the request
    return false
  }
}

// Export
export default HelloHandler