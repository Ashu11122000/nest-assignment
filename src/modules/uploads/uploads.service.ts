import { Injectable } from '@nestjs/common';
import { UploadApiResponse } from 'cloudinary';

import { Messages } from '../../common/constants/message.constant';

import { CloudinaryService } from './cloudinary.service';

interface UploadedFile {
  buffer: Buffer;
  originalname: string;
  mimetype: string;
  size: number;
}

@Injectable()
export class UploadsService {
  constructor(private readonly cloudinaryService: CloudinaryService) {}

  async uploadFile(file: UploadedFile): Promise<{
    message: string;
    data: {
      publicId: string;
      url: string;
    };
  }> {
    const result: UploadApiResponse =
      await this.cloudinaryService.uploadFile(file);

    return {
      message: Messages.FILE_UPLOADED,
      data: {
        publicId: result.public_id,
        url: result.secure_url,
      },
    };
  }
}
