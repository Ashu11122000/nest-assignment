import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface ResponseBody {
  message: string;
  data: unknown;
}

function isResponseBody(value: unknown): value is ResponseBody {
  return (
    typeof value === 'object' &&
    value !== null &&
    'message' in value &&
    'data' in value &&
    typeof (value as { message: unknown }).message === 'string'
  );
}

@Injectable()
export class ResponseInterceptor<T> implements NestInterceptor<T, unknown> {
  intercept(
    _context: ExecutionContext,
    next: CallHandler<T>,
  ): Observable<unknown> {
    return next.handle().pipe(
      map((response: unknown) => {
        if (isResponseBody(response)) {
          return {
            success: true,
            message: response.message,
            data: response.data,
          };
        }

        return {
          success: true,
          message: 'Request successful',
          data: response,
        };
      }),
    );
  }
}
