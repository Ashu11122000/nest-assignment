import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();

    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    console.error(exception);

    response.status(500).json({
      success: false,
      statusCode: 500,
      message: 'Internal server error',
      path: request.url,
      timestamp: new Date().toISOString(),
    });
  }
}
