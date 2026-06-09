import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { v2 as cloudinary, UploadApiResponse } from 'cloudinary';

export interface UploadedFile {
  buffer: Buffer;
  originalname: string;
  mimetype: string;
  size: number;
}

@Injectable()
export class CloudinaryService {
  constructor(private readonly configService: ConfigService) {
    cloudinary.config({
      cloud_name: this.configService.get<string>('CLOUDINARY_CLOUD_NAME') ?? '',
      api_key: this.configService.get<string>('CLOUDINARY_API_KEY') ?? '',
      api_secret: this.configService.get<string>('CLOUDINARY_API_SECRET') ?? '',
    });
  }

  uploadFile(file: UploadedFile): Promise<UploadApiResponse> {
    return new Promise<UploadApiResponse>((resolve, reject): void => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          resource_type: 'auto',
        },
        (error, result) => {
          if (error) {
            const uploadError =
              error instanceof Error
                ? error
                : new Error('Cloudinary upload failed');

            reject(uploadError);
            return;
          }

          if (!result) {
            reject(new Error('No upload result returned from Cloudinary'));
            return;
          }

          resolve(result);
        },
      );

      uploadStream.end(file.buffer);
    });
  }
}
